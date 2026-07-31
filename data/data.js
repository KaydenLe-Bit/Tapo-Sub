// ─── 2. VIDEO HƯỚNG DẪN ──────────────────────────────────────────────────────
// FORMAT BẮT BUỘC:
// { model: "Tên video", link: "URL youtube/tài liệu", type: "Nhóm loại thiết bị" }
// ─────────────────────────────────────────────────────────────────────────────
const productsData = [
  { model: "Chia Sẻ Truy Cập Camera Tapo", link: "https://www.youtube.com/watch?v=DYi3RwAb_jE", type: "HDCĐ Tapo Camera" },
  { model: "Hướng dẫn lắp đặt Tapo C245D", link: "https://www.youtube.com/shorts/B-d_tdceZWc", type: "Hướng Dẫn Lắp Đặt" },
  { model: "Hướng dẫn lắp đặt Tapo C545D", link: "https://www.youtube.com/shorts/8FX7d1m6Kvw", type: "Hướng Dẫn Lắp Đặt" },
  { model: "Hướng dẫn cài đặt thông báo phát hiện trẻ khóc", link: "https://www.youtube.com/shorts/fhDKRCS_P0c", type: "HDCĐ Tapo Camera" },
  { model: "Hướng dẫn cài đặt tuần tra tự động", link: "https://www.youtube.com/shorts/fi0PI1eqH7w", type: "HDCĐ Tapo Camera" },
  { model: "Hướng dẫn lắp đặt Tapo C500/510W/520WS/530WS", link: "https://www.youtube.com/watch?v=3tHs_lWwmwQ", type: "Hướng Dẫn Lắp Đặt" },
  { model: "Hướng dẫn lắp đặt Tapo C246D", link: "https://www.youtube.com/shorts/n3uJCBfJnSQ", type: "Hướng Dẫn Lắp Đặt" }
  // ADD_NEW_VIDEO ↑ Thêm video mới tại đây, ngay trên dòng này
];


