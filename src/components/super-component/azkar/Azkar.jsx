import { useState, useEffect } from "react";
import axios from "axios";
import { TabView, TabPanel } from "primereact/tabview";
import "./azkar.css";
import img from '../../../assets/tasbih.png'
import Spinner from './../../spinner/Spinner';
const Azkar = () => {
  const api =
    "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json";
  const [azkar, setAzkar] = useState([]);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setAzkar(res.data))
      .catch((err) => console.log(err));
  }, []);
  const azkarChip = Object.keys(azkar);
  const entries = Object.entries(azkar);
  console.log(azkar);
  const handelEvent = (e) => {
    e.target.value <= 0 ? e.preventDefault() :  e.target.value--;
    // if (e.target.value === "0") {
    //   setActive(true);
    //   e.preventDefault()
    // }
    // else if(e.target.value >= 0) {
    //    e.target.value--;


    // }

  };
  // const f = entries?.map((e) => {
  //   return e[1]?.filter((f) => f.category === "أذكار المساء");
  // });
  // const fii = f.filter((e) => e.length > 0);
  // const ffe = fii[0]?.map((ffe, index) => (
  //   <div key={index}>
  //     <p>{ffe.content}</p>
  //     <h5>{ffe.count}</h5>
  //   </div>
  // ));
  // console.log(fii);
  // https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=300 // احاديث
  return (
    <div className="azkar">
      <h2>اذكار المسلم <img src={img} alt=".."/> </h2>
      <div className="card">
        {azkar === ""? <Spinner /> : 
        <TabView>
          {azkarChip.map((sets, index) => (
            <TabPanel header={sets} key={index}>
              {entries
                ?.map((e) => {
                  return e[1]?.filter((f) => f.category === sets);
                })
                .filter((e) => e.length > 0)["0"]?.map((e, i) => (
                  <div key={i}>
                    <h2 className="content">{e.content.split(/[.*'',,+?^$n{}()|[\]\\]/g)}</h2>
                    <h3 className="desc">{e.description}</h3>
                    <input
                      type="button"
                      onClick={(e) => handelEvent(e)}
                      value={e.count}
                      className="button"
                    />
                  </div>
                ))}
            </TabPanel>
          ))}
        </TabView>
        }
      </div>
    </div>
  );
};

export default Azkar;