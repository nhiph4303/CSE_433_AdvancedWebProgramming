import type { NewsDataForHomePage } from "../models/NewsData";

export function getNewsList(id: number): Promise<NewsDataForHomePage[]> {
  console.log(id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Intel Ra mắt CPU Core I9-10900K 10 nhân 20 luồng Max 5.3Ghz",
          thumbnail: "/assets/2068314-1024x476.jpg",
          summary: "Chi tiết về CPU Intel mới nhất dòng Core i9...",
        },
        {
          id: "2",
          title: "Bo mạch chủ AMD B550 ra mắt vào tháng 6",
          thumbnail:
            "/assets/2-CPU-Moi-cua-AMD-se-gia-nhap-dong-Ryzen-3000-1.png",
          summary: "AMD vừa công bố dòng chipset tầm trung B550...",
        },
        {
          id: "3",
          title:
            "Card NVIDIA GeForce RTX-3000 series Sẽ ra mắt vào tháng 9/2020",
          thumbnail: "/assets/nvidia-rtx-3080-ti-1140x570-1-1024x512-1.jpg",
          summary: "NVIDIA Ampere hứa hẹn mang lại hiệu năng vượt trội...",
        },
      ]);
    }, 100);
  });
}
