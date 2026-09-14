"use client";

import { useState } from "react";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { X, ShieldAlert } from "lucide-react";

export default function ConsultationModal() {
  const { isConsultationModalOpen, setConsultationModalOpen, addConsultation } = useWebData();

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

  if (!isConsultationModalOpen) return null;

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
      setConsultationModalOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative max-w-2xl w-full bg-[#f8f9fc] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-auto overflow-y-auto border border-white/20 bg-cover bg-center text-gray-800"
        style={{
          backgroundImage: 'url("/images/concrete-bg.jpg")',
        }}
      >
        {/* Semi-transparent overlay to match target texture */}
        <div className="absolute inset-0 bg-white/92 z-0 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setConsultationModalOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form Body */}
        <div className="relative z-10 p-6 md:p-10 flex flex-col gap-6">
          {successMsg ? (
            <div className="py-16 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#2f5597] text-[#ba3434] rounded-full flex items-center justify-center text-3xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#2f5597] uppercase">Đăng ký thành công!</h3>
              <p className="text-gray-600 text-sm max-w-sm">
                Cảm ơn bạn đã đăng ký tư vấn. Đại diện của XTÉCO sẽ liên hệ lại với bạn trong vòng 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Header */}
              <div className="text-center">
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
                  Thông tin liên hệ
                </span>
                <h2 className="text-xl md:text-2xl font-black text-[#2f5597] leading-tight max-w-lg mx-auto">
                  Liên hệ với XTÉCO để đặt lịch tư vấn miễn phí
                </h2>
              </div>

              {/* Grid 1: Name, Phone, Building plan */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912345678"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Dự định xây dựng
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  >
                    <option value="Nhà ở gia đình">Nhà ở gia đình</option>
                    <option value="Biệt thự - Villa">Biệt thự - Villa</option>
                    <option value="Nhà lô phố - Liền kề">Nhà lô phố - Liền kề</option>
                    <option value="Văn phòng - Chung cư">Văn phòng - Chung cư</option>
                    <option value="Công trình thương mại">Công trình thương mại</option>
                  </select>
                </div>
              </div>

              {/* Grid 2: Area, Floors, Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Diện tích xây dựng
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  >
                    <option value="Dưới 70m2">Dưới 70m2</option>
                    <option value="70-100m2">70-100m2</option>
                    <option value="100-150m2">100-150m2</option>
                    <option value="Trên 150m2">Trên 150m2</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Số tầng xây dựng
                  </label>
                  <input
                    type="number"
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    placeholder="4"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                    Địa điểm xây dựng
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Hà Nội, Hải Phòng..."
                    className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wide">
                  Yêu cầu đặc biệt tới XTÉCO
                </label>
                <textarea
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="Ví dụ: Thiết kế phong cách Tân cổ điển, hướng Tây..."
                  rows={4}
                  className="w-full px-3 py-2 bg-white/70 border border-gray-300/80 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-gray-800 resize-none"
                />
              </div>

              {/* Error warning label */}
              {errorMsg && (
                <div className="text-xs text-red-600 font-bold flex items-center gap-1.5 justify-center">
                  <ShieldAlert className="w-4 h-4" /> {errorMsg}
                </div>
              )}

              {/* Grid 3: Mock reCAPTCHA & Submit button */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-2">
                {/* Mock reCAPTCHA card */}
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm min-w-[260px] self-start md:self-auto select-none">
                  <input
                    type="checkbox"
                    id="captcha"
                    checked={isCaptchaChecked}
                    onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                    className="w-5.5 h-5.5 border-gray-300 rounded text-[#2f5597] focus:ring-[#2f5597] cursor-pointer"
                  />
                  <label htmlFor="captcha" className="text-xs font-bold text-gray-700 cursor-pointer">
                    Tôi không phải là người máy
                  </label>
                  <div className="ml-auto flex flex-col items-center justify-center gap-0.5">
                    <Image
                      src="/images/recaptcha.png"
                      alt="reCAPTCHA"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#2f5597] hover:bg-[#20376c] text-white font-extrabold text-xs tracking-wider uppercase rounded-lg shadow-lg cursor-pointer transition-all duration-300"
                >
                  Gửi thông tin tư vấn
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
