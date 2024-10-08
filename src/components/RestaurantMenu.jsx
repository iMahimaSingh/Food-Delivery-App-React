import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";


const RestaurantMenu =()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    if (resInfo===null)
        return <Shimmer />;
    //console.log(resInfo?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    //const {name,cuisines}=(resInfo?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info);
    const { name,cuisines ,costForTwoMessage} = (resInfo?.data?.cards[2]?.card?.card?.info);
    console.log(resInfo?.data?.cards[2]?.card?.card?.info);
    const { itemCards }=resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    //console.log(resInfo);
    //console.log(itemCards);

    return (
        <div className="menu">
            <h1>
                {name}

            </h1>
            <p>{cuisines?.join(",")}.{costForTwoMessage}</p>
            <h2>Menu</h2>
            
            <ul>
           {itemCards.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name}-{" Rs. "}
                {item.card.info.price/100}

            </li>
           ))}
</ul>


        </div>
    )
}
export default RestaurantMenu;