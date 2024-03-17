import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mergeStrings } from '../../utils';
import { Group, СustomImage, Button } from '../../components';
import styles from './Person.module.css';
import common from '../../index.module.css';

export const Person = ({ user, setFavorite }) => {
	return (
		<div className={mergeStrings([styles.person, common.crop])}>
			<СustomImage
				className={mergeStrings([styles.image, common.crop])}
				src={user.image}
				width={320}
				height={320}
			/>
			<p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>
				ВОЗРАСТ: {user.age} <br /> ОПЫТ РАЗРАБОТКИ: {user.experience}{' '}
				{user.experience < 2 ? 'ЛЕТ' : 'ГОДА'}
			</p>
			<p className={mergeStrings([styles.text, styles.big, common['mt-1']])}>
				{user.first_name} {user.second_name}
			</p>
			<p className={mergeStrings([styles.text, styles.small, common['mt-1']])}>
				{user.about}
			</p>
			<Group marginTop={common['mt-2']}>
				<Link to={`/user/${user.id}`}>
					<Button type={'border-radius'}>Профиль</Button>
				</Link>
				<Button
					type={'border-radius'}
					onClick={() => setFavorite()}
					color={user?.selected ? '#0B6BCB' : '#ffffff'}
				>
					<b style={{ fontSize: '20px' }}>⭐</b>
				</Button>
			</Group>
		</div>
	);
};

Person.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		experience: PropTypes.number,
		age: PropTypes.number,
		image: PropTypes.string,
		about: PropTypes.string,
		stack: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				progress: PropTypes.number,
			}),
		),
	}),
	setFavorite: PropTypes.func,
};
