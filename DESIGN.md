---
name: XTÉCO Design System
description: Visual design specification and token values for XTÉCO branding
colors:
  primary: "#2f5597"
  accent: "#e30a17"
  neutral-bg: "#ffffff"
  neutral-fg: "#111827"
  muted-bg: "#f8f9fc"
  border: "#f3f4f6"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "#ba3434"
    textColor: "#ffffff"
    rounded: "8px"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "#a02c2c"
  card:
    backgroundColor: "#ffffff"
    rounded: "16px"
    border: "1px solid #f3f4f6"
---

# Design

## Overview
Hệ thống thiết kế của XTÉCO hướng tới phân khúc chủ đầu tư cao cấp, thể hiện sự chuyên nghiệp, tin cậy và chuẩn mực vượt thời gian. Bố cục sử dụng nhiều khoảng trắng (whitespace) thoáng đãng, kết hợp màu sắc nhận diện nổi bật và chuyển động vi mô tinh tế để tôn vinh hình ảnh các công trình thực tế.

## Colors
- **Màu chủ đạo (Primary):** Tím than sáng `#2f5597` (lấy từ logo chính của XTÉCO), tượng trưng cho sự sang trọng, chiều sâu trí tuệ và chuẩn mực.
- **Màu điểm nhấn (Accent):** Đỏ tươi `#e30a17` (lấy từ mũi tên logo), dùng cho các nút kêu gọi hành động (CTA), liên kết và các đường viền/icon cần làm nổi bật.
- **Màu nền phụ (Muted Background):** Xám xanh nhạt `#f8f9fc` tạo chiều sâu cho các khối thông tin phụ.
- **Màu văn bản (Neutral Foreground):** Xám đậm `#111827` cho độ tương phản sắc nét và dễ đọc.

## Typography
Sử dụng bộ font chữ không chân hiện đại (Sans-serif - mặc định là hệ thống font Inter hoặc Outfit) để tạo cảm giác tối giản, chuyên nghiệp.
- **Tiêu đề lớn (Display):** Cỡ chữ lớn `2.25rem` trở lên, in đậm `800` (font-extrabold) hoặc `900` (font-black), thường viết hoa (uppercase) để tạo điểm nhấn cấu trúc.
- **Văn bản thường (Body):** Cỡ chữ `1rem` (16px) hoặc `0.875rem` (14px) với khoảng cách dòng `1.5` để người dùng không bị mỏi mắt khi đọc các bài viết phong thủy và luật nhà ở.

## Elevation
Sử dụng các lớp đổ bóng nhẹ (shadow-sm, shadow-md) để phân tách các khối thông tin nổi bật trên nền trắng, tránh lạm dụng bóng quá tối hoặc quá lớn gây cảm giác mất tự nhiên.

## Components
- **Nút kêu gọi hành động (Primary Button):** Nền đỏ tươi `#ba3434`, bo góc `8px`, chữ trắng, có hiệu ứng chuyển màu mượt mà sang đỏ đậm `#a02c2c` khi rê chuột (hover).
- **Thẻ nội dung (Cards):** Nền trắng `#ffffff`, bo góc lớn `16px` (`rounded-2xl`), đường viền siêu mảnh `1px solid #f3f4f6`, đổ bóng nhẹ.
- **Dòng dự án ngăn cách (Project Row):** Hàng ngang phân chia bởi đường kẻ `1px solid #e5e7eb`, rê chuột vào sẽ hiển thị ảnh thu nhỏ (thumbnail) bay mượt mà ở góc phải.

## Do's and Don'ts
- **Nên làm (Do):**
  - Giữ khoảng cách giữa các phần lớn từ `py-20` đến `py-28` để giao diện có không gian thở thoải mái.
  - Sử dụng đúng mã màu tím than `#4b1080` cho các phần tử tiêu đề và thương hiệu chính.
  - Trình bày tin tức rõ ràng, căn đều văn bản (text-justify) để tăng tính chuyên nghiệp.
- **Không nên làm (Don't):**
  - Không lạm dụng các icon lớn màu vàng hoặc đỏ rực đặt cạnh nhau.
  - Không sử dụng màu xanh lam hoặc các màu ngoài nhận diện thương hiệu cho các nút bấm chính.
  - Không sử dụng ảnh giả lập (placeholders) thô sơ; luôn sử dụng hình ảnh thực tế chất lượng cao.
