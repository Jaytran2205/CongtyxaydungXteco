"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";

export default function PrivacyPolicyPage() {
  const { data } = useWebData();

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Banner with Premium Bright Navy Gradient & Micro-dot grid */}
        <section className="relative py-20 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white text-center overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider animate-banner-text">
              Chính Sách Bảo Mật
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              Privacy Policy
            </p>
            <p className="text-xs text-white/70 tracking-widest mt-2">
              Các cam kết bảo vệ thông tin khách hàng tại {data.general.brandName}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[800px] mx-auto px-4 leading-relaxed text-justify text-sm text-gray-600 flex flex-col gap-6">
          <p>
            Chào mừng bạn đến với website của <strong>{data.general.legalName}</strong>. Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người truy cập.
          </p>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">1. Thu thập thông tin</h3>
            <p>
              Chúng tôi thu thập thông tin cá nhân (như họ tên, số điện thoại, nhu cầu xây dựng) khi bạn chủ động điền vào form đăng ký đặt lịch tư vấn hoặc liên hệ trên trang web của chúng tôi.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">2. Sử dụng thông tin</h3>
            <p>
              Mục đích duy nhất của việc thu thập thông tin là để phản hồi các yêu cầu tư vấn, cung cấp báo giá thi công, gửi các chương trình khuyến mãi xây dựng, và nâng cao chất lượng dịch vụ của XTÉCO dành cho khách hàng.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">3. Bảo mật thông tin</h3>
            <p>
              Thông tin cá nhân của bạn được lưu trữ an toàn trong cơ sở dữ liệu nội bộ của chúng tôi. XTÉCO cam kết không chia sẻ, bán, hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào ngoại trừ các trường hợp được pháp luật Việt Nam quy định.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">4. Thay đổi chính sách</h3>
            <p>
              Chúng tôi có quyền cập nhật chính sách bảo mật này bất kỳ lúc nào. Mọi thay đổi sẽ được công bố trực tiếp trên trang web này để đảm bảo tính minh bạch.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
