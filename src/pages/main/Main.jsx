import { useSelectedUsers } from "../../hooks"
import { Person, PersonList } from "../../components"
import styles from './Main.module.css';

export const Main = () => { 
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true })
    return (
        <PersonList>
            {users.map((user) => (
                <Person className={styles.crop} key={user.id} user={user} setFavorite={() => selectUser(user.id)} />    
            ))}
        </PersonList>
    )
}