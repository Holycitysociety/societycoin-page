import { useState, useMemo, useEffect, useCallback } from 'react'
import { Container, Box, useMediaQuery, useTheme } from '@material-ui/core'
import { Button, Grid } from '@mui/material'
import { useEthers, shortenAddress, TransactionStatus } from '@usedapp/core'
import { toast } from 'react-toastify'
import { ethers } from 'ethers'

import Card from './card'
import WalletConnectionModal from '../component/walletmodal'
import {
    useSocietyNobleBalance,
    useSocietyCoinBalance,
    useSocietyKeyBalance,
    useSocietyNobleGift,
    useSocietyCoinGift,
    useSocietyKeyGift,
    useClaimSocietyNoble,
    useClaimSocietyCoin,
    useClaimSocietyKey,
    useSendSocietyKey,
} from '../hooks/useContract'
import useEstimateGas from '../hooks/useEstimateGas'
import {
    SocietyNobleContract,
    SocietyCoinContract,
    SocietyKeyContract,
} from '../global/constants'
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
    const {
        claimSocietyNobleGas,
        claimSocietyCoinGas,
        claimSocietyKeyGas,
        sendSocietyKeyGas,
    } = useEstimateGas()
    const societyNobleBalance = useSocietyNobleBalance(account)
    const societyCoinBalance = useSocietyCoinBalance(account)
    const societyKeyBalance = useSocietyKeyBalance(account)
    const societyNobleGift = useSocietyNobleGift(account)
    const societyCoinGift = useSocietyCoinGift(account)
    const societyKeyGift = useSocietyKeyGift(account)
    const { claimSocietyNobleState, claimSocietyNoble } = useClaimSocietyNoble()
    const { claimSocietyCoinState, claimSocietyCoin } = useClaimSocietyCoin()
    const { claimSocietyKeyState, claimSocietyKey } = useClaimSocietyKey()
    const { sendSocietyKeyState, sendSocietyKey } = useSendSocietyKey()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const claimSN = useCallback(
        async (address: string | undefined = account) => {
            console.log(address)
            try {
                const estimatedGas = await claimSocietyNobleGas(address)
                claimSocietyNoble(address, { gasLimit: estimatedGas })
            } catch (error) {
                if (error.error)
                    toast.error(
                        error.error.data.message
                            .split('execution reverted: ')
                            .join(''),
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
                        error.error.data.message
                            .split('execution reverted: ')
                            .join(''),
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

    const claimSK = useCallback(
        async (address: string | undefined = account) => {
            console.log(address)
            try {
                const estimatedGas = await claimSocietyKeyGas(address)
                claimSocietyKey(address, { gasLimit: estimatedGas })
            } catch (error) {
                if (error.error)
                    toast.error(
                        error.error.data.message
                            .split('execution reverted: ')
                            .join(''),
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

    const sendSK = useCallback(
        async (
            address: string | undefined = account,
            amount: string | undefined,
        ) => {
            try {
                const num: string = amount as string
                const tokenAmount = ethers.utils.parseEther(num)
                console.log(tokenAmount)
                const estimatedGas = await sendSocietyKeyGas(
                    address,
                    tokenAmount,
                )
                sendSocietyKey(address, tokenAmount, { gasLimit: estimatedGas })
            } catch (error) {
                if (error.error)
                    toast.error(
                        error.error.data.message
                            .split('execution reverted: ')
                            .join(''),
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
        toastMsg(claimSocietyNobleState)
    }, [claimSocietyNobleState])

    useEffect(() => {
        toastMsg(claimSocietyCoinState)
    }, [claimSocietyCoinState])

    useEffect(() => {
        toastMsg(claimSocietyKeyState)
    }, [claimSocietyKeyState])

    useEffect(() => {
        toastMsg(sendSocietyKeyState)
    }, [sendSocietyKeyState])

    const adata = useMemo(
        () => [
            {
                imgurl: './img/scoin.png',
                copycontract: './img/copycontract.png',
                cointitle: 'SOCIETYCOIN',
                coinmoney: societyCoinBalance,
                gifttitle: 'SOCIETYKEY GOOD WORKS GIFT',
                giftmoney: societyCoinGift,
                buttonname: 'RECEIVE',
                claim: claimSC,
                copyAddress: () => {
                    navigator.clipboard.writeText(SocietyCoinContract)
                },
            },
            {
                imgurl: './img/snoble.png',
                copycontract: './img/copycontract.png',
                cointitle: 'SOCIETYNOBLE',
                coinmoney: societyNobleBalance,
                gifttitle: 'SOCIETYKEY GOOD WORKS GIFT',
                giftmoney: societyNobleGift,
                buttonname: 'RECEIVE',
                claim: claimSN,
                copyAddress: () => {
                    navigator.clipboard.writeText(SocietyNobleContract)
                },
            },
            {
                imgurl: './img/skey.png',
                copycontract: './img/copycontract.png',
                cointitle: 'SOCIETYKEY',
                coinmoney: societyKeyBalance,
                gifttitle: 'THE KEY TO BUILDING A HIGH TRUST SOCIETY',
                reward: 'reward',
                buttonname: 'REDEEM',
                background: '#88abc6',
                claim: claimSK,
                sendGift: sendSK,
                copyAddress: () => {
                    navigator.clipboard.writeText(SocietyKeyContract)
                },
            },
        ],
        [
            societyNobleBalance,
            societyCoinBalance,
            societyKeyBalance,
            societyNobleGift,
            societyCoinGift,
        ],
    )
    const bdata = useMemo(
        () => [
            {
                coming: 'SOCIETY SUPPLYCHAIN (COMING SOON)',
                imgurl: './img/scoming.png',
                opacity: 'opacity',
                cointitle: 'SOCIETYH20',
                coinmoney: BIG_ZERO,
                gifttitle: 'SOCIETY GOOD WORKS GIFT',
                giftmoney: BIG_ZERO,
                buttonname: 'RECEIVE',
            },
            {
                coming: 'SOCIETY GOOD WORKS FUNDING (COMING SOON)',
                imgurl: './img/scoming.png',
                opacity: 'opacity',
                cointitle: 'SOCIETYGOOD',
                coinmoney: BIG_ZERO,
                gifttitle: 'SOCIETY GOOD WORKS GIFT',
                giftmoney: BIG_ZERO,
                buttonname: 'RECEIVE',
            },
        ],
        [],
    )

    return (
        <Box className='claims'>
            <WalletConnectionModal
                open={wallet}
                onClose={() => setWallet(false)}
            />
            <Container className='claim'>
                <div className='claim-content'>
                    <div className='connects-wallet'>
                        <Button variant='contained' className='connects-button'>
                            <div
                                onClick={() => {
                                    setWallet(true)
                                }}
                            >
                                {account
                                    ? `${shortenAddress(account)}`
                                    : 'CONNECT WALLET'}
                            </div>

                            <img
                                className='connects-button-refresh'
                                src='./img/refresh.PNG'
                                onClick={() => {
                                    window.location.reload()
                                }}
                            />
                        </Button>
                    </div>
                    <div className='total-balance'>
                        <p className='balance-title'>TOTAL BALANCE</p>
                        <p className='balance-number'>
                            <span className='balance-number-money'>
                                {(
                                    (societyCoinBalance &&
                                        societyNobleBalance &&
                                        Number(
                                            societyCoinBalance.add(
                                                societyNobleBalance,
                                            ),
                                        ) / 1e18) ||
                                    0
                                ).toFixed(4)}
                            </span>
                            <img
                                className='balance-number-img'
                                src='./img/symbol.png'
                            />
                        </p>
                    </div>
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
                                    <p className='claim-gifts-title-name'>
                                        {coming}
                                    </p>
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
