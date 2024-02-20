import {useState , useEffect} from 'react'
import axios from 'axios';
import {Grid } from '@mui/material'
import './payer.css'
const Payer = () => {
 const [payer,setPayer] = useState([]);
 const day = new Date().toISOString().split("T")[0];
const api = "https://api.aladhan.com/v1/timingsByAddress/${day}?"
console.log(day);
 const [search,setSearch] = useState('القاهرة'); 
 useEffect(()=>{
  axios.get(`${api}address=${search}&method=8`)
  .then(res => setPayer(res.data.data))
  .catch(err => console.log(err));
 },[search]);
console.log(payer);
const array = [
  {ar :"صلاة الفجر" , appcend : `${payer?.timings?.Fajr}` },
  {ar :"صلاة الشروق" , appcend : `${payer?.timings?.Sunrise}` },
  {ar :"صلاة الظهر" , appcend : `${payer?.timings?.Dhuhr}` },
  {ar :"صلاة العصر" , appcend : `${payer?.timings?.Asr}` },
  {ar :"صلاة المغرب" , appcend : `${payer?.timings?.Maghrib}` },
  {ar :"صلاة العشاء" , appcend : `${payer?.timings?.Isha}` },
];
const filtrationArray = array.map(({ar , appcend} , ind)=> (
     <Grid item xs={12} md={2} key={ind}>
      <div className="contented">
      <span>{ar}</span>
    <span> {appcend}</span>
      </div>
   </Grid>

))
  return (
    <div className='payer'>
      <input type="search" placeholder='ابحث عن مدينتك' className='search'  onChange={(e)=> setSearch(e.target.value)}/>

      <h2>  مؤاقيت الصلاه بتوقيت {search}</h2>
      <div className='date'>
              <span>{payer?.date?.hijri?.weekday?.ar} </span> 
      <span>{payer?.date?.hijri?.day} </span>
      <span>{payer?.date?.hijri?.month?.ar} </span> 
      <span>{payer?.date?.hijri?.year}  </span> 
      <span>هجرية - </span>
      <span>الموافق {payer?.date?.gregorian?.date} م. </span>
      </div>
      <Grid container spacing={1}>
     {filtrationArray}
   </Grid>
    </div>
  )
}

export default Payer