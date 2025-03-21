import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./components/Home"));
const NavBar=lazy(()=> import("./components/NavBar"));

const Profile=lazy(()=>import("./components/profile"));



function App() {
  return (
    <Router>
      <Helmet>
        <title>Uday Kiran</title>
        <meta name="description" content="Welcome To my Blog" />
      </Helmet>


      <Suspense fallback={<div>Loading...</div>}>
      <NavBar/>
        <Routes>
          <Route path="/udaykiranpedda-blog" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}
//npm run deploy
//"homepage": "https://udaykiranhub.github.io/udaykiranpedda-blog"


export default App;
