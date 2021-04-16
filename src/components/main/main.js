import css from './main.module.css'
import EmptyState from '../empty-state'
import List from '../list'


export default function Main(props) {
    const {isLogged, loggedUser, todos} = props
    const filteredTodo = todos.filter(item => item.userId === loggedUser.id)

    return (
        <main className={css.container}>
            {isLogged? (
                <>
                    <h2>Welcome, {loggedUser.name}!</h2>
                    <button>Add list</button>
                    <List todos = {filteredTodo} />
                </>
            ) : (
                <EmptyState/>
            )}
        </main>
    )
}