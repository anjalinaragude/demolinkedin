import React, { useState } from 'react'

const useProfile = () => {
  const [ userData,setUserData]=useState({
    firstname:"anjali",
    lastname:"reddy",
    img:"/img/profile2.jpg",
    role:"software Engg"

  })
  return { userData,setUserData}
    
  
}

export default useProfile