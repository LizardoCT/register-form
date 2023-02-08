import logo from '../assets/logonav.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavUsers = () => {
  const [param, setParam] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setParam(urlParams.get(param))
  }, [])

  return (
    <div>
      <nav className="bg-nav-bg flex justify-between items-center p-4 px-[10%]">
        <Link to='/'>
          <img src={logo} className='h-11' alt="logo" />
        </Link>

        <Link className="text-cyan-50 border-2 border-nav-btn bg-nav-btn rounded-full px-4 py-1 font-bold hover:border-gray-200 ml-3" to='/register'>
          Nuevo registro
        </Link>
      </nav>
    </div>
  )
}

export default NavUsers
