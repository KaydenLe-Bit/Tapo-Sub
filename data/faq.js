
// FORMAT BẮT BUỘC (thêm vào cuối mảng, ngay trên dòng ADD_NEW_FAQ):
// {
//   model:    "Tên model hoặc nhóm thiết bị",   ← hiển thị dưới dạng badge
//   question: "Câu hỏi / mô tả lỗi",
//   answer:   "Hướng dẫn xử lý chi tiết",       ← hỗ trợ xuống dòng \n
//   link:     "URL YouTube hoặc ''",             ← để trống '' nếu không có video
//   docLink:  "URL tài liệu hướng dẫn hoặc ''"   ← để trống '' nếu không có tài liệu
// }
// =============================================================================

const faqsData = [

  // ── ALL Model ──────────────────────────────────────────────────────────────
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Camera Tapo báo Offline, mất kết nối hoặc không xem được trên điện thoại",
    answer: "1. Kiểm tra cường độ sóng Wi-Fi (RSSI):\n- Thao tác: Vào Cài đặt Camera > Thông tin thiết bị > Cường độ tín hiệu (dBm).\n- Đánh giá: -30 đến -50 dBm (Tốt), -51 đến -70 dBm (Trung bình, dễ trễ hình), dưới -70 dBm (Rất yếu, hay rớt mạng).\n\n2. Đổi DNS trên Modem/Router (Viettel, VNPT, FPT):\n- Truy cập trang quản trị Modem (192.168.1.1) > LAN / DHCP Server > Tắt ISP DNS.\n- Điền Primary DNS: 8.8.8.8 và Secondary DNS: 1.1.1.1.\n\n3. Đặt IP Tĩnh & DNS trực tiếp trong App Tapo:\n- Vào Cài đặt Camera > Cài đặt mạng > Bật IP Tĩnh.\n- Điền IP local (VD: 192.168.1.194), Subnet: 255.255.255.0, Gateway: 192.168.1.1, DNS: 8.8.8.8.\n\n4. Tối ưu cấu hình Wi-Fi Router:\n- Đặt Wi-Fi băng tần 2.4GHz, cố định Kênh (Channel) 1, 6 hoặc 11.\n- Chọn độ rộng băng thông (Bandwidth) cố định 20MHz để sóng đâm xuyên tường tốt hơn. Chuẩn bảo mật chọn WPA2-PSK-AES.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Mất kết nối khi đổi Wi-Fi, đổi Router mạng hoặc đổi điện thoại mới",
    answer: "• Phương án 1 (Reset cài lại toàn bộ):\n1. Nhấn giữ nút RESET trên thân camera từ 5-10 giây tới khi đèn báo đổi màu hoặc phát tiếng báo.\n2. Mở App Tapo > Bấm dấu '+' > Chọn đúng model camera Tapo.\n3. Quét tìm thiết bị và nhập tên / mật khẩu Wi-Fi mới.\n\n• Phương án 2 (Mẹo giữ nguyên cấu hình cũ):\n1. Đổi SSID (Tên Wi-Fi) và Mật khẩu của Router mới giống hệt 100% với Router cũ.\n2. Camera sẽ tự động kết nối Online trở lại mà không cần leo tháo lắp hay reset lại.",
    link: 'https://www.youtube.com/shorts/-ni9jLukhaI',
    docLink: ''
  },
  {
    model: "Lỗi Hiển Thị - Kết Nối",
    question: "Hình ảnh bị mờ, chói sáng, ám tím, ám hồng hoặc mất màu trắng đen ban ngày",
    answer: "• Hình ảnh mờ / Chói sáng:\n1. Dùng khăn mềm khô lau sạch mắt kính camera.\n2. Kiểm tra xem camera indoor có bị đọng hơi nước do lắp ngoài trời hay không.\n\n• Hình ảnh ám tím / Ám hồng / Sọc màu:\n1. Vào Cài đặt Camera > Cài đặt nâng cao > Tần số đường dây điện (Powerline Frequency).\n2. Chuyển đổi giữa 50Hz và 60Hz, sau đó chọn Khởi động lại camera để sửa lỗi tần số quét.\n\n• Mất màu / Màn hình trắng đen ban ngày:\n1. Vào Cài đặt Camera > Chọn Xóa Camera để reset cài đặt phần mềm rồi tiến hành thêm lại.\n2. Nếu thêm lại vẫn bị mất màu ban ngày, cảm biến hồng ngoại IR-Cut bị kẹt cơ học -> Gửi Trung tâm Bảo hành.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Camera không lên nguồn, mất tín hiệu hoặc không sáng đèn LED báo",
    answer: "• Camera dùng nguồn cắm trực tiếp (9V/12V hoặc 5V MicroUSB/Type-C):\n- Thử đổi củ sạc và dây nguồn khác có cùng thông số điện áp (nhiều trường hợp hỏng củ sạc chứ camera không chết).\n\n• Camera dùng PIN (Tapo C420, C400...):\n- Tháo khối PIN cắm sạc trực tiếp bằng củ sạc điện thoại chuẩn trong ít nhất 3-4 tiếng. Kiểm tra đèn báo trạng thái sạc trên PIN/thân máy.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Không reset được camera, nút Reset không tác dụng hoặc bị treo đèn đỏ",
    answer: "1. Rút thẻ nhớ MicroSD ra khỏi camera trước khi nhấn Reset (thẻ nhớ hỏng hoặc chập chân pin có thể làm treo vi xử lý khiến nút Reset bị vô hiệu hóa hoặc làm camera treo đèn đỏ).\n2. Cắm nguồn điện ổn định > Nhấn giữ nút RESET 10 giây cho đến khi đèn báo nháy đỏ/xanh.\n3. Tiến hành quét cài đặt lại thiết bị trên App Tapo.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Camera không xoay được, bị kẹt mô-tơ hoặc báo lỗi điều khiển quay quét",
    answer: "1. Hiệu chỉnh mô-tơ (Pan & Tilt Calibration):\n- Vào góc xem trực tiếp > Chọn Quay & Quét > Bấm biểu tượng 3 dấu gạch '≡' > Chọn Chỉnh sửa Quay và Quét (Calibration) để camera tự xoay sửa lỗi lệch bước mô-tơ.\n\n2. Kiểm tra phần cứng & Lắp đặt:\n- Kiểm tra đế camera xem có bị cấn dây cáp nguồn, sát góc tường hoặc vướng vật cản bên ngoài hay không.\n- Lưu ý: Camera bị rơi vỡ gãy bánh răng mô-tơ thuộc diện từ chối bảo hành.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phần Cứng - Âm Thanh",
    question: "Âm thanh đàm thoại bị hú rè, tiếng nhỏ hoặc không nghe thấy âm thanh",
    answer: "1. Giảm độ nhạy Micro:\n- Vào màn hình xem trực tiếp > Bấm biểu tượng Loa / Âm thanh.\n- Kéo giảm mức Micro xuống dưới vạch màu đỏ để tránh hiện tượng kích âm gây hú rè và giúp thu tiếng rõ hơn.\n\n2. Khắc phục vọng âm (Feedback Loop):\n- Khi test thử tính năng đàm thoại 2 chiều, hướng dẫn khách đứng xa camera (không để điện thoại xem gần sát camera) để tránh tiếng hú bíp kéo dài.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phát Hiện AI - Tính Năng",
    question: "Không phát hiện chuyển động / AI con người hoặc không nhận được thông báo",
    answer: "1. Cấu hình tính năng Phát hiện:\n- Vào Cài đặt Camera > Phát hiện > Bật các tính năng cần dùng (Phát hiện chuyển động, Phát hiện con người, Phát hiện tiếng khóc...).\n- Cài đặt lại Vùng hoạt động (Activity Zone) phủ kín khu vực cần theo dõi và tăng Độ nhạy phát hiện (Sensitivity).\n\n2. Khởi động lại dịch vụ chạy ngầm:\n- Vào Cài đặt Camera > Chọn Khởi động lại Camera để làm mới các service AI nhận dạng ngầm.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Phát Hiện AI - Tính Năng",
    question: "Camera tự động xoay lung tung, quay vào tường hoặc tự Reboot khởi động lại",
    answer: "1. Kiểm tra camera tự Reboot:\n- Khi khởi động lại, camera sẽ tự xoay hết hành trình để cân chỉnh mô-tơ. Thử đổi củ sạc khác xem củ sạc cũ có bị sụt áp không.\n- Vào Cài đặt Camera > Khởi động lại Camera > Tắt hoặc đổi giờ ở mục 'Lịch tự động reboot'.\n\n2. Tắt các tính năng tự xoay thông minh:\n- Theo dõi chuyển động: Cài đặt Camera > Phát hiện > Tắt 'Tự động theo dõi'.\n- Tuần tra: Cài đặt Camera > Quay & Quét > Tắt 'Chế độ tuần tra'.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "Camera không xem lại được video, không lưu trữ hoặc báo lỗi thẻ nhớ MicroSD",
    answer: "1. Kiểm tra trạng thái trong App:\n- Vào Cài đặt Camera > Lưu trữ & Ghi âm > Lưu trữ cục bộ.\n\n2. Trường hợp báo 'Không xác định':\n- Bấm trực tiếp vào mục Lưu trữ cục bộ > Chọn Định dạng thẻ nhớ MicroSD (Format MicroSD Card).\n\n3. Trường hợp báo 'Không thể định dạng':\n- Thẻ nhớ bị hỏng chip flash, bị khóa ghi hoặc là thẻ nhái kém chất lượng.\n- Hướng dẫn khách thay thẻ nhớ Class 10 U3 chính hãng chuyên dụng cho camera (SanDisk High Endurance, Kingston Canvas Select, Kioxia...).",
    link: 'https://www.youtube.com/shorts/snXULB2jGsg',
    docLink: 'https://www.tp-link.com/vn/support/faq/2749/'
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "Không chia sẻ được camera cho điện thoại phụ hoặc tài khoản phụ không nhận được lời mời",
    answer: "1. Tạo & Kích hoạt tài khoản phụ:\n- Tải app Tapo trên điện thoại phụ > Đăng ký tài khoản TP-Link ID bằng Email hoặc SĐT.\n- Mở hộp thư Gmail / SMS bấm vào link xác nhận để kích hoạt tài khoản.\n\n2. Thao tác gửi lời mời chia sẻ:\n- Trên máy chính: Vào Cài đặt Camera > Chia sẻ thiết bị > Nhập Email/TP-Link ID tài khoản phụ để gửi lời mời.\n- Trên máy phụ: Vào App Tapo chấp nhận lời mời chia sẻ.",
    link: '',
    docLink: ''
  },
  {
    model: "Lỗi Lưu Trữ - Phần Mềm",
    question: "App Tapo bị đơ, văng app hoặc bị khóa không nhận được mã xác thực OTP đăng nhập",
    answer: "1. Khắc phục sự cố Khóa mã OTP do Spam:\n- Nếu bấm yêu cầu gửi mã OTP liên tục nhiều lần, hệ thống sẽ tạm khóa tính năng gửi OTP trong 24 giờ.\n- Dặn khách chờ đủ 24 giờ để hệ thống tự mở lại, tuyệt đối không bấm gửi lại liên tục trong thời gian chờ.\n\n2. Phương án thay thế đăng nhập:\n- Khi đăng ký/đăng nhập, chọn hình thức liên kết trực tiếp bằng Tài khoản Google (Gmail) để bỏ qua bước nhận mã OTP SMS.",
    link: '',
    docLink: ''
  }
  // ADD_NEW_FAQ ↑ Thêm entry mới tại đây, ngay trên dòng này
];
