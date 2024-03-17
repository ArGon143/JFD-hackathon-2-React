import { useSelectedUsers } from '../../hooks';
import { H2, Person, PersonList } from '../../components';
import styles from './Main.module.css';

export const Main = () => {
	const [users, selectUser] = useSelectedUsers([], { onlyUnique: true });
	return (
		<div className={styles.main}>
			<H2 fontSize="45px">
				Команда веб-разработчиков <span className={styles.yellow}>DreamTeam</span>
			</H2>
			<div>Слайдер</div>
			<H2>Наши специалисты</H2>
			<PersonList>
				{users.map((user) => (
					<Person
						key={user.id}
						user={user}
						setFavorite={() => selectUser(user.id)}
					/>
				))}
			</PersonList>
		</div>
	);
};
