import NavUsers from './layout/NavUsers'

function UsersList (p) {
  const users = p.userList
  return (
    <>
    <NavUsers />
    <div className="flex items-center justify-center pt-12">
      {!users.length
        ? (<div><p className="py-72 h-[50%]">No users resgistered</p></div>)
        : (<div className="grid grid-cols-2 gap-4 place-content-center max-sm:gap-0">
          {users.map((user, index) => {
            return (
              <div key={index} className='border-[1px] border-gray-300 m-5 p-5 rounded-md max-sm:m-2 max-sm:text-sm max-sm:p-4'>

                <span className="font-semibold text-gray-700">Nombres y apellidos:</span>
                <h2 className="capitalize text-gray-500">{user.personal_firstName} {user.personal_lastName}</h2>

                <div className="capitalize font-semibold pt-3 text-gray-700">País: </div>
                <span className="capitalize text-gray-500">{user.personal_country}</span>

                <div className="font-semibold pt-3 text-gray-700">{user.personal_docType} : </div>
                <span className="text-gray-500">{user.personal_dni}</span>

                <button className="bg-red-800 w-full font-bold text-lg text-gray-100 py-2 mt-5 rounded-lg hover:bg-red-700 transition-colors max-sm:text-sm max-sm:mt-4"
                  id={index} onClick={() => p.deleteUser(index)}>
                  Delete User
                </button>

              </div>
            )
          })}
          </div>
          )}
    </div>
    </>
  )
}

export default UsersList
