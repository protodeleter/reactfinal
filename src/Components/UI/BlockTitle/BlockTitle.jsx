import styles from './BlockTitle.module.css';

function BlockTitle(props) {
    return (
        <h3 className={styles.blockTitle}> {props.text} </h3>
    )
}

export default BlockTitle;