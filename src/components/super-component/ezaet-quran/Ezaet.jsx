import {useEffect , useState} from 'react'
import axios from 'axios';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Grid} from '@mui/material'
import './ezaet.css'
const Ezaet = () => {
 const [ezaa , setEzaa] = useState([]);
 const api = 'https://mp3quran.net/api/v3/radios';
 useEffect(()=>{
  axios.get(api).then(res => setEzaa(res.data.radios)).catch(err => console.log(err))
 },[]);
 const filtrationEzaa = ezaa?.map(({id , name , url})=>(
  <Grid item xs={12} md={4} key={id}>
 <AudioPlayer 
        style={{ borderRadius: "1rem" , maxWidth: "400px" }}
        // autoPlay
        layout="stacked"
        src={url}
        showSkipControls={true}
        showJumpControls={false}
        header={name}
      />
      </Grid>
 ))
  return (
    <div className='ezaet'>
     <h2>اذاعة القران الكريم</h2>
     <Grid container spacing={2}>
     {filtrationEzaa}
     </Grid>  
    </div>
  )
}

export default Ezaet