import { Container, Typography } from "@material-ui/core";
import { Button, Grid } from '@mui/material';
import Card from "./card";

import './about.scss'

const About = () => {
  const adata = [
    {
      imgurl: "./img/scoin.png",
      cointitle: "SOCIETYCOIN",
      coinmoney: "1500.00",
      gifttitle: "SOCIETY GOOD WORKS GIFTED",
      giftmoney: "44.44",
    },
    {
      imgurl: "./img/skey.png",
      cointitle: "SOCIETYKEY",
      coinmoney: "522.22",
      gifttitle: "SOCIETY GOOD WORKS GIFTED",
      giftmoney: "44.44",
    }
  ]
  const bdata = [
    {
      coming: "SOCIETY SUPPLYCHAIN ( COMING SOON)",
      imgurl: "./img/s20.png",
      cointitle: "SOCIETYH20",
      coinmoney: "1500.00",
      gifttitle: "SOCIETY GOOD WORKS GIFTED",
      giftmoney: "44.44",
    },
    {
      coming: "SOCIETYGOOD WORKS FUNDING ( COMING SOON)",
      imgurl: "./img/sgood.png",
      cointitle: "SOCIETYGOOD",
      coinmoney: "1500.00",
      gifttitle: "SOCIETY GOOD WORKS GIFTED",
      giftmoney: "44.44",
    }
  ]
  return (
    <Typography className="claims">
      <Container className="claim">
        <div className="claim-content">
          <div className="connects-wallet">
            <Button variant="contained" className="connects-button" onClick={() => {
              alert('clicked');
            }}>CONNECT WALLET</Button>
          </div>
          <div className="total-balance">
            <p className="balance-title">TOTAL BALANCE</p>
            <p className="balance-number"><span className="balance-number-money">2022.22 </span><img className="balance-number-img" src="./img/symbol.png" /></p>
          </div>
          <div className="gifts">
            <p className="gifts-title">LIFETIME GIFTS RECEIVED</p>
            <p className="gifts-number"><span className="gifts-number-money">522.22 </span><img className="gifts-number-img" src="./img/symbol.png" /></p>
          </div>
          <div className="gifts">
            <p className="gifts-title">GIFTS TO SOCIETY</p>
            <p className="gifts-number"><span className="gifts-number-money">122.22 </span><img className="gifts-number-img" src="./img/symbol.png" /></p>
          </div>
        </div>
        <div className="claim-gifts">
          <Grid xs={12} spacing={2} columns={12}>
            <Grid container columns={12}>
              {adata.map((item, index) => (
                <Grid item xs={12} spacing={2} mt={2} key={index}>
                  <Card imgurl={item.imgurl} cointitle={item.cointitle} coinmoney={item.coinmoney} gifttitle={item.gifttitle} giftmoney={item.giftmoney} />
                </Grid>
              ))}
            </Grid>

            <Grid container columns={12}>
              {bdata.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <p className="claim-gifts-title-name" >{item.coming}</p>
                  <Card imgurl={item.imgurl} cointitle={item.cointitle} coinmoney={item.coinmoney} gifttitle={item.gifttitle} giftmoney={item.giftmoney} />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </div>
      </Container>
    </Typography>);
}
export default About;
