import { useSelectedUsers } from "../../hooks"
import { Person, PersonList } from "../../components"
import styles from './Users.module.css';

export const Users = () => { 
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true })
    return (
		<div className={styles.main}>
			<PersonList>
				{users.map((user) => (
					<Person className={styles.crop} key={user.id} user={user} setFavorite={() => selectUser(user.id)} />    
				))}
			</PersonList>
		</div>
    )
}
