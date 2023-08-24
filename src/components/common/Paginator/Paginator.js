import React, {useState} from "react";
import s from './Paginator.module.css';


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
    let rightportionPageNumber = portionNumber * portionSize;




return (

    <div className={s.spanBlock}>
        {portionNumber > 1 && 
        <button onClick={ ()=> {setPortionNumber(portionNumber - 1)}}>PREV</button>
        }
    {/* {
        pages.filter( p => p >= leftPortionPageNumber && p <= rightportionPageNumber)
        .map((p) => {
            return <span></span>
        }) 
    } */}

        {pages
        .filter( p => p >= leftPortionPageNumber && p <= rightportionPageNumber)
        .map(p => {
        return <span className={currentPage === p ? s.selectedPage : '' + s.hoverPage} onClick={(e) => {
            onPageChanged(p)
        }}>{p}</span>
        })}

        {portionCount > portionNumber && 
        <button onClick={()=> {setPortionNumber( portionNumber +1 )}}>NEXT</button>
        }


    </div>
)}

export default Paginator;