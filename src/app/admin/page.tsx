"use client";

import { useState } from "react";
import Link from "next/link";
import { useWebData, WebData } from "@/context/web-data-context";
import { Plus, Trash2, ArrowLeft, Save, LogIn } from "lucide-react";

export default function AdminPage() {
  const { data, updateData, consultations, deleteConsultation } = useWebData();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const [showToast, setShowToast] = useState(false);

  // Form states copied from context
  const [editedData, setEditedData] = useState<WebData>(data);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin" || password === "xteco") {
      setIsLoggedIn(true);
      setEditedData(data); // Sync form state with context
      setLoginError("");
    } else {
      setLoginError("Mật khẩu không chính xác! Thử dùng 'admin' hoặc 'xteco'.");
    }
  };

  const handleSave = () => {
    updateData(editedData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const updateGeneral = (field: keyof WebData["general"], value: string) => {
    setEditedData((prev) => ({
      ...prev,
      general: { ...prev.general, [field]: value },
    }));
  };

  const updateHero = (field: keyof WebData["hero"], value: string) => {
    setEditedData((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  const updateIntro = (field: keyof WebData["intro"], value: string) => {
    setEditedData((prev) => ({
      ...prev,
      intro: { ...prev.intro, [field]: value },
    }));
  };

  const updateCeo = (field: keyof WebData["ceo"], value: string) => {
    setEditedData((prev) => ({
      ...prev,
      ceo: { ...prev.ceo, [field]: value },
    }));
  };

  const updateContact = (field: keyof WebData["contact"], value: string) => {
    setEditedData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  // List updates
  const handleAddProject = () => {
    setEditedData((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        items: [
          ...prev.projects.items,
          {
            title: "Dự án mới",
            client: "Khách hàng",
            model: "Biệt thự / Căn hộ / Văn phòng",
            image: "/images/biet-thu-nghia-do.jpg",
            href: "/du-an/biet-thu-nghia-do",
            gallery: ["/images/biet-thu-nghia-do.jpg"],
          },
        ],
      },
    }));
  };

  const handleRemoveProject = (index: number) => {
    setEditedData((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        items: prev.projects.items.filter((_, idx) => idx !== index),
      },
    }));
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    setEditedData((prev) => {
      const items = [...prev.projects.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        projects: { ...prev.projects, items },
      };
    });
  };

  const handleAddJob = () => {
    setEditedData((prev) => {
      const careers = prev.careers || {
        bannerTitle: "Tuyển Dụng Nhân Tài",
        title: "Cơ hội nghề nghiệp tại XTÉCO",
        description: "Chúng tôi luôn chào đón những ứng viên tài năng...",
        isHiring: false,
        notice: "Tất cả các vị trí tuyển dụng hiện tại đã hết hạn nhận hồ sơ...",
        jobs: [],
      };
      return {
        ...prev,
        careers: {
          ...careers,
          jobs: [
            ...careers.jobs,
            {
              id: "job-" + Date.now(),
              title: "Vị trí tuyển dụng mới",
              department: "Phòng ban",
              location: "Hà Nội",
              date: new Date().toLocaleDateString("vi-VN"),
              salary: "Thỏa thuận",
              status: "expired",
              deadline: "30/08/2026",
            },
          ],
        },
      };
    });
  };

  const handleRemoveJob = (index: number) => {
    setEditedData((prev) => {
      const careers = prev.careers;
      if (!careers) return prev;
      return {
        ...prev,
        careers: {
          ...careers,
          jobs: careers.jobs.filter((_, idx) => idx !== index),
        },
      };
    });
  };

  const handleJobChange = (index: number, field: string, value: unknown) => {
    setEditedData((prev) => {
      const careers = prev.careers;
      if (!careers) return prev;
      const jobs = [...careers.jobs];
      jobs[index] = { ...jobs[index], [field]: value };
      return {
        ...prev,
        careers: {
          ...careers,
          jobs,
        },
      };
    });
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0a0f1d] text-white p-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">XTÉCO Admin Panel</h2>
            <p className="text-xs text-gray-400">Nhập mật khẩu để truy cập trang tùy chỉnh</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase text-gray-400">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu (ví dụ: admin)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                required
              />
            </div>
            {loginError && <p className="text-xs text-rose-500 font-semibold">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-[#2f5597] hover:bg-[#1c3561] font-semibold py-2 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Đăng nhập
            </button>
          </form>
          <div className="text-center mt-6">
            <Link href="/" className="text-xs text-gray-500 hover:text-white flex items-center justify-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Quay lại trang chủ
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0f1d] text-white flex flex-col">
      {/* Admin Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md py-4 px-6 sticky top-0 z-30 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1 text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Trang chủ
          </Link>
          <div className="w-[1px] h-4 bg-white/20"></div>
          <h1 className="text-base font-bold tracking-wider">BẢNG ĐIỀU KHIỂN QUẢN TRỊ (XTÉCO)</h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Xem Website ↗
          </Link>
          <button
            onClick={handleSave}
            className="bg-[#ba3434] hover:bg-[#a02c2c] text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-red-950/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" /> Lưu cấu hình
          </button>
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Admin Sidebar Navigation */}
        <aside className="w-full md:w-64 border-r border-white/10 bg-black/20 p-6 flex flex-col gap-2">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Các danh mục chỉnh sửa</span>
          {[
            { id: "general", label: "Thông tin chung" },
            { id: "hero", label: "Hero Banner (Video)" },
            { id: "about", label: "Giới thiệu & CEO" },
            { id: "services", label: "Lĩnh vực dịch vụ" },
            { id: "highlights", label: "Năng lực, Tầm nhìn" },
            { id: "projects", label: "Dự án nổi bật" },
            { id: "contact_news", label: "Liên hệ & Tin tức" },
            { id: "careers", label: "Quản lý Tuyển dụng" },
            { id: "consultations", label: `Quản lý Đặt lịch (${consultations.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left py-2 px-4 rounded text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#2f5597] text-white shadow"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Admin Form Panel */}
        <section className="flex-grow p-6 md:p-10 max-w-4xl">
          {/* Tab 1: General Info */}
          {activeTab === "general" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Thông tin chung doanh nghiệp</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tên thương hiệu (Brand Name)</label>
                  <input
                    type="text"
                    value={editedData.general.brandName}
                    onChange={(e) => updateGeneral("brandName", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tên pháp lý công ty</label>
                  <input
                    type="text"
                    value={editedData.general.legalName}
                    onChange={(e) => updateGeneral("legalName", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tên tiếng Anh</label>
                  <input
                    type="text"
                    value={editedData.general.englishName}
                    onChange={(e) => updateGeneral("englishName", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Slogan (Thông điệp)</label>
                  <input
                    type="text"
                    value={editedData.general.slogan}
                    onChange={(e) => updateGeneral("slogan", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs text-gray-400 font-semibold">Địa chỉ trụ sở</label>
                  <input
                    type="text"
                    value={editedData.general.address}
                    onChange={(e) => updateGeneral("address", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Số điện thoại Hotline</label>
                  <input
                    type="text"
                    value={editedData.general.hotline}
                    onChange={(e) => updateGeneral("hotline", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Email liên hệ</label>
                  <input
                    type="email"
                    value={editedData.general.email}
                    onChange={(e) => updateGeneral("email", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Các tên miền Web (Websites)</label>
                  <input
                    type="text"
                    value={editedData.general.websites}
                    onChange={(e) => updateGeneral("websites", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs text-gray-400 font-semibold">Đường dẫn Trang Facebook (Facebook Fanpage Link)</label>
                  <input
                    type="text"
                    value={editedData.general.facebookUrl || "https://www.facebook.com/profile.php?id=61589586812415"}
                    onChange={(e) => updateGeneral("facebookUrl", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>

                <div className="md:col-span-2 mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-bold text-[#2f5597] mb-4">Cấu hình Nút Liên hệ nổi (Zalo & Hotline)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-400 font-semibold">Đường dẫn Zalo (Zalo Link)</label>
                      <input
                        type="text"
                        value={editedData.quickContact?.zaloUrl || ""}
                        onChange={(e) =>
                          setEditedData((prev) => ({
                            ...prev,
                            quickContact: {
                              ...prev.quickContact,
                              zaloUrl: e.target.value,
                            },
                          }))
                        }
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                        placeholder="https://zalo.me/..."
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-400 font-semibold">Hotline gọi điện (Chỉ điền số)</label>
                      <input
                        type="text"
                        value={editedData.quickContact?.hotline || ""}
                        onChange={(e) =>
                          setEditedData((prev) => ({
                            ...prev,
                            quickContact: {
                              ...prev.quickContact,
                              hotline: e.target.value,
                            },
                          }))
                        }
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                        placeholder="0899984988"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-400 font-semibold">Nhãn Hotline hiển thị</label>
                      <input
                        type="text"
                        value={editedData.quickContact?.hotlineLabel || ""}
                        onChange={(e) =>
                          setEditedData((prev) => ({
                            ...prev,
                            quickContact: {
                              ...prev.quickContact,
                              hotlineLabel: e.target.value,
                            },
                          }))
                        }
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                        placeholder="089 998 49 88"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Hero Section */}
          {activeTab === "hero" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Cấu hình Banner chính (Video chạy nền)</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Đường dẫn Video chạy nền (Local path hoặc URL)</label>
                  <input
                    type="text"
                    value={editedData.hero.videoUrl}
                    onChange={(e) => updateHero("videoUrl", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Hình ảnh thay thế khi không tải được video (Poster Image Path)</label>
                  <input
                    type="text"
                    value={editedData.hero.posterUrl}
                    onChange={(e) => updateHero("posterUrl", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: About & CEO */}
          {activeTab === "about" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Thông tin giới thiệu & Ban lãnh đạo</h3>

              {/* Company Intro */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-white/80">Khối Giới thiệu Công ty</h4>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tiêu đề phụ (Intro Title)</label>
                  <input
                    type="text"
                    value={editedData.intro.title}
                    onChange={(e) => updateIntro("title", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Nội dung tự bạch (Intro Description)</label>
                  <textarea
                    rows={6}
                    value={editedData.intro.description}
                    onChange={(e) => updateIntro("description", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Ảnh minh họa (Intro Image Path)</label>
                  <input
                    type="text"
                    value={editedData.intro.imageUrl}
                    onChange={(e) => updateIntro("imageUrl", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>
              </div>

              {/* CEO Settings */}
              <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-white/80">Khối Người dẫn dắt (CEO)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 font-semibold">Tên của Giám đốc</label>
                    <input
                      type="text"
                      value={editedData.ceo.name}
                      onChange={(e) => updateCeo("name", e.target.value)}
                      className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 font-semibold">Chức vụ của Giám đốc</label>
                    <input
                      type="text"
                      value={editedData.ceo.title}
                      onChange={(e) => updateCeo("title", e.target.value)}
                      className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Thông điệp/Trích dẫn của Giám đốc (CEO Quote)</label>
                  <textarea
                    rows={4}
                    value={editedData.ceo.quote}
                    onChange={(e) => updateCeo("quote", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Đường dẫn ảnh chân dung CEO</label>
                  <input
                    type="text"
                    value={editedData.ceo.imageUrl}
                    onChange={(e) => updateCeo("imageUrl", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Services & Highlights */}
          {activeTab === "services" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Tùy chỉnh Lĩnh vực Dịch vụ</h3>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">Tiêu đề chính Lĩnh vực</label>
                <input
                  type="text"
                  value={editedData.services.title}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      services: { ...prev.services, title: e.target.value },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                />
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-6 mt-4">
                <h4 className="text-sm font-bold text-white/80">Chi tiết 5 Lĩnh vực hoạt động</h4>
                {editedData.services.items.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-gray-400 font-semibold">Tên lĩnh vực {idx + 1}</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          setEditedData((prev) => {
                            const newItems = [...prev.services.items];
                            newItems[idx].title = e.target.value;
                            return { ...prev, services: { ...prev.services, items: newItems } };
                          });
                        }}
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                      />
                    </div>
                    {(item.points || []).map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex flex-col gap-1 pl-4">
                        <label className="text-[9px] text-gray-400 font-semibold">Gạch đầu dòng {ptIdx + 1}</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={pt}
                            onChange={(e) => {
                              setEditedData((prev) => {
                                const newItems = [...prev.services.items];
                                newItems[idx].points[ptIdx] = e.target.value;
                                return { ...prev, services: { ...prev.services, items: newItems } };
                              });
                            }}
                            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setEditedData((prev) => {
                                const newItems = [...prev.services.items];
                                newItems[idx].points = newItems[idx].points.filter((_, pI) => pI !== ptIdx);
                                return { ...prev, services: { ...prev.services, items: newItems } };
                              });
                            }}
                            className="px-2 py-1 text-[10px] text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setEditedData((prev) => {
                          const newItems = [...prev.services.items];
                          newItems[idx].points = [...(newItems[idx].points || []), ""];
                          return { ...prev, services: { ...prev.services, items: newItems } };
                        });
                      }}
                      className="self-start ml-4 text-[11px] text-[#2f5597] hover:underline"
                    >
                      + Thêm gạch đầu dòng
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Highlights */}
          {activeTab === "highlights" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Năng lực, Tầm nhìn, Sứ mệnh & Giá trị</h3>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">Tiêu đề mục Năng lực</label>
                <input
                  type="text"
                  value={editedData.highlights.title}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      highlights: { ...prev.highlights, title: e.target.value },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">Lời tự thuật Năng lực (Description)</label>
                <textarea
                  rows={4}
                  value={editedData.highlights.description}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      highlights: { ...prev.highlights, description: e.target.value },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">Tầm nhìn (Vision)</label>
                <textarea
                  rows={3}
                  value={editedData.highlights.vision}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      highlights: { ...prev.highlights, vision: e.target.value },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                />
              </div>

              {/* Mission Points */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold text-white/80">Sứ mệnh (4 gạch đầu dòng)</h4>
                {editedData.highlights.mission.map((ms, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={ms}
                    onChange={(e) => {
                      setEditedData((prev) => {
                        const newMs = [...prev.highlights.mission];
                        newMs[idx] = e.target.value;
                        return { ...prev, highlights: { ...prev.highlights, mission: newMs } };
                      });
                    }}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                  />
                ))}
              </div>

              {/* Core Values */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold text-white/80">Giá trị cốt lõi (4 Giá trị)</h4>
                {editedData.highlights.coreValues.map((val, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded flex flex-col gap-2">
                    <input
                      type="text"
                      value={val.title}
                      onChange={(e) => {
                        setEditedData((prev) => {
                          const newVals = [...prev.highlights.coreValues];
                          newVals[idx].title = e.target.value;
                          return { ...prev, highlights: { ...prev.highlights, coreValues: newVals } };
                        });
                      }}
                      placeholder="Tên giá trị"
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={val.description}
                      onChange={(e) => {
                        setEditedData((prev) => {
                          const newVals = [...prev.highlights.coreValues];
                          newVals[idx].description = e.target.value;
                          return { ...prev, highlights: { ...prev.highlights, coreValues: newVals } };
                        });
                      }}
                      placeholder="Mô tả giá trị"
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 6: Projects list */}
          {activeTab === "projects" && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-lg font-bold text-[#2f5597]">Quản lý Dự án nổi bật</h3>
                <button
                  onClick={handleAddProject}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-1.5 px-4 rounded flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm Dự án
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {editedData.projects.items.map((proj, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded relative flex flex-col gap-4">
                    {/* Delete button */}
                    <button
                      onClick={() => handleRemoveProject(index)}
                      className="absolute top-4 right-4 text-rose-500 hover:text-rose-700 transition-colors p-1"
                      aria-label="Xóa dự án"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <h4 className="text-xs font-bold text-white/80 uppercase">Dự án #{index + 1}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-gray-400 font-semibold">Tên công trình</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-gray-400 font-semibold">Chủ đầu tư (Client)</label>
                        <input
                          type="text"
                          value={proj.client}
                          onChange={(e) => handleProjectChange(index, "client", e.target.value)}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-gray-400 font-semibold">Mô hình (Model)</label>
                        <input
                          type="text"
                          value={proj.model}
                          onChange={(e) => handleProjectChange(index, "model", e.target.value)}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-gray-400 font-semibold">Đường dẫn ảnh nền (Project Image Path)</label>
                        <input
                          type="text"
                          value={proj.image}
                          onChange={(e) => handleProjectChange(index, "image", e.target.value)}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="text-[10px] text-gray-400 font-semibold">Đường dẫn liên kết (Link path / href)</label>
                        <input
                          type="text"
                          value={proj.href}
                          onChange={(e) => handleProjectChange(index, "href", e.target.value)}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 7: Contact & News */}
          {activeTab === "contact_news" && (
            <div className="flex flex-col gap-8">
              {/* Contact section info */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Khối Kêu gọi Liên hệ</h3>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tiêu đề phụ liên hệ</label>
                  <input
                    type="text"
                    value={editedData.contact.ctaTitle}
                    onChange={(e) => updateContact("ctaTitle", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tiêu đề chính liên hệ</label>
                  <input
                    type="text"
                    value={editedData.contact.ctaSubtitle}
                    onChange={(e) => updateContact("ctaSubtitle", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Nội dung nút liên hệ</label>
                  <input
                    type="text"
                    value={editedData.contact.buttonText}
                    onChange={(e) => updateContact("buttonText", e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
              </div>

              {/* News settings */}
              <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-white/10">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-[#2f5597]">Quản lý bài viết Tin tức</h3>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Bài viết tiêu biểu (Featured News Title)</label>
                  <input
                    type="text"
                    value={editedData.news.featured.title}
                    onChange={(e) =>
                      setEditedData((prev) => ({
                        ...prev,
                        news: {
                          ...prev.news,
                          featured: { ...prev.news.featured, title: e.target.value },
                        },
                      }))
                    }
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Đường dẫn ảnh bài viết tiêu biểu</label>
                  <input
                    type="text"
                    value={editedData.news.featured.image}
                    onChange={(e) =>
                      setEditedData((prev) => ({
                        ...prev,
                        news: {
                          ...prev.news,
                          featured: { ...prev.news.featured, image: e.target.value },
                        },
                      }))
                    }
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white font-mono"
                  />
                </div>

                {/* 3 other news */}
                <h4 className="text-xs font-bold text-white/80 mt-4">Các tin tức phụ (3 bài viết)</h4>
                {editedData.news.others.map((oth, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-gray-400 font-semibold">Tiêu đề bài viết phụ {idx + 1}</label>
                      <input
                        type="text"
                        value={oth.title}
                        onChange={(e) => {
                          setEditedData((prev) => {
                            const newOthers = [...prev.news.others];
                            newOthers[idx].title = e.target.value;
                            return { ...prev, news: { ...prev.news, others: newOthers } };
                          });
                        }}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-gray-400 font-semibold">Đường dẫn ảnh bài phụ {idx + 1}</label>
                      <input
                        type="text"
                        value={oth.image}
                        onChange={(e) => {
                          setEditedData((prev) => {
                            const newOthers = [...prev.news.others];
                            newOthers[idx].image = e.target.value;
                            return { ...prev, news: { ...prev.news, others: newOthers } };
                          });
                        }}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 8: Careers Management */}
          {activeTab === "careers" && (
            <div className="flex flex-col gap-6 text-white">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-lg font-bold text-[#2f5597]">Quản lý Tuyển dụng Nhân tài</h3>
                <button
                  onClick={handleAddJob}
                  className="px-3 py-1.5 bg-[#2f5597] hover:bg-[#1c3561] text-white text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm vị trí mới
                </button>
              </div>

              {/* Overall Hiring Status Switch */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
                <label className="text-xs text-gray-300 font-bold uppercase tracking-wide">
                  Trạng thái tuyển dụng chung của công ty
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setEditedData((prev) => ({
                        ...prev,
                        careers: {
                          ...(prev.careers || {
                            bannerTitle: "Tuyển Dụng Nhân Tài",
                            title: "Cơ hội nghề nghiệp tại XTÉCO",
                            description: "Chúng tôi luôn chào đón những ứng viên tài năng...",
                            jobs: [],
                            notice: "",
                          }),
                          isHiring: true,
                        },
                      }))
                    }
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      editedData.careers?.isHiring
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40 border border-emerald-400"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    ● Đang mở đợt tuyển dụng
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setEditedData((prev) => ({
                        ...prev,
                        careers: {
                          ...(prev.careers || {
                            bannerTitle: "Tuyển Dụng Nhân Tài",
                            title: "Cơ hội nghề nghiệp tại XTÉCO",
                            description: "Chúng tôi luôn chào đón những ứng viên tài năng...",
                            jobs: [],
                            notice: "",
                          }),
                          isHiring: false,
                        },
                      }))
                    }
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      !editedData.careers?.isHiring
                        ? "bg-rose-700 text-white shadow-lg shadow-rose-950/40 border border-rose-400"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    ● Tạm dừng / Đã hết hạn nhận hồ sơ
                  </button>
                </div>
              </div>

              {/* Notice Textarea */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">
                  Nội dung thông báo trạng thái tuyển dụng (Notice)
                </label>
                <textarea
                  rows={3}
                  value={editedData.careers?.notice || ""}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      careers: {
                        ...(prev.careers || {
                          bannerTitle: "Tuyển Dụng Nhân Tài",
                          title: "Cơ hội nghề nghiệp tại XTÉCO",
                          description: "Chúng tôi luôn chào đón những ứng viên tài năng...",
                          isHiring: false,
                          jobs: [],
                        }),
                        notice: e.target.value,
                      },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                  placeholder="Thông báo về việc hết hạn nhận hồ sơ hoặc lưu CV vào ngân hàng ứng viên..."
                />
              </div>

              {/* Title & Description Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tiêu đề Banner</label>
                  <input
                    type="text"
                    value={editedData.careers?.bannerTitle || ""}
                    onChange={(e) =>
                      setEditedData((prev) => ({
                        ...prev,
                        careers: {
                          ...(prev.careers || {
                            title: "Cơ hội nghề nghiệp tại XTÉCO",
                            description: "",
                            isHiring: false,
                            notice: "",
                            jobs: [],
                          }),
                          bannerTitle: e.target.value,
                        },
                      }))
                    }
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-semibold">Tiêu đề chính trang Tuyển dụng</label>
                  <input
                    type="text"
                    value={editedData.careers?.title || ""}
                    onChange={(e) =>
                      setEditedData((prev) => ({
                        ...prev,
                        careers: {
                          ...(prev.careers || {
                            bannerTitle: "Tuyển Dụng Nhân Tài",
                            description: "",
                            isHiring: false,
                            notice: "",
                            jobs: [],
                          }),
                          title: e.target.value,
                        },
                      }))
                    }
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-semibold">Mô tả tự bạch tuyển dụng</label>
                <textarea
                  rows={2}
                  value={editedData.careers?.description || ""}
                  onChange={(e) =>
                    setEditedData((prev) => ({
                      ...prev,
                      careers: {
                        ...(prev.careers || {
                          bannerTitle: "Tuyển Dụng Nhân Tài",
                          title: "Cơ hội nghề nghiệp tại XTÉCO",
                          isHiring: false,
                          notice: "",
                          jobs: [],
                        }),
                        description: e.target.value,
                      },
                    }))
                  }
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm text-white leading-relaxed"
                />
              </div>

              {/* Jobs List */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white/90">
                    Danh sách các vị trí tuyển dụng ({editedData.careers?.jobs?.length || 0})
                  </h4>
                </div>

                {(!editedData.careers?.jobs || editedData.careers.jobs.length === 0) ? (
                  <div className="py-8 text-center text-gray-500 border border-dashed border-white/10 rounded-xl text-xs">
                    Chưa có vị trí tuyển dụng nào. Hãy nhấn &quot;Thêm vị trí mới&quot; ở trên.
                  </div>
                ) : (
                  editedData.careers.jobs.map((job, idx) => (
                    <div
                      key={job.id || idx}
                      className="p-5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-4 relative group"
                    >
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-xs font-bold text-[#ba3434] uppercase tracking-wider">
                          Vị trí #{idx + 1}
                        </span>
                        <div className="flex items-center gap-2">
                          <select
                            value={job.status}
                            onChange={(e) => handleJobChange(idx, "status", e.target.value)}
                            className={`px-3 py-1 text-xs font-bold rounded border cursor-pointer ${
                              job.status === "active"
                                ? "bg-emerald-950 text-emerald-300 border-emerald-700"
                                : "bg-rose-950 text-rose-300 border-rose-700"
                            }`}
                          >
                            <option value="active">● Đang tuyển dụng</option>
                            <option value="expired">● Đã hết hạn</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => handleRemoveJob(idx)}
                            className="text-gray-500 hover:text-rose-500 p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer"
                            title="Xóa vị trí"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1 md:col-span-2">
                          <label className="text-[10px] text-gray-400 font-semibold">Tên vị trí tuyển dụng</label>
                          <input
                            type="text"
                            value={job.title}
                            onChange={(e) => handleJobChange(idx, "title", e.target.value)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-400 font-semibold">Phòng ban / Bộ phận</label>
                          <input
                            type="text"
                            value={job.department}
                            onChange={(e) => handleJobChange(idx, "department", e.target.value)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-400 font-semibold">Địa điểm làm việc</label>
                          <input
                            type="text"
                            value={job.location}
                            onChange={(e) => handleJobChange(idx, "location", e.target.value)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-400 font-semibold">Mức thu nhập / Lương</label>
                          <input
                            type="text"
                            value={job.salary}
                            onChange={(e) => handleJobChange(idx, "salary", e.target.value)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-400 font-semibold">Hạn nộp hồ sơ (Deadline)</label>
                          <input
                            type="text"
                            value={job.deadline || ""}
                            onChange={(e) => handleJobChange(idx, "deadline", e.target.value)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-xs text-white"
                            placeholder="Ví dụ: 31/07/2026"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Tab 9: Consultations Bookings */}
          {activeTab === "consultations" && (
            <div className="flex flex-col gap-6 text-white">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-lg font-bold text-[#2f5597]">
                  Danh sách đặt lịch tư vấn ({consultations.length})
                </h3>
              </div>

              {consultations.length === 0 ? (
                <div className="py-12 text-center text-gray-500 border border-dashed border-white/10 rounded-xl">
                  Chưa có yêu cầu đặt lịch tư vấn nào được ghi nhận.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {consultations.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-3 relative group"
                    >
                      <button
                        onClick={() => deleteConsultation(booking.id)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-rose-500 p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                        title="Xóa yêu cầu"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-xs">
                        <div>
                          <span className="text-gray-400 block">Họ và tên</span>
                          <strong className="text-white text-sm">{booking.fullName}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Số điện thoại</span>
                          <strong className="text-[#2f5597] text-sm">{booking.phone}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Thời gian đăng ký</span>
                          <span className="text-gray-300 font-mono">{booking.createdAt}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Dự định xây dựng</span>
                          <span className="text-white font-medium">{booking.plan}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Diện tích xây dựng</span>
                          <span className="text-white font-medium">{booking.area}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Số tầng xây dựng</span>
                          <span className="text-white font-medium">{booking.floors} tầng</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-gray-400 block">Địa điểm xây dựng</span>
                          <span className="text-white font-medium">{booking.location || "Chưa cung cấp"}</span>
                        </div>
                      </div>

                      {booking.requests && (
                        <div className="text-xs bg-white/2.5 p-3 rounded-lg border border-white/5 mt-1">
                          <span className="text-gray-400 block mb-1">Yêu cầu đặc biệt</span>
                          <p className="text-gray-200 leading-relaxed text-justify whitespace-pre-wrap">
                            {booking.requests}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Save Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2f5597] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slideIn">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold">✓</div>
          <div>
            <h5 className="font-bold text-sm">Lưu thành công!</h5>
            <p className="text-[10px] opacity-80">Thay đổi đã được cập nhật trực tiếp trên trang chủ.</p>
          </div>
        </div>
      )}
    </main>
  );
}
