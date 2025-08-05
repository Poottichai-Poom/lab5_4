function checkDate() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const yearBuddhist = parseInt(document.getElementById("year").value);

  // แปลงเป็น ค.ศ. (พ.ศ. - 543)
  const year = yearBuddhist - 543;

  // ตรวจสอบค่าที่กรอกมาเป็นตัวเลขและในช่วงที่เหมาะสม
  if (
    isNaN(day) || isNaN(month) || isNaN(yearBuddhist) ||
    day < 1 || month < 1 || month > 12
  ) {
    alert("false");
    return;
  }

  // สร้างวันที่จากข้อมูล
  const date = new Date(year, month - 1, day);

  // ตรวจสอบว่าค่าที่ Date สร้างออกมาตรงกับที่ผู้ใช้กรอกหรือไม่
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    alert("false");
    return;
  }

  // ชื่อลำดับวันในภาษาไทย
  const daysTH = [
    "วันอาทิตย์", "วันจันทร์", "วันอังคาร",
    "วันพุธ", "วันพฤหัส", "วันศุกร์", "วันเสาร์"
  ];

  const dayName = daysTH[date.getDay()];
  alert(dayName);
}
