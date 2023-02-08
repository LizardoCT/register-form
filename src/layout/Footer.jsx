import logofooter from '../assets/logo-footer.png'
import pci from '../assets/pci.png'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-between bg-gray-200 py-9 mt-14 px-[10%] border-t-[1.5px] border-slate-400 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:py-4 max-sm:mt-9'>
        <div className='flex items-center max-sm:flex-col max-sm:justify-center max-sm:items-center'>
          <img src={logofooter} alt="logo" className='h-10' />
          <span className='text-xs ml-8 text-gray-600 max-sm:py-3'>© 2023 LATAM Airlines Perú S.A.</span>
        </div>

        <div className='flex items-center max-sm:flex-col max-sm:justify-center max-sm:items-center'>
          <span className='text-xs ml-8 text-gray-600 max-sm:pb-3'>Certificado por:</span>
          <img src={pci} className='h-12 ml-4'/>
        </div>
      </footer>
    </div>
  )
}

export default Footer
