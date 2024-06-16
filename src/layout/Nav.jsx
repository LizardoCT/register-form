import logo from '../assets/logo-nav.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [param, setParam] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setParam(urlParams.get(param))
  }, [])

  return (
    <div>
      <nav className='bg-nav-bg flex justify-between items-center p-4 px-[10%]'>
        <Link to='/'>
          <img src={logo} className='h-11' alt='logo' />
        </Link>

        <div>
          <Link className='text-cyan-50 font-bold mr-4 max-sm:mr-0' to='/'>
            Inicio
          </Link>
          <Link
            className='text-cyan-50 border-2 border-nav-btn bg-nav-btn rounded-full px-4 py-1 font-bold hover:border-gray-200 ml-3'
            to='/users'
          >
            Ver registro
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
