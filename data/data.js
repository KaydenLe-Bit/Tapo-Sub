// =============================================================================
// DATA FILE — Kayden Installer Portal
// Chỉnh sửa file này để thêm / cập nhật dữ liệu. KHÔNG chạm vào index.html.
// =============================================================================


// ─── 1. FAQ / HỖ TRỢ & LỖI ──────────────────────────────────────────────────
// FORMAT BẮT BUỘC (thêm vào cuối mảng):
// { model: "Tên model/nhóm", question: "Câu hỏi", answer: "Hướng dẫn xử lý", link: "URL youtube hoặc ''" }
// ─────────────────────────────────────────────────────────────────────────────
const faqsData = [
  { model: "ALL Model", question: "Thẻ nhớ báo cần phải định dạng lại sau thời gian sử dụng--> lỗi thẻ nhớ", answer: "Thay thẻ nhớ khác", link: "" },
  { model: "NVR/Đầu ghi", question: "Một số đầu ghi khi add tự động sẽ chỉ xuất 1 mắt cam", answer: "Sau khi nhập thành công 1 mắt camera, chúng ta ghi lại địa chỉ IP của cam, tiếp tục chọn vào phần gán thủ công, nhập địa chỉ IP, cửa sổ xuất hiện mục chọn thêm kênh. Chúng ta tick vào cả 2 mắt cam là được", link: "" },
  { model: "Smartlock", question: "Cách reset khóa Tapo về cài đặt gốc DL05,DL50FVS,DL06", answer: "(cài đặt lại tài khoản quản trị viên, cài đặt lại bluetooth, test xử lý sự cố)\nThao tác như video", link: "https://www.youtube.com/watch?v=QtnEESdmsHY&t=4s" },
  { model: "Smartlock", question: "Cách reset khóa Tapo về cài đặt gốc DL03, dl04", answer: "(cài đặt lại tài khoản quản trị viên, test xử lý sự cố)\nThao tác như video", link: "https://www.youtube.com/watch?v=ufvwasXEaaM&t=7s" },
  { model: "ALL Model", question: "Mất mã QR", answer: "Cách 1: gửi lên TTBH để được cấp lại mã\nCách 2: Gửi yêu cầu qua Zalo OA - Tapo Việt Nam (Chỉ khi camera còn nằm trong tài khoản Tapo)", link: "" },
  { model: "Camera WiFi", question: "Làm sao để thêm thiết bị vào app Tapo?", answer: "Mở app Tapo, chọn dấu +, quét mã QR trên thiết bị, sau đó nhập thông tin WiFi 2.4GHz để hoàn tất cài đặt.", link: "" },
  { model: "ALL Model", question: "Xóa liên kết tài khoản Tapo trên camera", answer: "Nhắn tin qua Zalo với cú pháp: Số SN + hình ảnh thiết bị", link: "" },
  { model: "DL06", question: "Lỗi mở cửa từ bên ngoài mà không cần nhập mật khẩu?", answer: "Vị trí chốt cây ty không phù hợp", link: "https://youtube.com/shorts/llAwb2VXyBI?si=JobZH6Oztv5jRi_q" },
  { model: "DL06", question: "Chốt trẻ em không hoạt động sau khi thay đổi tay nắm cửa", answer: "Thao tác điều chỉnh chốt cố định như video", link: "https://www.youtube.com/shorts/DgyArT-TgWk" },
  { model: "DL50FVS", question: "Chốt motor khóa lỗi, tự đóng ra đóng vào", answer: "Lỗi lắp đặt, xem video xử lý", link: "https://www.youtube.com/watch?v=NGg7BN4IiKg&pp=0gcJCT4LAYcqIYzv" },
  { model: "Smartlock", question: "Khóa lắp xong, không tự khóa, mở được từ bên ngoài", answer: "Lỗi lắp đặt, xem video xử lý", link: "https://www.youtube.com/watch?v=jyMsmaJ7IWo" },
  { model: "DL06&DL06 Pro", question: "Cách đổi chiều chốt lõi khóa", answer: "Xem video hướng dẫn", link: "https://www.youtube.com/watch?v=bEMzq2JrmJ4" },
  { model: "ALL Model", question: "Cách kiểm tra quyền truy cập vào thiết bị", answer: "Xem video hướng dẫn", link: "https://www.youtube.com/shorts/mXtVc96Cd9A" },
  { model: "Camera", question: "Cách vẽ vùng phát hiện", answer: "Xem video hướng dẫn", link: "https://www.youtube.com/shorts/_l2CrJ7uKpE" },
  { model: "Camera", question: "Cách kết nối wifi mới", answer: "Xem video hướng dẫn", link: "https://www.youtube.com/shorts/S2sgqlGBaQs" },
  { model: "Smartlock", question: "Cách reset về cài đặt gốc khóa thông minh", answer: "Xem video hướng dẫn", link: "https://www.youtube.com/shorts/E4n1jJgN-Js" },
  { model: "Lỗi mạng/WiFi", question: "Mất kết nối / Ngoại tuyến / Không kết nối được với điện thoại, WiFi", answer: "Lỗi phổ biến nhất. Bao gồm: mất kết nối, ngoại tuyến, ko kết nối vào app được, báo offline, thiết bị ngoại tuyến, không hoạt động, ko load xem được.\n\nCách xử lý (tuần tự theo các bước, nếu bước 1 không được thì đến bước 2, không được nữa thì đến bước 3...):\n1. Kiểm tra và cập nhật phiên bản mới nhất, nếu đã là phiên bản mới nhất thì reset camera.\nLý do: sau 1 thời gian dài không cập nhật, một số tính năng có thể gặp trục trặc vì không còn đồng bộ với hệ thống dữ liệu chung của Tapo nên cần cập nhật phiên bản mới. Reset cũng giúp camera khôi phục lại trạng thái ban đầu nếu trong quá trình sử dụng xảy ra những lỗi nhỏ khiến dữ liệu mất đồng bộ.\n2. Kiểm tra môi trường wifi.\nCheck tín hiệu mạng tại vùng lắp đặt → nếu không được thì tháo camera xuống để gắn gần nguồn mạng theo dõi → nếu vẫn không được thì thử nguồn mạng khác (hotspot điện thoại,...).\nLý do: sau 1 thời gian, có thể do số lượng thiết bị sử dụng wifi tăng lên (khách lắp thêm nhiều camera khác, thêm TV, điện thoại) làm giảm tín hiệu wifi. Nếu kéo camera gần nguồn mạng hoặc dùng hotspot điện thoại mà bắt được thì khả năng sóng wifi của khách đang yếu hơn bình thường, có thể tư vấn khách nâng cấp nguồn mạng hoặc lắp camera ở vị trí gần mạng wifi hơn.\n3. Áp dụng bảo hành.", link: "" },
  { model: "Lỗi mạng/WiFi", question: "Lỗi kết nối sau khi thay đổi mạng / Đổi WiFi / Đổi điện thoại", answer: "Khách hàng đổi mật khẩu WiFi, đổi nhà mạng hoặc đổi điện thoại mới dẫn đến mất kết nối. Bao gồm: đổi wifi, đổi mật khẩu, đổi điện thoại.\n\nCách xử lý (tuần tự theo các bước, nếu bước 1 không được thì đến bước 2, không được nữa thì đến bước 3...):\nCó thể tham khảo video hướng dẫn cách đổi wifi cho camera.\n1. Reset camera\nNhấn giữ nút reset trên camera đến khi thiết bị báo đã reset → dùng app Tapo quét lại mã QR code của camera → tiến hành cài đặt lại bước chọn WiFi → camera sẽ yêu cầu nhập mã xác thực thiết bị, đây là dãy 6 chữ cái in hoa dưới đáy camera còn gọi là Verification Code → tiếp tục đến khi hoàn thành.\n2. Trường hợp khách đổi tài khoản\nNếu khách đổi qua tài khoản khác trên app Tapo: rút điện camera (để camera offline) trong 3-5 phút, dùng tài khoản mới quét lại mã QR Code dưới đáy camera để xóa liên kết cũ và cài đặt lại như một camera mới.", link: "https://www.youtube.com/shorts/S2sgqlGBaQs" },
  { model: "Lỗi hình ảnh/lưu trữ", question: "Không xem lại được video / Không lưu trữ / Lỗi thẻ nhớ", answer: "Lỗi liên quan đến lưu trữ và xem lại dữ liệu. Bao gồm: không xem lại được, không lưu, không lưu trữ, không nhận thẻ nhớ, lỗi thẻ nhớ, không định dạng được thẻ.\n\nCách xử lý (tuần tự theo các bước, nếu bước 1 không được thì đến bước 2, không được nữa thì đến bước 3...):\n1. Kiểm tra và cập nhật phiên bản mới nhất, nếu đã là phiên bản mới nhất thì reset camera.\nLý do: sau 1 thời gian dài không cập nhật, một số tính năng có thể gặp trục trặc vì không còn đồng bộ với hệ thống dữ liệu chung của Tapo nên cần cập nhật phiên bản mới. Reset cũng giúp camera khôi phục lại trạng thái ban đầu nếu trong quá trình sử dụng xảy ra những lỗi nhỏ khiến dữ liệu mất đồng bộ.\n2. Định dạng lại thẻ nhớ\nVào mục Cài đặt → chọn Danh sách bảo ghi → định dạng lại thẻ nhớ → nếu không được thì thử 1 thẻ nhớ khác thay thế → nếu thẻ khác dùng được thì do thẻ cũ đã hư.\n3. Áp dụng bảo hành.", link: "" },
  { model: "Lỗi tính năng camera", question: "Camera bị khóa / Mã hóa / Yêu cầu nhập mật khẩu", answer: "Lỗi liên quan đến bảo mật, mật khẩu. Bao gồm: bị khóa, mã hóa, bắt đăng nhập, quên mật khẩu.\n\nCách xử lý (tuần tự theo các bước, nếu bước 1 không được thì đến bước 2, không được nữa thì đến bước 3...):\nMã xác thực là mã được tạo ngay sau khi cài đặt camera vào app, hệ thống sẽ cho phép người dùng tạo mã xác thực mới. Nếu khách đã tạo mã xác thực mới mà không nhớ thì chỉ cần reset lại camera là thiết bị sẽ quay lại mặc định 6 chữ cái Verification Code.\n1. Tìm và nhập mã xác thực\nMã xác thực còn gọi là Verification Code, gồm 6 chữ cái in hoa nằm ở đáy thiết bị.\nCó thể vào mục Cài đặt, chọn Thông tin thiết bị, kéo xuống bên dưới sẽ thấy Mã xác nhận (bấm vào biểu tượng con mắt để hiển thị).\n2. Tắt yêu cầu mã xác thực mới theo yêu cầu của người dùng\nChọn Cài đặt → Cài đặt riêng tư → Tắt \"Mã hóa Video\" hoặc chọn Đổi mật khẩu.\nKhi đã tắt Mã hóa Video thì camera chia sẻ cho các tài khoản người dùng mà không còn yêu cầu mã hóa nữa, cho phép xem hình trực tiếp từ camera.", link: "" },
  { model: "Lỗi App điều khiển", question: "Lỗi chia sẻ thiết bị / Thêm thiết bị phụ", answer: "Không thể chia sẻ camera cho người dùng khác, kết nối tivi.\n\nCách xử lý (tuần tự theo các bước, nếu bước 1 không được thì đến bước 2, không được nữa thì đến bước 3...):\n1. Kiểm tra và cập nhật phiên bản mới nhất, nếu đã là phiên bản mới nhất thì reset lại camera.\nLý do: sau 1 thời gian dài không cập nhật, một số tính năng có thể gặp trục trặc vì không còn đồng bộ với hệ thống dữ liệu chung của Tapo nên cần cập nhật phiên bản mới. Reset cũng giúp camera khôi phục lại trạng thái ban đầu nếu trong quá trình sử dụng xảy ra những lỗi nhỏ khiến dữ liệu mất đồng bộ.\n2. Chia sẻ thiết bị\nLưu ý, khi khách chia sẻ thiết bị, tài khoản được chia sẻ sẽ hiển thị thông báo nhận được chia sẻ và cần được đồng ý.\n3. Đổi tài khoản khác\nCài đặt camera vào 1 tài khoản khác và thử chia sẻ. Nếu do tài khoản cũ bị lỗi thì xóa thiết bị này ra, và vào lại tài khoản mới bằng chính số điện thoại hoặc email đã đăng ký tài khoản vừa xóa.\n4. Bảo hành.", link: "" },
  { model: "Lỗi thiết bị", question: "Lỗi cài đặt lại / Reset / Kết nối lại không được", answer: "Khách hàng đã thử reset nhưng không thành công. Bao gồm: reset, cài đặt lại.\n\nCách xử lý: Bảo hành.", link: "" }
  // ADD_NEW_FAQ ↑ Thêm entry mới tại đây, ngay trên dòng này
];


