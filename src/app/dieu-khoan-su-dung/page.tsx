"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";

export default function TermsOfServicePage() {
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
              Điều Khoản Sử Dụng
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              Terms of Service
            </p>
            <p className="text-xs text-white/70 tracking-widest mt-2">
              Các quy định chung khi trải nghiệm dịch vụ trên website của {data.general.brandName}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[800px] mx-auto px-4 leading-relaxed text-justify text-sm text-gray-600 flex flex-col gap-6">
          <p>
            Chào mừng bạn đến với trang web của <strong>{data.general.legalName}</strong> (XTÉCO Construction). Khi truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản sử dụng dưới đây.
          </p>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">1. Quyền sở hữu trí tuệ</h3>
            <p>
              Tất cả các nội dung, thiết kế công trình, hình ảnh thực tế thi công, phối cảnh 3D và các tài liệu khác đăng tải trên trang web này đều thuộc quyền sở hữu trí tuệ của XTÉCO. Nghiêm cấm mọi hành vi sao chép, phân phối hoặc sử dụng cho mục đích thương mại mà chưa được sự đồng ý bằng văn bản của XTÉCO.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">2. Sử dụng website</h3>
            <p>
              Bạn đồng ý sử dụng website này cho các mục đích hợp pháp, tìm kiếm thông tin dịch vụ xây dựng, xem các dự án mẫu và liên hệ tư vấn. Nghiêm cấm hành vi gửi thông tin giả mạo, spam form liên hệ hoặc làm gián đoạn kỹ thuật của trang web.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#2f5597] uppercase mb-2">3. Từ chối trách nhiệm</h3>
            <p>
              Mọi thông tin về đơn giá xây dựng, chính sách hỗ trợ trên website mang tính chất tham khảo chung. Đơn giá thực tế sẽ phụ thuộc vào khảo sát địa chất, quy mô bản vẽ chi tiết và ký kết hợp đồng thi công chính thức giữa hai bên.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