// ─── 3. CATALOG SẢN PHẨM (THÔNG SỐ KỸ THUẬT) ────────────────────────────────
// FORMAT BẮT BUỘC:
// {
//   id: "slug-duy-nhat",           ← dùng để link nội bộ, không dấu, gạch ngang
//   name: "Tên đầy đủ sản phẩm",
//   category: "Nhóm danh mục",     ← VD: 'Camera Wi-Fi Trong Nhà', 'Smartlock'
//   type: "camera" | "lock" | ..., ← dùng cho bộ lọc so sánh
//   image: "URL hình ảnh",
//   shortDesc: "Mô tả ngắn 1-2 câu",
//   video: "URL youtube (tùy chọn, bỏ qua nếu không có)",
//   detailLink: "URL trang thông tin chi tiết (tùy chọn, bỏ qua nếu không có)",
//   specs: {                        ← 8 đầu mục cố định, mỗi mục là chuỗi gạch đầu
//                                      dòng (ngăn cách bằng \n) để hiển thị dễ đọc:
//     "1. Chất lượng hình ảnh": "• dòng 1\n• dòng 2",
//     "2. Xem ban đêm": "...",            ← có/không đèn trợ sáng; tầm nhìn chỉ ghi
//                                            số cụ thể khi có xác nhận từ thông số hãng
//     "3. Xử lý hình ảnh": "...",         ← WDR/3DNR/BLC/HDR — lấy theo đúng camera
//                                            từ "Image Enhancement" trong tài liệu hãng,
//                                            model không có nguồn thì ghi "chưa xác nhận"
//     "4. Kết nối & lưu trữ": "...",      ← ngắn gọn: chuẩn Wi-Fi/băng tần/bảo mật,
//                                            dung lượng thẻ nhớ tối đa, không giải thích dài
//     "5. Tính năng AI thông minh": "...", ← gộp chung chuyển động/người/xe/thú cưng
//                                            + dòng On-device AI (xử lý ngay trên máy)
//     "6. Âm thanh 2 chiều": "...",
//     "7. Bảo mật riêng tư": "...",
//     "8. Hỗ trợ ONVIF/RTSP": "..."       ← ghép NVR/phần mềm ngoài hãng được không
//   }
//   ⚠️ Khi hiển thị trên giao diện, nhớ split(value, "\n") hoặc dùng CSS
//      white-space: pre-line để mỗi "• ..." xuống dòng riêng.
// }
// ─────────────────────────────────────────────────────────────────────────────
const TapoProducts = [
  {
    id: "tapo-c245d",
    name: "TP-Link Tapo C245D",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C245D_UN_1.0_Overview_01_normal_20251126053836q.jpg",
    shortDesc: "Camera ống kính kép 2K trong nhà, chuẩn ONVIF, theo dõi toàn diện góc rộng.",
    detailLink: "https://www.tp-link.com/vn/home-networking/cloud-camera/tapo-c245d/",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K/3MP x 2 (ống kính kép) – 2 mắt quay cùng lúc, 1 hình bao quát + 1 hình phóng cận, xem 1 lần thấy cả 2 góc\n• Góc rộng 122° / 65° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c260",
    name: "TP-Link Tapo C260",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C260_UN_1.0_overview_01_normal_20250314011954p.jpg",
    shortDesc: "Camera trong nhà độ phân giải cực cao 4K/8MP, nhận diện khuôn mặt AI.",
    specs: {
      "1. Chất lượng hình ảnh": "• 4K / 8MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 110° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11a/b/g/n – 2.4GHz & 5GHz – WPA2/WPA3\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c250",
    name: "TP-Link Tapo C250",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C250_US_1.0_overview-01_normal_20250908030313k.jpg",
    shortDesc: "Camera trong nhà 4K/8MP hình ảnh sắc nét vượt trội, nhìn đêm Starlight.",
    specs: {
      "1. Chất lượng hình ảnh": "• 4K / 8MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 105° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c230",
    name: "TP-Link Tapo C230",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C230_EU_1.0_overview_1_normal_20241011012230x.jpg",
    shortDesc: "Camera trong nhà 3K/5MP, cân bằng giữa chi tiết hình ảnh và băng thông.",
    specs: {
      "1. Chất lượng hình ảnh": "• 3K / 5MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 88° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• Bù sáng nền (BLC) – chủ thể đứng trước nguồn sáng vẫn thấy rõ, không bị tối đen",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c225",
    name: "TP-Link Tapo C225",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C225_US_2.0_overview_01_normal_20240117231537i.jpg",
    shortDesc: "Camera 2K QHD, hồng ngoại vô hình 940nm không chói mắt, có cổng LAN + Wi-Fi.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 98° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 9m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• HDR – dải sáng tối rộng hơn, ảnh không bị cháy sáng hoặc mất chi tiết vùng tối",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c220",
    name: "TP-Link Tapo C220",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20250610013736y.jpg",
    shortDesc: "Camera 2K QHD phổ biến cho gia đình, nhìn đêm hồng ngoại tiêu chuẩn.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 108° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• Bù sáng nền (BLC) – chủ thể đứng trước nguồn sáng vẫn thấy rõ, không bị tối đen",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Chỉ hỗ trợ RTSP\n• Khả năng ghép nối NVR/phần mềm ngoài hãng có giới hạn"
    }
  },
  {
    id: "tapo-c120",
    name: "TP-Link Tapo C120",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20231023030053x.jpg",
    shortDesc: "Camera 2K QHD chống nước chuẩn IP66, lắp được ở ban công/nơi bán ngoài trời.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 120° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 9m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Không hỗ trợ ONVIF/RTSP\n• Chỉ xem qua app Tapo, không ghép được đầu ghi NVR ngoài hãng"
    }
  },
  {
    id: "tapo-c211",
    name: "TP-Link Tapo C211",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20230818094130w.jpg",
    shortDesc: "Camera 2K trong nhà phổ thông, đáp ứng nhu cầu quan sát gia đình cơ bản.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K / 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 107° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-tc71",
    name: "TP-Link Tapo TC71",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20230524004739b.jpg",
    shortDesc: "Camera 2K trong nhà phổ thông, chi phí tối ưu cho gia đình.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K / 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 107° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không dùng đèn trợ sáng màu (nhìn đêm đen trắng)\n• Tầm nhìn đêm xác nhận tới khoảng 9m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c206",
    name: "TP-Link Tapo C206",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C206_EU_1.0_overview_01_normal_20250321075014l.jpg",
    shortDesc: "Camera Full HD chống nước IP65, xoay 360°, nhìn đêm có màu, dùng linh hoạt trong nhà lẫn ngoài trời.",
    specs: {
      "1. Chất lượng hình ảnh": "• Full HD / 2MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 85° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Đèn trợ sáng: chưa có thông số xác nhận từ hãng\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c200-tc70",
    name: "TP-Link Tapo C200 / TC70",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20230817224004g.jpg",
    shortDesc: "Camera Full HD giá tốt, đầy đủ tính năng báo động và đàm thoại 2 chiều.",
    specs: {
      "1. Chất lượng hình ảnh": "• Full HD / 2MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 93° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không dùng đèn trợ sáng màu (nhìn đêm đen trắng)\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c200c",
    name: "TP-Link Tapo C200C",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20230817224004g.jpg",
    shortDesc: "Phiên bản rút gọn dòng C200, phù hợp nhu cầu giám sát cơ bản.",
    specs: {
      "1. Chất lượng hình ảnh": "• Góc rộng 93° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động cơ bản — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c232",
    name: "TP-Link Tapo C232",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C232_EU_1.0_overview_01-1_normal_20250508014735y.jpg",
    shortDesc: "Camera 5MP kết nối linh hoạt LAN/Wi-Fi.",
    specs: {
      "1. Chất lượng hình ảnh": "• 5MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 90° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• Bù sáng nền (BLC) – chủ thể đứng trước nguồn sáng vẫn thấy rõ, không bị tối đen",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c222",
    name: "TP-Link Tapo C222",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C222_EU_1.0_overview_1_normal_20240722025906e.png",
    shortDesc: "Camera 4MP kết nối linh hoạt LAN/Wi-Fi.",
    specs: {
      "1. Chất lượng hình ảnh": "• 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 90° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• Bù sáng nền (BLC) – chủ thể đứng trước nguồn sáng vẫn thấy rõ, không bị tối đen",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c212",
    name: "TP-Link Tapo C212",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01-1_normal_20230826003415i.jpg",
    shortDesc: "Camera 3MP kết nối linh hoạt LAN/Wi-Fi, phát hiện người và tiếng khóc trẻ em.",
    specs: {
      "1. Chất lượng hình ảnh": "• 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 108° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 9m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c202",
    name: "TP-Link Tapo C202",
    category: "Camera Wi-Fi Trong Nhà",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01-1_normal_20240513182842d.jpg",
    shortDesc: "Camera 2MP kết nối linh hoạt LAN/Wi-Fi, giá thành tối ưu.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 107° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Chỉ hỗ trợ RTSP\n• Khả năng ghép nối NVR/phần mềm ngoài hãng có giới hạn"
    }
  },

  // ══════════════════ 2. CAMERA NGOÀI TRỜI (OUTDOOR) ══════════════════

  {
    id: "tapo-c501gw",
    name: "TP-Link Tapo C501GW",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C501GW_EU_1.0_overview_01_normal_20240830082336v.jpg",
    shortDesc: "Camera ngoài trời dùng SIM 4G LTE, lý tưởng cho nơi không có sẵn Wi-Fi (trang trại, công trình).",
    specs: {
      "1. Chất lượng hình ảnh": "• Full HD / 2MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 122° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 30m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• SIM 4G LTE\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Chỉ hỗ trợ RTSP\n• Khả năng ghép nối NVR/phần mềm ngoài hãng có giới hạn"
    }
  },
  {
    id: "tapo-c545d",
    name: "TP-Link Tapo C545D",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C545D_EU_1.0_Overview_01_normal_20250811022611w.jpg",
    shortDesc: "Camera ngoài trời mắt kép 2K, góc nhìn siêu rộng 165°, nhận diện khuôn mặt.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K/3MP x 2 (ống kính kép) – 2 mắt quay cùng lúc, 1 hình bao quát + 1 hình phóng cận, xem 1 lần thấy cả 2 góc\n• Góc rộng 165° / 66° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Đèn trợ sáng: chưa có thông số xác nhận từ hãng\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c560ws",
    name: "TP-Link Tapo C560WS",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C560WS_EU_1.0_overview_01_normal_20250429063213z.jpg",
    shortDesc: "Camera ngoài trời 4K/8MP sắc nét, tầm nhìn đêm Starlight, chống nước IP66.",
    specs: {
      "1. Chất lượng hình ảnh": "• 4K / 8MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 105° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c530ws",
    name: "TP-Link Tapo C530WS",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C530WS_EU_2.0_overview_01_normal_20241031071947c.jpg",
    shortDesc: "Camera ngoài trời 3K/5MP xoay quét 360°, bám theo chuyển động thông minh.",
    specs: {
      "1. Chất lượng hình ảnh": "• 3K / 5MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 106° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm xác nhận tới khoảng 30m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c520ws",
    name: "TP-Link Tapo C520WS",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C520WS_EU_1.0_overview_01_normal_20230518095424i.jpg",
    shortDesc: "Camera ngoài trời 2K QHD xoay quét 360°, nhìn đêm Starlight, chống nước IP66.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 112° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c510w",
    name: "TP-Link Tapo C510W",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/01_normal_20230420071916t.jpg",
    shortDesc: "Camera ngoài trời 2K, xoay quét 360°, nhìn đêm có màu (Color Night Vision).",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K / 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 85° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-tc40",
    name: "TP-Link Tapo TC40",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_TC40_EU_2.0_overview_2406_English_01-1_normal_20240730070132i.jpg",
    shortDesc: "Camera ngoài trời Full HD, xoay quét 360°, nhìn đêm có màu, giá tiết kiệm.",
    specs: {
      "1. Chất lượng hình ảnh": "• Full HD / 2MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 85° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Đèn trợ sáng: chưa có thông số xác nhận từ hãng\n• Tầm nhìn đêm xác nhận tới khoảng 30m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c325wb",
    name: "TP-Link Tapo C325WB",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C325WB_EU_2.0_overview_01-1_normal_20241221061245u.jpg",
    shortDesc: "Camera thân cố định ngoài trời, công nghệ ColorPro Night Vision - hình ảnh màu ban đêm chân thực không cần đèn chiếu.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 125° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm cụ thể: chưa có thông số xác nhận, liên hệ để được tư vấn chính xác",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng\n• HDR – dải sáng tối rộng hơn, ảnh không bị cháy sáng hoặc mất chi tiết vùng tối",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c320ws",
    name: "TP-Link Tapo C320WS",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C320WS_Tapo_C320WSP2_EU_2_normal_20231019030651h.png",
    shortDesc: "Camera thân ngoài trời siêu bền bỉ, kết nối LAN/Wi-Fi ổn định.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K QHD / 4MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 113° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Cảm biến nhạy sáng – chạng vạng, phòng thiếu đèn vẫn lên hình rõ màu",
      "2. Xem ban đêm": "• Starlight – ban đêm ảnh vẫn rõ nét, ít bị nhiễu hạt (vẫn là ảnh đen trắng)\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm xác nhận tới khoảng 30m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c310",
    name: "TP-Link Tapo C310",
    category: "Camera Wi-Fi Ngoài Trời",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C310%EF%80%A2Tapo_C310P2_EU_2.20_overview_01_normal_20230712010643k.jpg",
    shortDesc: "Camera thân ngoài trời 2K, phát hiện chuyển động và người, chống nước IP66.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K / 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 104° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Hồng ngoại thường – ban đêm chuyển qua ảnh đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 30m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2 hoặc dây LAN\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },

  // ══════════════ 3. CAMERA ĐA NĂNG TRONG NHÀ & NGOÀI TRỜI ══════════════
  // (C246D, C216 - dùng thông số từ bảng Indoor-Outdoor. C206 và C120 xuất hiện
  //  ở cả 3 bảng nên đã đưa về nhóm "Trong Nhà" phía trên với bộ số liệu đầy đủ nhất
  //  để tránh trùng lặp id trong catalog)

  {
    id: "tapo-c246d",
    name: "TP-Link Tapo C246D",
    category: "Camera Đa Năng (Trong Nhà & Ngoài Trời)",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C246D_UN_1.0_product_images_01_normal_20250519022919q.png",
    shortDesc: "Camera ống kính kép 2K, góc xoay 360°/180°, góc nhìn siêu rộng 125°, chống nước IP65 - dùng được cả trong nhà và ngoài trời.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K/3MP x 2 (ống kính kép) – 2 mắt quay cùng lúc, 1 hình bao quát + 1 hình phóng cận, xem 1 lần thấy cả 2 góc\n• Góc rộng 125° / 67° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Có đèn LED trợ sáng tích hợp, tự bật khi phát hiện chuyển động\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• WDR – cân bằng sáng ngược, lắp hướng cửa sổ/nắng chiếu vẫn không bị chói\n• Giảm nhiễu 3D (3DNR) – hình ảnh mượt, ít hạt nhiễu khi thiếu sáng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, xe, thú cưng, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  },
  {
    id: "tapo-c216",
    name: "TP-Link Tapo C216",
    category: "Camera Đa Năng (Trong Nhà & Ngoài Trời)",
    type: "camera",
    image: "https://static.tp-link.com/upload/image-line/Tapo_C216_EU_1.0_overview_01_normal_20250401094022s.jpg",
    shortDesc: "Camera xoay 360°, chống nước IP65, hỗ trợ Color Night Vision cho hình ảnh ban đêm có màu.",
    specs: {
      "1. Chất lượng hình ảnh": "• 2K / 3MP – độ phân giải hình ảnh, số càng cao càng nét khi phóng to\n• Góc rộng 98° – 1 camera bao quát được không gian rộng, đỡ phải lắp nhiều camera\n• Thiếu sáng nhẹ (chạng vạng) vẫn nhìn được, ảnh sẽ hơi tối hơn dòng cao cấp",
      "2. Xem ban đêm": "• Color Night Vision – ban đêm vẫn ra hình có màu, không phải đen trắng\n• Không có đèn trợ sáng, nhìn đêm bằng hồng ngoại/cảm biến\n• Tầm nhìn đêm xác nhận tới khoảng 12m (theo thông số hãng)",
      "3. Xử lý hình ảnh": "• Xử lý ảnh: chưa có thông số xác nhận từ hãng",
      "4. Kết nối & lưu trữ": "• Wi-Fi 802.11b/g/n – 2.4GHz – WPA2\n• Thẻ nhớ MicroSD tối đa 512GB – miễn phí\n• Cloud Tapo Care (tùy chọn) – có phí/tháng",
      "5. Tính năng AI thông minh": "• Nhận diện: chuyển động, người, tiếng khóc trẻ — bớt báo động giả\n• Khoanh vùng phát hiện tùy chỉnh (chỉ báo động khu vực mình chọn)\n• On-device AI (AI xử lý ngay trên camera) – nhận diện nhanh, không cần gửi dữ liệu lên máy chủ để phân tích",
      "6. Âm thanh 2 chiều": "• Loa + micro tích hợp\n• Nghe & nói chuyện trực tiếp qua app",
      "7. Bảo mật riêng tư": "• Thương hiệu TP-Link (Tapo) uy tín\n• Dữ liệu mã hóa AES 128-bit, an toàn khi truyền tải\n• Có nút tắt hình/tắt tiếng thủ công trên app",
      "8. Hỗ trợ ONVIF/RTSP": "• Có hỗ trợ ONVIF & RTSP\n• Kết nối được với đầu ghi NVR/phần mềm giám sát ngoài hãng"
    }
  }
  // ADD_NEW_PRODUCT ↑ Thêm sản phẩm mới tại đây, ngay trên dòng này
];


// ─── 4. TỐC ĐỘ LƯU TRỮ (CÔNG CỤ TÍNH THẺ NHỚ/Ổ CỨNG) ──────────────────────
// FORMAT: "Tên độ phân giải": số_GB_mỗi_ngày (chuẩn H.265, ghi liên tục)
// ─────────────────────────────────────────────────────────────────────────────
const resolutionRates = {
  "1080p": 8,           // 2MP
  "2K":    12,          // 3MP
  "2K+":   16,          // 4MP
  "3K":    21.333333,   // 5MP
  "4K":    34           // ước tính từ bitrate 4Mbps (thay vì 32)
};


// ─── 5. THÔNG SỐ BITRATE 4G THEO ĐỘ PHÂN GIẢI ───────────────────────────────
// FORMAT: "Nhãn hiển thị": { bitrate: Mbps }
// ─────────────────────────────────────────────────────────────────────────────
const CAMERA_SPECS_4G = {
  "2MP (Full HD)": { bitrate: 1.0 },
  "3MP (2K)":      { bitrate: 1.5 },
  "4MP (2K+)":     { bitrate: 2.0 },
  "5MP (3K)":      { bitrate: 2.7 },
  "6MP (3K+)":     { bitrate: 3.2 },
  "8MP (4K)":      { bitrate: 4.0 }
   // ADD_NEW_RESOLUTION ↑ Thêm độ phân giải mới tại đây
};


// ─── 6. TÙY CHỌN DUNG LƯỢNG — CÔNG CỤ TÍNH TOÁN ────────────────────────────
// sdCapOptions : danh sách dung lượng thẻ nhớ MicroSD (GB)
// hddPresetOptions: danh sách preset ổ cứng đầu ghi (GB)
// ─────────────────────────────────────────────────────────────────────────────
const sdCapOptions    = [16, 32, 64, 128, 256, 512];
const hddPresetOptions = [500, 1024, 2048, 4096, 6144, 8192];


// ─── 7. TRA CỨU BẢO HÀNH (SN) ────────────────────────────────────────────────
// Đường dẫn tới trang tra cứu bảo hành chính thức theo Serial Number.
// Nút "Kiểm tra SN bảo hành ngay" ở tab Tra cứu Bảo hành sẽ mở link này.
// ⚠️ THAY bằng URL tra cứu bảo hành thật của bạn.
// ─────────────────────────────────────────────────────────────────────────────
const WARRANTY_CHECK_URL = "https://www.tp-link.com/vn/warranty/";


// ─── 8. TRUNG TÂM TIẾP NHẬN ỦY QUYỀN ────────────────────────────────────────
// FORMAT BẮT BUỘC:
// {
//   group: "tgdd" | "other",   ← "tgdd" = Thế Giới Di Động, "other" = NPP/Đại lý/Khách hàng
//   region: "bac" | "trung" | "nam",
//   name: "Tên trung tâm",
//   address: "Địa chỉ đầy đủ",
//   phone: "Số điện thoại liên hệ (tùy chọn, để trống '' nếu không có)"
// }
// ⚠️ Các dòng bên dưới là VÍ DỤ — hãy THAY bằng danh sách trung tâm thật.
// ─────────────────────────────────────────────────────────────────────────────
const AUTHORIZED_CENTERS = [
  // ── Thế Giới Di Động ──
  { group: 'tgdd', region: 'bac',   name: 'TGDĐ - DMX',   address: 'Tất cả các chi nhánh trong khu vực',        phone: '1800.1060' },
  { group: 'tgdd', region: 'trung', name: 'TGDĐ - DMX',  address: 'Tất cả các chi nhánh trong khu vực',  phone: '1800.1060' },
  { group: 'tgdd', region: 'nam',   name: 'TGDĐ - DMX',     address: 'Tất cả các chi nhánh trong khu vực',   phone: '1800.1060' },

  // ── NPP / Đại lý / Khách hàng ──
  { group: 'other', region: 'bac',   name: 'PHTD Chi Nhánh Hà Nội',    address: 'Tầng B1, Số 167 Phố Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội',          phone: '0866.442.609' },
  { group: 'other', region: 'trung', name: 'PHTD Chi Nhánh Đà Nẵng',  address: 'Tầng 8, Tòa Nhà Đại Thắng, 278-280 Xô Viết Nghệ Tĩnh, P Cẩm Lê, Đà Nẵng',                  phone: '0905.444.522' },
  { group: 'other', region: 'nam',   name: 'PHTD Chi Nhánh HCM',    address: '465/6 Phan Văn Trị, Phường An Nhơn, TP.HCM',   phone: '0988.727.271' }
  // ADD_NEW_CENTER ↑ Thêm trung tâm mới tại đây, ngay trên dòng này
];
