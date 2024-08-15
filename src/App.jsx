<<<<<<< HEAD
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HeaderPart =()=>{
  return(
    <div className="header-container">
      <div className="image-container">
        <img 
        className="logo"
        alt="logoImage"
        src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-container">
      <nav className="nav-items">
      <span className="logo-text">About</span>
        </nav>
        <nav className="nav-items">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAACOjo57e3tTU1OJiYn4+PhmZmY/Pz/a2tqwsLAsLCyzs7Otra23t7fT09PMzMwODg69vb0aGhofHx9dXV2enp51dXVtbW2CgoLDw8MVFRUyMjLj4+OVlZWlpaVJSUkICB0LAAACvUlEQVR4nO2ai5KiMBBFCaigiLwfIgPz/1+5BhJFiI5jEsLu3lNllUaR4yV0R9SyAAAAAAAAAAAA8K9Tn8+1aYcpJ3LlZNrikWNMpeKjaY8xfU4ry+pIbqwmqxMZsZKsWE5ZtqKseE51vZ6s+HyKLCtay7waagGLh4VmujKwnOJoeBjFK8jqwCQSPpAwyYM5J3a40lHTq1PDs53n9NCIa7NZCXLqrUxmdbjXgkd4ZTCQFTvv0mT+VJIaOgef5kQxlBXL6SLIiZJcDGT1MieKgayO05o5h1fRxbI6PPYWMbzjLJTVrLeIWTQrXgte5kSJlqsMgai3iOEdJ9DtxNe+P+ZEiZZZIQfk7ZwofIWsNSue09tf0Gv9WfGc3jp2A5HurPh596sLGbXec/CDnChas+J1/IeaOSfRV9t5TuHvNw11ZcV6y7O1ymvYSkb1up3ndP5s87OOrHhvIc5n2ztEfce5X3+SlFI42wOiTkpVVgeiUEpRViwnv5GVanxls53llIW5rFQeZoqyuveWjazURlXHYQtt2oMVSN2680cl+EYzvAntLSqkeMdp5KWGHqxEinVnOamCOg09WCy12wvYPZeyQmpVSElZneey9ZNYKm/8GU3+QsqKXK+TcxohlBpXxRc1diylFJHUzhVLuZMDCKkVS5X78Ma+XImUPR6yVyK1HQ9tIQUpSEEKUpCCFKQgBSlIQQpS70lNf3Go6GA7HmnpSDV52VmrVOY9ks4G+4ut6eRlmVYpGf4bqVJWqtQgtZeV2muQsr7arQTtlw4nAAAAAAAAAAAAAAA0YK8QS/aioQ7+HqlYNLggvVRA3OEff/2vGsTtisbr78W2EcFByj+VttsW7td30LrdscyLoOpKpygLp5HeRVx5m5jE335MPDtvrh9z49OjcbnemsqunNy57r0sy85pS/q/YPIH26Iqfbz5fNYAAAAASUVORK5CYII=" alt="Logo" className="logo-image" />
        <span className="logo-text">Home</span>
        </nav>
        <nav className="nav-items">
        <img src="data:image/png;base64,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" alt="Logo" className="logo-image" />
        <span className="logo-text">Offer</span>
        </nav>
        <nav className="nav-items">
        <img src="data:image/png;base64,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" alt="Logo" className="logo-image" />
        <span className="logo-text">Cart</span>
        </nav>
    </div>
    </div>
  )
}
const RestaurantCards =(props) =>{
  const {resData}=props;
  
  
  return(
    
    <div className="restaurant-cards">
      <img 
      className="restaurant-image"
      alt="restaurantImage"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
    <div className="card-text">
    <h5>{resData.info.name}</h5>
    <h5>{resData.info.cuisines.join(' , ')}</h5>
    <h5>{resData.info.costForTwo}</h5>
    <h5>{resData.infoavgRating}</h5>
    <h6>{resData.info.sla.deliveryTime}mins</h6>  
    </div>
    </div>
  )
};

