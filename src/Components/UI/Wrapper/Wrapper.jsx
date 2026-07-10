import styles  from './Wrapper.module.css'
import Heading from "./Heading/Heading/Heading.jsx";
import Quotes from "../Quotes/Quotes.jsx";
import BottomBlockWrapper from "./BottomBlock/BottomBlockWrapper/BottomBlockWrapper.jsx";
import {useState} from "react";

function Wrapper() {

    const [searchText, setSearchText] = useState("");

    return (
        <div className={`${styles.wrapper}`}>

            <Heading searchText={searchText} setSearchText={setSearchText}></Heading>
            <Quotes />
            <BottomBlockWrapper searchText={searchText} ></BottomBlockWrapper>

        </div>
    )
}

export default Wrapper;