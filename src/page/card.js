import { Typography } from "@material-ui/core";

import './card.scss'

const Card = (props) => {
    const { cointitle, coinmoney, gifttitle, giftmoney, imgurl } = props
    return <Typography>
        <div className="coin-total">
            <div className="coin-img"><img src={imgurl} alt="imgs" style={{ width: '90.5px', height: '90px' }} /></div>
            <div className="coin-content">
                <p className="coin-number">
                    <span>{cointitle}</span>
                    <p style={{ display: "flex", alignItems: "center" }}><span>{coinmoney}</span>  <img style={{ width: "11px", height: "19px", marginLeft: "3px" }} src="./img/symbol.png" /> </p>
                </p>
                <p className="coin-gift">
                    <span>{gifttitle}</span>
                    <p style={{ display: "flex", alignItems: "center" }}><span>{giftmoney}</span>  <img style={{ width: "11px", height: "19px", marginLeft: "3px" }} src="./img/symbol.png" /> </p>
                </p>
                <div className="coin-button-group">
                    <img style={{ width: "11px", height: "19px", marginLeft: "1px" }} src="./img/left.png" />
                    <button className="coin-button" onClick={() => {
                        alert('clicked');
                    }}>RECEIVE<img style={{ width: "10px", height: "17px", margin: "0px 4px" }} src="./img/symbol.png" />GIFT</button>
                    <img style={{ width: "11px", height: "19px", marginLeft: "1px" }} src="./img/right.png" />
                </div>
            </div>
        </div>
    </Typography>;
}
export default Card;