// ─── 2. VIDEO HƯỚNG DẪN ──────────────────────────────────────────────────────
// FORMAT BẮT BUỘC:
// { model: "Tên video", link: "URL youtube/tài liệu", type: "Nhóm loại thiết bị" }
// ─────────────────────────────────────────────────────────────────────────────
const productsData = [
  { model: "GT&HD Cấu hình EB8 4G", link: "https://www.youtube.com/watch?v=LTXNoKeYYdw", type: "Camera" },
  { model: "GT&HD Cấu hình chuông cửa video CP3", link: "https://www.youtube.com/watch?v=6led1bWuiA0&t=2s", type: "Chuông hình" },
  { model: "GT&HD Cấu hình H90F/C90F mắt kép zoom 12x", link: "https://www.youtube.com/watch?v=K2vqnrU3Ddg&t=20s", type: "Camera" },
  { model: "GT&HD Cấu hình H90/C90 mắt kép", link: "https://www.youtube.com/watch?v=JdvF17yQZ3I&t=91s", type: "Camera" },
  { model: "GT&HD Cấu hình Đầu ghi Tapo X5S", link: "https://www.youtube.com/watch?v=mqU_Dv6w-2U", type: "Đầu ghi" },
  { model: "GT&HD Cấu hình HP2- mắt thần", link: "https://www.youtube.com/watch?v=3NS5PDijssQ&t=21s", type: "Smart Home" }
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
//   specs: {                        ← key: value, thêm/bớt field tùy ý
//     "Tên thông số": "Giá trị",
//     ...
//   }
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
    specs: {
      "Nổi bật": "Ống Kính Kép",
      "Độ phân giải": "2K/3MP x 2 (ống kính kép)",
      "Góc xoay (Ngang/Dọc)": "360° / 100°",
      "Góc quan sát": "122° / 65°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Nhận Diện Khuôn Mặt AI (4K)",
      "Độ phân giải": "4K / 8MP",
      "Góc xoay (Ngang/Dọc)": "360° / 116°",
      "Góc quan sát": "110°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Độ Phân Giải 4K Siêu Nét",
      "Độ phân giải": "4K / 8MP",
      "Góc xoay (Ngang/Dọc)": "360° / 116°",
      "Góc quan sát": "105°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "3K / 5MP",
      "Góc xoay (Ngang/Dọc)": "360° / 110°",
      "Góc quan sát": "88°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Hồng Ngoại Vô Hình 940nm",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc xoay (Ngang/Dọc)": "360° / 149°",
      "Góc quan sát": "98°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "Có (940nm)",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc xoay (Ngang/Dọc)": "360° / 110°",
      "Góc quan sát": "108°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 9m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Chống Nước Chuẩn IP66",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc quan sát": "120°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "Có",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K / 3MP",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "107°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 9m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K / 3MP",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "107°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 9m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Chống Nước IP65, Dùng Đa Năng",
      "Độ phân giải": "Full HD / 2MP",
      "Góc xoay (Ngang/Dọc)": "360° / 146°",
      "Góc quan sát": "85°",
      "Phát hiện AI": "Chuyển động, Người & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Color Night Vision",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP65",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "Full HD / 2MP",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "93°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "93°",
      "Công nghệ nhìn đêm": "Advanced Night Vision",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "5MP",
      "Góc xoay (Ngang/Dọc)": "360° / 110°",
      "Góc quan sát": "90°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "4MP",
      "Góc xoay (Ngang/Dọc)": "360° / 110°",
      "Góc quan sát": "90°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "3MP",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "108°",
      "Phát hiện AI": "Chuyển động, Người & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2MP",
      "Góc xoay (Ngang/Dọc)": "360° / 114°",
      "Góc quan sát": "107°",
      "Phát hiện AI": "Chuyển động, Người & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Hồng ngoại 850nm lên đến 12m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Kết Nối 4G LTE, Không Cần Wi-Fi",
      "Độ phân giải": "Full HD / 2MP",
      "Góc xoay (Ngang/Dọc)": "360° / 149°",
      "Góc quan sát": "122°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "4G LTE (SIM) / LAN",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Ống Kính Kép & Nhận Diện Khuôn Mặt",
      "Độ phân giải": "2K/3MP x 2 (ống kính kép)",
      "Góc xoay (Ngang/Dọc)": "360° / 121°",
      "Góc quan sát": "165° / 66°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "Full-color",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Nhận Diện Khuôn Mặt AI (4K)",
      "Độ phân giải": "4K / 8MP",
      "Góc xoay (Ngang/Dọc)": "360° / 98°",
      "Góc quan sát": "105°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "3K / 5MP",
      "Góc xoay (Ngang/Dọc)": "360° / 130°",
      "Góc quan sát": "106°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc xoay (Ngang/Dọc)": "360° / 130°",
      "Góc quan sát": "112°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K / 3MP",
      "Góc xoay (Ngang/Dọc)": "360° / 130°",
      "Góc quan sát": "85°",
      "Phát hiện AI": "Chuyển động & Người",
      "Công nghệ nhìn đêm": "Color Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP65",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "Full HD / 2MP",
      "Góc xoay (Ngang/Dọc)": "360° / 131°",
      "Góc quan sát": "85°",
      "Phát hiện AI": "Chuyển động & Người",
      "Công nghệ nhìn đêm": "Color Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP65",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "ColorPro Night Vision (Không Cần Đèn)",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc quan sát": "125°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng",
      "Công nghệ nhìn đêm": "ColorPro Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K QHD / 4MP",
      "Góc quan sát": "113°",
      "Phát hiện AI": "Chuyển động, Người, Xe",
      "Công nghệ nhìn đêm": "Starlight Night Vision",
      "Hồng ngoại vô hình": "30m",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K / 3MP",
      "Góc quan sát": "104°",
      "Phát hiện AI": "Chuyển động & Người",
      "Kết nối mạng": "LAN / Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP66",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "Ống Kính Kép, Góc Xoay Dọc 180°",
      "Độ phân giải": "2K/3MP x 2 (ống kính kép)",
      "Góc xoay (Ngang/Dọc)": "360° / 180°",
      "Góc quan sát": "125° / 67°",
      "Phát hiện AI": "Chuyển động, Người, Xe, Thú cưng & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Color Night Vision",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP65",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
      "Nổi bật": "On-Device AI Thông Minh",
      "Độ phân giải": "2K / 3MP",
      "Góc xoay (Ngang/Dọc)": "360° / 152°",
      "Góc quan sát": "98°",
      "Phát hiện AI": "Chuyển động, Người & Tiếng trẻ em khóc",
      "Công nghệ nhìn đêm": "Color Night Vision",
      "Kết nối mạng": "Wi-Fi 2.4GHz (WPA2)",
      "Chống nước / bụi": "IP65",
      "Hỗ trợ NVR (ONVIF/RTSP)": "Có"
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
  { group: 'tgdd', region: 'bac',   name: 'TGDĐ - Cầu Giấy, Hà Nội',   address: 'Số 1 Xuân Thủy, Cầu Giấy, Hà Nội',        phone: '1800.1060' },
  { group: 'tgdd', region: 'trung', name: 'TGDĐ - Hải Châu, Đà Nẵng',  address: '120 Nguyễn Văn Linh, Hải Châu, Đà Nẵng',  phone: '1800.1060' },
  { group: 'tgdd', region: 'nam',   name: 'TGDĐ - Quận 1, TP.HCM',     address: '89 Nguyễn Huệ, Quận 1, TP.Hồ Chí Minh',   phone: '1800.1060' },

  // ── NPP / Đại lý / Khách hàng ──
  { group: 'other', region: 'bac',   name: 'NPP Miền Bắc - Hà Nội',    address: 'Số 12 Láng Hạ, Đống Đa, Hà Nội',          phone: '024.xxxx.xxxx' },
  { group: 'other', region: 'trung', name: 'Đại lý Miền Trung - Huế',  address: '45 Hùng Vương, TP. Huế',                  phone: '0234.xxx.xxx' },
  { group: 'other', region: 'nam',   name: 'NPP Miền Nam - TP.HCM',    address: '200 Cách Mạng Tháng 8, Quận 3, TP.HCM',   phone: '028.xxxx.xxxx' }
  // ADD_NEW_CENTER ↑ Thêm trung tâm mới tại đây, ngay trên dòng này
];
