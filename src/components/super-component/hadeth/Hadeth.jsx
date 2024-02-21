import {useState , useEffect} from 'react'
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css';
import { Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import './hadeth.css'
const Hadeth = () => {
 const [hadeth , setHadeth] = useState([]);
//  const [count,setCount] = ("12");
 const api = "https://hadis-api-id.vercel.app/hadith";
// console.log(count);

 useEffect(()=>{
  axios.get(`${api}`).then(res => setHadeth(res.data)).catch(err => console.log(err))
 },[]);
 const navigate = useNavigate();
 console.log(hadeth);
 const filtration = hadeth?.map(({ name , slug , total} , index)=>(
  <Grid item xs={12} md={3} key={index}>
  <div key={index} className='card' onClick={()=> navigate(`/hadth/${slug}`)}>
    <h3>{name}</h3>
    <span>{total} حديث</span>
  </div>
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