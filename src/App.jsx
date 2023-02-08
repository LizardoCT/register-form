import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import useLocalStorage from './hooks/useLocalStorage'
import Home from './pages/Home'
import Form from './components/Form'
import UsersList from './components/UsersList'
import Footer from './layout/Footer'

function App () {
  const [users, setUsers] = useLocalStorage('userlist', [])
  const [logError, setLogError] = useState(false)

  function addUser (user) {
    const isANewUser = users.findIndex((alreadyUser) => {
      return user.personal_dni === alreadyUser.personal_dni
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

  // delete users

  const deleteItemFromList = (id) => {
    setUsers(
      users.filter((item, index) => {
        return index !== id
      })
    )
  }

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Form submitUser={addUser} usersCount={users.length}/>} />
          <Route path='/users' element={<UsersList userList={users} deleteUser={deleteItemFromList}/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
