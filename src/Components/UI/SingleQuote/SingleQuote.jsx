
import styles from "./SingleQuote.module.css"

function SingleQuote( props ) {
    return (
        <div className={`${styles["SingleQuote"]}`}>

            <div className={ `${styles.content}` }> {props.quote} </div>

            <div className={ `${styles.author}` }> {props.author} </div>

        </div>
    )
}

export default SingleQuote;