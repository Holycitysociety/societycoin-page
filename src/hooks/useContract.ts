import { Interface } from '@ethersproject/abi'
import { Contract } from '@ethersproject/contracts'
import {
    SocietyNobleContract,
    SocietyCoinContract,
    SocietyKeyContract,
} from '../global/constants'
import { useCall, useContractFunction } from '@usedapp/core'
import { BigNumber } from '@ethersproject/bignumber'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import SocietyNoble from '../global/SocietyNoble.json'
import SocietyCoin from '../global/SocietyCoin.json'
import SocietyKey from '../global/SocietyKey.json'

const SocietyNobleABI = new Interface(SocietyNoble)
const SocietyCoinABI = new Interface(SocietyCoin)
const SocietyKeyABI = new Interface(SocietyKey)
const contractSN = new Contract(SocietyNobleContract, SocietyNobleABI)
const contractSC = new Contract(SocietyCoinContract, SocietyCoinABI)
const contractSK = new Contract(SocietyKeyContract, SocietyKeyABI)

export function useClaimSocietyNoble() {
    const { send, state } = useContractFunction(contractSN, 'claim')
    return {
        claimSocietyNobleState: state,
        claimSocietyNoble: send,
    }
}

export function useClaimSocietyCoin() {
    const { send, state } = useContractFunction(contractSC, 'claim')
    return {
        claimSocietyCoinState: state,
        claimSocietyCoin: send,
    }
}

export function useClaimSocietyKey() {
    const { send, state } = useContractFunction(contractSK, 'claim')
    return {
        claimSocietyKeyState: state,
        claimSocietyKey: send,
    }
}

export function useSendSocietyKey() {
    const { send, state } = useContractFunction(contractSK, 'transfer')
    return {
        sendSocietyKeyState: state,
        sendSocietyKey: send,
    }
}

export function useSocietyNobleBalance(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSN,
                method: 'balanceOf',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}

export function useSocietyCoinBalance(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSC,
                method: 'balanceOf',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}

export function useSocietyKeyBalance(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSK,
                method: 'balanceOf',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}

export function useSocietyNobleGift(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSN,
                method: 'calculate',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}

export function useSocietyCoinGift(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSC,
                method: 'calculate',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}

export function useSocietyKeyGift(address: string | undefined): BigNumber {
    const { value } =
        useCall(
            address && {
                contract: contractSK,
                method: 'calculate',
                args: [address],
            },
        ) ?? {}
    return value?.[0]
}
