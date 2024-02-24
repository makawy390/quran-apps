import {useState , useEffect} from 'react'
import axios from 'axios'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {Container , Grid} from '@mui/material';
import './quran.css'
import Spinner from '../../spinner/Spinner';
import { convert } from '../../../json/convert';
const QuranLive = () => {
 const [quran , setQuran] = useState([]);
 const api = 'https://quran-endpoint.vercel.app/quran';
 useEffect(()=>{
  axios.get(api).then(res => setQuran(res.data.data)).catch(err => console.log(err))
 },[])
console.log(quran);
const [state , setState] = useState([
{
  audio : '',
  name : ''
}
]);
const clicked = (audio , name)=>{
  setState({audio : audio , name : name})
}
  const filtrationQuran = quran.map(({recitation , asma , ayahCount , number , type},index)=>(
 
    <Grid item xs={12} md={4} key={index}>
      <div className="card" onClick={() => clicked(recitation?.full , asma?.ar?.long)}>
        
        <div className="surah">
          {/* <span>{number} </span>   */}
        <span className='num'>{convert(`${number}`)}</span>
        <span>{asma?.ar?.long}</span>
        <span>{convert(`${ayahCount}`)} اية</span>
        <span>{type?.ar}</span>
        </div>
      </div>
    </Grid>
  ));

  return (
    <div className='quran'>
      <Container fixed>
        <h1> استماع القران الكريم</h1>
        <Grid container spacing={1}>
      {quran.length === 0? <Spinner /> : filtrationQuran}
      </Grid>
          <AudioPlayer 
        style={{  brderRadius: ".25rem",            
              padding: "35px",
              position : 'fixed',
              bottom : 0,
              left: 0 }}
        autoPlay
        header ={state.name}
        layout="stacked"
        src={state.audio}
        showSkipControls={true}
        showJumpControls={false}
      />
      </Container>
      </div>
  )
}

export default QuranLive