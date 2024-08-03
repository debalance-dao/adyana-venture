const localNet = {
  id: 31337,
  name: "LocalNet",
  nativeCurrency: { name: "Ether", symbol: "LETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:8545"],
    },
  },
};

export const customChain = {
  localNet,
};
