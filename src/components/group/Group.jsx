import { mergeStrings } from '../../utils'
import styles from './Group.module.css'
import PropTypes from 'prop-types'

export const Group = ({ children, ...props }) => {
    return (
        <div className={mergeStrings([...Object.values(props), styles.group])}>
            {children}
        </div>
    )
}

Group.propTypes = {
    props: PropTypes.objectOf(PropTypes.string),
    children: PropTypes.node
}