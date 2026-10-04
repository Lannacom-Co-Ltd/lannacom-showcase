// ตั้งค่าหน้าจอโชว์ — แก้ที่นี่ที่เดียว (หรือใส่ ?api=https://.../api/showcase&lang=en&theme=dark ที่ท้ายลิงก์เพื่อทดสอบ)
window.SHOWCASE_CONFIG = {
    api: "https://digitaltwin-lc-fjbxb6gpapgabcf2.southeastasia-01.azurewebsites.net/api/showcase",   // ตัวเลขสดจากเซิร์ฟเวอร์ Digital Twin (สาธารณะ อ่านอย่างเดียว ไม่มี entity_id)
    refreshSeconds: 20,
    lang: "th",          // "th" | "en"
    theme: "light",      // "light" | "dark"
    fillMissing: true    // true = ช่องสภาพแวดล้อมที่เซ็นเซอร์ห้องไม่ส่งค่า ใช้ค่าจริงข้างนอกแทน (อุณหภูมิ/ความชื้น/PM2.5) และ CO₂ เป็นค่าตัวอย่าง · false = โชว์ "--" เหมือน twin
};
