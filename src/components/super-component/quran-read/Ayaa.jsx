import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './quran.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Spinner from './../../spinner/Spinner';
import { convert } from "../../../json/convert";
const Ayaa = () => {
  const [ayaa, setAyaa] = useState([]);
  const params = useParams();
  // const tafserApi = "https://quranenc.com/api/v1/translation/sura/arabic_moyassar";
  const [error , setError] = useState(false)
  useEffect(() => {
    axios
      .get(`https://api.quran.gading.dev/surah/${params.id}`)
      .then((res) => setAyaa(res.data.data)).catch(()=> setError(true));
  }, [params.id]);
 
      const [state,setState] = useState([
        {
  audio : '',
  name : ''
}
      ]);
const clicked = (audio , name)=>{
  setState({audio : audio , name : name})
}
const filtrationAyaa = ayaa?.verses?.map(({ audio, number, text , translation}, ind) => (
      //  text == ""?<> <Spinner /></> : 
        <div className={`ayaa`} key={ind}  onClick={(()=> clicked(audio?.primary , text.arab))}>
          <h3>
            {text.arab} ﴿ {convert(`${number?.inSurah}`)} ﴾
          </h3>
          <h5 dir="ltr">{translation?.en}</h5>
          
        </div>
      ))
  return (
    <div className="ayaat">
      {error === true? <Spinner /> :
      <>
      <h3 className="bismillah">بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
      {filtrationAyaa}
       <AudioPlayer
            style={{
              brderRadius: ".25rem",            
              padding: "35px",
              position : 'fixed',
              bottom : 0,
              left: 0
            }}
            header={state.name}
            layout="stacked"
            src={state.audio}
            showSkipControls={true}
            showJumpControls={false}
          />
      </>
      }
    </div>
  );
};

export default Ayaa;
