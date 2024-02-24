import {useEffect , useState} from 'react'
import axios from 'axios';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Grid} from '@mui/material'
import './ezaet.css'
import { convert } from '../../../json/convert';
const Ezaet = () => {
 const [ezaa , setEzaa] = useState([]);
 const api = 'https://mp3quran.net/api/v3/radios';
 useEffect(()=>{
  axios.get(api).then(res => setEzaa(res.data.radios)).catch(err => console.log(err))
 },[]);
 console.log(ezaa);
 const [state , setState] = useState([
  {
    url :'',
    name : ''
  }
 ]);
 const clicked = (url , name)=>{
  setState({url : url , name : name})
 };
 console.log(state.url);
 const filtrationEzaa = ezaa?.map(({id , name , url},ind)=>(
  <Grid item xs={12} md={4} key={id}>
 {/* <AudioPlayer 
        style={{ borderRadius: "1rem" , maxWidth: "400px" }}
        // autoPlay
        layout="stacked"
        src={url}
        showSkipControls={true}
        showJumpControls={false}
        header={name}
      /> */}
      <div className="card" key={id} onClick={()=> clicked(url , name)}>
       <span className='num'>{convert(`${ind+1}`)}</span> <span> {name}</span>
      </div>

      </Grid>
 ))
  return (
    <div className='ezaet'>
     <h2>اذاعة القران الكريم</h2>
     <Grid container spacing={2}>
     {filtrationEzaa}
       <AudioPlayer 
        style={{  brderRadius: ".25rem",            
              padding: "35px",
              position : 'fixed',
              bottom : 0,
              left: 0 }}
        autoPlay
        header = {state.name}
        layout="stacked"
        src={state.url}
        showSkipControls={true}
        showJumpControls={false}
      />
     </Grid>  
    </div>
  )
}

export default Ezaet