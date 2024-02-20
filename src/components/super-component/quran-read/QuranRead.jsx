import { useState, useEffect } from "react";
import "./quran.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import img1 from "../../../assets/Medinan.png";
import img2 from "../../../assets/mak.png";
import Spinner from "../../spinner/Spinner";

const QuranRead = () => {
  // const [quran, setQuran] = useState([]);
  // const api =
  //   "https://raw.githubusercontent.com/rn0x/Quran-Json/main/Quran.json";
  const API = "https://api.quran.gading.dev/surah";
  const [surah, setSurah] = useState([]);
  useEffect(() => {

    axios
      .get(API)
      .then((res) => setSurah(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(surah);
  const navigate = useNavigate();
  const filtrationQuran = surah.map(({ name, revelation, number , numberOfVerses}, index) => (
    <Grid item xs={12} md={4} key={index}>
      <div className="card" onClick={() => navigate(`${number}`)}>
        {/* <span></span> */}
        
        <div className="surah">
          <span className="num">{number} </span>  
        <span>{name?.long}</span>
        </div>


        <div className="number">
          <span>{numberOfVerses} آية</span>
                    {revelation?.arab === "مكة" ? (
            <img src={img2} alt="" />

          ) : (
            <img src={img1} alt="" />

          )}
        </div>
      </div>
    </Grid>
  ));
  return (
    <div className="quran-read">
      <h2>قراءة القران الكريم</h2>
      <Grid container spacing={0.5}>
        {surah===''? <Spinner /> :   filtrationQuran}
      </Grid>
    </div>
  );
};

export default QuranRead;
