import {useState} from "react";

import styles from './Quotes.module.css';
import arrQuotes from "../../../db.jsx";




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
        <div className={`${styles["quotes"]} d-flex`}>
            <div className={`${styles.quote}`}>
                <div className={`${styles["quote-text"]}`}>
                    { rundomQuotes().quote }
                </div>
                <div className={`${styles["quote-name"]}`}>
                    { rundomQuotes().name }
                </div>
            </div>
            <button onClick={() => {randomizeQuotes()}}>
                Push
            </button>
        </div>
    )
}

export default Quotes