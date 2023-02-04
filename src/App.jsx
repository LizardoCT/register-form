import useLocalStorage from './hooks/useLocalStorage'
import Form from './components/Form'
import Nav from './components/Nav'
import UsersList from './components/usersList'
import { useState } from 'react'
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function App () {
  const [users, setUsers] = useLocalStorage('userlist', [])
  const [logError, setLogError] = useState(false)

  function addUser (user) {
    const isANewUser = users.findIndex((alreadyUser) => {
      return user.personal.dni === alreadyUser.personal.dni
    })

    if (isANewUser > -1) {
      setLogError(true)
      console.log(users)
    } else if (isANewUser === -1) {
      setUsers((prevValue) => {
        return [...prevValue, user]
      })
      console.log(users)
    }
  }

  const deleteItemFromList = (id) => {
    setUsers(
      users.filter((item, index) => {
        return index !== id
      })
    )
  }

  return (
    <div>
      <Router>
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink exact to="/" style={{ margin: '50px' }}>
            Registrar
          </NavLink>
          <NavLink exact to="/users" style={{ margin: '50px' }}>
            Ver registro
          </NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<Form submitUser={addUser} />}></Route>
          <Route
            exact
            path="/users"
            element={
              <UsersList userList={users} deleteUser={deleteItemFromList} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
