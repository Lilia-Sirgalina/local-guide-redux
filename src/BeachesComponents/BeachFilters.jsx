import { useTranslation } from "react-i18next";
import { beachFilters } from "../data/filters.jsx";
import { filterCategory } from "../redux/beachesSlice.js";
import { useDispatch } from "react-redux";


const BeachFilters = () => {

    const { t } = useTranslation();    

    const dispatch = useDispatch();       

    return(
        <div>
            <div className='header'>
                <h2>{t("all beaches")}</h2>
            </div> 
            
            <div className="beachesButtons">                

                {beachFilters.map(filter => (
                    <button key={filter.label} className="filteredBtn beachBtn" onClick={() => dispatch(filterCategory({key: filter.type, value: filter.value}))}>{t(filter.label)}</button>
                ))}

                <button className="filteredBtn beachBtn" onClick={() => dispatch(filterCategory({key: null, value: "ALL"}))}>{t("show all")}</button>                
            </div>
        </div>
    )
}

export default BeachFilters