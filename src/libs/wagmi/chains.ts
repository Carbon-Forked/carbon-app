import { type Chain } from 'viem';
import config from 'config';
import { http } from 'wagmi';

// Native Currency Symbol
// Remove content in parenthesis
// Symbol must be 2-6 characters to add new network
// @todo(#1417) refactor this implementation to use the gasToken symbol in a different way

export const currentChain: Chain = {
  id: config.network.chainId, // 296
  name: config.network.name, // Hedera Testnet
  nativeCurrency: {
    name: config.network.gasToken.name, // HBAR
    symbol: config.network.gasToken.symbol, // HBAR
    decimals: 18, // keep 18 for EVM layer; override to 8 in SDK (see step 3)
  },
  rpcUrls: { default: { http: [config.network.rpc.url] } }, // Hashio
  blockExplorers: {
    default: {
      name: config.network.blockExplorer.name,
      url: config.network.blockExplorer.url,
    },
  },
  contracts: { ...config.utils },
} as const;

export const configChains: [Chain, ...Chain[]] = [currentChain];

export const configTransports = {
  [currentChain.id]: http(config.network.rpc.url, {
    batch: {
      batchSize: config.network.rpc.batchSize ?? 50,
      wait: config.network.rpc.wait ?? 20,
    },
  }),
};
