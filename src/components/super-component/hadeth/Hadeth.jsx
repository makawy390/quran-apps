import {useState , useEffect} from 'react'
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css';
import { Grid } from '@mui/material';
import './hadeth.css'
const Hadeth = () => {
 const [hadeth , setHadeth] = useState([]);
//  const [count,setCount] = ("12");
 const api = "https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=";
// console.log(count);
 useEffect(()=>{
  axios.get(`${api}100`).then(res => setHadeth(res.data.items)).catch(err => console.log(err))
 },[]);
 console.log(hadeth);
 const filtration = hadeth?.map(({ arab} , index)=>(
  <Grid item xs={12} key={index}>
  <div key={index} className='card'>{arab}</div>
  </Grid>
 ))
  return (
   <div className="hadeth">
    <h2>احاديث</h2>
    <Grid container spacing={1}>
    {filtration}
    {/* <button onClick={(()=> setCount(count+10))}>show More</button> */}
    </Grid>
   </div>

  )
}

export default Hadeth