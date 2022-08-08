import { memo, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BigNumber } from '@ethersproject/bignumber'

import './card.scss'

const Card = (props: {
  cointitle: string
  gifttitle: string
  imgurl: string
  coinmoney: BigNumber
  giftmoney: BigNumber
  claim?: (address?: string | undefined) => void
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2a2d3c',
    border: '1px solid #2a2d3c',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  }

  const { cointitle, gifttitle, imgurl, coinmoney, giftmoney, claim } = props

  const [open, setOpen] = useState(false)
  const [claimAddress, setClaimAddress] = useState('')
  const handleOpen = () => claim && setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className='coin-total'>
        <div className='coin-img'>
          <img src={imgurl} alt='imgs' className='coin-img-coin' />
        </div>
        <div className='coin-content'>
          <div className='coin-number'>
            <span>{cointitle}</span>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span>{Number(coinmoney) / 1e18 || 0}</span>{' '}
              <img className='coin-number-symbol' src='./img/symbol.png' />{' '}
            </p>
          </div>
          <div className='coin-gift'>
            <span>{gifttitle}</span>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span>{Number(giftmoney) / 1e18 || 0}</span>{' '}
              <img className='coin-number-symbol' src='./img/symbol.png' />{' '}
            </p>
          </div>
          <div className='coin-button-group'>
            <img className='coin-button-group-img' src='./img/left.png' />
            <button
              className='coin-button-receive'
              onClick={() => {
                if (claim) claim()
              }}
            >
              RECEIVE{' '}
              <img
                className='coin-button-group-symbol'
                src='./img/symbol.png'
              />
              GIFT
            </button>
            <p className='coin-button-or'>OR</p>
            <button onClick={handleOpen} className='coin-button-gift'>
              GIVE
              <img
                className='coin-button-group-symbol'
                src='./img/symbol.png'
              />
              GIFT
            </button>
            <img className='coin-button-group-img' src='./img/right.png' />
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='give-modal'>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                        Claim
                    </Typography> */}
            <p
              style={{
                fontSize: '20px',
                color: '#d0d1d5',
                letterSpacing: '0.2em',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              GIVE
              <img
                style={{ width: '11px', height: '20px', margin: '0px 6px' }}
                src='./img/symbol.png'
              />
              GIFT
            </p>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              {/* <input
                value={claimAddress}
                onChange={(e) => setClaimAddress(e.target.value)}
                placeholder='RECIPIENT ADDRESS'
                id='claim'
                type='text'
              ></input> */}
              <TextField
                fullWidth
                label='RECIPIENT ADDRESS'
                id='claim'
                sx={{ mb: 5, mt: 2 }}
                style={{ backgroundColor: '#eee', borderRadius: '5px' }}
                value={claimAddress}
                onChange={(e) => setClaimAddress(e.target.value)}
              />
            </Box>
            {/* <Typography id="transition-modal-description" sx={{ mt: 3 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
            <Box>
              <Button
                className='card-modal-button'
                sx={{ mr: 3 }}
                variant='contained'
                onClick={() => {
                  console.log(claimAddress)
                  console.log(claim)
                  if (claim) claim(claimAddress)
                }}
              >
                Confirm
              </Button>
              <Button
                variant='contained'
                className='card-modal-button-a'
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
export default memo(Card)
