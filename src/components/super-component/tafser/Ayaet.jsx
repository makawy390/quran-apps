import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import img1 from "../../../assets/Medinan.png";
import img2 from "../../../assets/mak.png";
import Spinner from "../../spinner/Spinner";
import { convert } from "../../../json/convert";
import './tafser.css'
const Ayaet = () => {

  const API = "https://api.quran.gading.dev/surah";
  const [surah, setSurah] = useState([]);
  const [err , setError] = useState(false);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setSurah(res.data.data))
      .catch(() => setError(true));
  }, []);
  const navigate = useNavigate();
  const filtrationQuran = surah.map(({ name, revelation, number , numberOfVerses}, index) => (
    <Grid item xs={12} md={4} key={index}>
      <div className="card" onClick={() => navigate(`${number}`)}>
        <div className="surah">
          <span className="num">{convert(`${number}`)} </span>  
        <span>{name?.long}</span>
        </div>

        <div className="number">
          <span>{convert(`${numberOfVerses}`)} آية</span>
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
    <div className="tafser">
      <h2>تفسير القران الكريم</h2>
      <Grid container spacing={0.5}>
        {err=== true? <Spinner /> :   filtrationQuran}
      </Grid>
    </div>
  );
};


export default Ayaet;
