import {useState , useEffect} from 'react'
import axios from 'axios'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {Container , Grid} from '@mui/material';
import img from '../../../assets/ic_radio.png';
import './quran.css'
const QuranLive = () => {
 const [quran , setQuran] = useState([]);
 const api = 'https://quran-endpoint.vercel.app/quran';
 useEffect(()=>{
  axios.get(api).then(res => setQuran(res.data.data)).catch(err => console.log(err))
 },[])

  const filtrationQuran = quran.map(({recitation , asma},index)=>(
    <Grid item xs={12} md={4}  key={index}>
      <div className="image">
        <img src={img} alt=""  />
      </div>
       <AudioPlayer 
        style={{ brderRadius: ".25rem" , maxWidth: "400px" , padding : '25px' }}
        // autoPlay
        layout="stacked"
        src={recitation?.full}
        showSkipControls={true}
        showJumpControls={false}
        header={asma?.ar?.long}
      />
    </Grid>
  ));

  return (
    <div className='quran'>
      <Container fixed>
        <h1> استماع القران الكريم</h1>
        <Grid container spacing={2}>
      {filtrationQuran}
      </Grid>
      </Container>
      </div>
  )
}

export default QuranLive