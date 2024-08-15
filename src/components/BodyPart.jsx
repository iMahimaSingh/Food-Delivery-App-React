import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const BodyPart = () =>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    useEffect (()=>{
        console.log("useeffect called");
        fetchData();},[]);

    const fetchData = async()=>{
        const data=await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
        );
        const json=await data.json();
        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
        setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
    };
    return listOfRestaurants.length==0?
        (<Shimmer/>):
            (<div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                   setListOfRestaurants(filteredList);
                }}>Top rated Restaurants</button>
            </div>
            <div className="restro-container">
                 {
                  listOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id}resData={restaurant}/>))
                 }
                  
            </div>

        </div>
    )
}
 export default BodyPart;
