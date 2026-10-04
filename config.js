// ตั้งค่าหน้าจอโชว์ — แก้ที่นี่ที่เดียว (หรือใส่ ?api=https://.../api/showcase&lang=en ที่ท้ายลิงก์เพื่อทดสอบ)
window.SHOWCASE_CONFIG = {
    api: "https://digitaltwin-lc-fjbxb6gpapgabcf2.southeastasia-01.azurewebsites.net/api/showcase",   // ตัวเลขสดจากเซิร์ฟเวอร์ Digital Twin (สาธารณะ อ่านอย่างเดียว ไม่มี entity_id)
    refreshSeconds: 20,
    lang: "th"   // "th" | "en"
};
