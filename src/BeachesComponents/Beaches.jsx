import { useTranslation } from "react-i18next";
import TopBeachesCarousel from "./TopBeachesCarousel.jsx";
import BeachFilters from "./BeachFilters.jsx";
import BeachCards from "./BeachCards.jsx";


const Beaches = () => {

    const { t } = useTranslation();    
    
    return (
        <div className="Beaches image">
            <div className='header'>
                <h2>{t("beaches")}</h2>
            </div>              

            <div className='trashInfo'>            
                <p>{t("info beaches")}</p> 
            </div>         

            <div className="top3beaches">  
                <TopBeachesCarousel />
            </div>            

            <BeachFilters />

            <BeachCards />            
            
        </div>
    )
}

export default Beaches;