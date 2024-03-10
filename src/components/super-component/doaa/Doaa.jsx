import doaa from '../../../json/doaa';
import './doaa.css';
// import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Doaa = () => {
const navigate = useNavigate();
 
// const filtrationCategory = doaa.map(({category , zekr}, ind)=>(
//   <div className="card" key={ind}>
//     <h3>{category}</h3>
//     <p>{zekr}</p>
//   </div>
// ));
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const arr = [];
doaa.map(({category})=>{
arr.push(category)
});

const filtration = arr.filter((element , index)=>{
return arr.indexOf(element) === index
});
console.log(filtration);
const filtrationElements = filtration.map((ele , ind)=>(
  <div className="card" key={ind} onClick={()=> navigate(`${ele}`)}>
    <h3>{ele}</h3>
    {/* <p>{zekr}</p> */}
  </div>
))
// const filtrationArr = arrays.
  return (
    <div className='doaa'>
      <h2>دعاء مسلم</h2> 
      {filtrationElements}
    {/* <Collapse  onChange={onChange} items={items} />; */}

    </div>

  )
}

export default Doaa