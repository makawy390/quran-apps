import {useState , useEffect} from 'react'
import { useParams} from 'react-router-dom'
import  axios  from 'axios';
import { Grid } from '@mui/material';
import './hadeth.css'
const NamedHadth = () => {
 const [hadth , setHadth]  = useState([]);
const {id} = useParams();
 const api = "https://hadis-api-id.vercel.app/hadith";
 const [more , setMore] = useState(10)
useEffect(()=>{
axios.get(`${api}/${id}?page=1&limit=${more}`).then(res => setHadth(res.data.items)).catch(err => console.log(err))
},[id , more]);
const filtrationHadth = hadth.map(({number, arab})=> (
  <Grid item xs={12} key={number}>
  <div  className='card'>
    <h3>{arab}</h3>
  </div> 
  </Grid>
)) 
  return (
    <div className='name-hadth'>
     <Grid container spacing={2}>
      <h2>احاديث {id}</h2>
      {filtrationHadth}
     </Grid>
     <button className='show' onClick={()=> setMore(more+10)}>اظهار المزيد من الاحاديث</button>
    </div>
  )
}

export default NamedHadth