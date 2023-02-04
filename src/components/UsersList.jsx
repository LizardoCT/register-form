function UsersList (p) {
  const users = p.userList
  return (
    <div className="flex items-center flex-col">
      {!users.length
        ? (<div><p>No users resgistered</p></div>)
        : (<ul>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <h2 className="capitalize">
                {user.personal.firstName} {user.personal.lastName}
                </h2>
                <p>{user.personal.docType} : {user.personal.dni}</p>
                <p className="capitalize">País: {user.personal.country}</p>
                <button className="bg-red-600 w-full font-bold text-lg text-gray-100 py-2 my-10 rounded-lg hover:bg-red-500 transition-colors" id={index} onClick={() => p.deleteUser(index)}>
                  Delete User
                </button>
              </div>
            )
          })}
          </ul>
          )}
    </div>
  )
}

export default UsersList
