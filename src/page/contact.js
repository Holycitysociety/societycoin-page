import { Typography } from "@material-ui/core";

import './contact.css'

const Contact = (props) => {
  const { cointitle, coinmoney, gifttitle, giftmoney, imgurl } = props
  return <Typography>
    <div className="coin-total">
      <div className="coin-img"><img src={imgurl} alt="imgs" style={{ width: '90.5px', height: '90px' }} /></div>
      <div className="coin-content">
        <p className="coin-number">
          <span>{cointitle}</span>
          <span>{coinmoney}</span>
        </p>
        <p className="coin-gift">
          <span>{gifttitle}</span>
          <span>{giftmoney}</span>
        </p>
        <p>sssss</p>
      </div>
    </div>
  </Typography>;
}
export default Contact;
