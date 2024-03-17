import { useSelectedUsers } from "../../hooks"
import { Person, PersonList } from "../../components"

export const Main = () => { 
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true })
    return (
        <PersonList>
            {users.map((user) => (
                <Person key={user.id} user={user} setFavorite={() => selectUser(user.id)} />    
            ))}
        </PersonList>
    )
}