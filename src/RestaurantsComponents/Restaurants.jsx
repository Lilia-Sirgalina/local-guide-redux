import { useTranslation } from "react-i18next";
import TopRestaurantsCarousel from "./TopRestaurantsCarousel.jsx";
import RestaurantFilters from "./RestaurantFilters.jsx";
import RestaurantCards from "./RestaurantCards.jsx";


const Restaurants = () => {

    const { t } = useTranslation();    

    const cuisine = (restaurant) => {
        if (restaurant.mediterranean && restaurant.localFood) {
            return `${t("mediterranean")} / ${t("local food")}`;
        }
        if (restaurant.mediterranean) return t("mediterranean");
        if (restaurant.localFood) return t("local food");
        if (restaurant.chinese) return t("asian");
        return "";
    };
        

    return (
        <div className="Restaurants image">
            <div className='header'>
                <h2>{t("local restaurants")}</h2>
            </div>   

            <div className='trashInfo'>            
                <p>{t("info restaurants")}</p> 
            </div>

            <div className="top3beaches">                
                <TopRestaurantsCarousel cuisine = {cuisine} />                                  
            </div>

            <RestaurantFilters />  

            <RestaurantCards cuisine = {cuisine} />   
            
        </div>
    )
}

export default Restaurants;