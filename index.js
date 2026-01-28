const http = require("http");

// Thông tin sinh viên
const studentInfo = {
  ten: "Nguyễn Đạo Sơn",
  lop: "22DTHE3",
  chuyenNganh: "Công nghệ phần mềm",
  truong: "Đại học Công nghệ TP.HCM",
};

// Tạo server
const server = http.createServer((req, res) => {
  // Set header cho JSON
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

  // Xuất JSON ra response
  res.end(JSON.stringify(studentInfo, null, 2));
});

// Lấy port từ biến môi trường (Render) hoặc dùng port 3000 cho local
const PORT = process.env.PORT || 3000;

server
  .listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
    if (process.env.PORT) {
      console.log("Deploy trên Render - Port:", PORT);
    } else {
      console.log(`Local: http://localhost:${PORT}`);
    }
    console.log("Thông tin sinh viên:", JSON.stringify(studentInfo, null, 2));
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Lỗi: Port ${PORT} đang được sử dụng!`);
      console.log("Thử đổi port hoặc tắt program đang chạy.");
    } else {
      console.error("Lỗi server:", err);
    }
  });
