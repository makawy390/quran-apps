import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner";
import { Container } from '@mui/material';
import './root.css'
const Root = () => {
  return (
    <div className="root">
     <Nav />
     <Container fixed>
              <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
     </Container>
     <Footer />
    </div>
  )
}

export default Root