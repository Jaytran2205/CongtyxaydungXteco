"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, Translations } from "@/lib/translations";

export interface WebData {
  general: {
    brandName: string;
    legalName: string;
    englishName: string;
    slogan: string;
    address: string;
    hotline: string;
    email: string;
    websites: string;
    facebookUrl?: string;
  };
  hero: {
    videoUrl: string;
    posterUrl: string;
  };
  intro: {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    buttonLink: string;
  };
  services: {
    title: string;
    buttonText: string;
    buttonLink: string;
    items: Array<{
      title: string;
      points: string[];
    }>;
    showcaseImages: string[];
  };
  highlights: {
    title: string;
    description: string;
    vision: string;
    mission: string[];
    coreValues: Array<{
      title: string;
      description: string;
    }>;
    imageUrl: string;
  };
  ceo: {
    name: string;
    title: string;
    quote: string;
    imageUrl: string;
    buttonText: string;
    buttonLink: string;
  };
  projects: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    items: Array<{
      title: string;
      client: string;
      model: string;
      image: string;
      href: string;
      gallery: string[];
    }>;
  };
  contact: {
    ctaTitle: string;
    ctaSubtitle: string;
    buttonText: string;
  };
  news: {
    title: string;
    featured: {
      title: string;
      date: string;
      image: string;
      href: string;
    };
    others: Array<{
      title: string;
      date: string;
      image: string;
      href: string;
    }>;
  };
  quickContact: {
    zaloUrl: string;
    hotline: string;
    hotlineLabel: string;
  };
  careers: {
    bannerTitle: string;
    title: string;
    description: string;
    isHiring: boolean;
    notice: string;
    jobs: Array<{
      id: string;
      title: string;
      department: string;
      location: string;
      date: string;
      salary: string;
      status: "active" | "expired";
      deadline?: string;
    }>;
  };
}

