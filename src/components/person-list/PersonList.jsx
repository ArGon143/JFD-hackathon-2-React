import PropTypes from 'prop-types';
import styles from './PersonList.module.css'

export const PersonList = ({ children }) => {
    return (
        <div className={styles['person-list']}>
            {children}
        </div>
    )
}

PersonList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}