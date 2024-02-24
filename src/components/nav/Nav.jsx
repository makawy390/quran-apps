import { Sidebar } from 'primereact/sidebar';
import { HiOutlineMenu } from "react-icons/hi";
import  { useState } from 'react';
// import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { convert } from '../../json/convert';
import './nav.css'
const Nav = () => {
      const [visible, setVisible] = useState(false);
      const arr = [
        {name : 'الصفحة الرئيسية', url : '/'},
        {name : 'مؤاقيت الصلاة', url : '/payer'},
        {name : 'اذكار المسلم', url : '/azkar'},
        {name : 'دعاء مسلم', url : '/doaa'},
        {name : ' استماع القرآن الكريم ', url : '/listening-quran'},
        {name : ' قراءة القرآن الكريم', url : '/reading-quran'},
        {name : 'تفسير القرآن الكريم', url : '/tafser'},
        {name : 'اذاعه القرآن الكريم', url : '/ezaet-quran'},
      ];
      const filtration = arr.map((arr,index)=>(
        <li key={index}> <NavLink to={arr.url}>{arr.name}</NavLink></li>
      ));

  
  return (
    <div className='nav' >
       <div className="card flex justify-content-center" >
            <Sidebar visible={visible}   position='right' dir='rtl' onHide={() => setVisible(false)}>
                <h2>ذكرني قرآن كريم</h2>
                <ul>
                  {filtration}
                </ul>
                        <span >مصطنع  بواسطة  <br/>
                          مهندس / محمد هشام مكاوي &copy; {convert(2024)} </span>
                        <p dir='ltr' ><IoLogoWhatsapp /> {convert('01555245948')} </p>
                        <p dir='ltr' ><FaPhone />  {convert('01010838632')} </p>


            </Sidebar>
            
        </div>
            <div className="apps">
              <h3>ذكرني</h3>
              <div className='icons'>
              <HiOutlineMenu  onClick={() => setVisible(true)}/>
            </div>

            </div>
    </div>
  )
}

export default Nav;