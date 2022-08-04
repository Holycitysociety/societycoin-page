import { createRoot } from 'react-dom/client';
import { ChainId, DAppProvider, Polygon } from '@usedapp/core';
import { Buffer } from 'buffer';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import './styles.scss';

window.Buffer = Buffer;

const config = {
  readOnlyChainId: ChainId.Polygon,

  networks: [Polygon],
  readOnlyUrls: {
    [Polygon.chainId]: 'https://polygon-rpc.com/',
  },
  pollingInterval: 1000,
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<DAppProvider config={config} children={<App />} />);