const initialDefaultData: WebData = {
  general: {
    brandName: "XTÉCO",
    legalName: "CÔNG TY CỔ PHẦN KIẾN TRÚC XÂY DỰNG XTÉCO",
    englishName: "XTÉCO CONSTRUCTION JOINT STOCK COMPANY",
    slogan: "BUILD BEYOND STANDARDS",
    address: "SỐ DM9-6, KHU BIỆT THỰ LIỀN KỀ VẠN PHÚC, HÀ ĐÔNG, HÀ NỘI.",
    hotline: "0836.289.589 – 0396.255.899",
    email: "info@xteco.vn",
    websites: "xteco.vn, xteco.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=61589586812415",
  },
  hero: {
    videoUrl: "/videos/intro.mp4",
    posterUrl: "/images/hero-engineers-villa.jpg",
  },
  intro: {
    title: "XTÉCO chúng tôi là ai?",
    description:
      "XTÉCO là doanh nghiệp hoạt động trong lĩnh vực xây dựng, kiến trúc và phát triển hạ tầng, chuyên cung cấp các giải pháp thiết kế – thi công toàn diện cho nhà phố, biệt thự, lâu đài, khu nghỉ dưỡng, văn phòng, chung cư cao cấp và các dự án quy mô lớn. Với định hướng phát triển theo tiêu chuẩn quốc tế, XTÉCO không ngừng theo đuổi những giá trị bền vững thông qua chất lượng công trình, tư duy thiết kế hiện đại và năng lực quản lý chuyên nghiệp.",
    imageUrl: "/images/img-workers-sunset.png",
    buttonText: "Tìm hiểu thêm",
    buttonLink: "/ve-chung-toi",
  },
  services: {
    title: "Lĩnh vực hoạt động",
    buttonText: "Tìm hiểu thêm",
    buttonLink: "/linh-vuc",
    items: [
      {
        title: "Tư vấn & Thiết kế",
        points: [
          "Kiến trúc & nội thất đồng bộ – tối ưu công năng, thẩm mỹ và trải nghiệm.",
          "Thiết kế khác biệt, mang dấu ấn riêng cho từng công trình.",
        ],
      },
      {
        title: "Thi công trọn gói",
        points: [
          "Chuẩn kỹ thuật – chuẩn tiến độ – chuẩn hoàn thiện.",
          "Kiểm soát chất lượng nghiêm ngặt trong từng hạng mục thi công.",
        ],
      },
      {
        title: "Nội thất & Công nghệ",
        points: [
          "Thi công nội thất cao cấp, đồng bộ từ thiết kế đến hoàn thiện.",
          "Tích hợp Smart Home & thiết bị thông minh cho không gian sống hiện đại.",
        ],
      },
      {
        title: "Tổng thầu Design & Build",
        points: [
          "Một đầu mối – Một quy trình – Một cam kết từ ý tưởng đến bàn giao.",
          "Tối ưu chi phí, tiến độ và chất lượng trên toàn bộ dự án.",
        ],
      },
      {
        title: "Quản lý dự án & Giám sát",
        points: [
          "Kiểm soát tiến độ – chi phí – chất lượng xuyên suốt dự án.",
          "Giám sát độc lập, nghiệm thu chặt chẽ, bảo vệ lợi ích chủ đầu tư.",
        ],
      },
    ],
    showcaseImages: ["/images/img-crane-workers.png", "/images/img-blueprint-villa.png"],
  },
  highlights: {
    title: "Năng lực & Cam kết của XTÉCO",
    description:
      "Đội ngũ kỹ sư, kiến trúc sư được đào tạo tại Châu Âu và các chuyên gia giàu kinh nghiệm, cùng quy trình quản lý đạt tiêu chuẩn 5 sao, chúng tôi cam kết mang đến những công trình tối ưu về công năng, thẩm mỹ và giá trị đầu tư lâu dài. XTÉCO không chỉ kiến tạo công trình, mà còn kiến tạo những chuẩn mực sống mới cho tương lai.",
    vision:
      "Trở thành thương hiệu xây dựng và phát triển hạ tầng uy tín hàng đầu tại Việt Nam, tiên phong trong đổi mới công nghệ, tiêu chuẩn chất lượng và giải pháp xây dựng bền vững theo định hướng quốc tế.",
    mission: [
      "Kiến tạo những công trình mang giá trị vượt thời gian",
      "Cung cấp giải pháp xây dựng toàn diện, hiệu quả và tối ưu",
      "Đồng hành cùng khách hàng và đối tác trên hành trình phát triển bền vững",
      "Góp phần xây dựng diện mạo đô thị hiện đại, đẳng cấp và nhân văn",
    ],
    coreValues: [
      {
        title: "Chất lượng",
        description: "Cam kết theo đuổi tiêu chuẩn cao nhất trong từng công trình và chi tiết thi công.",
      },
      {
        title: "Uy tín",
        description: "Xây dựng niềm tin bền vững bằng chất lượng, sự minh bạch, trách nhiệm và cam kết dài hạn.",
      },
      {
        title: "Đổi mới",
        description: "Liên tục ứng dụng công nghệ, tư duy thiết kế và phương pháp quản lý tiên tiến.",
      },
      {
        title: "Bền vững",
        description: "Phát triển hài hòa giữa hiệu quả kinh tế, giá trị xã hội và trách nhiệm môi trường.",
      },
    ],
    imageUrl: "/images/img-hardhat-blueprints.png",
  },
  ceo: {
    name: "Trần Mạnh Hùng",
    title: "GIÁM ĐỐC",
    quote:
      "XTÉCO ra đời với mong muốn thay đổi cách thức xây dựng và quy chuẩn công trình chất lượng của người Việt. Tôn chỉ làm việc của XTÉCO là “tri thức trong xây dựng”.",
    imageUrl: "/images/about-ceo-new.jpg",
    buttonText: "Tìm hiểu thêm",
    buttonLink: "/ve-chung-toi",
  },
  projects: {
    title: "Dự án",
    subtitle: "Dự án nổi bật tại XTÉCO",
    buttonText: "Xem tất cả dự án",
    buttonLink: "/du-an",
    items: [
      {
        title: "BT Hà Nội",
        client: "Mr. HÙNG",
        model: "Biệt thự - Villa",
        image: "/images/project-bt-ha-noi.jpg",
        href: "/du-an/bt-ha-noi",
        gallery: [
          "/images/project-bt-ha-noi.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-biet-thu-ha-noi.jpg",
        ],
      },
      {
        title: "Villa Sầm Sơn",
        client: "Mr. LONG",
        model: "Biệt thự - Nghỉ dưỡng",
        image: "/images/project-villa-sam-son.jpg",
        href: "/du-an/villa-sam-son",
        gallery: [
          "/images/project-villa-sam-son.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-bt-ha-noi.jpg",
        ],
      },
      {
        title: "Villa Nha Trang",
        client: "Mr. KHÁNH",
        model: "Biệt thự - Nghỉ dưỡng",
        image: "/images/project-villa-nha-trang.jpg",
        href: "/du-an/villa-nha-trang",
        gallery: [
          "/images/project-villa-nha-trang.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-bt-ha-long.jpg",
        ],
      },
      {
        title: "BT Hạ Long",
        client: "Mr. QUÂN",
        model: "Biệt thự - Villa",
        image: "/images/project-bt-ha-long.jpg",
        href: "/du-an/bt-ha-long",
        gallery: [
          "/images/project-bt-ha-long.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-villa-nha-trang.jpg",
        ],
      },
      {
        title: "Villa Quảng Ninh",
        client: "Mr. TÙNG",
        model: "Biệt thự - Villa",
        image: "/images/project-biet-thu-ha-noi.jpg",
        href: "/du-an/villa-quang-ninh",
        gallery: [
          "/images/project-biet-thu-ha-noi.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-bt-ha-noi.jpg",
        ],
      },
      {
        title: "Villa A Dũng",
        client: "Mr. DŨNG",
        model: "Biệt thự - Villa",
        image: "/images/project-villa-a-dung.jpg",
        href: "/du-an/villa-a-dung",
        gallery: [
          "/images/project-villa-a-dung.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-bt-monaco.jpg",
        ],
      },
      {
        title: "BT Monaco",
        client: "Mr. HOÀNG",
        model: "Biệt thự - Nghỉ dưỡng",
        image: "/images/project-bt-monaco.jpg",
        href: "/du-an/bt-monaco",
        gallery: [
          "/images/project-bt-monaco.jpg",
          "/images/hero-engineers-villa.jpg",
          "/images/project-villa-sam-son.jpg",
        ],
      },
    ],
  },
  contact: {
    ctaTitle: "Liên hệ ngay với chúng tôi",
    ctaSubtitle: "Liên hệ với XTÉCO để nhận tư vấn miễn phí",
    buttonText: "Đặt lịch ngay",
  },
  news: {
    title: "Tin tức - Sự kiện",
    featured: {
      title: "Phong thủy nhà ở năm 2026: Những nguyên tắc vàng và hướng đại cát để đón tài lộc!",
      date: "08/07/2026",
      image: "/images/news-meeting.png",
      href: "/tin-tuc/phong-thuy-nha-o-2026",
    },
    others: [
      {
        title: "Luật Đất đai mới nhất: Quy định và thủ tục cấp phép xây dựng nhà ở riêng lẻ năm 2026",
        date: "07/07/2026",
        image: "/images/news-blueprint.png",
        href: "/tin-tuc/luat-dat-dai-cap-phep-xay-dung-2026",
      },
      {
        title: "Cách xác định hướng bếp và hướng bàn thờ theo phong thủy chuẩn thước Lỗ Ban",
        date: "05/07/2026",
        image: "/images/news-site.png",
        href: "/tin-tuc/huong-bep-ban-tho-phong-thuy",
      },
      {
        title: "Quy chuẩn PCCC đối với nhà ở riêng lẻ kết hợp kinh doanh: Những điều chủ nhà bắt buộc phải biết",
        date: "03/07/2026",
        image: "/images/news-meeting.png",
        href: "/tin-tuc/quy-chuan-pccc-nha-o-ket-hop-kinh-doanh",
      },
    ],
  },
  quickContact: {
    zaloUrl: "https://zalo.me/0836289589",
    hotline: "0836289589",
    hotlineLabel: "0836.289.589",
  },
  careers: {
    bannerTitle: "Tuyển Dụng Nhân Tài",
    title: "Cơ hội nghề nghiệp tại XTÉCO",
    description:
      "Chúng tôi luôn chào đón những ứng viên tài năng, sáng tạo, giàu nhiệt huyết và mong muốn thử thách bản thân trong môi trường chuyên nghiệp chuẩn quốc tế của XTÉCO.",
    isHiring: false,
    notice:
      "Tất cả các vị trí tuyển dụng hiện tại đã hết hạn nhận hồ sơ. Quý ứng viên vẫn có thể gửi CV vào email nhân sự info@xteco.vn để lưu vào ngân hàng hồ sơ tài năng của chúng tôi cho các đợt tuyển dụng tiếp theo.",
    jobs: [
      {
        id: "job-1",
        title: "Kiến trúc sư Thiết kế Ý tưởng (Concept Architect)",
        department: "Phòng Thiết kế Kiến trúc",
        location: "Hà Nội",
        date: "01/07/2026",
        salary: "Thỏa thuận",
        status: "expired",
        deadline: "31/07/2026",
      },
      {
        id: "job-2",
        title: "Kỹ sư Giám sát Thi công Dự án (Site Engineer)",
        department: "Phòng Quản lý Thi công",
        location: "Hà Nội",
        date: "30/06/2026",
        salary: "Cạnh tranh",
        status: "expired",
        deadline: "31/07/2026",
      },
      {
        id: "job-3",
        title: "Chuyên viên Tư vấn và Phát triển Khách hàng (Sales Executive)",
        department: "Phòng Phát triển Kinh doanh",
        location: "Hà Nội",
        date: "28/06/2026",
        salary: "Lương cứng + Hoa hồng",
        status: "expired",
        deadline: "31/07/2026",
      },
    ],
  },
};

