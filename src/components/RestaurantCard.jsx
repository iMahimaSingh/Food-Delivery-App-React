import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    const{resData}=props;
    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime,}=resData?.info;
    return(
        <div className="restro-card">
            <img
               alt="restro-image"
               className="restro-image"
               src={CDN_URL+ cloudinaryImageId}/>
             <h3>{name}</h3> 
            <h4>{cuisines.join(" , ")}</h4>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h6>{deliveryTime}</h6>
        </div>
    )
};
export default RestaurantCard;