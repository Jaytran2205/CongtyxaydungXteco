"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";

export default function NewsDetailClient({ slug }: { slug: string }) {
  const { data, setConsultationModalOpen } = useWebData();

  // Combine featured and others, and search for match
  const allNews = [data.news.featured, ...data.news.others];
  const news = allNews.find((item) => item.href.endsWith(`/${slug}`));

  if (!news) {
    return (
      <>
        <Header />
        <main className="flex-grow pt-32 pb-20 text-center bg-white">
          <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-[#2f5597]">Không tìm thấy bài viết!</h2>
            <p className="text-gray-500 text-sm">Bài viết này không tồn tại hoặc đã được gỡ bỏ khỏi hệ thống.</p>
            <Link href="/tin-tuc" className="mt-4 px-6 py-2.5 bg-[#ba3434] text-white rounded-lg text-xs font-bold uppercase">
              Quay lại danh sách tin tức
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Generate dynamic rich text based on slug to provide fully fleshed-out articles
  const renderArticleContent = () => {
    if (slug === "phong-thuy-nha-o-2026") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p className="font-semibold text-gray-900 text-lg md:text-xl leading-relaxed border-l-4 border-[#ba3434] pl-4 italic bg-gray-50 py-3 rounded-r-lg">
            Trong quan niệm ngàn đời của người Việt, phong thủy nhà ở không chỉ là nghệ thuật sắp đặt không gian sống mà còn là khoa học về môi trường, khí động học và địa từ trường. Bước sang năm 2026 (Bính Ngọ – Thiên Hà Thủy), việc nắm vững các nguyên tắc phong thủy xây dựng sẽ giúp gia chủ kiến tạo một tổ ấm hưng thịnh, cát tường và trường tồn với thời gian.
          </p>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            1. Tổng quan vận khí & Các tuổi đẹp làm nhà năm Bính Ngọ 2026
          </h3>
          <p>
            Năm 2026 thuộc can chi Bính Ngọ, nạp âm Thiên Hà Thủy (Nước trên trời). Đây là năm có trường năng lượng biến động mạnh mẽ, mở ra nhiều cơ hội bứt phá cho các dự án xây dựng và quy hoạch nhà ở. Để việc khởi công diễn ra thuận buồm xuôi gió, gia chủ cần tính toán cẩn trọng 3 đại hạn: <strong>Tam Tai, Kim Lâu và Hoang Ốc</strong>.
          </p>
          <div className="bg-[#2f5597]/5 border border-[#2f5597]/20 p-5 rounded-xl">
            <h4 className="font-bold text-[#2f5597] mb-2 uppercase text-sm">Danh sách các tuổi đại cát khởi công xây dựng năm 2026:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">✔ <strong>1957 (Đinh Dậu)</strong> – 70 tuổi (Nhất Cát)</li>
              <li className="flex items-center gap-2">✔ <strong>1960 (Canh Tý)</strong> – 67 tuổi (Nhì Nghi)</li>
              <li className="flex items-center gap-2">✔ <strong>1969 (Kỷ Dậu)</strong> – 58 tuổi (Nhất Cát)</li>
              <li className="flex items-center gap-2">✔ <strong>1975 (Ất Mão)</strong> – 52 tuổi (Tứ Tấn Tài)</li>
              <li className="flex items-center gap-2">✔ <strong>1978 (Mậu Ngọ)</strong> – 49 tuổi (Nhì Nghi)</li>
              <li className="flex items-center gap-2">✔ <strong>1984 (Giáp Tý)</strong> – 43 tuổi (Nhất Cát)</li>
              <li className="flex items-center gap-2">✔ <strong>1993 (Quý Dậu)</strong> – 34 tuổi (Nhất Cát)</li>
              <li className="flex items-center gap-2">✔ <strong>1996 (Bính Tý)</strong> – 31 tuổi (Tứ Tấn Tài)</li>
            </ul>
          </div>
          <p>
            <em>* Lưu ý:</em> Nếu tuổi của gia chủ không nằm trong danh sách trên nhưng kế hoạch xây dựng không thể trì hoãn, giải pháp <strong>mượn tuổi người thân có tuổi đẹp</strong> là phương án tối ưu và được thực hiện phổ biến. XTÉCO luôn hỗ trợ lập bảng tra cứu tuổi và hướng dẫn thủ tục chu toàn cho từng gia chủ.
          </p>

          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden my-8 shadow-lg border border-gray-100">
            <Image
              src="/images/news-meeting.png"
              alt="Tư vấn phong thủy quy hoạch biệt thự XTÉCO"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            2. Hướng nhà đón tài lộc và các yếu tố ngoại vi
          </h3>
          <p>
            Về phương vị, năm 2026 hướng <strong>Chính Nam</strong> (Ly Cung), <strong>Đông Nam</strong> (Tốn Cung) và <strong>Chính Bắc</strong> (Khảm Cung) là những hướng đón vượng khí dồi dào nhất. Khi thiết kế ngoại thất, gia chủ cần chú ý:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Minh đường tụ thủy:</strong> Mặt tiền thông thoáng, có khoảng lùi sân vườn hoặc hồ nước tuần hoàn giúp sinh khí tích tụ, tài vận hanh thông.</li>
            <li><strong>Tọa sơn hướng thủy:</strong> Phía sau công trình cần có điểm tựa vững chãi (tòa nhà, đồi cao hoặc cây lớn) mang lại sự che chở và ổn định gia đạo.</li>
            <li><strong>Tránh xung sát:</strong> Tuyệt đối không để góc nhọn của nhà đối diện (mũi tên độc) hoặc đường đâm thẳng trực diện vào cửa chính.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            3. Phân bổ công năng nội thất: Kết hợp Phong thủy & Kiến trúc hiện đại
          </h3>
          <p>
            Tại XTÉCO, chúng tôi không áp dụng phong thủy một cách máy móc, cứng nhắc làm phá vỡ thẩm mỹ kiến trúc. Thay vào đó, chúng tôi áp dụng <strong>Phong thủy Vi khí hậu</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Phòng khách:</strong> Đặt tại trung tâm đón sáng, tạo luồng đối lưu không khí tự nhiên mát mẻ vào mùa hè và ấm áp vào mùa đông.</li>
            <li><strong>Không gian Bếp:</strong> Tuân thủ nghiêm ngặt nguyên lý <em>&ldquo;Tọa hung hướng cát&rdquo;</em>, cách xa khu vệ sinh và tránh gió lùa trực diện.</li>
            <li><strong>Giếng trời & Cầu thang:</strong> Thiết kế thông tầng khoa học đóng vai trò như &ldquo;trục cột sống&rdquo; phân phối năng lượng tươi mới đến từng phòng ngủ.</li>
          </ul>

          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl my-6">
            <h4 className="text-lg font-bold text-[#ba3434] uppercase mb-2">Lời khuyên từ Kiến trúc sư trưởng XTÉCO:</h4>
            <p className="text-sm text-gray-300 italic">
              &ldquo;Một ngôi nhà chuẩn phong thủy trước hết phải là một ngôi nhà thông thoáng, đủ ánh sáng tự nhiên và đem lại sự tiện nghi, bình an tuyệt đối cho người sử dụng. Hãy để kiến trúc sư hiện đại hóa các giá trị truyền thống để công trình của bạn vừa sang trọng, vừa tràn đầy sinh khí.&rdquo;
            </p>
          </div>
        </div>
      );
    }

    if (slug === "luat-dat-dai-cap-phep-xay-dung-2026") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p className="font-semibold text-gray-900 text-lg md:text-xl leading-relaxed border-l-4 border-[#ba3434] pl-4 italic bg-gray-50 py-3 rounded-r-lg">
            Năm 2026 ghi nhận bước chuyển mình lớn của khung pháp lý bất động sản và xây dựng với hiệu lực đồng bộ của Luật Đất đai (sửa đổi), Luật Nhà ở và Luật Xây dựng. Việc nắm rõ các quy định cấp phép và tiêu chuẩn kỹ thuật là điều kiện tiên quyết giúp chủ đầu tư bảo vệ quyền lợi hợp pháp và đẩy nhanh tiến độ dự án.
          </p>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            1. Những điểm mới quan trọng về cấp phép xây dựng năm 2026
          </h3>
          <p>
            So với các năm trước, quy trình quản lý cấp phép nhà ở riêng lẻ đô thị năm 2026 được số hóa và siết chặt kiểm tra thực địa với các điểm mới nổi bật:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Thẩm định trực tuyến qua cổng dịch vụ công quốc gia:</strong> Hồ sơ bản vẽ kiến trúc và kết cấu được tải lên định dạng số chuẩn hóa, rút ngắn thời gian xử lý từ 21 ngày xuống còn 15 ngày làm việc.</li>
            <li><strong>Kiểm soát nghiêm ngặt ranh giới và mật độ xây dựng:</strong> Áp dụng bản đồ tọa độ số VN-2000, kiểm tra sai phạm khoảng lùi, ban công vươn ra lộ giới và chiều cao tầng chuẩn chỉ.</li>
            <li><strong>Cam kết an toàn tuyệt đối công trình lân cận:</strong> Bắt buộc có biên bản khảo sát hiện trạng công trình liền kề và phương án thi công móng chống sụt lún có chữ ký xác nhận của đơn vị tư vấn năng lực hạng 1 hoặc 2.</li>
          </ul>

          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden my-8 shadow-lg border border-gray-100">
            <Image
              src="/images/news-blueprint.png"
              alt="Hồ sơ xin cấp phép xây dựng chuẩn pháp lý"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            2. Trọn bộ hồ sơ xin cấp phép xây dựng nhà ở riêng lẻ
          </h3>
          <p>
            Để tránh việc hồ sơ bị trả về hoặc yêu cầu chỉnh sửa nhiều lần, chủ đầu tư cần chuẩn bị tối thiểu 02 bộ hồ sơ bao gồm:
          </p>
          <div className="space-y-3 bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#ba3434]">1.</span>
              <span><strong>Đơn đề nghị cấp giấy phép xây dựng:</strong> Theo mẫu số 01 ban hành kèm theo Nghị định chính phủ mới nhất.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#ba3434]">2.</span>
              <span><strong>Bản sao công chứng giấy tờ chứng minh quyền sử dụng đất:</strong> Giấy chứng nhận quyền sử dụng đất (Sổ đỏ / Sổ hồng) hợp pháp.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#ba3434]">3.</span>
              <span><strong>02 bộ bản vẽ thiết kế kỹ thuật thi công:</strong> Gồm mặt bằng vị trí công trình trên lô đất; mặt bằng các tầng, mặt đứng và mặt cắt chính; mặt bằng móng, chi tiết kết cấu móng và sơ đồ cấp thoát nước, cấp điện.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#ba3434]">4.</span>
              <span><strong>Hồ sơ năng lực của tổ chức/cá nhân thiết kế:</strong> Chứng chỉ hành nghề hoạt động xây dựng còn hiệu lực.</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            3. Dịch vụ hỗ trợ pháp lý và xin cấp phép trọn gói từ XTÉCO
          </h3>
          <p>
            Thấu hiểu những khó khăn, bỡ ngỡ của khách hàng trong quá trình chuẩn bị hồ sơ pháp lý phức tạp, <strong>XTÉCO cung cấp dịch vụ bao trọn gói từ A đến Z</strong>: Khảo sát đo đạc hiện trạng, lập bản vẽ xin phép chuẩn chỉ quy hoạch đô thị, nộp hồ sơ, tiếp đoàn kiểm tra và bàn giao Giấy phép xây dựng tận tay quý khách đúng hẹn cam kết.
          </p>
        </div>
      );
    }

    if (slug === "huong-bep-ban-tho-phong-thuy") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p className="font-semibold text-gray-900 text-lg md:text-xl leading-relaxed border-l-4 border-[#ba3434] pl-4 italic bg-gray-50 py-3 rounded-r-lg">
            Trong nghệ thuật kiến trúc nhà ở, nếu phòng khách đại diện cho bộ mặt và danh tiếng thì phòng bếp được ví như “trái tim” sưởi ấm tài lộc, còn phòng thờ là “cội nguồn” gìn giữ phúc đức gia tiên. Việc bố trí hướng bếp, hướng bàn thờ đúng phong thủy và chuẩn kích thước Lỗ Ban là chìa khóa mở ra sự thịnh vượng, êm ấm cho cả gia đình.
          </p>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            1. Nguyên tắc vàng bố trí Hướng Bếp: &ldquo;Tọa Hung Hướng Cát&rdquo;
          </h3>
          <p>
            Khác với hướng nhà hay hướng cửa chính cần đặt ở cung tốt, bếp nấu lại hoạt động theo cơ chế thiêu đốt. Do đó, nguyên tắc cốt lõi ngàn đời trong phong thủy Bát Trạch là <strong>&ldquo;Tọa Hung Hướng Cát&rdquo;</strong> (đặt tại phương xấu để đốt đi điềm hung, mặt bếp nhìn về phương tốt để đón rước cát khí).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg text-sm">
              <strong className="text-red-700 block mb-1">Các điều tuyệt đối cấm kỵ:</strong>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>Bếp đối diện trực tiếp cửa chính hoặc cửa phòng ngủ.</li>
                <li>Bếp nằm ngay dưới xà ngang trần nhà (Xà ngang áp đỉnh).</li>
                <li>Bếp áp sát hoặc đối diện cửa phòng vệ sinh (Thủy Hỏa tương xung).</li>
                <li>Đặt bếp phía dưới phòng ngủ hoặc phòng thờ ở tầng trên.</li>
              </ul>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg text-sm">
              <strong className="text-green-800 block mb-1">Các vị trí đại cát:</strong>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>Tọa tại các cung: Họa Hại, Tuyệt Mệnh, Lục Sát, Ngũ Quỷ.</li>
                <li>Hướng nhìn về: Sinh Khí, Thiên Y, Diên Niên, Phục Vị.</li>
                <li>Có chỗ dựa tường vững chắc, thoáng khí nhưng kín gió.</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden my-8 shadow-lg border border-gray-100">
            <Image
              src="/images/news-site.png"
              alt="Thi công không gian nội thất phòng bếp cao cấp XTÉCO"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            2. Nguyên tắc đặt Phòng Thờ & Bàn Thờ trang nghiêm
          </h3>
          <p>
            Bàn thờ là nơi ngự trị của thần linh và gia tiên, đòi hỏi tính tôn nghiêm và tĩnh lặng tuyệt đối (Tụ Khí). Các nguyên tắc cần nhớ khi thiết kế bàn thờ:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vị trí cao nhất:</strong> Trong nhà phố, biệt thự nhiều tầng, phòng thờ luôn được ưu tiên đặt ở tầng cao nhất (tầng tum hoặc sân thượng) để không bị bất kỳ không gian sinh hoạt nào đè lên.</li>
            <li><strong>Hướng bàn thờ:</strong> Hướng của bàn thờ là hướng quay lưng của người đứng lễ, phải nhìn về hướng tốt hợp cung mệnh của gia chủ.</li>
            <li><strong>Tránh ánh sáng gắt và gió lùa:</strong> Không để luồng gió thổi trực tiếp vào bát hương, sử dụng rèm thờ hoặc vách CNC họa tiết trang nghiêm để che chắn.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            3. Ứng dụng Thước Lỗ Ban chuẩn cung đỏ phong thủy
          </h3>
          <p>
            Trong thiết kế và sản xuất đồ gỗ nội thất, XTÉCO luôn ứng dụng thước Lỗ Ban chính xác theo từng loại hình:
          </p>
          <div className="bg-[#2f5597]/5 border border-[#2f5597]/20 p-5 rounded-xl text-sm space-y-3">
            <p>✔ <strong>Thước Lỗ Ban 38.8cm (Âm trạch & Đồ thờ cúng):</strong> Dùng để định kích thước chiều cao, chiều ngang và chiều sâu của bàn thờ, án gian, tủ thờ. Các kích thước vàng cung đỏ may mắn: <em>81cm (Tài Vượng), 107cm (Thêm Đinh), 127cm (Tiến Bảo), 153cm (Lục Hợp), 175cm (Phú Quý), 197cm (Đăng Khoa)</em>.</p>
            <p>✔ <strong>Thước Lỗ Ban 42.9cm (Dương trạch & Khối nội thất):</strong> Dùng đo kích thước tủ bếp (chiều cao mặt bếp chuẩn 81cm hoặc 86cm), giường ngủ, bàn làm việc.</p>
            <p>✔ <strong>Thước Lỗ Ban 52.2cm (Thông thủy cửa):</strong> Dùng đo kích thước thông gió, cửa đi chính, cửa sổ và cửa phòng ngủ đón luồng khí cát lành.</p>
          </div>
        </div>
      );
    }

    if (slug === "quy-chuan-pccc-nha-o-ket-hop-kinh-doanh") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p className="font-semibold text-gray-900 text-lg md:text-xl leading-relaxed border-l-4 border-[#ba3434] pl-4 italic bg-gray-50 py-3 rounded-r-lg">
            Theo các quy định pháp luật mới nhất về phòng cháy chữa cháy (PCCC), loại hình nhà ở riêng lẻ có kết hợp hoạt động sản xuất, kinh doanh bắt buộc phải đáp ứng đầy đủ các tiêu chuẩn an toàn PCCC nghiêm ngặt trước khi đi vào hoạt động.
          </p>
          <h3 className="text-xl font-bold text-[#2f5597] uppercase tracking-wide pt-4 border-b pb-2">
            1. Các tiêu chuẩn PCCC bắt buộc đối với nhà phố kinh doanh
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Thiết lập lối thoát nạn thứ hai độc lập (thang ngoài trời hoặc lối ban công thoát hiểm sang nhà bên cạnh).</li>
            <li>Trang bị hệ thống báo cháy tự động liên động, chuông báo động khẩn cấp và bình chữa cháy xách tay tại từng tầng.</li>
            <li>Cửa ngăn cháy lan EI30/EI60 giữa khu vực kinh doanh ở tầng trệt và khu vực sinh hoạt gia đình ở các tầng trên.</li>
          </ul>
          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden my-8 shadow-lg border border-gray-100">
            <Image
              src="/images/news-meeting.png"
              alt="Thiết kế hệ thống PCCC an toàn cho nhà phố kinh doanh"
              fill
              className="object-cover"
            />
          </div>
          <p>
            Tại XTÉCO, khi thiết kế và thi công các công trình nhà phố kinh doanh, biệt thự thương mại, chúng tôi luôn tích hợp các giải pháp kiến trúc an toàn như lối thoát hiểm ban công mở rộng, thang dây khẩn cấp và sử dụng các vật liệu chống cháy cao cấp, đảm bảo công trình vừa tối ưu kinh doanh vừa bảo vệ an toàn tính mạng tuyệt đối cho cả gia đình.
          </p>
        </div>
      );
    }

    // Default Fallback text
    return (
      <>
        <p className="font-semibold text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          Bài viết chia sẻ cẩm nang xây dựng, phong thủy kiến trúc và luật nhà ở chất lượng cao từ các chuyên gia hàng đầu của XTÉCO.
        </p>
        <p className="mb-4">
          Xây dựng ngôi nhà mơ ước đòi hỏi sự chuẩn bị kỹ lưỡng từ ngân sách, pháp lý, phong thủy đến thiết kế tối ưu công năng. Đội ngũ kiến trúc sư XTÉCO luôn sẵn sàng đồng hành cùng bạn trên hành trình kiến tạo tổ ấm lý tưởng.
        </p>
      </>
    );
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Breadcrumbs and Back */}
        <div className="bg-[#f8f9fc] border-b border-gray-100 py-3.5">
          <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center text-xs">
            <Link href="/tin-tuc" className="flex items-center gap-1.5 text-gray-500 hover:text-[#ba3434] font-semibold transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Danh sách bài viết
            </Link>
            <div className="text-gray-400">
              <Link href="/" className="hover:underline">Trang chủ</Link> / <Link href="/tin-tuc" className="hover:underline">Tin tức</Link> / <span className="text-gray-600 font-bold">Bài viết</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <section className="py-12 md:py-20 max-w-[900px] mx-auto px-4">
          <div className="flex flex-col gap-6">
            
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-[#ba3434] font-bold">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {news.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 3 phút đọc</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#2f5597] leading-snug">
              {news.title}
            </h1>

            {/* Main Visual Image */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md my-4 border border-gray-100">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Text rendering */}
            <article className="text-gray-600 text-justify text-sm md:text-base leading-relaxed flex flex-col gap-5">
              {renderArticleContent()}
            </article>

            {/* Bottom Actions Banner */}
            <div className="border-t border-gray-150 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold">
                <span>Chia sẻ bài viết:</span>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-[#2f5597] hover:text-white transition-colors cursor-pointer"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-[#ba3434] hover:text-white transition-colors cursor-pointer"><Bookmark className="w-4 h-4" /></button>
              </div>

              <button
                onClick={() => setConsultationModalOpen(true)}
                className="px-6 py-2.5 bg-[#2f5597] hover:bg-[#ba3434] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors duration-300"
              >
                Nhận tư vấn xây dựng miễn phí
              </button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
