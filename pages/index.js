import * as fcl from "@onflow/fcl"
import styles from "../styles/Home.module.css"

const Home = () => {
  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t) => [arg(user.addr, t.Address)],
    })

    setName(profile?.name ?? "No Profile")
  }

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
