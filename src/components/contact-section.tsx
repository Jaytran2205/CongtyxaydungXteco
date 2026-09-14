"use client";

import { useState } from "react";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { CloseIcon } from "@/components/icons";

export default function ContactSection() {
  const { data } = useWebData();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    intent: "Nhà ở gia đình",
    area: "70-100m2",
    floors: "",
    location: "",
    requirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.floors ||
      !formData.location
    ) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setFormData({
        name: "",
        phone: "",
        intent: "Nhà ở gia đình",
        area: "70-100m2",
        floors: "",
        location: "",
        requirements: "",
      });
    }, 2000);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white overflow-hidden">
      {/* Background delicate micro-dot grid pattern matching About Us header */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <h6 className="text-xs uppercase tracking-widest font-bold text-white/80">
              {data.contact.ctaTitle}
            </h6>
            <h2 className="text-3xl lg:text-4xl font-black leading-tight text-white uppercase tracking-wide">
              {data.contact.ctaSubtitle}
            </h2>
            <div className="mt-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block px-10 py-3.5 text-xs font-bold tracking-wider uppercase bg-[#ba3434] hover:bg-[#a02c2c] text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-red-950/40 cursor-pointer"
              >
                {data.contact.buttonText}
              </button>
            </div>
          </div>

          {/* Right Column: Book Image Banner */}
          <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-xl overflow-hidden group shadow-2xl border border-white/10">
            <Image
              src="/images/contact-architects.png"
              alt="Tư vấn thiết kế & thi công XTÉCO"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white text-gray-900 w-full max-w-[800px] rounded-xl shadow-2xl overflow-hidden relative my-8">
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1"
              aria-label="Đóng biểu mẫu"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#2f5597]">Cảm ơn bạn!</h3>
                <p className="text-gray-600">
                  Thông tin đăng ký của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.
                </p>
              </div>
            ) : (
              <div className="p-6 md:p-10">
                <div className="text-center mb-8">
                  <h6 className="text-xs uppercase tracking-widest font-bold text-[#586280] mb-2">
                    Thông tin liên hệ
                  </h6>
                  <h2 className="text-xl md:text-2xl font-bold text-[#2f5597] px-4">
                    Liên hệ với {data.general.brandName} để đặt lịch tư vấn miễn phí
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Họ và tên *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nguyễn Văn A"
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Số điện thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="09xx.xxx.xxx"
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm"
                    />
                  </div>

                  {/* Intent */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Dự định xây dựng *</label>
                    <select
                      name="intent"
                      value={formData.intent}
                      onChange={handleInputChange}
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm bg-white"
                    >
                      <option value="Nhà ở gia đình">Nhà ở gia đình</option>
                      <option value="Nhà phố kết hợp kinh doanh">Nhà phố kết hợp kinh doanh</option>
                      <option value="Biệt thự">Biệt thự</option>
                      <option value="Công trình khác">Công trình khác</option>
                    </select>
                  </div>

                  {/* Area */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Diện tích xây dựng *</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm bg-white"
                    >
                      <option value="70-100m2">70-100m2</option>
                      <option value="Trên 100m2">Trên 100m2</option>
                      <option value="Dưới 70m2">Dưới 70m2</option>
                    </select>
                  </div>

                  {/* Floors */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Số tầng xây dựng *</label>
                    <input
                      type="number"
                      name="floors"
                      value={formData.floors}
                      onChange={handleInputChange}
                      required
                      placeholder="4"
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Địa điểm xây dựng *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="Hà Nội,..."
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm"
                    />
                  </div>

                  {/* Requirements */}
                  <div className="md:col-span-3 flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">
                      Yêu cầu đặc biệt tới {data.general.brandName}
                    </label>
                    <textarea
                      name="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Chi tiết yêu cầu thiết kế/thi công..."
                      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2f5597] text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-3 mt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#2f5597] hover:bg-[#20376c] text-white font-semibold py-3 px-6 rounded-lg uppercase tracking-wider text-sm transition-colors shadow-md"
                    >
                      Gửi thông tin tư vấn
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
