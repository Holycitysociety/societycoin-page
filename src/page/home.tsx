import { Container, Box } from "@material-ui/core";

import "./home.scss";
// import skey from '../img/skey.png';

const Home = () => {
  return (
    <Box className="home-total">
      <Container className="home-middle">
        <span className="home-title">HOLY CITY</span>
        <span className="home-logos">
          <img className="home-logo" src="./img/skey.png" alt="skey" />
        </span>
        <span className="home-title">SOCIETYKEY</span>
      </Container>
    </Box>
  );
};
export default Home;
