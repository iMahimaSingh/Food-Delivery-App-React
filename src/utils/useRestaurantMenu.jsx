import { useState,useEffect } from "react";
import { API_MENU } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
          const data=await fetch(API_MENU+resId);
          const json=await data.json();
          setResInfo(json);
    };
    return resInfo;
};
export default useRestaurantMenu;