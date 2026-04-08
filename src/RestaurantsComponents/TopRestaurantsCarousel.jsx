import { useTranslation } from "react-i18next";
import { restaurants } from "../data/restaurants.jsx";
import useCarousel from '../hooks/useCarousel.js';
import prevBtn from '../assets/icons8-back-64.png'
import nextBtn from '../assets/icons8-forward-64.png'


const TopRestaurantsCarousel = ({cuisine}) => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const top3Restaurants = restaurants.slice(0, 3);
    const { currentItem, currentIndex, previous, next } = useCarousel(top3Restaurants);
    const {id, name, image, description, price, rating, source, mediterranean, chinese, localFood} = currentItem;


    return(
        <div key={id} className='restaurantsCard topRestaurantsCarrousel'>
            <div>
                <button className='btn' onClick={previous}><img src={prevBtn} alt="prev button" width="40px" /></button>
            </div>

            <div>
                <h2 className="recommendedHeader">{t("recommended")}</h2>
                <h3>{name}</h3>
                <img src={image} alt="restaurant" width="280px" height="150px" />
                <p>{description?.[lang] || description?.en}</p>
                <p><span>{t("rating")}</span>{rating}</p>
                <p><span>{t("price")} </span>{price}</p>
                <p><span>{t("kitchen")}</span>{cuisine(top3Restaurants[currentIndex])}</p>
                <button className='linkToGoogle colorRestaurantsLink'><a className='googleLink' href={source} target='_blank'>{t("google")}</a></button>
            </div>

            <div>
                <button className='btn' onClick={next}><img src={nextBtn} alt="next button" width="40px" /></button>
            </div>
            
        </div>
    )
}

export default TopRestaurantsCarousel