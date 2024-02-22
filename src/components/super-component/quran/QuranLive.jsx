import {useState , useEffect} from 'react'
import axios from 'axios'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {Container , Grid} from '@mui/material';
import './quran.css'
import Spinner from '../../spinner/Spinner';
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
    // <Grid item xs={12} md={4}  key={index}>
    //   <div className="image">
    //     <img src={img} alt=""  />
    //   </div>
    //    <AudioPlayer 
    //     style={{ brderRadius: ".25rem" , maxWidth: "400px" , padding : '25px' }}
    //     // autoPlay
    //     layout="stacked"
    //     src={recitation?.full}
    //     showSkipControls={true}
    //     showJumpControls={false}
    //     header={asma?.ar?.long}
    //   />

    // </Grid>
    <Grid item xs={12} md={4} key={index}>
      <div className="card" onClick={() => clicked(recitation?.full , asma?.ar?.long)}>
        
        <div className="surah">
          {/* <span>{number} </span>   */}
        <span className='num'>{number}</span>
        <span>{asma?.ar?.long}</span>
        <span>{ayahCount} </span>
        <span>{type?.ar}</span>
        </div>


        {/* <div className="number">
          {numberOfVerses} آية
          {revelation?.arab === "مكة" ? (
            <img src={img2} alt="" />

          ) : (
            <img src={img1} alt="" />

          )}
        </div> */}
      </div>
    </Grid>
  ));

  return (
    <div className='quran'>
      <Container fixed>
        <h1> استماع القران الكريم</h1>
        <Grid container spacing={1}>
      {/* {filtrationQuran} */}
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