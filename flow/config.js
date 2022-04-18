import {config} from "@onflow/fcl"

config({
  "app.detail.title": "Flow Fees",
  "accessNode.api": process.env.NEXT_PUBLIC_ACCESS_NODE_API,
  "discovery.wallet": process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
})
