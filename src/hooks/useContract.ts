import { Interface } from '@ethersproject/abi';
import { Contract } from '@ethersproject/contracts';
import { SocietyKeyContract, SocietyCoinContract } from '../global/constants';
import { useCall, useContractFunction } from '@usedapp/core';
import { BigNumber } from '@ethersproject/bignumber';
import SocietyKey from '../global/SocietyKey.json';
import SocietyCoin from '../global/SocietyCoin.json';

const SocietyKeyABI = new Interface(SocietyKey);
const SocietyCoinABI = new Interface(SocietyCoin);
const contractSK = new Contract(SocietyKeyContract, SocietyKeyABI);
const contractSC = new Contract(SocietyCoinContract, SocietyCoinABI);

export function useClaimSocietyKey() {
  const { send, state } = useContractFunction(contractSK, 'claim');
  return {
    claimSocietyKeyState: state,
    claimSocietyKey: send,
  };
}

export function useClaimSocietyCoin() {
  const { send, state } = useContractFunction(contractSC, 'claim');
  return {
    claimSocietyCoinState: state,
    claimSocietyCoin: send,
  };
}

export function useSocietyKeyBalance(address: string | undefined): BigNumber {
  const { value } =
    useCall(
      address && {
        contract: contractSK,
        method: 'balanceOf',
        args: [address],
      }
    ) ?? {};
  return value?.[0];
}

export function useSocietyCoinBalance(address: string | undefined): BigNumber {
  const { value } =
    useCall(
      address && {
        contract: contractSC,
        method: 'balanceOf',
        args: [address],
      }
    ) ?? {};
  return value?.[0];
}

export function useSocietyKeyGift(address: string | undefined): BigNumber {
  const { value } =
    useCall(
      address && {
        contract: contractSK,
        method: 'calculate',
        args: [address],
      }
    ) ?? {};
  return value?.[0];
}

export function useSocietyCoinGift(address: string | undefined): BigNumber {
  const { value } =
    useCall(
      address && {
        contract: contractSC,
        method: 'calculate',
        args: [address],
      }
    ) ?? {};
  return value?.[0];
}
