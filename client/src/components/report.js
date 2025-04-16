import {React,lazy,Suspense} from "react";
const DOS=lazy(()=>import("./vulnerabilities/Dos"));
const DelegateCall=lazy(()=>import("./vulnerabilities/delegatecall"));
const TxOriginVulnerability=lazy(()=>import("./vulnerabilities/TxOrigin"))

const PrivateStorageVulnerability=lazy(()=>import("./vulnerabilities/privateStorage"))
function Report(){
    return (
        <>

  <Suspense fallback={<p>loading......</p>}>
  <DOS/>
  <DelegateCall/>
  <TxOriginVulnerability/>
  <PrivateStorageVulnerability/>
</Suspense>
        </>
    )
}

export default Report