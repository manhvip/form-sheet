const API_URL = "https://script.google.com/macros/s/AKfycbwmzcbSZzndtnfU1z8_qeL1yGfjxZxd0RL9e6efSlU9-m2ImoSHdjHm8eGRF3YSrs52/exec";

// Lấy dữ liệu từ Omnilogin
let sheet   = omniloginRefData('variables', 'xuat_Data');     // vd: test2
let tk      = omniloginRefData('variables', 'username');
let mk      = omniloginRefData('variables', 'password');
let phone   = omniloginRefData('variables', 'phone');
let trangthai = "nap";
let menhgia = omniloginRefData('variables', 'menhgia');   // có thể rỗng

async function sendToSheet() {
  const data = {
    sheet: sheet,
    values: [tk, mk, phone, trangthai, menhgia]
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log("Kết quả:", result.message);
    return result;

  } catch (err) {
    console.error("Lỗi gửi dữ liệu:", err);
    return { status: "error", message: "Lỗi gửi dữ liệu" };
  }
}

// Gọi hàm gửi
sendToSheet();
