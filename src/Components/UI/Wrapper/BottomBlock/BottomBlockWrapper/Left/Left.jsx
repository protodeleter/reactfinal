import styles from "./LeftBlock.module.css";
import arrQuotes from "../../../../../../db.jsx";
import SingleQuote from "../../../../SingleQuote/SingleQuote.jsx";
import BlockTitle from "../../../../BlockTitle/BlockTitle.jsx";



function LeftBlock() {

    return <div className={`${styles["LeftBlock"]}`}>
        <BlockTitle text={"All quotes!"} />
        <div className={`${styles["LeftBlock-quotes"]}`}>
            {arrQuotes.map((quote, index) => {
                return (
                <SingleQuote key={index} quote={quote.quote} author={quote.name}>
                </SingleQuote>
                );
            })}
        </div>

    </div>;
}

export default LeftBlock;