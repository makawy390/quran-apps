import {useState , useEffect} from 'react'
import './quran.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import { Grid } from '@mui/material';
import img1  from '../../../assets/Medinan.png'
import img2  from '../../../assets/mak.png'

const QuranRead = () => {
const [quran , setQuran] = useState([]);
const api = "https://raw.githubusercontent.com/rn0x/Quran-Json/main/Quran.json"
useEffect(()=>{
axios.get(api).then(res => setQuran(res.data)).catch(err => console.log(err))
},[]);
    const navigate = useNavigate();
const filtrationQuran = quran.map(({name , type , id} , index)=>(
  <Grid item xs={12} md={3} key={index}>
    <div className="card" onClick={()=> navigate(`${id}`)}>
      <span>سورة  {name}</span>
      <span>{type=== "مكية" ? <img src={img1}  alt="" /> : <img src={img2} alt='' /> }</span>
    </div>
  </Grid>
));
console.log(quran);
  return (
    <div className='quran-read'>
      <Grid container spacing={2}>
        <h2>قراءة القران الكريم</h2>
        {filtrationQuran}
      </Grid>
    </div>
  )
}

export default QuranRead