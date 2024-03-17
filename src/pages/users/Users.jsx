import React from 'react';
import { H2, Person, PersonList } from '../../components';
import styles from './Users.module.css';
import { useSelectedUsers } from '../../hooks';

export const Users = () => {
	const [users, selectUser] = useSelectedUsers([], { onlyUnique: true });

	return (
		<div className={styles.users}>
			<H2>Наши разработчики</H2>
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
