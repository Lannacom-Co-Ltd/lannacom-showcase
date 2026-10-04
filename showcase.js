// Live Showcase — ตัวควบคุมหน้า (ดึงข้อมูลสด + วางลงแผงที่ยกมาจากหน้า 3D ของ Digital Twin) · โค้ดวาด/ข้อความ/CSS จริงมาจาก twin-ui.js + twin.css (สร้างโดย tools/build-showcase.js)
// เขียนแบบ ES5/ES2015 ล้วน (ไม่มี ?. ?? flex gap) ให้เครื่องเล่น BrightSign Chromium รุ่นเก่ารันได้ · ค่าเซ็นเซอร์ = ของจริงจาก /api/showcase, ที่เหลือ (ปุ่ม/ชั้น/มุมกล้อง/ภาพพื้นหลัง) เป็นภาพนิ่งเลียนหน้า 3D
(function () {
    "use strict";
    var U = window.TwinUI, C = window.SHOWCASE_CONFIG || {};
    var q = function (k) { var m = new RegExp("[?&]" + k + "=([^&]+)").exec(location.search); return m ? decodeURIComponent(m[1]) : null; };
    var API = q("api") || C.api, EVERY = (C.refreshSeconds || 20) * 1000;
    var LANG = q("lang") || C.lang || "th", THEME = q("theme") || C.theme || "light";
    var FILL = q("fill") === "1" || !!C.fillMissing;
    var STAGE_W = 1536, STAGE_H = 864;
    U.setLang(LANG);
    var t = U.t, esc = U.escAttr;
    var $ = function (id) { return document.getElementById(id); };

    document.documentElement.lang = LANG;
    document.documentElement.setAttribute("data-theme", THEME === "dark" ? "dark" : "light");
    if (THEME === "dark") document.documentElement.style.colorScheme = "dark";

    // ── stage: ขนาดหน้าจอ twin จริง (1536x864) ย่อ/ขยายให้เต็มจอ (1920x1080 → x1.25) ──
    function fit() {
        var s = Math.min(innerWidth / STAGE_W, innerHeight / STAGE_H), st = $("stage");
        st.style.setProperty("--stage-scale", s);
        st.style.left = Math.round((innerWidth - STAGE_W * s) / 2) + "px";
        st.style.top = Math.round((innerHeight - STAGE_H * s) / 2) + "px";
        positionLevelFloat();
    }

    // ── ข้อความคงที่ (data-i18n) ──
    function applyI18n() {
        var a = document.querySelectorAll("[data-i18n]"), i;
        for (i = 0; i < a.length; i++) a[i].textContent = t(a[i].getAttribute("data-i18n"));
        a = document.querySelectorAll("[data-i18n-title]");
        for (i = 0; i < a.length; i++) { var v = t(a[i].getAttribute("data-i18n-title")); a[i].title = v; a[i].setAttribute("aria-label", v); }
        $("langBtn").textContent = LANG === "th" ? "TH" : "EN";
    }

    // ── ชิป SYSTEM (เหมือน renderChips: ทุกหมวดยกเว้น cost) ──
    function renderChips() {
        var h = "", i, c, lab;
        for (i = 0; i < U.CATEGORIES.length; i++) {
            c = U.CATEGORIES[i]; if (c.key === "cost") continue;
            lab = t("cat." + c.key); if (lab === "cat." + c.key) lab = c.label;
            h += '<button class="chip chip-icon' + (c.key === "all" ? " active" : "") + '">' + U.catIcon(c.key) + "<span>" + lab + "</span></button>";
        }
        $("categoryChips").innerHTML = h;
        var on = ["siteCtxBtn", "fogBtn"];   // ค่าตั้งต้นของ twin: Surroundings + Fog เปิด
        for (i = 0; i < on.length; i++) if ($(on[i])) $(on[i]).classList.add("active");
    }

    // ── ปุ่มเลือกชั้น (ลอยซ้ายของแผง SUSTAINABILITY เหมือน positionLevelFloat) ──
    function renderLevels() {
        var keys = ["roof", "l2", "ground"], h = "", i;
        for (i = 0; i < keys.length; i++) h += "<button" + (i === 0 ? ' class="active"' : "") + ">" + t("floor." + keys[i]) + "</button>";
        $("levelList").innerHTML = h;
    }
    function positionLevelFloat() {
        var wrap = $("levelList"), sus = $("susBadge"), panel = sus && sus.closest ? sus.closest(".panel") : null, st = $("stage");
        if (!wrap || !panel) return;
        var s = Math.min(innerWidth / STAGE_W, innerHeight / STAGE_H), r = panel.getBoundingClientRect(), sr = st.getBoundingClientRect();
        if (!r.width) return;
        wrap.style.transform = "none";
        wrap.style.top = ((r.top - sr.top) / s) + "px";
        wrap.style.right = Math.max(12, Math.min(STAGE_W - (r.left - sr.left) / s + 12, STAGE_W - 110)) + "px";
    }

    // ── ปุ่มสภาพอากาศบน topbar (wxRenderPill) ──
    var lastWeather = null;
    function bkkTime() {
        var d = new Date(Date.now() + (new Date().getTimezoneOffset() + 420) * 60000), p = function (n) { return (n < 10 ? "0" : "") + n; };
        return p(d.getHours()) + ":" + p(d.getMinutes());
    }
    function renderWeatherPill() {
        var w = lastWeather, kind = w && w.kind ? w.kind : null, night = w ? !w.is_day : false;
        var temp = w && w.temp != null ? w.temp + "°" : null;
        $("wxPill").innerHTML = U.wxSvg(U.wxIconFor(kind, night), 16) + '<span class="wx-pill-lbl">' + esc(U.wxKindLabel(kind, night)) + "</span>" +
            (temp ? '<span class="wx-pill-dim wx-pill-temp">' + temp + "</span>" : "") + '<span class="wx-pill-time mono">' + bkkTime() + "</span>";
    }

    // ── ตัวช่วยตัวเลข ──
    var has = function (v) { return v !== null && v !== undefined; };
    var grp = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
    var efdBuilt = false;

    function render(d) {
        var e = d.energy || {}, f = d.flow || {}, air = (d.air && d.air.office) || {}, y = d.year || {}, sv = d.savings || {};
        $("scStale").classList.toggle("sc-hidden", !d.stale);
        $("scStale").textContent = LANG === "th" ? "ค่าล่าสุด · ต่อ Home Assistant ไม่ได้ชั่วคราว" : "Last known values · Home Assistant unreachable";
        lastWeather = d.weather || lastWeather; renderWeatherPill();

        // ── ไดอะแกรม Energy flow (ตรรกะเดียวกับ renderPanels โหมด energy) ──
        var efBtn = $("efModeBtn"); efBtn.className = "pill mode-toggle live";
        $("efModeDot").style.background = "var(--green)"; $("efModeText").textContent = t("mode.energy");
        var efTitle = $("efPanelTitle"); efTitle.textContent = t("panel.energyFlow");
        $("energyFlowWrap").classList.add("efd-diagram");
        var pvKw = has(f.pv_kw) ? f.pv_kw : null;
        var acKw = has(f.ac_kw) ? f.ac_kw : (has(e.solar_kw) ? e.solar_kw : null);
        var gridKw = has(f.grid_kw) ? f.grid_kw : (has(e.grid_kw) ? e.grid_kw : null);
        var homeKw = acKw !== null && gridKw !== null ? acKw + gridKw : (acKw !== null ? acKw : gridKw);
        var lowCarbonKw = has(f.low_carbon_kw) ? f.low_carbon_kw : null;
        var b = f.battery, batt = b ? { soc: b.soc, kw: has(b.kw) ? b.kw : null, capKwh: b.cap_kwh || null, backupSoc: has(b.backup_soc) ? b.backup_soc : null, cutoffSoc: has(b.cutoff_soc) ? b.cutoff_soc : null } : null;
        var offGrid = !!f.off_grid;
        var shownSolar = pvKw !== null ? pvKw : acKw;
        var hasSolar = shownSolar !== null && shownSolar > 0.05, hasGridImport = gridKw !== null && gridKw > 0.05;
        var hasBattFlow = batt && U.efdBattState(batt) !== "idle";
        var backup = batt && offGrid ? { kw: Math.max(0, acKw || 0), live: acKw !== null, offGrid: true } : null;
        var lannaKw = backup ? 0 : homeKw;
        var donut = $("energyDonut");
        var patched = efdBuilt && donut.firstElementChild && U.patchEnergyFlowDiagram(donut, { solarKw: acKw, gridKw: gridKw, lowCarbonKw: lowCarbonKw, homeKw: homeKw, solarActive: hasSolar, gridActive: hasGridImport && !offGrid, homeActive: !offGrid && (hasSolar || hasGridImport || hasBattFlow), pvKw: pvKw, batt: batt, backup: backup, lannaKw: lannaKw });
        if (!patched) {
            donut.innerHTML = U.energyFlowDiagramSVG({
                solarKw: acKw, gridKw: gridKw, lowCarbonKw: lowCarbonKw, homeKw: homeKw, pvKw: pvKw, batt: batt, backup: backup, lannaKw: lannaKw,
                buildingLabel: t("lbl.building"),
                solarTip: "", gridTip: "", homeTip: ""
            });
            efdBuilt = true;
        }
        $("energyRows").innerHTML = "";

        // ── ENVIRONMENT ──
        var vals = { temp: air.temp, hum: air.humidity, co2: air.co2, pm: air.pm25 };
        if (FILL) { if (!has(vals.temp)) vals.temp = 25.1; if (!has(vals.hum)) vals.hum = 56; if (!has(vals.co2)) vals.co2 = 612; if (!has(vals.pm)) vals.pm = 8; }
        var fmt = function (v, u) { return has(v) ? (+(+v).toFixed(3)) + " " + u : "--"; };
        $("envGrid").innerHTML = [
            { k: t("env.temperature"), v: fmt(vals.temp, "°C") }, { k: t("env.humidity"), v: fmt(vals.hum, "%") },
            { k: t("env.co2"), v: fmt(vals.co2, "ppm") }, { k: t("env.pm25"), v: fmt(vals.pm, "µg/m³") }
        ].map(function (s) { return '<div class="stat"><div class="sk">' + esc(s.k) + '</div><div class="sv">' + s.v + "</div></div>"; }).join("");
        var ranks = {
            temp: has(vals.temp) ? U.rankTemp(vals.temp) : null, humidity: has(vals.hum) ? U.rankHumidity(vals.hum) : null,
            co2: has(vals.co2) ? U.rankCo2(vals.co2) : null, pm25: has(vals.pm) ? U.rankPm25(vals.pm) : null
        };
        var rv = [ranks.temp, ranks.humidity, ranks.co2, ranks.pm25].filter(function (r) { return r !== null; });
        var overall = rv.length ? Math.max.apply(null, rv) : null;
        var culprits = overall === null ? [] : [ranks.temp === overall ? t("env.temperature") : null, ranks.humidity === overall ? t("env.humidity") : null, ranks.co2 === overall ? t("env.co2") : null, ranks.pm25 === overall ? t("env.pm25") : null].filter(Boolean);
        var info = overall === null ? null : U.COMFORT_RANKS[overall];
        var cp = $("comfortPill");
        cp.innerHTML = '<span class="pc-main">' + esc(t("pill.comfort") + ": " + (info ? t("comfort." + info.key) : "--")) + "</span>" + (info && culprits.length ? '<span class="pc-culprit">' + esc(culprits.join("/")) + "</span>" : "");
        cp.className = "pill comfort-pill" + (info ? " " + info.cls : "");

        // ── EQUIPMENT HEALTH ──
        var eq = d.equipment;
        if (eq) {
            $("eqTotal").textContent = eq.total + " " + t("units.units");
            var cells = [
                { label: t("eq.OperationalShort"), v: eq.online, color: "var(--green)", status: "online" },
                { label: t("eq.Alarm"), v: eq.alarm, color: "var(--amber)", status: "alarm" },
                { label: t("eq.Error"), v: 0, color: "var(--red)", status: "error" },   // จำนวน "Error" มาจากการเฝ้าดูในเบราว์เซอร์ของ twin — ไม่มีบนเซิร์ฟเวอร์ จึงเป็น 0
                { label: t("eq.Off"), v: eq.off, color: "var(--muted)", status: "off" }
            ];
            $("eqHealth").innerHTML = cells.map(function (c) {
                return '<div class="eq-cell" data-status="' + c.status + '"><span class="eq-dot" style="background:' + c.color + "; color:" + c.color + '"></span><span class="eq-lbl">' + c.label + '</span><span class="eq-num">' + c.v + "</span></div>";
            }).join("");
        }

        // ── SUSTAINABILITY (โหมด energy) ──
        $("susSubtitle").textContent = t("sus.subtitleEnergy");
        var solarT = has(y.solar_kwh) ? y.solar_kwh : null, gridT = has(y.grid_kwh) ? y.grid_kwh : null;
        var total = (solarT || 0) + (gridT || 0), sp = total > 0 ? (solarT / total) * 100 : 0, gp = total > 0 ? (gridT / total) * 100 : 0;
        var lbl = function (p) { return p >= 14 ? p.toFixed(1) + "%" : ""; };
        $("susBar").innerHTML = '<div class="seg solar" style="width:' + sp.toFixed(1) + '%">' + lbl(sp) + '</div><div class="seg grid" style="width:' + gp.toFixed(1) + '%">' + lbl(gp) + "</div>";
        var kwh = function (v) { return v === null ? "--" : grp(Math.round(v)) + " kWh" + t("gm.perYr"); };
        $("susLegend").innerHTML =
            '<span class="item"><span class="lk"><span class="dot" style="background:#a3e635"></span>' + esc(t("lbl.solar")) + '</span><span class="lv">' + kwh(solarT) + "</span></span>" +
            '<span class="item"><span class="lk"><span class="dot" style="background:#f87171"></span>' + esc(t("lbl.grid")) + '</span><span class="lv">' + kwh(gridT) + "</span></span>";
        $("susBadge").textContent = t("sus.solarPct") + " " + (total > 0 ? sp.toFixed(0) : "--") + "%";
        var thb = function (v) { return has(v) ? grp(Math.round(v)) + " ฿" : "--"; };
        $("susGrid").innerHTML = [{ k: t("sus.savingsWeek"), v: thb(f.savings_week_thb) }, { k: t("sus.savingsMonth"), v: thb(sv.last_month_thb) }]
            .map(function (s) { return '<div class="stat"><div class="sk">' + esc(s.k) + '</div><div class="sv">' + s.v + "</div></div>"; }).join("");
        positionLevelFloat();
    }

    // ── ดึงข้อมูลสด ──
    // ?demo=1 : ตัวอย่างข้อมูลครบทุกช่อง (รวมแบตเตอรี่/เซ็นเซอร์ห้อง) ไว้ดูหน้าตา — ไม่ใช่ค่าจริง
    var DEMO = { stale: false, energy: { solar_kw: 6.4, grid_kw: 4.2, home_kw: 10.6 }, air: { office: { pm25: 9, co2: 640, temp: 25.2, humidity: 57 } },
        weather: { temp: 31, is_day: true, kind: "partly" }, equipment: { total: 157, online: 141, alarm: 2, off: 14 }, year: { solar_kwh: 14028, grid_kwh: 76632 }, savings: { last_month_thb: 5868 },
        flow: { pv_kw: 6.4, ac_kw: 6.4, grid_kw: 4.2, low_carbon_kw: 1.4, battery: { soc: 78, kw: 0.9, cap_kwh: 10, backup_soc: 20, cutoff_soc: 10 }, off_grid: false, savings_week_thb: 1369 } };
    var fails = 0;
    function load() {
        if (q("demo") === "1") { render(DEMO); return; }
        if (!API) return;
        var x = new XMLHttpRequest();
        x.open("GET", API + (API.indexOf("?") > -1 ? "&" : "?") + "t=" + Date.now(), true);
        x.timeout = 15000;
        x.onload = function () { try { render(JSON.parse(x.responseText)); fails = 0; } catch (err) { fails++; } };
        x.onerror = x.ontimeout = function () { fails++; if (fails > 3) { var s = $("scStale"); s.textContent = LANG === "th" ? "ค่าล่าสุด · เชื่อมต่อเซิร์ฟเวอร์ไม่ได้" : "Last known values · server unreachable"; s.classList.remove("sc-hidden"); } };
        x.send();
    }

    applyI18n(); renderChips(); renderLevels(); renderWeatherPill();
    render({});   // โครงว่าง (-- ทุกช่อง) ระหว่างรอข้อมูลก้อนแรก
    fit(); addEventListener("resize", fit);
    setTimeout(positionLevelFloat, 300);
    load(); setInterval(load, EVERY);
    setInterval(renderWeatherPill, 30000);
    setTimeout(function () { location.reload(); }, 6 * 3600 * 1000);   // กันหน่วยความจำสะสมบนเครื่องเล่น
    window.__showcase = { render: render };
})();
