import Hadeth from '../super-component/hadeth/Hadeth'
import Payer from '../super-component/payer/Payer'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Payer />
      <Hadeth />
      </div>
  )
}

export default Home