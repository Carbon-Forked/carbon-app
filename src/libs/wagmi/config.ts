import { createConfig } from 'wagmi';
import { configConnectors } from './connectors';
import { configChains, configTransports } from './chains';

export const wagmiConfig = createConfig({
  syncConnectedChain: true,
  connectors: configConnectors,
  chains: configChains, // <-- now includes Hedera
  transports: configTransports, // <-- transports for each chain
});

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
