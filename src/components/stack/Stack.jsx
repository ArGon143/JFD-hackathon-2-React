import PropTypes from 'prop-types'
import { Badge, Group, ProgressBar } from '../../components'
import { randomLightColor } from '../../utils'
import styles from './Stack.module.css'

export const Stack = ({ stack }) => {
    return (
        <div>
            {stack.map((item) => (
                <Group key={item.name} alignItems={styles['items-center']} marginLeft={styles['margins']}>
                    <Badge color={randomLightColor()} fontSize={'12px'}>{item.name}</Badge>
                    <ProgressBar circle={item.name === 'React'} name={item.name} percent={item.progress} color={randomLightColor()} />
                </Group>
            ))}
        </div>
    )
}

Stack.propTypes = {
    stack: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        progress: PropTypes.number,
    }))
}