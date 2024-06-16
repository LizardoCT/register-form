import { Link } from 'react-router-dom'
import NavUsers from '../layout/NavUsers'

const Home = () => {
  return (
    <div className='h-[80vh]'>
      <NavUsers />
      <header className='flex flex-col items-center justify-center px-[10%] max-sm:px-0'>
        <div className='bg-[#9EF0FD] h-80 w-full rounded-b-3xl px-24 max-sm:px-12 max-sm:h-80'>
          <p className='text-[36px] pt-11 text-indigo-900 max-sm:text-2xl max-sm:pt-5 max-sm:w-[90%]'>
            NOTE: This site is a clone website. It is not the real, official
            site. Its purpose is to look like the official site for practice
            purposes. This site is not for active use. Do NOT enter your
            credentials or share any personal information.
          </p>
          {/* <a
            href=''
            className='font-semibold text-indigo-700 underline hover:no-underline'
          >
            Ver ofertas
          </a> */}
        </div>
        {/* cards inputs */}
        {/* <div>
          <div className='bg-slate-100 w-full flex justify-around'>
            <div>Vuelos</div>
            <div>Paquetes</div>
            <div>Hoteles</div>
          </div>
        </div> */}
        <h1 className='text-3xl font-bold p-20'>Formulario de registro</h1>

        <Link
          className='text-cyan-50 border-2 border-nav-btn bg-nav-btn rounded-full px-10 py-3 font-bold hover:border-gray-200 ml-3'
          to='/register'
        >
          Registrar pasajero(s)
        </Link>
      </header>
    </div>
  )
}

export default Home
