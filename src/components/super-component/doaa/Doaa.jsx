import doaa from '../../../json/doaa';
import './doaa.css'
const Doaa = () => {
const filtrationCategory = doaa.map(({category , zekr}, ind)=>(
  <div className="card" key={ind}>
    <h3>{category}</h3>
    <p>{zekr}</p>
  </div>
));
  return (
    <div className='doaa'>
      <h2>دعاء مسلم</h2>
     {filtrationCategory}
     
    </div>
  )
}

export default Doaa