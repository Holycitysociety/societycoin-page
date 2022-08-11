import { Container, Box } from '@material-ui/core'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './home.scss'
// import skey from '../img/skey.png';

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/societykey')
    }, 2 * 1000) //30 sec idle time
  }, [])
  return (
    // <Box className='home-total'>
    //   <Container className='home-middle'>
    //     <span className='home-title'>HOLY CITY</span>
    //     <span className='home-logos'>
    //       <img className='home-logo' src='./img/skey.png' alt='skey' />
    //     </span>
    //     <span className='home-title'>SOCIETYKEY</span>
    //   </Container>
    // </Box>
    <div className='home-total'>
      <img className='home-logos' src='./img/spage.PNG' alt='spage' />
    </div>
  )
}
export default Home
