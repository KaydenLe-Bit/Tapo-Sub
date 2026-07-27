

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
