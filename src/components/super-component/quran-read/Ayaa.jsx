import {useState , useEffect, useRef} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
// import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

const Ayaa = () => {
    const [ayaa , setAyaa] = useState([]);
    const params = useParams();
        const ref = useRef(null);
    const [tafser , setTafser] = useState([])
const tafserApi = "https://quranenc.com/api/v1/translation/sura/arabic_moyassar";
useEffect(()=>{
axios.get("https://raw.githubusercontent.com/rn0x/Quran-Json/main/Quran.json")
.then(res => setAyaa(res.data));
axios.get(`${tafserApi}/${params.id}`).then(res => setTafser(res.data.result))
},[])
console.log(ayaa);
const arr  =[];
const getAyaa = ayaa.map(({ id , ar , name} , ind)=>(
 id == params.id?

 <div key={ind}>
       <h1>سوره {name}</h1>
       <div className="quran-card" >
        <h1>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h1>
   </div>
       </div> : ''
))
ayaa.map(({id,array})=> {
     return id == params.id? arr.push(array): ''
});
console.log(arr);
const filtrationArray = arr[0]?.map(({id , ar})=> (
    <div className="card" key={id}>
        <h4>{ar} ({id})</h4>
    </div>
));
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
  return (
    <div>
     {getAyaa}
     {/* {getTafser} */}
     {filtrationArray}
    </div>
  )
}

export default Ayaa;