import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mergeStrings } from '../../utils';
import { Group, Img, Button } from '../../components';
import styles from './Person.module.css'
import common from '../../index.module.css'

export const Person = ({ user, setFavorite }) => {
    return (
        <div className={mergeStrings([styles.person, common.crop])}>
            <Img image={user.image} />
            <p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>ВОЗРАСТ: { user.age } ОПЫТ: {user.experience} { user.experience < 2 ? 'ЛЕТ' : 'ГОДА' }</p>
            <p className={mergeStrings([styles.text, styles.big, common['mt-1']])}>{ user.first_name } { user.second_name }</p>
            <p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>{ user.about }</p>
            <Group marginTop={common['mt-2']}>
                <Link to={`/user/${user.id}`}><Button>Профиль</Button></Link>
                <Button onClick={() => setFavorite()} color={user?.selected ? '#0B6BCB' : '#ffffff'}><b style={{ fontSize: '20px' }}>⭐</b></Button>
            </Group>
        </div>
    );
}

Person.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        experience: PropTypes.number,
        age: PropTypes.number,
        image: PropTypes.string,
        about: PropTypes.string,
        stack: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            progress: PropTypes.number,
        })),
    }),
    setFavorite: PropTypes.func,
}