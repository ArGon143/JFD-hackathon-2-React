import { Person } from "../components";
import { useLocalStorage } from "../hooks";
import { users } from "../db";

export const Favorites = () => {
    const [usersArray, setUsers] = useLocalStorage('users', users.reduce((acc, user) => [...acc, user.id], []))
    console.log(usersArray)
    return (
        <Person />    
    );
}