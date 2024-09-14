import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from '../utils/useOnlineStatus';


const BodyPart = () =>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");
    useEffect (()=>{
        console.log("useeffect called");
        fetchData();},[]);

    const fetchData = async()=>{
        const data=await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
        );
        const json=await data.json();
        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
        setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

       const  onlineStatus=useOnlineStatus();
       if(onlineStatus===false)
        return(<h1>Looks like you are Offline!!Please check your internet connection.</h1>);
        
    };
    return listOfRestaurants.length==0?
        (<Shimmer/>):
            (<div className="body">
                <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant);
                }}>search</button>
            </div>
            
                <button className="filter-btn" onClick={()=>{
                   const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>3.6);
                   setListOfRestaurants(filteredList);
                }}>Top rated Restaurants</button>
            </div>
            <div className="restro-container">
                 {
                  filteredRestaurant.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))
                 }
                  
            </div>

        </div>
    )
}
 export default BodyPart;
