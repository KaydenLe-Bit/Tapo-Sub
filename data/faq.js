// =============================================================================
// FAQ DATA — Kayden Installer Portal
// Chỉnh sửa file này để thêm / cập nhật câu hỏi thường gặp.
// KHÔNG chạm vào faq.html.
//
// FORMAT BẮT BUỘC (thêm vào cuối mảng, ngay trên dòng ADD_NEW_FAQ):
// {
//   model:    "Tên model hoặc nhóm thiết bị",   ← hiển thị dưới dạng badge
//   question: "Câu hỏi / mô tả lỗi",
//   answer:   "Hướng dẫn xử lý chi tiết",       ← hỗ trợ xuống dòng \n
//   link:     "URL YouTube hoặc ''"              ← để trống '' nếu không có video
// }
// =============================================================================

const faqsData = [

  // ── ALL Model ──────────────────────────────────────────────────────────────
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Camera báo Offline / Không kết nối được Wi-Fi",
    answer: "1. RSSI: Cài đặt > Thông tin thiết bị (cần > -70 dBm).\n2. DNS Router: Đặt Primary 8.8.8.8, Secondary 1.1.1.1.\n3. IP Tĩnh: Cài đặt mạng > Bật IP Tĩnh (VD: 192.168.1.194, DNS 8.8.8.8).\n4. Wi-Fi: Băng tần 2.4GHz, Channel 1/6/11, Bandwidth 20MHz, WPA2-PSK-AES.",
    link: ''
  },
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Mất kết nối khi đổi Wi-Fi, đổi Router hoặc đổi điện thoại",
    answer: "• Cách 1: Giữ nút RESET 5-10s, vào App Tapo bấm '+' cài lại Wi-Fi mới.\n• Cách 2: Đổi SSID & Mật khẩu Router mới trùng 100% Router cũ để camera tự Reconnect.",
    link: ''
  },
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Hình ảnh mờ, chói, ám tím/hồng hoặc mất màu ban ngày",
    answer: "• Mờ/Chói: Vệ sinh kính camera.\n• Ám tím/hồng: Cài đặt nâng cao > Tần số đường dây điện > Đổi giữa 50Hz/60Hz rồi Khởi động lại.\n• Mất màu/Trắng đen: Xóa camera cài lại. Nếu không hết do kẹt IR-Cut -> Gửi bảo hành.",
    link: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Camera không lên nguồn, mất tín hiệu nguồn",
    answer: "• Nguồn cắm: Đổi thử củ sạc & dây sạc khác đúng thông số (9V/12V/5V).\n• Dòng dùng PIN: Tháo PIN cắm sạc củ chuẩn phone từ 3-4 tiếng.",
    link: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Reset không tác dụng, camera bị treo đèn đỏ",
    answer: "1. Tháo thẻ nhớ MicroSD ra trước (thẻ hỏng/chạm gây treo chip không reset được).\n2. Nhấn giữ nút Reset 10s đến khi đèn nháy đỏ/xanh rồi cài đặt lại.",
    link: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Camera không xoay được hoặc bị kẹt mô-tơ",
    answer: "1. Hiệu chỉnh: Vào Quay & Quét > chọn '≡' > Chỉnh sửa Quay và Quét (Calibration) để cân lại mô-tơ.\n2. Kiểm tra cản cơ học: Xem đế camera có cấn dây cáp hay vướng tường/vật cản không.",
    link: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Âm thanh bị hú, rè, nhỏ hoặc không nghe tiếng",
    answer: "1. Giảm Micro: Ở màn hình Liveview, giảm thanh Micro xuống dưới vạch đỏ.\n2. Vọng âm: Đứng xa camera khi test đàm thoại 2 chiều để tránh hiện tượng Feedback.",
    link: ''
  },
  {
    model: "Lỗi Phát Hiện AI - Tính Năng",
    question: "Không phát hiện chuyển động / AI hoặc không gửi thông báo",
    answer: "1. Cài đặt phát hiện: Cài đặt > Phát hiện > Bật tính năng mong muốn, chỉnh lại Vùng hoạt động & Độ nhạy.\n2. Khởi động lại: Chọn Khởi động lại Camera trong cài đặt để reload service.",
    link: ''
  },
  {
    model: "Lỗi Phát Hiện AI - Tính Năng",
    question: "Camera tự động xoay lung tung hoặc tự Reboot",
    answer: "1. Tự Reboot: Thay củ sạc khác tránh sụt áp. Tắt 'Lịch tự động reboot' trong cài đặt.\n2. Tự xoay: Cài đặt > Phát hiện > Tắt 'Tự động theo dõi'. Vào Quay & Quét > Tắt 'Chế độ tuần tra'.",
    link: ''
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "Không xem lại video hoặc báo lỗi thẻ nhớ MicroSD",
    answer: "1. Vào Cài đặt > Lưu trữ & Ghi âm > Lưu trữ cục bộ.\n2. Thẻ 'Không xác định': Bấm chọn Định dạng thẻ nhớ MicroSD.\n3. Lỗi 'Không thể định dạng': Thẻ hỏng/nhái. Thay thẻ Class 10 U3 chính hãng (SanDisk High Endurance, Kingston...).",
    link: ''
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "Không chia sẻ được camera cho tài khoản phụ",
    answer: "1. Tài khoản phụ: Đăng ký TP-Link ID bằng Email/SĐT và kích hoạt tài khoản.\n2. Tài khoản chính: Cài đặt > Chia sẻ thiết bị > Nhập Email TP-Link ID phụ để gửi lời mời.",
    link: ''
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "App bị đơ, văng hoặc bị khóa nhận mã OTP đăng nhập",
    answer: "• Khóa OTP: Spam lấy mã quá nhiều lần -> Bị khóa 24h. Chờ đủ 24h không bấm gửi liên tục, hoặc đăng nhập trực tiếp bằng Google/Gmail.",
    link: ''
  }

  // ADD_NEW_FAQ ↑ Thêm entry mới tại đây, ngay trên dòng này
];
