import styles  from './Wrapper.module.css'
import Heading from "../Heading/Heading/Heading.jsx";
import Quotes from "../Quotes/Quotes.jsx";
import BottomBlockWrapper from "../BottomBlock/BottomBlockWrapper/BottomBlockWrapper.jsx";

function Wrapper() {
    return (
        <div className={`${styles.wrapper}`}>

            <Heading></Heading>

            <Quotes />

            <BottomBlockWrapper></BottomBlockWrapper>


        </div>
    )
}

export default Wrapper;