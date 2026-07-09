import Search from '../Search/Search'
import styles from './Heading.module.css'

function Heading() {
    return (
            <div className="d-flex jc-between ai-center">
                <h2 className={styles["heading-h2"]}> Daily Quotes </h2>
                <Search></Search>
            </div>

    )

}

export default Heading;