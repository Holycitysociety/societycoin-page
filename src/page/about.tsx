import { useState, useMemo, useEffect, useCallback } from 'react'
import { Container, Box } from '@material-ui/core'
import { Button, Grid } from '@mui/material'
import { useEthers, shortenAddress, TransactionStatus } from '@usedapp/core'
import { toast } from 'react-toastify'
import Card from './card'
import WalletConnectionModal from '../component/walletmodal'
import {
  useSocietyKeyBalance,
  useSocietyCoinBalance,
  useSocietyKeyGift,
  useSocietyCoinGift,
  useClaimSocietyKey,
  useClaimSocietyCoin,
} from '../hooks/useContract'
import useEstimateGas from '../hooks/useEstimateGas'
import { BIG_ZERO } from '../global/constants'

import './about.scss'

const toastMsg = (state: TransactionStatus) => {
  if (state.status === 'PendingSignature')
    toast.info('Waiting for signature', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    })

  if (state.status === 'Exception')
    toast.warning('User denied signature', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    })

  if (state.status === 'Mining')
    toast.info('Pending transaction', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    })

  if (state.status === 'Success')
    toast.success('Successfully confirmed', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    })
}

const About = () => {
  const [wallet, setWallet] = useState(false)
  const { account } = useEthers()
  const { claimSocietyKeyGas, claimSocietyCoinGas } = useEstimateGas()
  const societyKeyBalance = useSocietyKeyBalance(account)
  const societyCoinBalance = useSocietyCoinBalance(account)
  const societyKeyGift = useSocietyKeyGift(account)
  const societyCoinGift = useSocietyCoinGift(account)
  const { claimSocietyKeyState, claimSocietyKey } = useClaimSocietyKey()
  const { claimSocietyCoinState, claimSocietyCoin } = useClaimSocietyCoin()

  const claimSK = useCallback(
    async (address: string | undefined = account) => {
      console.log(address)
      try {
        const estimatedGas = await claimSocietyKeyGas(address)
        claimSocietyKey(address, { gasLimit: estimatedGas })
      } catch (error) {
        if (error.error)
          toast.error(
            error.error.data.message.split('execution reverted: ').join(''),
            {
              position: toast.POSITION.BOTTOM_RIGHT,
              hideProgressBar: true,
            },
          )
        else
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
          })
      }
    },
    [account],
  )

  const claimSC = useCallback(
    async (address: string | undefined = account) => {
      console.log(address, 'SC')
      try {
        const estimatedGas = await claimSocietyCoinGas(address)
        claimSocietyCoin(address, { gasLimit: estimatedGas })
      } catch (error) {
        if (error.error)
          toast.error(
            error.error.data.message.split('execution reverted: ').join(''),
            {
              position: toast.POSITION.BOTTOM_RIGHT,
              hideProgressBar: true,
            },
          )
        else
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
          })
      }
    },
    [account],
  )

  useEffect(() => {
    toastMsg(claimSocietyKeyState)
  }, [claimSocietyKeyState])

  useEffect(() => {
    toastMsg(claimSocietyCoinState)
  }, [claimSocietyCoinState])

  const adata = useMemo(
    () => [
      {
        imgurl: './img/scoin.png',
        cointitle: 'SOCIETYCOIN',
        coinmoney: societyCoinBalance,
        gifttitle: 'SOCIETY GOOD WORKS GIFT',
        giftmoney: societyCoinGift,
        claim: claimSC,
      },
      {
        imgurl: './img/skey.png',
        cointitle: 'SOCIETYKEY',
        coinmoney: societyKeyBalance,
        gifttitle: 'SOCIETY GOOD WORKS GIFT',
        giftmoney: societyKeyGift,
        claim: claimSK,
      },
    ],
    [societyKeyBalance, societyCoinBalance, societyKeyGift, societyCoinGift],
  )
  const bdata = useMemo(
    () => [
      {
        coming: 'SOCIETY SUPPLYCHAIN ( COMING SOON)',
        imgurl: './img/s20.png',
        cointitle: 'SOCIETYH20',
        coinmoney: BIG_ZERO,
        gifttitle: 'SOCIETY GOOD WORKS GIFT',
        giftmoney: BIG_ZERO,
      },
      {
        coming: 'SOCIETYGOOD WORKS FUNDING ( COMING SOON)',
        imgurl: './img/sgood.png',
        cointitle: 'SOCIETYGOOD',
        coinmoney: BIG_ZERO,
        gifttitle: 'SOCIETY GOOD WORKS GIFT',
        giftmoney: BIG_ZERO,
      },
    ],
    [],
  )

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
                setWallet(true)
              }}
            >
              {account ? (
                shortenAddress(account)
              ) : (
                <>
                  CONNECT
                  <br />
                  WALLET
                </>
              )}
              <i className='fa-regular fa-copy'></i>
            </Button>
          </div>
          <div className='total-balance'>
            <p className='balance-title'>TOTAL BALANCE</p>
            <p className='balance-number'>
              <span className='balance-number-money'>
                {(societyCoinBalance &&
                  societyKeyBalance &&
                  Number(societyCoinBalance.add(societyKeyBalance)) / 1e18) ||
                  0}
              </span>
              <img className='balance-number-img' src='./img/symbol.png' />
            </p>
          </div>
          {/* <div className='gifts'>
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
          </div> */}
        </div>
        <div className='claim-gifts'>
          <div>
            <Grid
              container
              columns={12}
              direction='row'
              justifyContent='center'
            >
              {adata.map(({ ...item }, index) => (
                <Grid item xs={12} md={8} mt={2} key={index}>
                  <Card {...item} />
                </Grid>
              ))}
            </Grid>

            <Grid
              container
              columns={12}
              direction='row'
              justifyContent='center'
            >
              {bdata.map(({ coming, ...item }, index) => (
                <Grid item xs={12} md={8} key={index}>
                  <p className='claim-gifts-title-name'>{coming}</p>
                  <Card {...item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Box>
  )
}
export default About
