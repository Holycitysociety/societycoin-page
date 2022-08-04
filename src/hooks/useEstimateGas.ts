import { Interface } from '@ethersproject/abi';
import { Contract } from '@ethersproject/contracts';
import { useEthers } from '@usedapp/core';
import SocietyKey from '../global/SocietyKey.json';
import SocietyCoin from '../global/SocietyCoin.json';
import { SocietyKeyContract, SocietyCoinContract } from '../global/constants';

export default function useEstimateGas() {
  const SocietyKeyABI = new Interface(SocietyKey);
  const SocietyCoinABI = new Interface(SocietyCoin);
  const { library } = useEthers();

  const claimSocietyKeyGas = async (address: string | undefined) => {
    const contract = new Contract(
      SocietyKeyContract,
      SocietyKeyABI,
      library?.getSigner()
    );
    const estimatedGas = await contract.estimateGas.claim(address);

    return estimatedGas;
  };

  const claimSocietyCoinGas = async (address: string | undefined) => {
    const contract = new Contract(
      SocietyCoinContract,
      SocietyCoinABI,
      library?.getSigner()
    );
    const estimatedGas = await contract.estimateGas.claim(address);

    return estimatedGas;
  };

  return { claimSocietyKeyGas, claimSocietyCoinGas };
}
