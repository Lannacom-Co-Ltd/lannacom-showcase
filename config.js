// ตั้งค่าหน้าจอโชว์ — แก้ที่นี่ที่เดียว (หรือใส่ ?api=https://.../api/showcase&lang=en&theme=dark ที่ท้ายลิงก์เพื่อทดสอบ)
window.SHOWCASE_CONFIG = {
    api: "https://digitaltwin-lc-fjbxb6gpapgabcf2.southeastasia-01.azurewebsites.net/api/showcase",   // ตัวเลขสดจากเซิร์ฟเวอร์ Digital Twin (สาธารณะ อ่านอย่างเดียว ไม่มี entity_id)
    refreshSeconds: 20,
    lang: "th",          // "th" | "en"
    theme: "light",      // "light" | "dark"
    fillMissing: false   // true = ช่องที่ไม่มีค่าจริง (เช่น เซ็นเซอร์อากาศในห้องที่ HA ไม่ส่ง) ใส่ค่าตัวอย่างแทน "--" (ใช้เพื่อโชว์หน้าตาเท่านั้น — ไม่ใช่ค่าจริง)
};
