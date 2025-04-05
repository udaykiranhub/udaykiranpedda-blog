import React, { lazy } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CheckCircle, FileText, LucideAxe, Send } from "lucide-react";

const DefiFlow = lazy(() => import("./DefiOverView"));

const ERC20protocol=lazy(()=>import("./protocols/ERC20-protocol"))
const ERC721protocol=lazy(()=>import("./protocols/ERC721-protocol.js"))

const SimpleLendingProtocol=lazy(()=>import("./protocols/simple-lending-protocol.js"));
const UniswapPool=lazy(()=>import("./protocols/uniswapPool.js"))
const Amm=lazy(()=>import("./protocols/Amm.js"));
const Protocols = () => {
  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-3">Blockchain Security Protocols</h2> */}
 <h2 className="text-center mb-3">Protocol Analysis</h2>
<Accordion defaultActiveKey="0">

<ERC20protocol/>


<ERC721protocol/>
<UniswapPool/>

<SimpleLendingProtocol/>

<Amm/>

 </Accordion>
  <DefiFlow/>
    </div>
  );
};

export default Protocols;