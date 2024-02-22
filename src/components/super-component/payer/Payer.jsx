import {useState , useEffect} from 'react'
import axios from 'axios';
import {Grid } from '@mui/material'
import './payer.css'
import { convert } from '../../../json/convert';
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
 var countDownDate = new Date("Mar 11, 2024 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("demo").innerHTML = `الوقت المتبقي علي حلول شهر رمضان ${convert(days)} يوم ${convert(hours)} ساعه ${convert(minutes)} دقيقة ${convert(seconds)} ثانية `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "كل عام وانتم بخير";
  }
}, 1000);

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
      <p id="demo">
{/* `الوقت المتبقي علي حلول شهر رمضان ${convert(days)} يوم ${convert(hours)} ساعه ${convert(minutes)} دقيقة ${convert(seconds)} ثانية `; */}

      </p>

      <div className='date'>
              <span>{payer?.date?.hijri?.weekday?.ar} </span> 
      <span>{convert(`${payer?.date?.hijri?.day}`)} </span>
      <span>{payer?.date?.hijri?.month?.ar} </span> 
      <span>{convert(`${payer?.date?.hijri?.year}`)}  </span> 
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