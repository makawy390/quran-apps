import './App.css'
import { lazy } from 'react';
const Azkar = lazy(()=> import ('./components/super-component/azkar/Azkar'));
const Ezaet = lazy(()=> import ('./components/super-component/ezaet-quran/Ezaet'));
const Main = lazy(()=> import ('./components/super-component/payer/Main'));
const QuranLive = lazy(()=> import ('./components/super-component/quran/QuranLive'));
const QuranRead = lazy(()=> import ('./components/super-component/quran-read/QuranRead'));
const Doaa = lazy(()=> import ('./components/super-component/doaa/Doaa'));
const Home = lazy(()=> import ('./components/home/Home'));
const Ayaa = lazy(()=> import ('./components/super-component/quran-read/Ayaa'));
const Root = lazy(()=> import ('./components/root/Root'));
const Hadeth = lazy(()=> import ('./components/super-component/hadeth/Hadeth'));
const NamedHadth = lazy(()=> import ('./components/super-component/hadeth/NamedHadth'));
const Ayaet = lazy(()=> import ('./components/super-component/tafser/Ayaet'));
const Tafser = lazy(()=> import ('./components/super-component/tafser/Tafser'));

import {createHashRouter , RouterProvider} from 'react-router-dom'
import Doaas from './components/super-component/doaa/Doaas';

function App() {
const router = createHashRouter([
  {
    path : '/',
    element : <Root />,
    errorElement :  <h2>Error..........</h2>,
    children : [
      {index : true , element : <Home />},
      {
        path : '/payer',
        element : <Main />
      },
      {
        path : '/azkar',
        element : <Azkar />
      },
      {
        path : '/listening-quran',
        element : <QuranLive />
      },
      {
        path : '/ezaet-quran',
        element : <Ezaet />
      },
      {
        path : '/reading-quran',
        children  :[
          {index : true , element :<QuranRead />},
          {
            path : ':id',
            element : <Ayaa />
          }
        ],

      },
      {
        path : '/hadth',
        children  :[
          {index : true , element :<Hadeth />},
          {
            path : ':id',
            element : <NamedHadth />
          }
        ],

      },
      {
        path : '/tafser',
        children  :[
          {index : true , element :<Ayaet />},
          {
            path : ':id',
            element : <Tafser />
          }
        ],

      },
      //       {
      //   path : '/doaa',
      //   element : <Doaa />
      // },
      {
        path : '/doaa',
        children  :[
          {index : true , element :<Doaa />},
          {
            path : ':id',
            element : <Doaas />
          }
        ],

      },

    ]
  }
]);

  return (
    <div dir='rtl' className='app'>
    <RouterProvider router={router} />    
      </div>
  )
}

export default App
