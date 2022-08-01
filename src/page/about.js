import { Container, Typography } from "@material-ui/core";
import { Button, Grid } from '@mui/material';
import Contact from "./contact";

import './about.css'

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
      imgurl: "./img/s20.png",
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
            <p className="balance-number">2022.22</p>
          </div>
          <div className="gifts">
            <p className="gifts-title">LIFETIME GIFTS RECEIVED</p>
            <p className="gifts-number">522.22</p>
          </div>
          <div className="gifts">
            <p className="gifts-title">GIFTS TO SOCIETY</p>
            <p className="gifts-number">122.22</p>
          </div>
        </div>
        <div className="claim-gifts">
          <Grid xs={12} columns={12}>
            <Grid container spacing={3} xs={12} columns={12}>
              {adata.map((item, index) => (
                <Grid item xs={10} md={6} key={index}>
                  <Contact imgurl={item.imgurl} cointitle={item.cointitle} coinmoney={item.coinmoney} gifttitle={item.gifttitle} giftmoney={item.giftmoney} />
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={3} xs={12} columns={12}>
              {bdata.map((item, index) => (
                <Grid item xs={10} md={6} key={index}>
                  <p style={{ fontSize: "20px", padding: "30px 0px 10px", color: "#d0d1d5", letterSpacing: "0.1em" }}>{item.coming}</p>
                  <Contact imgurl={item.imgurl} cointitle={item.cointitle} coinmoney={item.coinmoney} gifttitle={item.gifttitle} giftmoney={item.giftmoney} />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </div>
      </Container>
    </Typography>);
}
export default About;
