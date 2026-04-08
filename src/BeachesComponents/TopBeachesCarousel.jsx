import { useTranslation } from "react-i18next";
import { beaches } from "../data/beaches.jsx";
import useCarousel from '../hooks/useCarousel.js';
import prevBtn from '../assets/icons8-back-64.png'
import nextBtn from '../assets/icons8-forward-64.png'

const TopBeachesCarousel = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const top3Beaches = beaches.slice(0, 3);
    const { currentItem, previous, next } = useCarousel(top3Beaches);
    const {id, name, image, description, gps} = currentItem;  


    return(
        <div key={id} className='beachesCard topBeachesCarousel'>
            <div>
                <button className='btn' onClick={previous}><img src={prevBtn} alt="prev button" width="40px" /></button>
            </div>

            <div>
                <h2 className="recommendedHeader">{t("recommended")}</h2>
                <h3>{name}</h3>
                <img src={image} alt="beach" width="280px" height="150px" />
                <p>{description?.[lang] || description?.en}</p>
                <button className='linkToGoogle colorBeachesLink'><a className='googleLinkBeach' href={gps} target='_blank'>{t("directions")}</a></button>
            </div>

            <div>
                <button className='btn' onClick={next}><img src={nextBtn} alt="next button" width="40px" /></button>
            </div>
        </div>
    )
}

export default TopBeachesCarousel