const resList=[{
  "info": {
    "id": "69876",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "UB City",
    "areaName": "Central Bangalore",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Salads",
      "Snacks",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "2",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 0.5,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "0.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-ub-city-central-bangalore-bangalore-69876",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "43836",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
    "locality": "MG Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 02:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹209"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "502957",
    "name": "Andhra Gunpowder",
    "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
    "locality": "Shivananda Circle",
    "areaName": "Seshadripuram",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 4.5,
    "parentId": "10496",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Andhra.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Andhra.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-shivananda-circle-seshadripuram-bangalore-502957",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "12808",
    "name": "A2B - Adyar Ananda Bhavan",
    "cloudinaryImageId": "pdod4o1em9potwsd22rs",
    "locality": "Wilson Garden",
    "areaName": "Shanti Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "22",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        },
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            },
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹75 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL",
      "discountCalloutInfo": {
        "message": "Free Delivery",
        "logoCtx": {
          "logo": "v1655895371/free_delivery_logo_hqipbo.png"
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "440123",
    "name": "Great Indian Khichdi by EatFit",
    "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
    "locality": "Cunnigham road",
    "areaName": "Vasanth Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Home Food",
      "Indian",
      "North Indian",
      "Healthy Food",
      "Snacks",
      "Desserts",
      "Rajasthani",
      "South Indian",
      "Maharashtrian",
      "Sweets"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "319582",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "588619",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
    "locality": "Brigade Road",
    "areaName": "Central Bangalore",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "100+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-brigade-road-central-bangalore-bangalore-588619",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "23847",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    "locality": "Rest House Road",
    "areaName": "Brigade Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2456",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.4,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 22:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "396108",
    "name": "Suzy Q",
    "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
    "locality": "Cunningham Road",
    "areaName": "Cunningham Road",
    "costForTwo": "₹800 for two",
    "cuisines": [
      "Indian",
      "Continental",
      "Seafood",
      "Asian",
      "Chaat",
      "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "454247",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/suzy-q-cunningham-road-bangalore-396108",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "558773",
    "name": "HRX by EatFit",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/f311b93a-963f-435d-b30d-43ffefb8d1fa_558773.jpg",
    "locality": "Ali Asker Road",
    "areaName": "Cunningham Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
      "Healthy Food",
      "Salads",
      "Keto",
      "Pastas"
    ],
    "avgRating": 4.5,
    "parentId": "335529",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-ali-asker-road-cunningham-road-bangalore-558773",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "667962",
    "name": "Paris Panini - Gourmet Sandwiches & Wraps",
    "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
    "locality": "Church Street",
    "areaName": "Central Bangalore",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Continental",
      "Pastas",
      "Salads",
      "Snacks",
      "Desserts",
      "Fast Food",
      "French"
    ],
    "avgRating": 4.6,
    "parentId": "21019",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 1.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "1.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
          "description": "Delivery!"
        },
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
              }
            },
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "500+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-bangalore-667962",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "643832",
    "name": "WeFit - Protein Bowls, Salads & Sandwiches",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/d32dda02-869b-46d5-b16c-47c4c14314e2_643832.JPG",
    "locality": "Langford Road",
    "areaName": "Santhinagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Healthy Food",
      "Salads",
      "Keto",
      "Snacks"
    ],
    "avgRating": 4.7,
    "parentId": "355285",
    "avgRatingString": "4.7",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-30 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 02:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-bangalore-643832",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "750396",
    "name": "Daily Kitchen - Homely Meals",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
    "locality": "Lakshmi Road",
    "areaName": "Langford Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Home Food",
      "Indian",
      "North Indian",
      "Thalis"
    ],
    "avgRating": 4.4,
    "parentId": "444382",
    "avgRatingString": "4.4",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-30 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 02:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "503002",
    "name": "NH1 Bowls - Highway To North",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/34185028-1357-4551-a4f4-0d545597a73e_503002.JPG",
    "locality": "Lakshmi Road",
    "areaName": "Shanti Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Punjabi",
      "Home Food"
    ],
    "avgRating": 4.6,
    "parentId": "22452",
    "avgRatingString": "4.6",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "15-25 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 02:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-bangalore-503002",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "396747",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
    "locality": "Residency Road",
    "areaName": "Shantinagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Punjabi",
      "Healthy Food",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "4925",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 2.2,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "2.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹159"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-residency-road-shantinagar-bangalore-396747",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "393107",
    "name": "EatFit",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/bf5211ad-bf62-43ed-a3f2-02985ca38b25_393107.JPG",
    "locality": "Ali Asker Road",
    "areaName": "Cunningham Road",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani"
    ],
    "avgRating": 4.4,
    "parentId": "76139",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/eatfit-ali-asker-road-cunningham-road-bangalore-393107",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "739040",
    "name": "Restaurant Chef Pillai",
    "cloudinaryImageId": "475688804b4b6086854d60b3a68440e7",
    "locality": "Ashok Nagar",
    "areaName": "Brigade Road",
    "costForTwo": "₹1400 for two",
    "cuisines": [
      "South Indian",
      "Seafood"
    ],
    "avgRating": 4.4,
    "parentId": "465075",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.1,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹899",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "500+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/restaurant-chef-pillai-ashok-nagar-brigade-road-bangalore-739040",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "29063",
    "name": "Misu",
    "cloudinaryImageId": "lx0tpfgsbqygafwh30wh",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹1300 for two",
    "cuisines": [
      "Asian",
      "Chinese",
      "Vietnamese",
      "Malaysian",
      "Sushi",
      "Singaporean",
      "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "7415",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/misu-st-marks-road-bangalore-29063",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "281469",
    "name": "Lavonne",
    "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹750 for two",
    "cuisines": [
      "Bakery",
      "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "10530",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        },
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            },
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "92384",
    "name": "Ambur Star Briyani Since 1890",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/0c8c4776-ec27-4afb-bf41-113a08c0cd59_92384.jpg",
    "locality": "Indiranagar",
    "areaName": "Indiranagar",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Biryani",
      "Chettinad",
      "Andhra",
      "Beverages",
      "Seafood"
    ],
    "avgRating": 4.5,
    "parentId": "21400",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 5.8,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "5.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 23:45:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "3.8",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-indiranagar-bangalore-92384",
    "type": "WEBLINK"
  }

}]



const BodyPart =()=>{
  return(
    <div className="restaurant-container">
    <h5>Search</h5>
    <div className="card-container">
      
        {resList.map((restaurant)=>(<RestaurantCards key={restaurant.info.id} resData={restaurant}/>))};
         
        </div>

    </div>
  )
}

function App() {
  
      return(
        <div>
           <HeaderPart />
           <BodyPart />
        </div>
      )
}

export default App
=======
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyPart from "./components/BodyPart";

import "./App.css";










const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <BodyPart/>

        </div>
    )
}

const root = ReactDOM. createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
>>>>>>> a6e5c79 (Implement shimmer effect and conditional rendering; add useState and useEffect hooks)
