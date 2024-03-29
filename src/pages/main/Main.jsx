import { useSelectedUsers } from "../../hooks"
import { Person, PersonList, H2 } from "../../components"
import styles from './Main.module.css';

export const Main = () => { 
    const [users, selectUser] = useSelectedUsers([], { onlyUnique: true })
    return (
		<div className={styles.main}>
			<H2 fontSize="45px">
				Команда веб-разработчиков <span className={styles.yellow}>DreamTeam</span>
			</H2>
			<div className={styles.text}>
				<span>DreamTeam</span> – это команда амбициозных, настроенных на результат
				веб-разработчиков. Ставящая перед собой далеко идущие цели. Не пугается
				сложностей и берется за реализацию любого проекта с применением
				современных принципов и технологий разработки. Обращаясь к нам, Вы
				гарантированно достигните своих бизнес-целей.
				<br />
				<br />
				<span>Наша цель</span> – достижение максимального результата в адекватные
				сроки и за разумные деньги.
			</div>
			<H2>Наши специалисты</H2>
			<PersonList>
				{users.map((user) => (
					<Person className={styles.crop} key={user.id} user={user} setFavorite={() => selectUser(user.id)} />    
				))}
			</PersonList>
		</div>
    )
}
