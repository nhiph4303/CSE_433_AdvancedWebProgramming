import ProductItem from "./ProductItem";
export default function ProductBlock({ blockTitle }) {
    return (
        <div className="san-pham-group mt-25">
            <div className="title-background">
                <h2>{blockTitle}</h2>
            </div>

            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                    <ProductItem
                        link="http://10.10.128.155/ducthanhcomputer/chuot-khong-day-dareu-lm115g/"
                        summary=""
                        imgLink="/assests/e727498842f747.jpg"
                        title="CHUỘT KHÔNG DÂY DAREU LM115G"
                        price="170.000"
                    />
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                    <ProductItem
                        link="http://10.10.128.155/ducthanhcomputer/chuot-khong-day-dareu-lm115g/"
                        summary=""
                        imgLink="/assests/e727498842f747.jpg"
                        title="CHUỘT KHÔNG DÂY DAREU LM115G"
                        price="170.000"
                    />
                </div>
            </div>
        </div>
    )
}