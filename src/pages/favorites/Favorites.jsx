import { useSelectedUsers } from "../../hooks";
import { Person, PersonList } from "../../components";
import styles from './Favorites.module.css';

export const Favorites = () => {
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true, favorites: true })
	return (
		<>
			<H2>Список избранных специалистов</H2>
			<PersonList>
				{users.map((user) => (
					<Person className={styles.crop} key={user.id} user={user} setFavorite={() => selectUser(user.id)} />    
				))}
			</PersonList>
		</>
    )
}
