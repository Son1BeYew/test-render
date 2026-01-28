const http = require('http');

// Thông tin sinh viên
const studentInfo = {
    ten: "Nguyễn Đạo Sơn",
    lop: "22DTHE3",
    chuyenNganh: "Công nghệ phần mềm",
    truong: "Đại học Công nghệ TP.HCM"
};

// Tạo server
const server = http.createServer((req, res) => {
    // Set header cho JSON
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    // Xuất JSON ra response
    res.end(JSON.stringify(studentInfo, null, 2));
});

// Lắng nghe port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
    console.log('Thông tin sinh viên:', JSON.stringify(studentInfo, null, 2));
});
