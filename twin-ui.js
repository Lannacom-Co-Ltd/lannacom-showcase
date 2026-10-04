// ยกจาก public/js/app.js + theme-fx.js ของ Digital Twin (สร้างโดย tools/build-showcase.js — อย่าแก้ไฟล์นี้ แก้ที่ซอร์สแล้วรันสคริปต์ใหม่)
(function (root) {
"use strict";
var I18N = {"th":{"cat.air_quality":"คุณภาพอากาศ","cat.airquality":"คุณภาพอากาศ","cat.all":"ภาพรวม","cat.carbon":"คาร์บอน","cat.cctv":"กล้องวงจรปิด","cat.cost":"ค่าไฟ","cat.energy":"พลังงาน","cat.ev":"รถ EV","cat.evfleet":"รถ EV","cat.hvac":"ปรับอากาศ","cat.lighting":"แสงสว่าง","cat.log":"บันทึก","cat.meeting_room":"ห้องประชุม","cat.occupancy":"ผู้คน","cat.security":"ความปลอดภัย","cat.solar":"โซลาร์","cat.water":"น้ำ","chat.tooltip":"ผู้ช่วย Digital Twin","chip.autorotate":"หมุนอัตโนมัติ","chip.clay":"โมเดลเรียบ","chip.clayTip":"แสดงตัวตึกเป็นสีเรียบสีเดียว ให้ข้อมูลสดเด่นขึ้น","chip.editMarkers":"แก้หมุด","chip.fog":"หมอก","chip.fogTip":"หมอกล้อมรอบโมเดล (ให้เห็นเฉพาะตัวตึกชัด)","chip.powerSim":"จำลอง","chip.sensors":"เซ็นเซอร์","chip.siteCtx":"แผนที่รอบตึก","chip.siteCtxTip":"แสดงถนน อาคารข้างเคียง และแนวภูเขาจริงรอบตึก (OpenStreetMap)","chip.xray":"เอกซเรย์","comfort.colCriteria":"เกณฑ์ที่ใช้","comfort.colRank":"แรงค์","comfort.colSensor":"เซนเซอร์","comfort.colValue":"ค่าปัจจุบัน","comfort.culpritPrefix":"ตัวการหลัก:","comfort.currentTag":"← ตอนนี้อยู่ตรงนี้","comfort.excellent":"ดีมาก","comfort.good":"ดี","comfort.modalTitle":"แรงค์ความสบาย — คิดยังไง","comfort.moderate":"ปานกลาง","comfort.noData":"ไม่มีค่า","comfort.overallLabel":"แรงค์ภาพรวม","comfort.poor":"น้อย","comfort.sourceNote":"เกณฑ์อ้างอิงมาตรฐานที่ยอมรับทั่วไป: อุณหภูมิและความชื้นอิงช่วงความสบาย ASHRAE, CO₂ อิงแนวทางคุณภาพอากาศในอาคาร ASHRAE/REHVA และ PM2.5 อิงดัชนีคุณภาพอากาศของกรมควบคุมมลพิษ (PCD) ประเทศไทย","comfort.veryPoor":"น้อยมาก","efd.backupOnBatt":"ใช้แบต + โซลาร์","efd.backupTipOff":"DOSE & Data Center — ไฟดับ ใช้ไฟจากแบต + โซลาร์ · {k} kW (ค่าจริงจากอินเวอร์เตอร์)","efd.battCharge":"ชาร์จจากโซลาร์","efd.battDischarge":"จ่ายให้อาคาร","efd.battFull":"เต็ม · พัก","efd.battIdle":"พัก","efd.battTip":"แบตเตอรี่ {c} kWh · {p}% · {s} · ชาร์จจากโซลาร์เท่านั้น","efd.battery":"แบตเตอรี่","efd.noPower":"ไม่มีไฟ","env.co2":"CO₂","env.humidity":"ความชื้น","env.pm25":"PM2.5","env.temperature":"อุณหภูมิ","eq.Alarm":"เตือน","eq.Error":"ผิดพลาด","eq.Off":"ปิด","eq.Operational":"ทำงานปกติ","eq.OperationalShort":"ปกติ","eq.allCategories":"ทุกหมวด","eq.manage":"จัดการ / ตัดอุปกรณ์","floor.ground":"ชั้น 1","floor.l2":"ชั้น 2","floor.roof":"หลังคา","gm.perYr":"/ปี","hud.hide":"ซ่อนแผงข้าง (ดูโมเดลเต็มจอ)","hud.inuse":"ใช้งาน","hud.inuseTip":"จำนวนคนที่อยู่ภายในออฟฟิศตอนนี้ ประมาณค่าจากเซ็นเซอร์ตรวจจับการเคลื่อนไหว/การอยู่ (presence/motion) ในแต่ละโซน","hud.show":"แสดงแผงข้าง","lbl.building":"LannaCom","lbl.grid":"กริด","lbl.load":"โหลด","lbl.solar":"โซลาร์","mode.carbon":"คาร์บอน","mode.energy":"พลังงาน","mode.switchTo":"สลับไปดู","panel.carbonFootprint":"คาร์บอนฟุตพรินท์","panel.energyFlow":"พลังงาน","panel.environment":"สภาพแวดล้อม","panel.equipmentHealth":"สถานะอุปกรณ์","panel.overlays":"เลเยอร์","panel.sustainability":"ความยั่งยืน","panel.system":"ระบบ","panel.todayCarbon":"การปล่อยคาร์บอน เทียบ หลีกเลี่ยงได้ภายในปีนี้และปีที่ผ่านมา","panel.todayConsumption":"การใช้ไฟวันนี้","pill.comfort":"ความสบาย","sus.avoidedPct":"หลีกเลี่ยง","sus.co2saved":"ลด CO₂","sus.gridEmitted":"ปล่อยจากกริด","sus.netCo2":"CO₂ สุทธิ","sus.savingsMonth":"ประหยัด / เดือนก่อน","sus.savingsWeek":"ประหยัด / สัปดาห์","sus.solarPct":"โซลาร์","sus.subtitleCarbon":"ข้อมูลในปีนี้ เก็บตั้งแต่ 1 ม.ค. ถึงปัจจุบัน ประมาณการที่ความเข้มคาร์บอนกริดปัจจุบัน","sus.subtitleEnergy":"ข้อมูลในปีนี้ เก็บตั้งแต่ 1 ม.ค. ถึงปัจจุบัน","sus.trees":"เทียบต้นไม้ ≈","tip.carbonPanelTop":"ปริมาณ CO₂e ที่ปล่อยสะสมทั้งหมด แยกตาม Scope ของ GHG Protocol — และปริมาณที่โซลาร์+รถ EV ช่วยหักล้างได้","topbar.alerts":"การแจ้งเตือน","topbar.settings":"ตั้งค่า","units.units":"ตัว","view.front":"ด้านหน้า","view.overview":"ภาพรวม","view.side":"ด้านข้าง","view.top":"ด้านบน","wx.acc.collecting":"กำลังเก็บข้อมูล — ได้ {n} ตัวอย่างแล้ว (ต้องการราว 1 วัน)","wx.acc.cooler":"แบบจำลองต่ำกว่าจริง {v} °C","wx.acc.match":"ตรงกัน {p}%","wx.acc.noRainYet":"เรดาร์ยังไม่เจอฝน","wx.acc.period":"{d} วันล่าสุด · {n} ตัวอย่าง","wx.acc.pod":"จับฝนจริงได้ {p}%","wx.acc.rain":"ฝน เทียบเรดาร์","wx.acc.sky":"แดด/เมฆ เทียบโซลาร์","wx.acc.temp":"อุณหภูมิ เทียบ IQAir","wx.acc.tempVal":"คลาดเฉลี่ย ±{v} °C","wx.acc.title":"ความแม่นของแบบจำลองที่ตึกนี้","wx.acc.warmer":"แบบจำลองสูงกว่าจริง {v} °C","wx.close":"ปิด","wx.cloud":"ปริมาณเมฆ","wx.cloudModel":"ปริมาณเมฆ (แบบจำลอง)","wx.error":"เชื่อมต่อบริการสภาพอากาศไม่ได้ — แสดงเฉพาะเวลาของวัน","wx.humidity":"ความชื้น","wx.k.clear":"แดดออก","wx.k.clearNight":"ฟ้าโปร่ง","wx.k.cloudy":"เมฆมาก","wx.k.drizzle":"ฝนตกปรอย","wx.k.fog":"หมอก","wx.k.heavy_rain":"ฝนตกหนัก","wx.k.partly":"มีเมฆบางส่วน","wx.k.rain":"ฝนตก","wx.k.thunder":"ฝนฟ้าคะนอง","wx.mmh":"มม./ชม.","wx.mode.live":"สด","wx.mode.off":"ปิด","wx.mode.sim":"จำลอง","wx.modeOff":"ปิดอยู่","wx.noData":"กำลังรอข้อมูลอากาศ","wx.offNote":"ปิดเอฟเฟกต์สภาพอากาศ — ใช้แสงสตูดิโอคงที่","wx.pause":"❚❚ หยุด","wx.phase.day":"กลางวัน","wx.phase.evening":"เย็น","wx.phase.morning":"เช้า","wx.phase.night":"กลางคืน","wx.radarAt":"เรดาร์ {t}","wx.radarDry":"ไม่มีฝน","wx.radarNear":"{kind}ห่างไป ~{km} กม.","wx.radarNone":"ไม่มีข้อมูลเรดาร์ — ใช้ค่าจากแบบจำลอง","wx.radarRain":"ฝนที่ตึก (เรดาร์)","wx.rainMm":"ฝน (15 นาทีล่าสุด)","wx.simBadge":"จำลอง","wx.simNote":"โหมดจำลองสำหรับนำเสนอ — ไม่ใช่สภาพอากาศจริงตอนนี้","wx.source":"แหล่งข้อมูล — ฝน: เรดาร์ RainViewer ที่ตึก · แดด/เมฆ: โซลาร์ของตึก + Open-Meteo · อุณหภูมิ: IQAir ที่ตึก · ฟ้าร้องและลม: แบบจำลอง Open-Meteo (ความละเอียด ~9–25 กม.) · อัปเดต {t}","wx.srcIqair":"IQAir ที่ตึก","wx.srcModel":"แบบจำลองอากาศ","wx.sunAtSite":"แสงแดดที่ตึก","wx.sunAtSiteNone":"กลางคืน หรือไม่มีค่าโซลาร์","wx.sunAtSiteSub":"จากโซลาร์ที่ผลิตได้จริง เทียบวันฟ้าใส","wx.sunrise":"พระอาทิตย์ขึ้น","wx.sunset":"ตก","wx.time":"เวลาของวัน","wx.timelapse":"▶ เล่นทั้งวัน","wx.title":"สภาพอากาศ","wx.wind":"ลม","wx.windFrom":"จากทิศ"},"en":{"cat.air_quality":"Air Quality","cat.airquality":"Air Quality","cat.all":"Overview","cat.carbon":"Carbon","cat.cctv":"CCTV","cat.cost":"Cost","cat.energy":"Energy","cat.ev":"EV","cat.evfleet":"EV Fleet","cat.hvac":"HVAC","cat.lighting":"Lighting","cat.log":"Log","cat.meeting_room":"Meeting Rooms","cat.occupancy":"People","cat.security":"Security","cat.solar":"Solar","cat.water":"Water","chat.tooltip":"Digital Twin Assistant","chip.autorotate":"Auto-rotate","chip.clay":"Clay view","chip.clayTip":"Show the building in one plain colour so live data stands out","chip.editMarkers":"Edit markers","chip.fog":"Fog","chip.fogTip":"Fog around the model (hides the surroundings except the building)","chip.powerSim":"Simulate","chip.sensors":"Sensors","chip.siteCtx":"Surroundings","chip.siteCtxTip":"Show the real roads, neighbouring buildings and mountains around the site (OpenStreetMap)","chip.xray":"X-Ray","comfort.colCriteria":"Ranges used","comfort.colRank":"Rank","comfort.colSensor":"Sensor","comfort.colValue":"Current value","comfort.culpritPrefix":"main cause:","comfort.currentTag":"← you're here","comfort.excellent":"Excellent","comfort.good":"Good","comfort.modalTitle":"Comfort rank — how it's worked out","comfort.moderate":"Moderate","comfort.noData":"No reading","comfort.overallLabel":"Overall rank","comfort.poor":"Poor","comfort.sourceNote":"Ranges are based on recognized standards: temperature & humidity follow the ASHRAE comfort zone, CO₂ follows ASHRAE/REHVA indoor air quality guidance, and PM2.5 follows Thailand's Pollution Control Department (PCD) air quality index.","comfort.veryPoor":"Very poor","efd.backupOnBatt":"on battery + solar","efd.backupTipOff":"DOSE & Data Center — power cut, running on battery + solar · {k} kW (real, from the inverter)","efd.battCharge":"charging · solar","efd.battDischarge":"supplying building","efd.battFull":"full · idle","efd.battIdle":"idle","efd.battTip":"Battery {c} kWh · {p}% · {s} · charges from solar only","efd.battery":"Battery","efd.noPower":"no power","env.co2":"CO₂","env.humidity":"Humidity","env.pm25":"PM2.5","env.temperature":"Temperature","eq.Alarm":"Alarm","eq.Error":"Error","eq.Off":"Off","eq.Operational":"Operational","eq.OperationalShort":"Normal","eq.allCategories":"All categories","eq.manage":"Manage / cut devices","floor.ground":"Floor 1","floor.l2":"Floor 2","floor.roof":"Roof","gm.perYr":"/yr","hud.hide":"Hide side panels (full model view)","hud.inuse":"in use","hud.inuseTip":"Number of people currently in the office, estimated from presence/motion sensors around each zone.","hud.show":"Show side panels","lbl.building":"LannaCom","lbl.grid":"Grid","lbl.load":"Load","lbl.solar":"Solar","mode.carbon":"Carbon","mode.energy":"Energy","mode.switchTo":"Switch to","panel.carbonFootprint":"CARBON FOOTPRINT","panel.energyFlow":"ENERGY FLOW","panel.environment":"ENVIRONMENT","panel.equipmentHealth":"EQUIPMENT HEALTH","panel.overlays":"OVERLAYS","panel.sustainability":"SUSTAINABILITY","panel.system":"SYSTEM","panel.todayCarbon":"EMITTED vs AVOIDED, THIS YEAR & LAST YEAR","panel.todayConsumption":"TODAY CONSUMPTION","pill.comfort":"COMFORT","sus.avoidedPct":"AVOIDED","sus.co2saved":"CO₂ Saved","sus.gridEmitted":"Grid Emitted","sus.netCo2":"Net CO₂","sus.savingsMonth":"Savings / last mo.","sus.savingsWeek":"Savings / week","sus.solarPct":"SOLAR","sus.subtitleCarbon":"Data for this year, collected Jan 1 to today, estimated at today's grid carbon intensity","sus.subtitleEnergy":"Data for this year, collected Jan 1 to today","sus.trees":"Trees ≈","tip.carbonPanelTop":"Cumulative CO₂e released so far, broken down by GHG Protocol scope — and how much solar + EV usage has offset it.","topbar.alerts":"View alerts","topbar.settings":"Settings","units.units":"UNITS","view.front":"Front","view.overview":"Overview","view.side":"Side","view.top":"Top","wx.acc.collecting":"Collecting — {n} samples so far (needs about 1 day)","wx.acc.cooler":"model reads {v} °C cooler","wx.acc.match":"{p}% match","wx.acc.noRainYet":"radar hasn't seen rain yet","wx.acc.period":"last {d} days · {n} samples","wx.acc.pod":"caught {p}% of real rain","wx.acc.rain":"Rain vs radar","wx.acc.sky":"Sun/cloud vs solar","wx.acc.temp":"Temperature vs IQAir","wx.acc.tempVal":"±{v} °C on average","wx.acc.title":"Weather-model accuracy at this building","wx.acc.warmer":"model reads {v} °C warmer","wx.close":"Close","wx.cloud":"Cloud cover","wx.cloudModel":"Cloud cover (model)","wx.error":"Weather service unreachable — showing time of day only","wx.humidity":"Humidity","wx.k.clear":"Sunny","wx.k.clearNight":"Clear night","wx.k.cloudy":"Overcast","wx.k.drizzle":"Drizzle","wx.k.fog":"Fog","wx.k.heavy_rain":"Heavy rain","wx.k.partly":"Partly cloudy","wx.k.rain":"Rain","wx.k.thunder":"Thunderstorm","wx.mmh":"mm/h","wx.mode.live":"Live","wx.mode.off":"Off","wx.mode.sim":"Simulate","wx.modeOff":"Off","wx.noData":"Waiting for weather","wx.offNote":"Weather effects are off — fixed studio lighting.","wx.pause":"❚❚ Pause","wx.phase.day":"Midday","wx.phase.evening":"Evening","wx.phase.morning":"Morning","wx.phase.night":"Night","wx.radarAt":"radar {t}","wx.radarDry":"No rain","wx.radarNear":"{kind} ~{km} km away","wx.radarNone":"No radar data — using the weather model","wx.radarRain":"Rain at the building (radar)","wx.rainMm":"Rain (last 15 min)","wx.simBadge":"Simulated","wx.simNote":"Simulation for presenting — not the real weather right now.","wx.source":"Source — rain: RainViewer radar at the building · Sun/cloud: building solar + Open-Meteo · Temperature: IQAir at the building · Thunder & wind: Open-Meteo model (grid ~9–25 km) · updated {t}","wx.srcIqair":"IQAir at the building","wx.srcModel":"weather model","wx.sunAtSite":"Sunlight at the building","wx.sunAtSiteNone":"night or no solar reading","wx.sunAtSiteSub":"real solar output vs a clear day","wx.sunrise":"Sunrise","wx.sunset":"Sunset","wx.time":"Time of day","wx.timelapse":"▶ Play a day","wx.title":"Weather","wx.wind":"Wind","wx.windFrom":"from"}};
var LANG = "th";
function t(key) { var d = I18N[LANG] || {}; return d[key] != null ? d[key] : (I18N.en[key] != null ? I18N.en[key] : key); }
var escAttr = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
var getEntity = function () { return null; }, DEFAULT_AC_UNIT_W = 0;   // ใช้เฉพาะวงจรไฟสำรอง (psBackupLoadEstimate) ที่ showcase ไม่เรียก
var THEME_TOKENS = {"--bg":[[7,11,17],[238,242,246],"hex"],"--panel":[[12,19,28,0.88],[255,255,255,0.92],"rgba"],"--panel-line":[[94,234,212,0.1],[8,145,178,0.18],"rgba"],"--line":[[148,163,184,0.14],[71,85,105,0.18],"rgba"],"--text":[[219,231,243],[30,41,59],"hex"],"--muted":[[132,148,168],[91,107,127],"hex"],"--cyan":[[69,214,232],[8,145,178],"hex"],"--cyan-soft":[[69,214,232,0.16],[8,145,178,0.12],"rgba"],"--green":[[163,230,53],[77,124,15],"hex"],"--amber":[[251,191,36],[180,83,9],"hex"],"--red":[[248,113,113],[220,38,38],"hex"],"--chat-panel-bg":[[18,26,38],[255,255,255],"hex"],"--chat-card-bg":[[27,35,46],[241,245,249],"hex"],"--chat-amber":[[239,183,35],[180,83,9],"hex"],"--chat-red":[[242,114,111],[220,38,38],"hex"],"--text-strong":[[255,255,255],[15,23,42],"hex"],"--text-dim":[[167,180,196],[71,85,105],"hex"],"--on-accent":[[6,20,26],[255,255,255],"hex"],"--surface-solid":[[13,20,32],[255,255,255],"hex"],"--ink-rgb":[[148,163,184],[71,85,105],"rgb"],"--cyan-rgb":[[69,214,232],[8,145,178],"rgb"],"--red-rgb":[[248,113,113],[220,38,38],"rgb"],"--green-rgb":[[163,230,53],[77,124,15],"rgb"],"--green2-rgb":[[74,222,128],[22,163,74],"rgb"],"--teal-rgb":[[52,211,153],[5,150,105],"rgb"],"--amber-rgb":[[251,191,36],[180,83,9],"rgb"],"--hi-rgb":[[255,255,255],[15,23,42],"rgb"],"--fg-rgb":[[226,238,247],[30,41,59],"rgb"],"--shadow-rgb":[[0,0,0],[15,23,42],"rgb"],"--s0-rgb":[[8,12,19],[238,242,246],"rgb"],"--s1-rgb":[[12,19,28],[255,255,255],"rgb"],"--s2-rgb":[[17,26,38],[244,247,250],"rgb"]};

const CATEGORY_ICONS = {
  all:         `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
  energy:      `<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>`,
  ev:          `<rect x="3" y="4" width="11" height="16" rx="2"/><path d="M3 9h11"/><path d="M14 8h3a2 2 0 0 1 2 2v5.5a1.8 1.8 0 0 1-3.6 0V13"/><path d="M9 11l-2.5 3.5H9L6.5 18"/>`,
  solar:       `<circle cx="12" cy="12" r="3.6"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/>`,
  cost:        `<circle cx="12" cy="12" r="9"/><path d="M14.5 9a2.6 2.6 0 0 0-2.5-1.5c-1.4 0-2.5.8-2.5 1.9s1.1 1.7 2.5 1.9 2.5.8 2.5 2-1.1 1.9-2.5 1.9A2.6 2.6 0 0 1 9.5 15"/><path d="M12 6v1.5M12 16.5V18"/>`,
  air_quality: `<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h14a3 3 0 1 1-3 3"/><path d="M3 16h7"/>`,
  hvac:        `<path d="M12 2v20M3 7l18 10M21 7 3 17"/>`,
  lighting:    `<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3z"/>`,
  security:    `<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3z"/>`,
  cctv:        `<rect x="3" y="7" width="12" height="10" rx="2"/><path d="M15 11l6-3v8l-6-3z"/>`,
  water:       `<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>`,
  occupancy:   `<circle cx="9" cy="8" r="3"/><path d="M3.5 20c0-3 2.5-5.5 5.5-5.5S14.5 17 14.5 20"/><path d="M16 5.5a3 3 0 0 1 0 5.5M20.5 20c0-2.3-1.4-4.3-3.5-5.1"/>`,
  rooms:       `<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10"/><path d="M11 11h.01"/>`,
  meeting_room: `<rect x="4" y="10" width="16" height="3" rx="1.2"/><path d="M6.5 13v6M17.5 13v6"/><circle cx="9" cy="5.5" r="1.7"/><circle cx="15" cy="5.5" r="1.7"/><path d="M9 7.2v2.4M15 7.2v2.4"/>`,
  trends:      `<path d="M3 17l6-6 4 4 8-8"/><path d="M15 6h6v6"/>`,
  carbon:      `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-11 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`,
};

function catIcon(key) {
  const p = CATEGORY_ICONS[key];
  return p ? `<svg class="chip-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>` : "";
}


const CATEGORIES = [
  { key: "all", label: "Overview" },
  { key: "energy", label: "Energy" },
  { key: "ev", label: "EV" },
  { key: "solar", label: "Solar" },
  { key: "cost", label: "Cost" },
  { key: "air_quality", label: "Air Quality" },
  { key: "hvac", label: "HVAC" },
  { key: "lighting", label: "Lighting" },
  { key: "security", label: "Security" },
  { key: "cctv", label: "CCTV" },
  { key: "water", label: "Water" },
  { key: "occupancy", label: "People" },
  { key: "meeting_room", label: "Meeting Rooms" },
];

const WX_ICONS = {
  clear:       CATEGORY_ICONS.solar,
  clearNight:  `<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>`,
  partly:      `<path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41"/><path d="M15.95 12.65a4 4 0 0 0-5.93-4.13"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>`,
  partlyNight: `<path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"/><path d="M10.1 9A6 6 0 0 1 16 4a4 4 0 0 0 6 6 6 6 0 0 1-3 5.2"/>`,
  cloudy:      `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,
  fog:         `<path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="M16 17H7M17 21H9"/>`,
  drizzle:     `<path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="M8 19v1M8 14v1M16 19v1M16 14v1M12 21v1M12 16v1"/>`,
  rain:        `<path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="M16 14v6M8 14v6M12 16v6"/>`,
  heavy_rain:  `<path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="m9.2 22 3-7M9 13l-3 7M17 13l-3 7"/>`,
  thunder:     `<path d="M6 16.3A7 7 0 1 1 15.71 9h1.79a4.5 4.5 0 0 1 .5 8.97"/><path d="m13 12-3 5h4l-3 5"/>`,
  off:         `<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>`,
};

const wxSvg = (name, size = 16) => `<svg class="wx-ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${WX_ICONS[name] || WX_ICONS.cloudy}</svg>`;

function wxIconFor(kind, night) {
  if (!kind) return "cloudy";
  if (night && kind === "clear") return "clearNight";
  if (night && kind === "partly") return "partlyNight";
  return kind;
}
function wxKindLabel(kind, night) {
  if (!kind) return t("wx.noData");
  return t(night && (kind === "clear") ? "wx.k.clearNight" : "wx.k." + kind);
}


const COMFORT_RANKS = [
  { key: "excellent", cls: "good" },
  { key: "good", cls: "good" },
  { key: "moderate", cls: "warn" },
  { key: "poor", cls: "mid" },
  { key: "veryPoor", cls: "bad" },
];
function rankTemp(v) {
  const d = Math.abs(v - 24.5);
  if (d <= 1.5) return 0;
  if (d <= 3.5) return 1;
  if (d <= 5.5) return 2;
  if (d <= 8.5) return 3;
  return 4;
}
function rankHumidity(v) {
  if (v >= 40 && v <= 60) return 0;
  if (v >= 30 && v <= 70) return 1;
  if (v >= 20 && v <= 80) return 2;
  if (v >= 10 && v <= 90) return 3;
  return 4;
}
function rankCo2(v) {
  if (v <= 600) return 0;
  if (v <= 800) return 1;
  if (v <= 1000) return 2;
  if (v <= 1500) return 3;
  return 4;
}
function rankPm25(v) {
  if (v <= 15) return 0;
  if (v <= 25) return 1;
  if (v <= 37.5) return 2;
  if (v <= 75) return 3;
  return 4;
}


const EFD_SPOKE_DUR = 2.4, EFD_HOME_DUR = 2;
const EFD_BATT_ICON = `<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 11v2"/><path d="M7 10v4M11 10v4"/>`;
// ช่องว่างตรง 12 นาฬิกาของวงแหวนสัดส่วนอาคาร (จุดที่เส้น flow ฮับ→อาคารพุ่งเข้ามาพอดี เพราะฮับอยู่เหนืออาคารตรงๆ) กันสีเขียว/ส้มพาดผ่านเส้นจนดูเหมือนทับกัน — ใช้ทั้ง build (energyFlowDiagramSVG) และ patch (patchEnergyFlowDiagram) ต้องตรงกันเป๊ะ
const RING_GAP_FRAC = 10 / 360, RING_AVAIL_FRAC = 1 - RING_GAP_FRAC;
// สร้าง markup เส้น flow หนึ่งเส้น — ใช้ร่วมกันทั้งตอน build ครั้งแรก (energyFlowDiagramSVG) และตอน patch in-place (patchEnergyFlowDiagram) กันโค้ดสองที่ไม่ตรงกัน
// opacity fade in/out ที่หัว-ท้ายรอบ ซ่อนจังหวะที่จุดวนกลับไปเริ่มต้นใหม่ (แทนที่จะเด้งหายวับแล้วโผล่ใหม่ทันทีแบบเดิม) — จุดยังวนซ้ำในเส้นทางของตัวเองเหมือนเดิม แค่ไม่กระตุกตอนวนรอบใหม่
function flowMarkup(color, path, active, hasDot, dur) {
  if (!active) return `<path d="${path}" fill="none" stroke="rgba(var(--ink-rgb),0.6)" stroke-width="3" stroke-dasharray="3 4" opacity="0.5"/>`;
  const dot = hasDot
    ? `<circle r="3.5" fill="${color}">
         <animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/>
         <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="${dur}s" repeatCount="indefinite"/>
       </circle>`
    : "";
  return `<path d="${path}" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" opacity="0.9"/>${dot}`;
}

// ── วงจรไฟสำรอง "DOSE & Data Center" (ต่อผ่าน SmartGuard มีแบตสำรอง) ──
// ตรวจจากข้อมูลจริง 2026-09-28: มิเตอร์ฝั่ง SmartGuard (FusionSolar, EMMA DTSU666) ตอนกลางคืน 27–28 ก.ย. แอร์ DOSE ปิด แบตไม่จ่าย
// ยังดึงไฟนิ่ง 0.76–0.84 kW ทุกชั่วโมง = อุปกรณ์เปิด 24 ชม. (เซิร์ฟเวอร์/เน็ตเวิร์ค/PoE+กล้อง) → Data Center อยู่บนวงจรสำรองด้วย
// ตอนไฟปกติ HA ยังไม่มีค่ามิเตอร์ตัวนั้น (หา register ไม่เจอ) → ประมาณ = ฐานที่วัดได้ + แอร์ DOSE ที่เปิดอยู่ × ~0.9 kW/เครื่อง
// ตอนไฟดับจริง (SmartGuard ออฟกริด) อินเวอร์เตอร์คือแหล่งเดียวที่จ่ายวงจรนี้ → ใช้กำลังไฟขาออกจริง (sensor.huawei_active_power)
// ⚠️ มิเตอร์ห้อง DOSE 4 ตัว (metering_1pn_wifi_*) ค้างตั้งแต่ 22 ก.ย. 06:48 — ไม่ใช้เป็นโหลดจริงแล้ว
const PS_BACKUP_BASE_KW = 0.78;
const PS_BACKUP_AC_IDS = ["climate.air_01", "climate.air_02"];
function psBackupLoadEstimate() {
  const acOn = PS_BACKUP_AC_IDS.filter((id) => { const st = String((getEntity(id) || {}).state || "").toLowerCase(); return st && !["off", "unavailable", "unknown", "none"].includes(st); }).length;
  return { kw: PS_BACKUP_BASE_KW + acOn * DEFAULT_AC_UNIT_W / 1000, acOn };
}
function psHuaweiOffGrid() {
  const bits = parseInt((getEntity("sensor.huawei_grid_state") || {}).state, 10);
  return Number.isFinite(bits) && (bits & 1) === 1;
}
const EFD_BACKUP = { x: 338, y: 222, r: 40 }, EFD_BACKUP_COLOR = "#2dd4bf";
const EFD_BACKUP_ICON = `<rect x="4" y="3" width="16" height="7" rx="1.5"/><rect x="4" y="14" width="16" height="7" rx="1.5"/><path d="M8 6.5h.01M8 17.5h.01"/>`;
// โหนดแบตเตอรี่ (Huawei ผ่าน EMMA → HA): ผู้ใช้ขอ 2026-09-28 ให้เห็นว่าแบตชาร์จจากอะไร + เหลือกี่ % — วางซ้ายกลาง (ฝั่งเดียวกับโซลาร์ เพราะชาร์จจากโซลาร์เท่านั้น: EMMA ตั้ง Charge from AC = Disable)
// batt = { soc, kw } — kw > 0 ชาร์จ / < 0 จ่าย (kW) ; null = ไม่มีข้อมูล Huawei → ไม่วาดโหนดนี้ (diagram แบบเดิม)
const EFD_BATT = { x: 62, y: 222, r: 40 }, EFD_BATT_COLOR = "#a78bfa";
function efdBattState(batt) {
  if (!batt || batt.kw == null) return "idle";
  return batt.kw > 0.05 ? "charge" : batt.kw < -0.05 ? "discharge" : "idle";
}
// สัดส่วนของโหลดอาคารที่มาจากโซลาร์ / แบต (สำหรับวงแหวนรอบโหนดอาคาร: ส้ม = โซลาร์, ม่วง = แบต)
function efdHomeShares(acKw, batt, homeKw) {
  const dis = batt && efdBattState(batt) === "discharge" ? Math.abs(batt.kw) : 0;
  const solarToHome = acKw != null ? Math.max(0, acKw - dis) : null;
  const f = (v) => (homeKw && v != null) ? Math.max(0, Math.min(1, v / homeKw)) : 0;
  return { solarFrac: f(solarToHome), battFrac: f(dis) };
}
function efdBattSocColor(soc) { return soc == null ? "#64748b" : soc >= 50 ? "#22c55e" : soc > 25 ? "#fbbf24" : "#f87171"; }
// ใต้โหนดแบต 2 บรรทัดสั้นๆ (บรรทัดเดียวยาวเกินจนล้นขอบซ้าย): สถานะ (ชาร์จจากอะไร/จ่ายให้ใคร) + กำลัง kW
function efdBattSubText(batt) {
  const st = efdBattState(batt);
  return st === "charge" ? t("efd.battCharge") : st === "discharge" ? t("efd.battDischarge") : t(batt && batt.soc >= 99 ? "efd.battFull" : "efd.battIdle");
}
function efdBattKwText(batt) {
  return efdBattState(batt) === "idle" || !batt || batt.kw == null ? "" : `${Math.abs(batt.kw).toFixed(2)} kW`;
}
function efdBattTip(batt) {
  return t("efd.battTip").replace("{p}", batt.soc != null ? Math.round(batt.soc) : "--").replace("{c}", batt.capKwh != null ? batt.capKwh.toFixed(1) : "--")
    .replace("{s}", (efdBattSubText(batt) + " " + efdBattKwText(batt)).trim()).replace("{b}", batt.backupSoc != null ? Math.round(batt.backupSoc) : "--").replace("{x}", batt.cutoffSoc != null ? Math.round(batt.cutoffSoc) : "--");
}
function energyFlowDiagramSVG({ solarKw, gridKw, lowCarbonKw, homeKw, buildingLabel, solarTip, gridTip, homeTip, pvKw, batt, backup, lannaKw }) {
  // ขยายวงกลมอีกรอบ (ตัวหนังสือ/ไอคอนคงขนาดเดิม ให้วงมีที่ว่างรอบตัวเลขมากขึ้น) + เว้นขอบ margin เท่ากันทุกด้าน
  const W = 400, H = 450;
  const solar = { x: 104, y: 78, r: 56 }, grid = { x: 296, y: 78, r: 56 }, hub = { x: 200, y: 208, r: 32 }, home = { x: 200, y: 338, r: 67 };
  const ORANGE = "#ff9800", BLUE = "#29b6f6", GREEN = "#22c55e", HUB_COLOR = "#8b93a3";
  const shownSolarKw = pvKw != null ? pvKw : solarKw;   // มีค่าจากอินเวอร์เตอร์ Huawei = กำลังผลิตโซลาร์จริง (DC) แทนมิเตอร์ solar_p* ที่เฟส 1 อ่านติดลบ
  const hasSolar = shownSolarKw !== null && shownSolarKw > 0.05;
  const hasGridImport = gridKw !== null && gridKw > 0.05;
  // ตัวเลข ≥1000 kW ปัดเป็นจำนวนเต็ม กันสตริงยาวเกินจนแน่นในวงกลม
  const kw1 = (v) => v == null ? "--" : `${v >= 1000 ? Math.round(v).toLocaleString() : v.toFixed(2)} kW`;
  const truncLabel = (s, max = 13) => (s && s.length > max) ? s.slice(0, max - 1) + "…" : s;
  // ตัวเลขสั้น ("1.43 kW") ได้ font ใหญ่สุด ยาวขึ้น ("999.99 kW") ค่อยลดลง กันข้อความกว้างจนชนเส้นวงแหวน
  const valFontSize = (s) => s.length > 9 ? 15 : s.length > 7 ? 17 : 19;

  // จุดเริ่ม/จุดจบเส้น = ขอบวงกลม (เยื้องเข้าหากันตามมุมจริง) กันเส้นทะลุเข้าไปในวงกลม
  const edge = (from, to, r) => {
    const dx = to.x - from.x, dy = to.y - from.y, d = Math.hypot(dx, dy) || 1;
    return { x: from.x + (dx / d) * r, y: from.y + (dy / d) * r };
  };
  const sStart = edge(solar, hub, solar.r + 3), sEnd = edge(hub, solar, hub.r + 3);
  const solarPath = `M${sStart.x.toFixed(1)},${sStart.y.toFixed(1)} L${sEnd.x.toFixed(1)},${sEnd.y.toFixed(1)}`;
  const gStart = edge(grid, hub, grid.r + 3), gEnd = edge(hub, grid, hub.r + 3);
  const gridPath = `M${gStart.x.toFixed(1)},${gStart.y.toFixed(1)} L${gEnd.x.toFixed(1)},${gEnd.y.toFixed(1)}`;
  const hStart = edge(hub, home, hub.r + 3), hEnd = edge(home, hub, home.r + 3);
  const homePath = `M${hStart.x.toFixed(1)},${hStart.y.toFixed(1)} L${hEnd.x.toFixed(1)},${hEnd.y.toFixed(1)}`;
  const battNode = EFD_BATT;
  const bA = edge(battNode, hub, battNode.r + 3), bB = edge(hub, battNode, hub.r + 3);
  // ทิศของจุดวิ่ง = ทิศพลังงาน: ชาร์จ = มิเตอร์→แบต / จ่าย = แบต→มิเตอร์
  const bkN = EFD_BACKUP;
  const kA = edge(hub, bkN, hub.r + 3), kB = edge(bkN, hub, bkN.r + 3);
  const backupPath = `M${kA.x.toFixed(1)},${kA.y.toFixed(1)} L${kB.x.toFixed(1)},${kB.y.toFixed(1)}`;
  const battPathFor = (st) => st === "charge" ? `M${bB.x.toFixed(1)},${bB.y.toFixed(1)} L${bA.x.toFixed(1)},${bA.y.toFixed(1)}` : `M${bA.x.toFixed(1)},${bA.y.toFixed(1)} L${bB.x.toFixed(1)},${bB.y.toFixed(1)}`;

  const icon = (path, x, y, size, color) =>
    `<svg x="${(x - size / 2).toFixed(1)}" y="${(y - size / 2).toFixed(1)}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  const PYLON_ICON = `<path d="M12 2v20M8 7h8M6 11h12M4 21l4-14M20 21l-4-14M9 11l-2 10M15 11l2 10"/>`;
  const HOME_ICON = `<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>`;
  const METER_ICON = `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M12 13 15.5 9"/><circle cx="12" cy="13" r="1.2" fill="currentColor" stroke="none"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/>`;

  // ring รอบโหนด "อาคาร" แบ่งสัดส่วนสี (เขียว=low-carbon / ส้ม=โซลาร์ / ที่เหลือ=พื้นเทาเข้ม คือกริดปกติ) — ดูสัดส่วนได้จากสี ไม่ต้องอ่านตัวเลขเพิ่ม รายละเอียดเต็มอยู่ใน tooltip
  // เรนเดอร์ <circle> เสมอแม้ frac=0 (len=0 แค่ทำให้เส้นมองไม่เห็น) — กันโครง DOM ไม่คงที่ระหว่างรอบ (patchEnergyFlowDiagram ต้องเจอ circles[1]/[2] ทุกครั้งเพื่ออัปเดต in-place)
  const ringSegment = (c, r, startFrac, frac, color) => {
    const C = 2 * Math.PI * r;
    const len = Math.max(0, Math.min(1, frac)) * C;
    return `<circle cx="${c.x}" cy="${c.y}" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${len.toFixed(1)} ${(C - len).toFixed(1)}" stroke-dashoffset="${(-startFrac * C).toFixed(1)}" transform="rotate(-90 ${c.x} ${c.y})"/>`;
  };

  // data-tip เพียงพอแล้ว (กล่องทูลทิปสไตล์แอปเอง ดู #dataTipBox ใน style.css) — ห้ามใส่ <title> ของ SVG เพิ่ม เพราะเบราว์เซอร์จะโชว์กล่องทูลทิปเปล่าๆซ้อนอีกกล่อง (เหตุผลเดียวกับที่แอปเลิกใช้ title="" ไปแล้วทั่วทั้งแอป)
  // เว้นช่องว่างตรง 12 นาฬิกา (RING_GAP_FRAC) ในส่วนสี เขียว/ส้ม เท่านั้น (ไม่แตะพื้นเทาจางๆของแทร็กหลัก) กันสีพาดผ่านเส้น flow ฮับ→อาคารที่พุ่งเข้ามาจากด้านบนพอดี ให้เห็นเส้นเทาแยกออกจากวงแหวนสีชัดเจน
  const node = (key, c, ringColor, iconPath, label, valueTxt, tip, ringSegments) => `
    <g data-tip="${escAttr(tip)}" role="img" aria-label="${escAttr(tip)}">
      <circle cx="${c.x}" cy="${c.y}" r="${c.r}" fill="rgba(148,163,184,0.07)" stroke="${ringColor}" stroke-width="4"/>
      ${ringSegments ? `<g id="efd-ring-${key}"><circle cx="${c.x}" cy="${c.y}" r="${c.r + 8}" fill="none" stroke="rgba(148,163,184,0.18)" stroke-width="6"/>${ringSegments.map((s) => ringSegment(c, c.r + 8, RING_GAP_FRAC / 2 + s.start * RING_AVAIL_FRAC, s.frac * RING_AVAIL_FRAC, s.color)).join("")}</g>` : ""}
      ${icon(iconPath, c.x, c.y - c.r * 0.34, 33, ringColor)}
      <text id="efd-val-${key}" x="${c.x}" y="${c.y + c.r * 0.42}" text-anchor="middle" font-size="${valFontSize(valueTxt)}" font-weight="700" fill="var(--text-strong)" style="font-family:'Sarabun',sans-serif">${escAttr(valueTxt)}</text>
      <text x="${c.x}" y="${c.y + c.r + 25}" text-anchor="middle" font-size="17" font-weight="600" letter-spacing="0.3" fill="var(--text-dim)">${escAttr(label)}</text>
    </g>`;

  // โหนดมิเตอร์ตรงกลาง (hub) — เล็กกว่า ไม่มีตัวเลข/label ใต้ตัว เหมือนไอคอนมิเตอร์เล็กๆตรงกลางในภาพอ้างอิง เป็นจุดที่โซลาร์+กริดไหลมารวมกันก่อนไปอาคาร
  const meterTip = t(batt ? "tip.energyMeterBatt" : "tip.energyMeter");   // มีโหนดแบต → คำอธิบายรวมแบตด้วย
  const hubNode = `
    <g data-tip="${escAttr(meterTip)}" role="img" aria-label="${escAttr(meterTip)}">
      <circle cx="${hub.x}" cy="${hub.y}" r="${hub.r}" fill="rgba(148,163,184,0.12)" stroke="${HUB_COLOR}" stroke-width="3.5"/>
      ${icon(METER_ICON, hub.x, hub.y, 26, HUB_COLOR)}
    </g>`;

  // active ห่อด้วย <g id="efd-flow-${key}" data-active> เสมอ — patchEnergyFlowDiagram() ใช้ id นี้เช็คว่า active state เปลี่ยนไหม
  // ถ้าไม่เปลี่ยนจะ "ไม่แตะ" กลุ่มนี้เลยทุก poll (15s) กัน <animateMotion> ของจุดวิ่งรีสตาร์ท/กระตุกเวลาเรนเดอร์ใหม่ทั้งที่ยังไหลอยู่เหมือนเดิม
  const flow = (key, path, color, active, dur) => `<g id="efd-flow-${key}" data-active="${active ? "1" : "0"}">${flowMarkup(color, path, active, true, dur)}</g>`;

  // สัดส่วน ring ของโหนด "อาคาร": เขียว(low-carbon) แล้วต่อด้วยส้ม(โซลาร์) แล้วปล่อยที่เหลือเป็นพื้น (กริดปกติ) โดยไม่วาดทับ
  const lcFrac = (homeKw && lowCarbonKw != null) ? Math.max(0, Math.min(1, lowCarbonKw / homeKw)) : 0;
  // ส่วนที่มาจากแบต (ตอนแบตจ่าย) แยกออกจากโซลาร์ — solarKw ที่ส่งมาคือขาออกอินเวอร์เตอร์ (PV + แบตจ่าย) จึงต้องหักแบตออกก่อน
  const { solarFrac, battFrac } = efdHomeShares(solarKw, batt, homeKw);
  const offGrid = !!(backup && backup.offGrid);
  const hasHomeFlow = !offGrid && (hasSolar || hasGridImport || (batt && efdBattState(batt) === "discharge"));
  const GREY = "#475569";

  // โหนดแบต: ตรงกลาง = % แบต, ใต้ชื่อ = สถานะ (ชาร์จจากโซลาร์ / จ่ายให้อาคาร / เต็ม / พัก), วงแหวนรอบ = สัดส่วน % (เขียว ≥50 / เหลือง / แดง)
  let battMarkup = "";
  if (batt) {
    const st = efdBattState(batt);
    const flowColor = st === "charge" ? GREEN : EFD_BATT_COLOR;
    const socTxt = batt.soc != null ? `${Math.round(batt.soc)}%` : "--";
    const tip = efdBattTip(batt);
    battMarkup = `<g id="efd-flow-battery" data-active="${st}">${flowMarkup(flowColor, battPathFor(st), st !== "idle", true, EFD_SPOKE_DUR)}</g>
    <g data-tip="${escAttr(tip)}" role="img" aria-label="${escAttr(tip)}" id="efd-node-battery">
      <circle cx="${battNode.x}" cy="${battNode.y}" r="${battNode.r}" fill="rgba(148,163,184,0.07)" stroke="${EFD_BATT_COLOR}" stroke-width="4"/>
      <g id="efd-ring-battery"><circle cx="${battNode.x}" cy="${battNode.y}" r="${battNode.r + 7}" fill="none" stroke="rgba(148,163,184,0.18)" stroke-width="5"/>${ringSegment(battNode, battNode.r + 7, 0, (batt.soc || 0) / 100, efdBattSocColor(batt.soc))}</g>
      ${icon(EFD_BATT_ICON, battNode.x, battNode.y - battNode.r * 0.36, 24, EFD_BATT_COLOR)}
      <text id="efd-val-battery" x="${battNode.x}" y="${battNode.y + battNode.r * 0.45}" text-anchor="middle" font-size="17" font-weight="700" fill="var(--text-strong)" style="font-family:'Sarabun',sans-serif">${escAttr(socTxt)}</text>
      <text x="${battNode.x}" y="${battNode.y + battNode.r + 24}" text-anchor="middle" font-size="15" font-weight="600" fill="var(--text-dim)">${escAttr(t("efd.battery"))}</text>
      <text id="efd-sub-battery" x="${battNode.x}" y="${battNode.y + battNode.r + 41}" text-anchor="middle" font-size="12.5" font-weight="600" fill="${st === "charge" ? GREEN : st === "discharge" ? EFD_BATT_COLOR : "#8b93a3"}">${escAttr(efdBattSubText(batt))}</text>
      <text id="efd-kw-battery" x="${battNode.x}" y="${battNode.y + battNode.r + 57}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${st === "charge" ? GREEN : st === "discharge" ? EFD_BATT_COLOR : "#8b93a3"}" style="font-family:'Sarabun',sans-serif">${escAttr(efdBattKwText(batt))}</text>
    </g>`;
  }

  // โหนด "DOSE & Data Center" (วงจรไฟสำรอง) ขวากลาง — ตอนไฟปกติรับไฟจากมิเตอร์ (ค่าประมาณ ~) / ตอนไฟดับรับจากแบต+โซลาร์ (ค่าจริงจากอินเวอร์เตอร์)
  let backupMarkup = "";
  if (backup) {
    const tip = t("efd.backupTipOff").replace("{k}", backup.kw.toFixed(2));
    backupMarkup = `<g data-tip="${escAttr(tip)}" role="img" aria-label="${escAttr(tip)}" id="efd-node-backup">
      <circle cx="${bkN.x}" cy="${bkN.y}" r="${bkN.r}" fill="rgba(148,163,184,0.07)" stroke="${EFD_BACKUP_COLOR}" stroke-width="4"/>
      ${icon(EFD_BACKUP_ICON, bkN.x, bkN.y - bkN.r * 0.36, 22, EFD_BACKUP_COLOR)}
      <text id="efd-val-backup" x="${bkN.x}" y="${bkN.y + bkN.r * 0.45}" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text-strong)" style="font-family:'Sarabun',sans-serif">${escAttr(backup.kw.toFixed(2) + " kW")}</text>
      <text x="${bkN.x}" y="${bkN.y + bkN.r + 22}" text-anchor="middle" font-size="13.5" font-weight="600" fill="var(--text-dim)">DOSE &amp;</text>
      <text x="${bkN.x}" y="${bkN.y + bkN.r + 38}" text-anchor="middle" font-size="13.5" font-weight="600" fill="var(--text-dim)">Data Center</text>
      <text id="efd-sub-backup" x="${bkN.x}" y="${bkN.y + bkN.r + 54}" text-anchor="middle" font-size="12" font-weight="600" fill="${EFD_BATT_COLOR}">${escAttr(t("efd.backupOnBatt"))}</text>
    </g>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" data-batt="${batt ? 1 : 0}" data-backup="${backup ? (offGrid ? "off" : "on") : "none"}">
    ${battMarkup}
    ${backupMarkup}
    ${flow("solar", solarPath, GREEN, hasSolar, EFD_SPOKE_DUR)}
    ${flow("grid", gridPath, ORANGE, hasGridImport && !offGrid, EFD_SPOKE_DUR)}
    ${flow("home", homePath, HUB_COLOR, hasHomeFlow, EFD_HOME_DUR)}
    ${backup ? flow("backup", backupPath, offGrid ? EFD_BATT_COLOR : HUB_COLOR, backup.kw > 0.02, EFD_SPOKE_DUR) : ""}
    ${node("solar", solar, GREEN, CATEGORY_ICONS.solar, t("lbl.solar"), kw1(shownSolarKw), solarTip)}
    ${node("grid", grid, offGrid ? GREY : ORANGE, PYLON_ICON, t("lbl.grid"), offGrid ? t("efd.noPower") : kw1(gridKw), gridTip)}
    ${hubNode}
    ${node("home", home, offGrid ? GREY : BLUE, HOME_ICON, truncLabel(buildingLabel), offGrid ? t("efd.noPower") : kw1((lannaKw != null ? lannaKw : homeKw)), homeTip, [{ start: 0, frac: offGrid ? 0 : lcFrac, color: GREEN }, { start: lcFrac, frac: offGrid ? 0 : solarFrac, color: ORANGE }, { start: lcFrac + solarFrac, frac: offGrid ? 0 : battFrac, color: EFD_BATT_COLOR }])}
  </svg>`;
}

// อัปเดต diagram ที่มีอยู่แล้วแบบ in-place แทนการ innerHTML ทับใหม่ทั้งก้อน (ดูเหตุผลที่ flow() ห่อ <g id="efd-flow-*">)
// คืนค่า false ถ้าโครงสร้างใน DOM ไม่ตรงกับที่คาด (เช่น element หาย) — เรียกฝั่งต้อง fallback ไป rebuild เต็มแทน
function patchEnergyFlowDiagram(root, { solarKw, gridKw, lowCarbonKw, homeKw, solarActive, gridActive, homeActive, pvKw, batt, backup, lannaKw }) {
  const kw1 = (v) => v == null ? "--" : `${v >= 1000 ? Math.round(v).toLocaleString() : v.toFixed(2)} kW`;
  const valFontSize = (s) => s.length > 9 ? 15 : s.length > 7 ? 17 : 19;
  const GREEN = "#22c55e", ORANGE = "#ff9800", BLUE = "#29b6f6", HUB_COLOR = "#8b93a3";

  const setVal = (key, v) => {
    const el = root.querySelector(`#efd-val-${key}`);
    if (!el) return false;
    const txt = kw1(v);
    el.textContent = txt;
    el.setAttribute("font-size", String(valFontSize(txt)));
    return true;
  };
  const setFlow = (key, color, active, dur) => {
    const g = root.querySelector(`#efd-flow-${key}`);
    if (!g) return false;
    if (g.getAttribute("data-active") === (active ? "1" : "0")) return true; // ไม่เปลี่ยน state → ไม่แตะ DOM เลย กัน animateMotion รีสตาร์ท
    g.setAttribute("data-active", active ? "1" : "0");
    const path = (g.querySelector("path") || document.createElement("i")).getAttribute("d") || "";
    g.innerHTML = flowMarkup(color, path, active, true, dur);
    return true;
  };
  const setRing = (key, c, r, lcFrac, solarFrac, battFrac) => {
    const g = root.querySelector(`#efd-ring-${key}`);
    if (!g) return false;
    const C = 2 * Math.PI * r;
    const seg = (startFrac, frac) => {
      const len = Math.max(0, Math.min(1, frac)) * C;
      return { len, gap: C - len, offset: -startFrac * C };
    };
    const s1 = seg(RING_GAP_FRAC / 2, lcFrac * RING_AVAIL_FRAC), s2 = seg(RING_GAP_FRAC / 2 + lcFrac * RING_AVAIL_FRAC, solarFrac * RING_AVAIL_FRAC);
    const s3 = seg(RING_GAP_FRAC / 2 + (lcFrac + solarFrac) * RING_AVAIL_FRAC, battFrac * RING_AVAIL_FRAC);
    const circles = g.querySelectorAll("circle");
    if (circles.length < 4) return false;   // โครงเก่า (ก่อนมีส่วนแบต) → rebuild
    circles[3].setAttribute("stroke-dasharray", `${s3.len.toFixed(1)} ${s3.gap.toFixed(1)}`);
    circles[3].setAttribute("stroke-dashoffset", s3.offset.toFixed(1));
    circles[1].setAttribute("stroke-dasharray", `${s1.len.toFixed(1)} ${s1.gap.toFixed(1)}`);
    circles[1].setAttribute("stroke-dashoffset", s1.offset.toFixed(1));
    circles[2].setAttribute("stroke-dasharray", `${s2.len.toFixed(1)} ${s2.gap.toFixed(1)}`);
    circles[2].setAttribute("stroke-dashoffset", s2.offset.toFixed(1));
    return true;
  };

  const home = { r: 67 };
  const lcFrac = (homeKw && lowCarbonKw != null) ? Math.max(0, Math.min(1, lowCarbonKw / homeKw)) : 0;
  // ส่วนที่มาจากแบต (ตอนแบตจ่าย) แยกออกจากโซลาร์ — solarKw ที่ส่งมาคือขาออกอินเวอร์เตอร์ (PV + แบตจ่าย) จึงต้องหักแบตออกก่อน
  const { solarFrac, battFrac } = efdHomeShares(solarKw, batt, homeKw);

  const svg = root.querySelector("svg");
  if (!svg || svg.getAttribute("data-batt") !== (batt ? "1" : "0")) return false;   // เพิ่ง/เลิกมีข้อมูลแบต → rebuild ทั้งก้อน
  if (svg.getAttribute("data-backup") !== (backup ? (backup.offGrid ? "off" : "on") : "none")) return false;   // ไฟปกติ↔ไฟดับ → rebuild
  if (backup) {
    const v = root.querySelector("#efd-val-backup"), n = root.querySelector("#efd-node-backup");
    if (!v || !n) return false;
    v.textContent = backup.kw.toFixed(2) + " kW";
    const tip = t("efd.backupTipOff").replace("{k}", backup.kw.toFixed(2));
    n.setAttribute("data-tip", tip); n.setAttribute("aria-label", tip);
    if (!setFlow("backup", backup.offGrid ? EFD_BATT_COLOR : HUB_COLOR, backup.kw > 0.02, EFD_SPOKE_DUR)) return false;
  }
  if (batt) {
    const st = efdBattState(batt);
    const val = root.querySelector("#efd-val-battery"), sub = root.querySelector("#efd-sub-battery"), g = root.querySelector("#efd-flow-battery"), node = root.querySelector("#efd-node-battery");
    const ring = root.querySelectorAll("#efd-ring-battery circle");
    if (!val || !sub || !g || !node || ring.length < 2) return false;
    val.textContent = batt.soc != null ? `${Math.round(batt.soc)}%` : "--";
    const kwEl = root.querySelector("#efd-kw-battery");
    if (!kwEl) return false;
    const fill = st === "charge" ? GREEN : st === "discharge" ? EFD_BATT_COLOR : "#8b93a3";
    sub.textContent = efdBattSubText(batt); sub.setAttribute("fill", fill);
    kwEl.textContent = efdBattKwText(batt); kwEl.setAttribute("fill", fill);
    const tip = efdBattTip(batt);
    node.setAttribute("data-tip", tip); node.setAttribute("aria-label", tip);
    const C = 2 * Math.PI * (EFD_BATT.r + 7), len = Math.max(0, Math.min(1, (batt.soc || 0) / 100)) * C;
    ring[1].setAttribute("stroke-dasharray", `${len.toFixed(1)} ${(C - len).toFixed(1)}`);
    ring[1].setAttribute("stroke", efdBattSocColor(batt.soc));
    if (g.getAttribute("data-active") !== st) return false;   // ทิศเปลี่ยน (ชาร์จ↔จ่าย↔พัก) → rebuild ให้ path/สีจุดวิ่งถูกทิศ
  }

  if (backup && backup.offGrid) return true;   // ไฟดับ: กริด/อาคารแสดง "ไม่มีไฟ" คงที่ ไม่ต้องอัปเดตตัวเลข
  return setVal("solar", pvKw != null ? pvKw : solarKw) && setVal("grid", gridKw) && setVal("home", (lannaKw != null ? lannaKw : homeKw))
    && setFlow("solar", GREEN, solarActive, EFD_SPOKE_DUR) && setFlow("grid", ORANGE, gridActive, EFD_SPOKE_DUR) && setFlow("home", HUB_COLOR, homeActive, EFD_HOME_DUR)
    && setRing("home", null, home.r + 8, lcFrac, solarFrac, battFrac);
}



root.TwinUI = {
  setLang: function (l) { LANG = l === "en" ? "en" : "th"; },
  t: t, escAttr: escAttr, I18N: I18N, THEME_TOKENS: THEME_TOKENS,
  CATEGORY_ICONS: CATEGORY_ICONS, CATEGORIES: CATEGORIES, catIcon: catIcon,
  wxSvg: wxSvg, wxIconFor: wxIconFor, wxKindLabel: wxKindLabel,
  COMFORT_RANKS: COMFORT_RANKS, rankTemp: rankTemp, rankHumidity: rankHumidity, rankCo2: rankCo2, rankPm25: rankPm25,
  energyFlowDiagramSVG: energyFlowDiagramSVG, patchEnergyFlowDiagram: patchEnergyFlowDiagram, efdBattState: efdBattState
};
})(window);
