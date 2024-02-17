import {useState , useEffect} from 'react'
import axios from 'axios'
import {Grid} from '@mui/material'
const AzakrAfterPayer = () => {
 const [azkar,setAzkar] = useState([]);
 const api = 'https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json'
useEffect(()=>{
 axios.get(api).then(res => setAzkar(res.data)).catch(err => console.log(err))
},[]);
const handelEvent = (e)=>{
    e.target.value <= 0 ? e.preventDefault() : e.target.value-- ;
  }
const filtrationAzkar = azkar?.content?.map(({zekr , repeat}, index)=>(
<Grid item xs={12} key={index}>
  <div className='content'>
 <p>{zekr}</p>
 <input type='button' onClick={(e)=> handelEvent(e)} value={repeat}  className='button' />
 
 </div>
</Grid>
))
  return (
    <div className='azkar-after-payer'>
     <h2>{azkar?.title}</h2>
     <Grid container spacing={2}>
     {filtrationAzkar}
     </Grid>
    </div>
  )
}
export default AzakrAfterPayer;
