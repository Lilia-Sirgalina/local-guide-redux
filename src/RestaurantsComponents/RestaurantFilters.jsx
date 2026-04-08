import { useTranslation } from "react-i18next";
import { restaurantFilters } from "../data/filters.jsx";
import { useDispatch } from "react-redux";
import { filterCategory } from "../redux/restaurantsSlice.js";


const RestaurantFilters = () => {

    const { t } = useTranslation();    
    const dispatch = useDispatch();

    return(
        <div className="beachesButtons">               

            {restaurantFilters.map(filter => (
                <button key={filter.label} className="filteredBtn restaurantBtn" onClick={() => dispatch(filterCategory({key: filter.type, value: filter.value}))}>{t(filter.label)}</button>
            ))}

            <button className="filteredBtn restaurantBtn" onClick={() => dispatch(filterCategory({key: null, value: "ALL"}))}>{t("show all")}</button>                
        </div>
    )
}

export default RestaurantFilters