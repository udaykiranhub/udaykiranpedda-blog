import {React,lazy,Suspense} from "react";
const DOS=lazy(()=>import("./Dos"));
const DelegateCall=lazy(()=>import("./delegatecall"));
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