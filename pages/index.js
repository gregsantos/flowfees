import {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import {config} from "@onflow/fcl"
import styles from "../styles/Home.module.css"

const Home = () => {
  const [feeParams, setFeeParams] = useState({feeParams: null})

  const getFlowFeesAddress = async () =>
    (await config.get("env")) === "testnet"
      ? "0x912d5440f7e3769e"
      : "0xf919ee77447b7497"

  const prepareGetFlowFeeParametersScript = async () => {
    const flowFeesAddress = await getFlowFeesAddress()

    return `
      import FlowFees from ${flowFeesAddress}

      pub fun main(): FlowFees.FeeParameters {
        return FlowFees.getFeeParameters()
      }
    `
  }

  const getFeeParameters = async () => {
    const feeParams = await fcl.query({
      cadence: await prepareGetFlowFeeParametersScript(),
    })

    setName(feeParams ?? null)
  }

  useEffect(() => {
    getFeeParameters()
  }, [])

  return (
    <div className={styles.container}>
      <main>
        <div className='grid'>HOME</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
