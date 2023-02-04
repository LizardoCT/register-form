import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
// import { FcCheckmark } from 'react-icons/fc'

function Form (client) {
  const [user, setUser] = useState({})

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    setUser(data)
    setUser((prevValue) => ({
      ...prevValue
    }))
    e.target.reset()
  }

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      console.log('')
    } else if (Object.entries(user).length !== 0) {
      submitingUser(user)
    }
  }, [user])

  // function mappeId () {
  //   switch (register.docType) {
  //     case 'DNI':
  //       return /^[0-9]{7,8}$/i
  //     case 'CE':
  //       return /^[0-9]{7,8}$/i
  //   }
  // }

  function submitingUser (user) {
    client.submitUser(user)
    alert('Registro exitoso')
  }

  return (
    <div className='flex items-center justify-center flex-col pt-10'>
      <h2 className='text-2xl pb-9 italic'>Registro de Pasajeros</h2>
      <p className='text-gray-500 text-sm pb-6'>Registro máximo de 4 pasajeros</p>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='text-sm text-gray-500 m-3'>Nombres</label>
          <input className='w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4' type="text"
            {...register('personal.firstName', {
              required: { value: true, message: 'This field is required' },
              pattern: { value: /^[a-zA-Z ]+$/i, message: 'Please enter a valid name' }
            })}/>
          {errors?.personal?.firstName && (<p className="error">{errors.personal.firstName.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>Apellidos</label>
          <input className='w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4' type="text"
            {...register('personal.lastName', {
              required: { value: true, message: 'This field is required' },
              pattern: { value: /^[a-zA-Z ]+$/i, message: 'Please enter a valid name' }
            })}/>
          {errors?.personal?.lastName && (<p className="error">{errors.personal.lastName.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>País</label>
          <input className='w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4' type="text"
            {...register('personal.country', {
              required: { value: true, message: 'This field is required' },
              pattern: { value: /([a-zA-Z]|[à-ü]|[À-Ü])/g, message: 'Solo carácteres alfabéticos' }
            })}/>
          {errors?.personal?.country && (<p className="error">{errors.personal.country.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>Tipo de documento</label>
          <select className='w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4' type="text"
            {...register('personal.docType', {
              required: { value: true, message: 'Este campo es requerido.' }
            })} >
              <option value=''>Seleccionar...</option>
              <option value="DNI">DNI</option>
              <option value="CE">CE</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          {errors?.personal?.docType && (
            <p className="error">{errors.personal.docType.message}</p>
          )}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>Número de documento</label>
          <input className='w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4' type="text"
            {...register('personal.dni', {
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: /^[0-9]{7,8}$/i,
                message: 'Please enter a valid document'
              }
            })}
          />
          {errors?.personal?.dni && (
            <p className="error">{errors.personal.dni.message}</p>
          )}
        </div>

        <input className='bg-red-600 w-full font-bold text-lg text-gray-100 py-4 my-10 rounded-lg hover:bg-red-500 transition-colors' type="submit" value='Registrar' />
        </form>
    </div>
  )
}

export default Form
