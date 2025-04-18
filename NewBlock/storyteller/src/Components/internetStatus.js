import { useEffect, useState } from "react";
const InternetStatus = ()=>{
    const [browserStatus,setBrowserStatus]=useState("Online 🟢");
    useEffect(()=>{
        window.addEventListener("offline",()=>setBrowserStatus("Offline 🔴"))
        window.addEventListener("online",()=>setBrowserStatus("Online 🟢"))
    },[]);
    return(
        <div>
            {browserStatus}
        </div>
    )
}

export default InternetStatus;