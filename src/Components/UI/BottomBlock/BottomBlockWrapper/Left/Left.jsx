import styles from "./LeftBlock.module.css";
import arrQuotes from "../../../../../db.jsx";
import SingleQuote from "./SingleQuote.jsx";



function LeftBlock() {

    return <div className={`${styles["LeftBlock"]}`}>
        <h3 className={styles['left-block-title']}> All Quotes </h3>
        <ul>
            {arrQuotes.map((quote, index) => {
                return (
                    <SingleQuote key={index} quote={quote} quoteIndex={index} />
                );
            })}
        </ul>

    </div>;
}

export default LeftBlock;