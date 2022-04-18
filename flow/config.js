import {config} from "@onflow/fcl"

config({
  "env": "testnet",
  "app.detail.title": "Flow Fees",
  "accessNode.api": process.env.NEXT_PUBLIC_ACCESS_NODE_API,
  "discovery.wallet": process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
  "0xFlowFees": "0x912d5440f7e3769e",
})
