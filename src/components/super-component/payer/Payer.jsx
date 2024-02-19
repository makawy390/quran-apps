import {useState , useEffect} from 'react'
import axios from 'axios';
import {Grid } from '@mui/material'
// import AzakrAfterPayer from './AzakrAfterPayer';
import './payer.css'
const Payer = () => {
 const [payer,setPayer] = useState([]);
 
 const day = new Date().toISOString().split("T")[0];
//  const api = `https://api.aladhan.com/v1/timingsByAddress`;
// const api = "https://api.aladhan.com/v1/timingsByCity";
// const api = "https://api.aladhan.com/v1/timingsByCity"
const api = "https://api.aladhan.com/v1/timingsByAddress/${day}?"
console.log(day);
// const api = `https://api.aladhan.com/v1/timingsByAddress`
 const [search,setSearch] = useState('القاهرة'); 
 // const functionPayer = axios.get(api).then(res => setPayer(res.data)).catch(err => console.log(err));
 useEffect(()=>{
  axios.get(`${api}address=${search}&method=8`)
  .then(res => setPayer(res.data.data))
  .catch(err => console.log(err));
 },[search]);
console.log(payer);
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
     <Grid item xs={12} md={2}>
      <div className="contented">
      <span>الفجر</span>
    <span> {payer?.timings?.Fajr}</span>
      </div>
   </Grid>
     <Grid item xs={12} md={2}>
<div className="contented">
        <span>الشروق</span>
    <span> {payer?.timings?.Sunrise}</span>
</div>
   </Grid>
   
        <Grid item xs={12} md={2}>
          <div className="contented">
        <span>الظهر</span>
    <span> {payer?.timings?.Dhuhr}</span>
          </div>
   </Grid>
        <Grid item xs={12} md={2}>
          <div className="contented">
              <span>العصر</span>
    <span>{payer?.timings?.Asr}</span>
          </div>
   </Grid>
        <Grid item xs={12} md={2}>
          <div className="contented">
                     <span>المغرب</span>
    <span>{payer?.timings?.Maghrib}</span>
          </div>
   </Grid>
        <Grid item xs={12} md={2}>
     <div className="contented">
           <span>العشاء</span>
    <span> {payer?.timings?.Isha}</span>
     </div>
   </Grid>
   </Grid>
    </div>
  )
}

export default Payer