export interface Consultation {
  id: string;
  fullName: string;
  phone: string;
  plan: string;
  area: string;
  floors: string;
  location: string;
  requests: string;
  createdAt: string;
}

interface WebDataContextType {
  data: WebData;
  updateData: (newData: WebData) => void;
  consultations: Consultation[];
  addConsultation: (consultation: Omit<Consultation, "id" | "createdAt">) => void;
  deleteConsultation: (id: string) => void;
  isConsultationModalOpen: boolean;
  setConsultationModalOpen: (open: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const WebDataContext = createContext<WebDataContextType | undefined>(undefined);

export function WebDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<WebData>(initialDefaultData);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);
  const [language, setLanguageState] = useState<Language>("vi");

  // Load from localstorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("xteco_lang") as Language;
      if (savedLang === "vi" || savedLang === "en") {
        setTimeout(() => {
          setLanguageState(savedLang);
        }, 0);
      }
    } catch (e) {
      console.error("Failed to load language: ", e);
    }

    try {
      const saved = localStorage.getItem("xteco_web_data_v15") || localStorage.getItem("xteco_web_data_v14");
      if (saved) {
        setTimeout(() => {
          const parsed = JSON.parse(saved);
          // Migrate old placeholder hotline if present
          if (parsed.quickContact?.hotline === "0899984988") {
            parsed.quickContact.hotline = "0836289589";
            parsed.quickContact.hotlineLabel = "0836.289.589";
          }
          const mergedData = {
            ...initialDefaultData,
            ...parsed,
            quickContact: {
              ...initialDefaultData.quickContact,
              ...(parsed.quickContact || {}),
            },
            services: parsed.services ? { ...initialDefaultData.services, ...parsed.services } : initialDefaultData.services,
            careers: parsed.careers ? { ...initialDefaultData.careers, ...parsed.careers } : initialDefaultData.careers,
          };
          setData(mergedData);
          localStorage.setItem("xteco_web_data_v15", JSON.stringify(mergedData));
        }, 0);
      }
    } catch (e) {
      console.error("Failed to load local storage content: ", e);
    }

    try {
      const savedConsultations = localStorage.getItem("xteco_consultations");
      if (savedConsultations) {
        setTimeout(() => {
          setConsultations(JSON.parse(savedConsultations));
        }, 0);
      }
    } catch (e) {
      console.error("Failed to load consultations: ", e);
    }

    // Cross-tab real-time synchronization
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "xteco_web_data_v15" && e.newValue) {
        try {
          setData(JSON.parse(e.newValue));
        } catch (err) {
          console.error("Failed to sync storage change across tabs: ", err);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("xteco_lang", lang);
    } catch (e) {
      console.error("Failed to save language: ", e);
    }
  };

  const updateData = (newData: WebData) => {
    setData(newData);
    try {
      localStorage.setItem("xteco_web_data_v15", JSON.stringify(newData));
    } catch (e) {
      console.error("Failed to save local storage content: ", e);
    }
  };

  const addConsultation = (item: Omit<Consultation, "id" | "createdAt">) => {
    const newConsultation: Consultation = {
      ...item,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toLocaleDateString("vi-VN") + " " + new Date().toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' }),
    };
    const updated = [newConsultation, ...consultations];
    setConsultations(updated);
    try {
      localStorage.setItem("xteco_consultations", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save consultation booking: ", e);
    }
  };

  const deleteConsultation = (id: string) => {
    const updated = consultations.filter((c) => c.id !== id);
    setConsultations(updated);
    try {
      localStorage.setItem("xteco_consultations", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to delete consultation booking: ", e);
    }
  };

  const t = translations[language] || translations.vi;

  return (
    <WebDataContext.Provider
      value={{
        data,
        updateData,
        consultations,
        addConsultation,
        deleteConsultation,
        isConsultationModalOpen,
        setConsultationModalOpen,
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </WebDataContext.Provider>
  );
}

export function useWebData() {
  const context = useContext(WebDataContext);
  if (!context) {
    throw new Error("useWebData must be used within a WebDataProvider");
  }
  return context;
}
