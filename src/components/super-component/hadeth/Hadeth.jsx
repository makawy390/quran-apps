import {useState , useEffect} from 'react'
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css';
import { Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import './hadeth.css'
import { convert } from './../../../json/convert';
const Hadeth = () => {
 const [hadeth , setHadeth] = useState([]);
//  const [count,setCount] = ("12");
 const api = "https://hadis-api-id.vercel.app/hadith";
// console.log(count);
const arr = [
  {name : "Abu Dawud" , ar : 'أحمد داود'},
  {name : "Ahmad" , ar : 'أحمد '},
  {name : "Bukhari" , ar : 'البخاري'},
  {name : "Darimi" , ar : 'الدارمي'},
  {name : "Ibnu Majah" , ar : 'ابن ماجه'},
  {name : "Malik" , ar : 'مالك'},
  {name : "Muslim" , ar : 'مسلم'},
  {name : "Nasai" , ar : 'سنن النسائي'},
  {name : "Tirmidzi" , ar : 'الترمذي'},
];

 useEffect(()=>{
  axios.get(`${api}`).then(res => setHadeth(res.data)).catch(err => console.log(err))
 },[]);
 const navigate = useNavigate();
 console.log(hadeth);
 const filtration = hadeth?.map((hadth , index)=>(
  <Grid item xs={12} md={3} key={index}>
  <div key={index} className='card' onClick={()=> navigate(`/hadth/${hadth.slug}`)}>
    <h3>{arr.map(({name , ar})=> name === hadth.name? ar : '')}</h3>
    <span>{convert(`${hadth.total}`)} حديث</span>
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