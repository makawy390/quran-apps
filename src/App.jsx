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
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Root from './components/root/Root';
import Hadeth from './components/super-component/hadeth/Hadeth';
import NamedHadth from './components/super-component/hadeth/NamedHadth';
function App() {
const router = createBrowserRouter([
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
        path : '/doaa',
        element : <Doaa />
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
