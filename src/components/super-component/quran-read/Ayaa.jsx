import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './quran.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Ayaa = () => {
  const [ayaa, setAyaa] = useState([]);
  const params = useParams();
  // const ref = useRef(null);
  // const [tafser , setTafser] = useState([])
  // const tafserApi = "https://quranenc.com/api/v1/translation/sura/arabic_moyassar";
  useEffect(() => {
    axios
      .get(`https://api.quran.gading.dev/surah/${params.id}`)
      .then((res) => setAyaa(res.data.data));
    // axios.get(`${tafserApi}/${params.id}`).then(res => setTafser(res.data.result))
  }, [params.id]);
  // console.log();
  // const filtrationAyaa = ayaa.map(({ name }, ind) => (
  //   <div className="card" key={ind}>
  //     <h3>{name?.long}</h3>
  //     {verses?.map(({ text, number }) => (
  //       <>
  //         <h4>
  //           {text?.arab} ({number?.inQuran})
  //         </h4>
  //       </>
  //     ))}
  //   </div>
  // ));
  //   const arr = [];
  //   const getAyaa = ayaa.map(({}, ind) =>
  //     id == params.id ? (
  //       <div key={ind}>
  //         <h1>سوره {name}</h1>
  //         <div className="quran-card">
  //           <h1>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h1>
  //         </div>
  //       </div>
  //     ) : (
  //       ""
  //     ),
  //   );
  //   ayaa.map(({ id, array }) => {
  //     return id == params.id ? arr.push(array) : "";
  //   });
  //   console.log(arr);
  //   const filtrationArray = arr[0]?.map(({ id, ar }) => (
  //     <div className="card" key={id}>
  //       <h4>
  //         {ar} ({id})
  //       </h4>
  //     </div>
  //   ));
  // const ayat = tafser.map(({id , aya , arabic_text})=> (
  //  <h3 key={id}>{arabic_text} ( {aya} )   </h3>
  // ))
  // const getTafser = tafser.map(({arabic_text , translation , id , aya})=>(
  //  <div key={id}>
  //         <Panel ref={ref} header={`${arabic_text} ( ${aya} )`} toggleable style={{marginBottom : '5px'}}>
  //             <p className="m-0">
  //                 {translation}

  //             </p>
  //         </Panel>

  //  </div>
  // ))
  // const getAyaa = ayaa.map((e)=>{
  //  return e.id == params.id
  // });
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
        <div className={`ayaa`} key={ind}  onClick={(()=> clicked(audio?.primary , text.arab))}>
          <h3>
            {text.arab} ﴿ {number?.inSurah} ﴾
          </h3>
          <h5 dir="ltr">{translation?.en}</h5>
          
        </div>
      ))
  return (
    <div className="ayaat">
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
          {/* <Spinner /> */}
    </div>
  );
};

export default Ayaa;
