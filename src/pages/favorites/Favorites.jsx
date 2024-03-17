import { useSelectedUsers } from '../../hooks';
import { H2, Person, PersonList } from '../../components';

export const Favorites = () => {
	const [users, selectUser] = useSelectedUsers([], {
		onlyUnique: true,
		favorites: true,
	});
	return (
		<>
			<H2>Список избранных специалистов</H2>
			<PersonList>
				{users.map((user) => (
					<Person
						key={user.id}
						user={user}
						setFavorite={() => selectUser(user.id)}
					/>
				))}
			</PersonList>
		</>
	);
};
