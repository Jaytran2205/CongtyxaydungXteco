export type Language = "vi" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    news: string;
    partnership: string;
    careers: string;
    contact: string;
    getConsultation: string;
  };
  hero: {
    badge: string;
    slogan: string;
    description: string;
    bookConsultation: string;
    viewProjects: string;
  };
  intro: {
    subtitle: string;
    title: string;
    description: string;
    button: string;
  };
  services: {
    subtitle: string;
    title: string;
    description: string;
    viewAll: string;
  };
  highlights: {
    badge: string;
    description: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionPoints: string[];
    valuesTitle: string;
    valuesText: string;
  };
  projects: {
    subtitle: string;
    title: string;
    description: string;
    all: string;
    viewDetails: string;
    viewAll: string;
    client: string;
    scale: string;
    status: string;
  };
  contactCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  news: {
    subtitle: string;
    title: string;
    description: string;
    viewAll: string;
    readMore: string;
    minRead: string;
  };
  careers: {
    bannerTitle: string;
    subtitle: string;
    title: string;
    description: string;
    hiringStatus: string;
    open: string;
    closed: string;
    notice: string;
    applyNow: string;
    applyBackup: string;
    expired: string;
    talentBankTitle: string;
    talentBankDesc: string;
    sendCv: string;
    salary: string;
    location: string;
    postedDate: string;
    deadline: string;
    noJobs: string;
  };
  footer: {
    hotline: string;
    address: string;
    email: string;
    copyright: string;
    privacy: string;
    terms: string;
    admin: string;
  };
  quickContact: {
    consultation: string;
    zaloChat: string;
    callHotline: string;
  };
  modal: {
    title: string;
    subtitle: string;
    fullName: string;
    phone: string;
    plan: string;
    area: string;
    floors: string;
    location: string;
    notes: string;
    submit: string;
    success: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      services: "Lĩnh vực",
      projects: "Dự án",
      news: "Tin tức",
      partnership: "Hợp tác",
      careers: "Tuyển dụng",
      contact: "Liên hệ",
      getConsultation: "Tư vấn ngay",
    },
    hero: {
      badge: "Tổng thầu thiết kế & thi công",
      slogan: "BUILD BEYOND STANDARDS",
      description:
        "Tổng thầu Thiết kế và Thi công trọn gói biệt thự, nhà phố, lâu đài cao cấp và các dự án phát triển hạ tầng theo tiêu chuẩn quốc tế.",
      bookConsultation: "Đặt lịch tư vấn",
      viewProjects: "Xem dự án",
    },
    intro: {
      subtitle: "XTÉCO chúng tôi là ai?",
      title: "CÔNG TY CỔ PHẦN KIẾN TRÚC XÂY DỰNG XTÉCO",
      description:
        "XTÉCO là doanh nghiệp hoạt động trong lĩnh vực xây dựng, kiến trúc và phát triển hạ tầng, chuyên cung cấp các giải pháp thiết kế – thi công toàn diện cho nhà phố, biệt thự, lâu đài, khu nghỉ dưỡng, văn phòng, chung cư cao cấp và các dự án quy mô lớn. Với định hướng phát triển theo tiêu chuẩn quốc tế, XTÉCO không ngừng theo đuổi những giá trị bền vững thông qua chất lượng công trình, tư duy thiết kế hiện đại và năng lực quản lý chuyên nghiệp.",
      button: "Tìm hiểu thêm",
    },
    services: {
      subtitle: "Lĩnh vực dịch vụ",
      title: "Lĩnh Vực Hoạt Động",
      description:
        "Chúng tôi cung cấp giải pháp toàn diện từ khảo sát, lập dự án, thiết kế kiến trúc – kết cấu – cơ điện đến thi công xây dựng trọn gói và bàn giao chìa khóa trao tay.",
      viewAll: "Xem tất cả dịch vụ",
    },
    highlights: {
      badge: "NĂNG LỰC & CAM KẾT CỦA XTÉCO",
      description:
        "Đội ngũ kỹ sư, kiến trúc sư được đào tạo tại Châu Âu và các chuyên gia giàu kinh nghiệm, cùng quy trình quản lý đạt tiêu chuẩn 5 sao, chúng tôi cam kết mang đến những công trình tối ưu về công năng, thẩm mỹ và giá trị đầu tư lâu dài. XTÉCO không chỉ kiến tạo công trình, mà còn kiến tạo những chuẩn mực sống mới cho tương lai.",
      visionTitle: "Tầm nhìn",
      visionText:
        "Trở thành tổng thầu kiến trúc & xây dựng hàng đầu Việt Nam, biểu tượng cho chất lượng vượt chuẩn và tư duy kiến tạo công trình bền vững qua nhiều thế hệ.",
      missionTitle: "Sứ mệnh",
      missionPoints: [
        "Kiến tạo công trình chất lượng vượt trội theo tiêu chuẩn quốc tế.",
        "Tối ưu hóa không gian sống, công năng và giá trị gia tăng cho khách hàng.",
        "Tiên phong ứng dụng công nghệ và vật liệu xanh thân thiện môi trường.",
        "Gìn giữ đạo đức nghề nghiệp và xây dựng niềm tin trọn đời cùng đối tác.",
      ],
      valuesTitle: "Giá trị cốt lõi",
      valuesText:
        "TÂM HUYẾT TRONG TỪNG CHI TIẾT – MINH BẠCH TRONG TỪNG CON SỐ – BỀN VỮNG TRONG MỌI CÔNG TRÌNH.",
    },
    projects: {
      subtitle: "Dự án nổi bật",
      title: "Dự Án Tiêu Biểu",
      description: "Những công trình khẳng định đẳng cấp nghệ thuật kiến trúc và dấu ấn thương hiệu XTÉCO.",
      all: "Tất cả",
      viewDetails: "Xem chi tiết dự án",
      viewAll: "Xem toàn bộ dự án",
      client: "Chủ đầu tư",
      scale: "Quy mô",
      status: "Tình trạng",
    },
    contactCta: {
      title: "Sẵn sàng kiến tạo công trình mơ ước cùng XTÉCO?",
      subtitle: "Liên hệ ngay hôm nay để nhận tư vấn chuyên sâu từ đội ngũ kiến trúc sư và kỹ sư hàng đầu.",
      button: "Liên hệ ngay",
    },
    news: {
      subtitle: "Tin tức - Cẩm nang",
      title: "Tin Tức & Kiến Thức Xây Dựng",
      description: "Cập nhật xu hướng kiến trúc, cẩm nang phong thủy và quy định pháp lý xây dựng mới nhất.",
      viewAll: "Xem tất cả bài viết",
      readMore: "Xem chi tiết bài viết",
      minRead: "phút đọc",
    },
    careers: {
      bannerTitle: "Tuyển Dụng Nhân Tài",
      subtitle: "CAREERS & OPPORTUNITIES",
      title: "Cơ hội nghề nghiệp tại XTÉCO",
      description:
        "Chúng tôi luôn chào đón những ứng viên tài năng, sáng tạo, giàu nhiệt huyết và mong muốn thử thách bản thân trong môi trường chuyên nghiệp chuẩn quốc tế của XTÉCO.",
      hiringStatus: "Trạng thái tuyển dụng",
      open: "Đang tiếp nhận hồ sơ",
      closed: "Tạm dừng / Đã hết hạn",
      notice:
        "Tất cả các vị trí tuyển dụng hiện tại đã hết hạn nhận hồ sơ. Quý ứng viên vẫn có thể gửi CV vào email nhân sự info@xteco.vn để lưu vào ngân hàng hồ sơ tài năng của chúng tôi cho các đợt tuyển dụng tiếp theo.",
      applyNow: "Ứng tuyển ngay",
      applyBackup: "Gửi CV dự phòng",
      expired: "Đã hết hạn",
      talentBankTitle: "Gia nhập Ngân hàng Tài năng XTÉCO",
      talentBankDesc:
        "Bạn chưa tìm thấy vị trí phù hợp hoặc các đợt tuyển dụng đã kết thúc? Đừng ngần ngại gửi CV và Portfolio của bạn tới hòm thư nhân sự của chúng tôi.",
      sendCv: "Gửi CV về hòm thư",
      salary: "Thu nhập",
      location: "Địa điểm",
      postedDate: "Ngày đăng",
      deadline: "Hạn nộp",
      noJobs: "Hiện tại chưa có vị trí tuyển dụng mới.",
    },
    footer: {
      hotline: "Hotline tư vấn",
      address: "Địa chỉ trụ sở",
      email: "Email hỗ trợ",
      copyright: "Tất cả quyền được bảo lưu.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      admin: "Admin",
    },
    quickContact: {
      consultation: "Đăng ký tư vấn",
      zaloChat: "Chat Zalo",
      callHotline: "Hotline",
    },
    modal: {
      title: "Đăng ký tư vấn xây dựng trọn gói",
      subtitle: "Đội ngũ kiến trúc sư và kỹ sư XTÉCO sẽ phản hồi tư vấn chuyên sâu trong vòng 24h.",
      fullName: "Họ và tên quý khách *",
      phone: "Số điện thoại liên hệ *",
      plan: "Loại hình công trình",
      area: "Diện tích ước tính (m²)",
      floors: "Số tầng dự kiến",
      location: "Địa điểm xây dựng",
      notes: "Yêu cầu chi tiết hoặc ý tưởng thiết kế",
      submit: "Gửi yêu cầu tư vấn",
      success: "Cảm ơn quý khách! Chúng tôi sẽ liên hệ lại ngay.",
      close: "Đóng",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      news: "News & Insights",
      partnership: "Partnership",
      careers: "Careers",
      contact: "Contact",
      getConsultation: "Get Consultation",
    },
    hero: {
      badge: "General Contractor for Design & Construction",
      slogan: "BUILD BEYOND STANDARDS",
      description:
        "Turnkey Design & Build General Contractor for luxury villas, townhouses, private estates and international-standard infrastructure projects.",
      bookConsultation: "Book Consultation",
      viewProjects: "View Projects",
    },
    intro: {
      subtitle: "Who We Are",
      title: "XTECO CONSTRUCTION JOINT STOCK COMPANY",
      description:
        "XTECO is a premier enterprise in construction, architecture, and infrastructure development, delivering comprehensive design and build solutions for luxury villas, townhouses, estates, commercial resorts, and high-rise developments. Committed to international benchmarks, XTECO unceasingly delivers lasting value through superior craftsmanship, contemporary aesthetics, and meticulous project management.",
      button: "Learn More",
    },
    services: {
      subtitle: "Core Services",
      title: "Areas of Expertise",
      description:
        "We provide turnkey end-to-end solutions from site surveys, project planning, structural & MEP engineering to luxury finishing and turnkey handover.",
      viewAll: "Explore All Services",
    },
    highlights: {
      badge: "CAPABILITIES & COMMITMENT",
      description:
        "With an elite team of European-trained architects, senior structural engineers, and a 5-star management framework, we guarantee works of optimal functionality, breathtaking aesthetics, and enduring investment value. XTÉCO builds beyond standard structures — we shape refined lifestyles for the future.",
      visionTitle: "Our Vision",
      visionText:
        "To stand as the premier architectural and construction general contractor, synonymous with exceptional standards and multi-generational endurance.",
      missionTitle: "Our Mission",
      missionPoints: [
        "Deliver international-caliber construction quality.",
        "Maximize living comfort, spatial harmony, and client asset value.",
        "Pioneer green technologies and sustainable, eco-friendly materials.",
        "Uphold uncompromising professional integrity and lifelong client trust.",
      ],
      valuesTitle: "Core Values",
      valuesText:
        "PASSION IN EVERY DETAIL – TRANSPARENCY IN EVERY NUMBER – ENDURANCE IN EVERY STRUCTURE.",
    },
    projects: {
      subtitle: "Portfolio",
      title: "Featured Projects",
      description: "Signature masterpieces defining timeless architectural elegance and XTÉCO's hallmark of quality.",
      all: "All",
      viewDetails: "View Project Details",
      viewAll: "View All Projects",
      client: "Client",
      scale: "Scale",
      status: "Status",
    },
    contactCta: {
      title: "Ready to build your dream masterpiece with XTÉCO?",
      subtitle: "Contact us today for in-depth consultation from leading architects and senior engineers.",
      button: "Contact Us Now",
    },
    news: {
      subtitle: "News & Knowledge",
      title: "News & Construction Insights",
      description: "Explore the latest architectural trends, feng shui guides, and updated construction regulations.",
      viewAll: "View All Articles",
      readMore: "Read Full Article",
      minRead: "min read",
    },
    careers: {
      bannerTitle: "Careers & Opportunities",
      subtitle: "CAREERS & OPPORTUNITIES",
      title: "Career Opportunities at XTÉCO",
      description:
        "We are always eager to welcome passionate, creative, and ambitious professionals looking to elevate their careers within XTÉCO's world-class standard environment.",
      hiringStatus: "Recruitment Status",
      open: "Currently Accepting Applications",
      closed: "Temporarily Closed / Expired",
      notice:
        "All active job openings have reached their application deadline. Prospective candidates may still submit their CVs to info@xteco.vn to be stored in our talent bank for future openings.",
      applyNow: "Apply Now",
      applyBackup: "Submit Talent CV",
      expired: "Expired",
      talentBankTitle: "Join XTÉCO Talent Bank",
      talentBankDesc:
        "Haven't found your exact role or current openings are closed? Feel free to submit your CV and portfolio directly to our HR team.",
      sendCv: "Email your CV to",
      salary: "Salary",
      location: "Location",
      postedDate: "Posted Date",
      deadline: "Deadline",
      noJobs: "There are currently no open positions.",
    },
    footer: {
      hotline: "Consultation Hotline",
      address: "Headquarters Address",
      email: "Support Email",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      admin: "Admin",
    },
    quickContact: {
      consultation: "Consultation",
      zaloChat: "Chat Zalo",
      callHotline: "Call Hotline",
    },
    modal: {
      title: "Book Full-Service Construction Consultation",
      subtitle: "Our senior architects and engineers will respond with detailed recommendations within 24 hours.",
      fullName: "Your Full Name *",
      phone: "Phone Number *",
      plan: "Project Category",
      area: "Estimated Area (m²)",
      floors: "Floors",
      location: "Location",
      notes: "Detailed requirements or design ideas",
      submit: "Submit Request",
      success: "Thank you! We will reach out promptly.",
      close: "Close",
    },
  },
};
