import styles from './LeftBlock.module.css'

function SingleQuote(props) {
    console.log(props);
    return (
        <li className={`${styles["LeftBlock"]}`} key={props.quoteIndex}>
            {props.quote.name}
            {props.quote.quote}

        </li>
    )
}
export default SingleQuote;