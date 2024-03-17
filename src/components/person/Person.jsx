import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mergeStrings } from '../../utils';
import { Group, Img, Button, Stack, CustomImage } from '../../components';
import styles from './Person.module.css'
import common from '../../index.module.css'

export const Person = ({ user, setFavorite, showFullInfo = false, ...props }) => {
    return (
        <div className={mergeStrings([...Object.values(props), styles.person])}>
            <Group justifyStart={styles['justify-start']}>
                <CustomImage src={user.image} />
                {showFullInfo && <Stack stack={user.stack} />}
            </Group>
            <p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>ВОЗРАСТ: { user.age }</p>
            <p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>ОПЫТ: {user.experience} { user.experience < 2 ? 'ЛЕТ' : 'ГОДА' }</p>
            <h1 className={mergeStrings([styles.text, common['mt-1']])}>{ user.first_name } { user.second_name }</h1>
            <p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>{ user.about }</p>
            <Group marginTop={common['mt-2']}>
                {!showFullInfo && <Link to={`/users/${user.id}`}><Button width='100px' color='#0B6BCB'>ПРОФИЛЬ</Button></Link>}
                <Button width='50px' onClick={() => setFavorite()} color={user?.selected ? '#0B6BCB' : '#ffffff'}><b style={{ fontSize: '20px' }}>⭐</b></Button>
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
    useProfileBtn: PropTypes.bool,
    props: PropTypes.objectOf(PropTypes.string),
}