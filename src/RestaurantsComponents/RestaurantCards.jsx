import { useTranslation } from "react-i18next";
import { getFilteredRestaurants } from "../redux/restaurantsSlice.js";
import { useSelector } from "react-redux";

const RestaurantCards = ({cuisine}) => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const comida = useSelector(getFilteredRestaurants);    

    return(
        <div className="beaches-container">                   
            {comida.map(restaurant => {
                const {id, name, image, description, price, rating, source, mediterranean, chinese, localFood} = restaurant;                    

                return (
                    <div key={id} className='restaurantsCard'>
                        <h3>{name}</h3>
                        <img src={image} alt="beach" width="280px" height="150px" />
                        <p>{description[lang]}</p>
                        <p><span>{t("rating")}</span>{rating}</p>
                        <p><span>{t("price")} </span>{price}</p>
                        <p><span>{t("kitchen")}</span>{cuisine(restaurant)}</p>
                        <button className='linkToGoogle colorRestaurantsLink'><a className='googleLink' href={source} target='_blank'>{t("google")}</a></button>
                    </div> 
                )                         
            })}                
        </div>    
    )
}

export default RestaurantCards