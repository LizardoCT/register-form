import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Nav from '../layout/Nav'

function Form (client) {
  const [user, setUser] = useState({})

  // params from react-hook-form
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      'personal.docType': 'DNI'
    },
    mode: 'onBlur'
  })

  // data from forms and validation of number of users
  const onSubmit = (data, e) => {
    if (client.usersCount === 4) return Swal.fire('Usuarios completos')
    setUser(data)
    setUser((prevValue) => ({
      ...prevValue
    }))
    e.target.reset()
  }

  // redirect to register
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      console.log('')
    } else if (Object.entries(user).length !== 0) {
      submitingUser(user)
    }
  }, [user])

  // function to submite new user
  function submitingUser (user) {
    client.submitUser(user)
    Swal.fire('Registro exitoso.')
    navigate('/users')
  }

  // regex validation for each option
  const documentTypeWatch = watch('personal_docType')
  const documentValidations = {
    DNI: /^[0-9]{8}$/i,
    'Carné de extranjería': /^[a-zA-Z0-9]{9}$/i,
    Pasaporte: /^[0-9]{9}$/i
  }

  return (
    <>
      <Nav />
    <div className='flex items-center justify-center flex-col pt-12'>
      <h2 className='text-2xl pb-4 italic'>Registro de Pasajeros</h2>
      <p className='text-gray-500 text-sm pb-9'>Registro máximo de 4 pasajeros</p>

        <form className='w-[35rem] max-sm:w-80 md:max-xl:w-80' onSubmit={handleSubmit(onSubmit)} >

        <div>
          <label className='text-sm text-gray-500 m-3'>Nombre(s)</label>
          <input placeholder='Ingrese el o los nombres'
          className={errors.personal_firstName ? 'hover:ring-inset hover:ring-1 hover:ring-red-700 border-[1px] focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:ring-inset border-red-700 w-full py-3 pl-3 rounded-md  text-gray-600 px-1 outline-none mb-6' : 'hover:ring-inset hover:ring-1 hover:ring-blue-900 border-[1px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-inset w-full py-3 pl-3 rounded-md border-gray-400 text-gray-600 px-1 outline-none mb-6'} type="text"
            {...register('personal_firstName', {
              required: { value: true, message: 'Este campo es requerido' },
              pattern: { value: /^[ A-Za-zá-ú.']*$/i, message: 'Ingrese un nombre válido' }
            })}/>
          {errors?.personal_firstName && (<p className="error">{errors.personal_firstName.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>Apellidos</label>
          <input placeholder='Ingrese los apellidos'
          className={errors.personal_lastName ? 'hover:ring-inset hover:ring-1 hover:ring-red-700 border-[1px] focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:ring-inset border-red-700 w-full py-3 pl-3 rounded-md  text-gray-600 px-1 outline-none mb-6' : 'hover:ring-inset hover:ring-1 hover:ring-blue-900 border-[1px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-inset w-full py-3 pl-3 rounded-md border-gray-400 text-gray-600 px-1 outline-none mb-6'} type="text"
            {...register('personal_lastName', {
              required: { value: true, message: 'Este campo es requerido' },
              pattern: { value: /^[ A-Za-zá-ú.']*$/i, message: 'Ingrese un nombre válido' }
            })}/>
          {errors?.personal_lastName && (<p className="error">{errors.personal_lastName.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>País</label>
          <input placeholder='Ingrese el país'
          className={errors.personal_country ? 'hover:ring-inset hover:ring-1 hover:ring-red-700 border-[1px] focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:ring-inset border-red-700 w-full py-3 pl-3 rounded-md  text-gray-600 px-1 outline-none mb-6' : 'hover:ring-inset hover:ring-1 hover:ring-blue-900 border-[1px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-inset w-full py-3 pl-3 rounded-md border-gray-400 text-gray-600 px-1 outline-none mb-6'} type="text"
            {...register('personal_country', {
              required: { value: true, message: 'Este campo es requerido' },
              pattern: { value: /([a-zA-Z]|[à-ü]|[À-Ü])/g, message: 'Solo caracteres alfabéticos' }
            })}/>
          {errors?.personal_country && (<p className="error">{errors.personal_country.message}</p>)}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>Tipo de documento</label>
          <select
          className={errors.personal_docType ? 'hover:ring-inset hover:ring-1 hover:ring-red-700 border-[1px] focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:ring-inset border-red-700 w-full py-3 pl-3 rounded-md  text-gray-600 px-1 outline-none mb-6' : 'hover:ring-inset hover:ring-1 hover:ring-blue-900 border-[1px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-inset w-full py-3 pl-3 rounded-md border-gray-400 text-gray-600 px-1 outline-none mb-6'}
            {...register('personal_docType', {
              required: { value: true, message: 'Este campo es requerido.' }
            })} >
              {/* <option value=''>Seleccionar...</option> */}
              <option value="DNI">DNI</option>
              <option value="Carné de extranjería">Carné de extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          {errors?.personal_docType && (
            <p className="error">{errors.personal_docType.message}</p>
          )}
        </div>

        <div>
          <label className='text-sm text-gray-500 m-3'>
            Número de {watch('personal_docType')}
            </label>
          <input
          placeholder='Número de documento'
          className={errors.personal_dni ? 'hover:ring-inset hover:ring-1 hover:ring-red-700 border-[1px] focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:ring-inset border-red-700 w-full py-3 pl-3 rounded-md  text-gray-600 px-1 outline-none mb-6' : 'hover:ring-inset hover:ring-1 hover:ring-blue-900 border-[1px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-inset w-full py-3 pl-3 rounded-md border-gray-400 text-gray-600 px-1 outline-none mb-6'}
          type="text"
          {...register('personal_dni', {
            required: { value: true, message: 'Este campo es requerido' },
            pattern: {
              value: documentValidations[documentTypeWatch],
              message: 'Ingrese un documento válido'
            }
          })}
          />
          {errors?.personal_dni && (
            <p className="error">{errors.personal_dni.message}</p>
          )}
        </div>

        <button className='bg-red-600 w-full font-bold text-lg text-gray-100 py-4 my-6 rounded-lg hover:bg-red-500 transition-colors' type="submit">Registrar</button>
        </form>
    </div>
    </>
  )
}

export default Form
