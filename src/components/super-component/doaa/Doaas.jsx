import doaa from '../../../json/doaa';
import './doaa.css'
import {useParams} from 'react-router-dom'
const Doaas = () => {
 const {id} = useParams();
 const filtrationCategory = doaa.map(({category , zekr}, ind)=>(
  id == category? <div className="card" key={ind}>
    {/* <h3>{category}</h3> */}
    <h4>{zekr}</h4>
  </div> : ''
)); 
  return (
    <div className='doaas'>
     <h2>{id}</h2>
     {filtrationCategory}
    </div>
  )
};

export default Doaas