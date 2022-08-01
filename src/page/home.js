import { Container, Typography } from "@material-ui/core";

import './home.css'
import skey from '../img/skey.png';

const Home = () => {
  return (
    <Typography className="home-total">
      <Container className="home-middle">
        <p className="home-title" >HOLY CITY</p>
        <p className="home-logos"><img className="home-logo" src={skey} alt="skey" /></p>
        <p className="home-title" >SOCIETYKEY</p>
      </Container>
    </Typography>
  );
}
export default Home;
