import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import  { useState } from 'react';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './nav.css'
import { FcDatabase } from 'react-icons/fc';
const Nav = () => {
      const [visible, setVisible] = useState(false);
      const arr = [
        {name : 'الصفحة الرئيسية', url : '/'},
        {name : 'مؤاقيت الصلاة', url : '/payer'},
        // {name : 'اذكار الصباح والمساء', url : '/azkar'},
        {name : 'اذكار المسلم', url : '/azkar'},
        {name : 'دعاء مسلم', url : '/doaa'},
        {name : ' استماع القرآن الكريم ', url : '/listening-quran'},
        {name : ' قراءة القرآن الكريم', url : '/reading-quran'},
        {name : 'اذاعه القرآن الكريم', url : '/ezaet-quran'},
        // {name : 'تفسير القرآن الكريم', url : '/tafser-quran'},

      ];
      const filtration = arr.map((arr,index)=>(
        <li key={index}> <NavLink to={arr.url}>{arr.name}</NavLink></li>
      ));
  return (
    <div className='nav' >
      <Container>
       <div className="card flex justify-content-center" >
            <Sidebar visible={visible}   position='right' dir='rtl' onHide={() => setVisible(false)}>
                <h2>ذكرني قرآن كريم</h2>
                <ul>
                  {filtration}
                </ul>
                        <span dir='ltr'>مصطنع بواسطة م.محمد هشام مكاوي &copy; 2024</span>
            </Sidebar>
            
        </div>
            <Button icon={<FcDatabase />} onClick={() => setVisible(true)} />

      </Container>
    </div>
  )
}

export default Nav