import { useState } from "react";


const useCarousel = (items) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
            setCurrentIndex(currentIndex => {
                currentIndex --;
                if(currentIndex < 0) {
                    currentIndex = items.length - 1;
                }
                return currentIndex;            
            })  
        }
        
    const next = () => {
        setCurrentIndex(currentIndex => {
            currentIndex ++;
            if(currentIndex > items.length - 1) {
                currentIndex = 0;
            }
            return currentIndex;      
        })  
    };

    return{
        currentIndex,
        currentItem: items[currentIndex],
        previous,
        next,
    };
};

export default useCarousel;