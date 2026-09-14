"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const { data, addConsultation } = useWebData();

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Nhà ở gia đình");
  const [area, setArea] = useState("70-100m2");
  const [floors, setFloors] = useState("4");
  const [location, setLocation] = useState("");
  const [requests, setRequests] = useState("");
  
  // reCAPTCHA state
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg("Vui lòng điền Họ tên và Số điện thoại!");
      return;
    }

    if (!isCaptchaChecked) {
      setErrorMsg("Vui lòng xác minh Bạn không phải là người máy!");
      return;
    }

    // Add consultation details
    addConsultation({
      fullName,
      phone,
      plan,
      area,
      floors,
      location,
      requests,
    });

    setSuccessMsg(true);
    
    // Reset Form
    setTimeout(() => {
      setSuccessMsg(false);
      setFullName("");
      setPhone("");
      setPlan("Nhà ở gia đình");
      setArea("70-100m2");
      setFloors("4");
      setLocation("");
      setRequests("");
      setIsCaptchaChecked(false);
    }, 2500);
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Banner with Premium Bright Navy Gradient & Micro-dot grid */}
        <section className="relative py-24 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white text-center overflow-hidden">
          {/* Subtle lighting glow elements */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider animate-banner-text">
              Liên Hệ &amp; Hợp Tác
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              Contact &amp; Partnership
            </p>
            <p className="text-xs md:text-sm text-white/70 tracking-wider mt-2 max-w-2xl mx-auto leading-relaxed animate-banner-text [animation-delay:0.25s]">
              Thành công của chúng tôi cũng đến từ sự hợp tác với các Quý đối tác chất lượng
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-[#ba3434] uppercase tracking-wider block">Liên hệ XTÉCO</span>
                <h2 className="text-2xl font-extrabold text-[#2f5597] uppercase leading-tight">
                  Thông tin kết nối
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Nếu bạn có bất kỳ thắc mắc nào về thiết kế, đơn giá thi công xây dựng trọn gói hoặc muốn hợp tác dự án, xin vui lòng điền form bên cạnh hoặc liên hệ trực tiếp với chúng tôi qua các kênh dưới đây.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2f5597]/5 text-[#2f5597] rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#2f5597] uppercase tracking-wide">Địa chỉ trụ sở</h4>
                    <p className="text-gray-600 text-sm mt-1">{data.general.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2f5597]/5 text-[#2f5597] rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#2f5597] uppercase tracking-wide">Điện thoại / Hotline</h4>
                    <p className="text-gray-600 text-sm mt-1">{data.general.hotline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2f5597]/5 text-[#2f5597] rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#2f5597] uppercase tracking-wide">Email liên hệ</h4>
                    <p className="text-gray-600 text-sm mt-1">{data.general.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7 w-full bg-[#f8f9fc] border border-gray-100 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
              {successMsg ? (
                <div className="py-20 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-[#2f5597] text-[#ba3434] rounded-full flex items-center justify-center text-3xl font-bold shadow-md">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#2f5597] uppercase">Đăng ký thành công!</h3>
                  <p className="text-gray-600 text-sm max-w-sm">
                    Thông tin liên hệ của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại ngay lập tức.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="text-left mb-2">
                    <h3 className="text-xl font-extrabold text-[#2f5597] uppercase">Đặt lịch tư vấn miễn phí</h3>
                    <p className="text-gray-500 text-xs mt-1">Vui lòng cung cấp chi tiết dự kiến xây dựng để nhận tư vấn tối ưu nhất</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912345678"
                        className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Dự định xây dựng</label>
                      <select
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                      >
                        <option value="Nhà ở gia đình">Nhà ở gia đình</option>
                        <option value="Biệt thự - Villa">Biệt thự - Villa</option>
                        <option value="Nhà lô phố - Liền kề">Nhà lô phố - Liền kề</option>
                        <option value="Văn phòng - Cửa hàng">Văn phòng - Cửa hàng</option>
                        <option value="Công trình khác">Công trình khác</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Diện tích (m2)</label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                      >
                        <option value="Dưới 70m2">Dưới 70m2</option>
                        <option value="70-100m2">70-100m2</option>
                        <option value="100-150m2">100-150m2</option>
                        <option value="Trên 150m2">Trên 150m2</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Số tầng dự định</label>
                      <input
                        type="number"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        placeholder="4"
                        className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Địa điểm xây dựng</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Hà Nội, Hải Phòng, Quảng Ninh..."
                      className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">Yêu cầu đặc biệt</label>
                    <textarea
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                      placeholder="Chi tiết công năng hoặc các ghi chú khác cho kiến trúc sư..."
                      rows={3}
                      className="px-3 py-2 bg-white border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="text-xs text-red-600 font-bold flex items-center gap-1.5 justify-center">
                      <ShieldAlert className="w-4 h-4" /> {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-2">
                    {/* Mock reCAPTCHA */}
                    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm min-w-[250px] self-start sm:self-auto select-none">
                      <input
                        type="checkbox"
                        id="contact-captcha"
                        checked={isCaptchaChecked}
                        onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                        className="w-5 h-5 border-gray-300 rounded text-[#2f5597] focus:ring-[#2f5597] cursor-pointer"
                      />
                      <label htmlFor="contact-captcha" className="text-xs font-bold text-gray-700 cursor-pointer">
                        Tôi không phải là người máy
                      </label>
                      <div className="ml-auto flex flex-col items-center justify-center gap-0.5">
                        <Image
                          src="/images/recaptcha.png"
                          alt="reCAPTCHA"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <span className="text-[6px] text-gray-400 font-bold uppercase tracking-tighter">reCAPTCHA</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#2f5597] hover:bg-[#ba3434] text-white font-extrabold text-xs tracking-wider uppercase rounded-lg shadow-lg cursor-pointer transition-colors duration-300"
                    >
                      Gửi thông tin
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
