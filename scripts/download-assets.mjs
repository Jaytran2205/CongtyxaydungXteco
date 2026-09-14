import fs from "fs";
import path from "path";
import https from "https";

const assets = [
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/arteco-logo.svg",
    dest: "public/images/logo.svg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/plus-du-an.svg",
    dest: "public/images/plus-du-an.svg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/arteco-pattern-2.svg",
    dest: "public/images/arteco-pattern-2.svg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/trang-chu-01.jpg",
    dest: "public/images/hero-bg.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/bg-pattern-arteco.jpg",
    dest: "public/images/bg-pattern-arteco.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/ve-arteco-1.jpg",
    dest: "public/images/ve-arteco-1.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/linh-vuc-arteco-2.jpg",
    dest: "public/images/linh-vuc-arteco-2.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/linh-vuc-arteco-1.jpg",
    dest: "public/images/linh-vuc-arteco-1.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/diem-noi-bat-arteco-12.jpg",
    dest: "public/images/diem-noi-bat-arteco-12.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/about-ceo-arteco-3.png",
    dest: "public/images/about-ceo-arteco-3.png"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2024/08/biet-thu-nghia-do-kh-tran-huy-tai0.jpg",
    dest: "public/images/biet-thu-nghia-do.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2024/07/TRAN-HUY-TAI-TRUNG-KINH-CAU-GIAY0.jpg",
    dest: "public/images/tht-tower.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2023/10/1-6.jpg",
    dest: "public/images/pacifico-villa.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2025/02/anh-cam-nang.png",
    dest: "public/images/anh-cam-nang.png"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2026/06/723977064_1541088751363853_3733715496527725003_n.webp",
    dest: "public/images/news-1.webp"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2026/06/Le-khoi-cong-nha-pho-Ha-Huy-Giap.webp",
    dest: "public/images/news-2.webp"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2026/06/Thumb_blog-web.webp",
    dest: "public/images/news-3.webp"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2026/04/678307918_1486367260169336_7930712773491096875_n.webp",
    dest: "public/images/news-4.webp"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/arteco-concrete-bg-official-updated.jpg",
    dest: "public/images/concrete-bg.jpg"
  },
  {
    url: "https://arteco.vn/wp-content/uploads/2022/08/VIDEO-GIOI-THIEU-WEB.mp4",
    dest: "public/videos/intro.mp4"
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close(() => {
          console.log(`Downloaded: ${dest}`);
          resolve();
        });
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log("Starting asset download...");
  for (const asset of assets) {
    try {
      await download(asset.url, asset.dest);
    } catch (err) {
      console.error(`Error downloading ${asset.url}:`, err.message);
    }
  }
  console.log("All downloads complete!");
}

main();
