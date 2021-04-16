import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import List from '../list'
import css from './app.module.css'
import mock from '../../server-response-mock'


function App() {
    const {activeUserId, users, todos} = mock
    const isLogged = activeUserId !== null
    const loggedUser = users.find(user => user.id === activeUserId)
    return (
        <div className={css.app}>
            <Header isLogged={isLogged} />
            <Main isLogged={isLogged} loggedUser={loggedUser} todos={todos} />
            <Footer />
        </div>
    )
}

export default App