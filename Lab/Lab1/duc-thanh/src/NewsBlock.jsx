import NewsItem from "./NewsItem";
export default function NewsBlock({ link, blockTitle }) {
    return (
        <div className="news">
            <div className="container">
                <a href={link}>
                    <h3 className="news-title"><span>{blockTitle}</span></h3>
                </a>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <NewsItem
                            link="http://10.10.128.155/ducthanhcomputer/intel-ra-mat-cpu-core-i9-10900k-10-nhan-20-luong-max-5-3ghz/"
                            imgLink="/assests/2068314-1024x4.jpg"
                            title="Intel Ra mắt CPU Core I9-10900K 10 nhân 20 luồng Max 5.3Ghz"
                            summary="Intel Core i9-10900K thuộc dòng vi xử lý cho phép mở khoá hệ số nhân, hỗ trợ ép xung, xung..."
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <NewsItem
                            link="http://10.10.128.155/ducthanhcomputer/bo-mach-chu-amd-b550-ra-mat-vao-thang-6/"
                            imgLink="/assests/2-CPU-Moi-cua-.png"
                            title="Bo mạch chủ AMD B550 ra mắt vào tháng 6"
                            summary="Đầu năm nay, có thông tin rằng AMD sẽ bắt đầu sản xuất hàng loạt chipset B550 và A520 vào..."
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <NewsItem
                            link="http://10.10.128.155/ducthanhcomputer/card-nvidia-geforce-rtx-3000-series-se-ra-mat-vao-thang-9-2020/"
                            imgLink="/assests/nvidia-rtx-308.jpg"
                            title="Card NVIDIA GeForce RTX-3000 series Sẽ ra mắt vào tháng 9/2020"
                            summary="Như chúng ta đã biết NVIDIA đã giới thiệu cấu trúc Ampere sử dụng trên card đồ họa mới của..."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}