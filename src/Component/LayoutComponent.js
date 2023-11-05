import { useEffect, useState } from "react"

const LayoutComponent=({children})=>{
    const [showHome,setShowHome]=useState(false)
  const localSignUp=localStorage.getItem("signin")

  useEffect(()=>{
      if(localSignUp){
        setShowHome(true)
      }
  
    },[localSignUp])
    return(
        <div>
       {children}
    </div>    )
}
export default LayoutComponent;