import {React, lazy,Suspense} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Col,Row,Container} from "react-bootstrap"
const Evm=lazy(()=>import("./EVM.js"));
const Layout=lazy(()=>import("./layout"));
function Home(){

return(
<>

<Suspense fallback={<div>Loading...</div>}>

<Layout/>
</Suspense>
<Suspense fallback={<div>Loading...</div>}>

<Evm/>
</Suspense>
</>
)
}

export default Home;