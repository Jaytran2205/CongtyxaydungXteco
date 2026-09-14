import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { WebDataProvider } from "@/context/web-data-context";
import QuickContact from "@/components/quick-contact";
import ConsultationModal from "@/components/consultation-modal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "XTÉCO | Chuyên gia Xây dựng theo tiêu chuẩn quốc tế",
  description:
    "Xtéco ra đời với mong muốn thay đổi cách thức xây dựng và quy chuẩn về một công trình chất lượng của người Việt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
                      mutation.target.removeAttribute('bis_skin_checked');
                    }
                    mutation.addedNodes.forEach((node) => {
                      if (node.nodeType === 1) {
                        if (node.hasAttribute('bis_skin_checked')) {
                          node.removeAttribute('bis_skin_checked');
                        }
                        node.querySelectorAll('[bis_skin_checked]').forEach((el) => {
                          el.removeAttribute('bis_skin_checked');
                        });
                      }
                    });
                  });
                });
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['bis_skin_checked']
                });
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <WebDataProvider>
          {children}
          <QuickContact />
          <ConsultationModal />
        </WebDataProvider>
      </body>
    </html>
  );
}
