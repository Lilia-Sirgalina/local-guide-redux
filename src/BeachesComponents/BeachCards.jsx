import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getFilteredBeaches } from "../redux/beachesSlice.js";


const BeachCards = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const playas = useSelector(getFilteredBeaches);

    return(
        <div className="beaches-container">                   
            {playas.map(beach => {
                const {id, name, image, description, gps} = beach;

                return (
                    <div key={id} className='beachesCard'>
                        <h3>{name}</h3>
                        <img src={image} alt="beach" width="280px" height="150px" />
                        <p>{description[lang]}</p>
                        <button className='linkToGoogle colorBeachesLink'><a className='googleLinkBeach' href={gps} target='_blank'>{t("directions")}</a></button>
                    </div> 
                )                         
            })}                
        </div>    
    )
}

export default BeachCards