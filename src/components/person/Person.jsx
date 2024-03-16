import styles from './Person.module.css'

export const Person = ({ props }) => {
    return (
        <div className={styles.person}>
            <img src={props?.image} />
        </div>
    );
}