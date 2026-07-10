import {useState} from "react";

import styles from './Quotes.module.css';
import arrQuotes from "../../../db.jsx";
import SingleQuote from "../SingleQuote/SingleQuote.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




function Quotes()  {

    const [data, setData] = useState(0);

    const rundomQuotes = () => {
        return arrQuotes[data];
    }

    const randomizeQuotes = () => {
        const randomNumber = Math.floor(Math.random() * arrQuotes.length-1) + 1;
        setData(randomNumber)
    }

    return (
        <div className={`${styles["quotes"]} d-flex jc-between`}>


            <SingleQuote quote={rundomQuotes().quote} author={rundomQuotes().name}>

            </SingleQuote>

            <button onClick={() => {randomizeQuotes()}} className={`${styles['quote-button']}`}>
                <FontAwesomeIcon icon={['fas', "chevron-right"]} />

            </button>
        </div>
    )
}

export default Quotes