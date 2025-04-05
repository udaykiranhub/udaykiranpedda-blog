import {React,lazy,Suspense} from "react";
const DOS=lazy(()=>import("./vulnerabilities/Dos"));
const DelegateCall=lazy(()=>import("./vulnerabilities/delegatecall"));
function Report(){
    return (
        <>

  <Suspense fallback={<p>loading......</p>}>
  <DOS/>
  <DelegateCall/>
</Suspense>
        </>
    )
}

export default Report