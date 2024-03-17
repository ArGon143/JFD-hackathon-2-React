import { useParams } from "react-router-dom"
import { Person } from "../../components"
import styles from './User.module.css';
import { useSelectedUsers } from "../../hooks";

export const User = () => {
    const { id } = useParams()
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true, filter: id })

    return (
        <div className={styles.center}>
            <Person className={styles.crop} user={users[0]} setFavorite={() => selectUser(users[0]?.id)} showFullInfo={true} />    
        </div>
    )
}