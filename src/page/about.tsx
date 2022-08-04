import { useState, useMemo } from 'react';
import { Container, Box } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import { useEthers, shortenAddress } from '@usedapp/core';

import Card from './card';
import WalletConnectionModal from '../component/walletmodal';
import {
  useSocietyKeyBalance,
  useSocietyCoinBalance,
  useSocietyKeyGift,
  useSocietyCoinGift,
} from '../hooks/useContract';
import { BIG_ZERO } from '../global/constants';

import './about.scss';

const About = () => {
  const [wallet, setWallet] = useState(false);
  const { account } = useEthers();
  const societyKeyBalance = useSocietyKeyBalance(account);
  const societyCoinBalance = useSocietyCoinBalance(account);
  const societyKeyGift = useSocietyKeyGift(account);
  const societyCoinGift = useSocietyCoinGift(account);

  const adata = useMemo(
    () => [
      {
        imgurl: './img/scoin.png',
        cointitle: 'SOCIETYCOIN',
        coinmoney: societyCoinBalance,
        gifttitle: 'SOCIETY GOOD WORKS GIFTED',
        giftmoney: societyCoinGift,
      },
      {
        imgurl: './img/skey.png',
        cointitle: 'SOCIETYKEY',
        coinmoney: societyKeyBalance,
        gifttitle: 'SOCIETY GOOD WORKS GIFTED',
        giftmoney: societyKeyGift,
      },
    ],
    [societyKeyBalance, societyCoinBalance, societyKeyGift, societyCoinGift]
  );
  const bdata = useMemo(
    () => [
      {
        coming: 'SOCIETY SUPPLYCHAIN ( COMING SOON)',
        imgurl: './img/s20.png',
        cointitle: 'SOCIETYH20',
        coinmoney: BIG_ZERO,
        gifttitle: 'SOCIETY GOOD WORKS GIFTED',
        giftmoney: BIG_ZERO,
      },
      {
        coming: 'SOCIETYGOOD WORKS FUNDING ( COMING SOON)',
        imgurl: './img/sgood.png',
        cointitle: 'SOCIETYGOOD',
        coinmoney: BIG_ZERO,
        gifttitle: 'SOCIETY GOOD WORKS GIFTED',
        giftmoney: BIG_ZERO,
      },
    ],
    []
  );

  return (
    <Box className='claims'>
      <WalletConnectionModal open={wallet} onClose={() => setWallet(false)} />
      <Container className='claim'>
        <div className='claim-content'>
          <div className='connects-wallet'>
            <Button
              variant='contained'
              className='connects-button'
              onClick={() => {
                setWallet(true);
              }}
            >
              {account ? shortenAddress(account) : 'CONNECT WALLET'}
            </Button>
          </div>
          <div className='total-balance'>
            <p className='balance-title'>TOTAL BALANCE</p>
            <p className='balance-number'>
              <span className='balance-number-money'>??? </span>
              <img className='balance-number-img' src='./img/symbol.png' />
            </p>
          </div>
          <div className='gifts'>
            <p className='gifts-title'>LIFETIME GIFTS RECEIVED</p>
            <p className='gifts-number'>
              <span className='gifts-number-money'>??? </span>
              <img className='gifts-number-img' src='./img/symbol.png' />
            </p>
          </div>
          <div className='gifts'>
            <p className='gifts-title'>GIFTS TO SOCIETY</p>
            <p className='gifts-number'>
              <span className='gifts-number-money'>??? </span>
              <img className='gifts-number-img' src='./img/symbol.png' />
            </p>
          </div>
        </div>
        <div className='claim-gifts'>
          <div>
            <Grid container columns={12}>
              {adata.map((item, index) => (
                <Grid item xs={12} mt={2} key={index}>
                  <Card
                    imgurl={item.imgurl}
                    cointitle={item.cointitle}
                    coinmoney={item.coinmoney}
                    gifttitle={item.gifttitle}
                    giftmoney={item.giftmoney}
                  />
                </Grid>
              ))}
            </Grid>

            <Grid container columns={12}>
              {bdata.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <p className='claim-gifts-title-name'>{item.coming}</p>
                  <Card
                    imgurl={item.imgurl}
                    cointitle={item.cointitle}
                    coinmoney={item.coinmoney}
                    gifttitle={item.gifttitle}
                    giftmoney={item.giftmoney}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Box>
  );
};
export default About;
