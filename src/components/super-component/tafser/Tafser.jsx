import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import { convert } from '../../../json/convert';
import './tafser.css'
const Tafser = () => {
 const api = "https://quranenc.com/api/v1/translation/sura/arabic_moyassar";
const [tafser , setTafser] = useState([]);
const [err , setErr] = useState(false);
const {id} = useParams();
useEffect(()=>{
axios.get(`${api}/${id}`).then(res => setTafser(res.data))
.catch(()=> setErr(true))
},[id]);
console.log(err);
console.log(tafser);
const tafserAyaa = tafser?.result?.map(({ arabic_text , translation , aya}, ind) => (
      //  text == ""?<> <Spinner /></> : 
        <div className='ayaa' key={ind} >
          <h3 className='Elayaa'>
            {arabic_text} ﴿ {convert(`${aya}`)} ﴾
          </h3>
          <h4 className='tafser-Elayaa'>{translation}</h4>
          
        </div>
      ))
  return (
    <div className='tafser-ayaa'>
     {tafserAyaa}
    </div>
  )
}

export default Tafser