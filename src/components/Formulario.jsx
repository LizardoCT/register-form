import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
// import { FcCheckmark } from 'react-icons/fc'

function Form (client) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [user, setUser] = useState({})

  // changin label input

  const [showText, setShowtext] = useState('Número de documento')

  const handletext = (e) => {
    const getvalue = e.target.value
    console.log(getvalue)

    if (getvalue == 'DNI') {
      const show = 'Número de DNI'
      setShowtext(show)
    } else if (getvalue == 'CE') {
      const show = 'Número de CE'
      setShowtext(show)
    } else if (getvalue == 'Pasaporte') {
      const show = 'Número de Pasaporte'
      setShowtext(show)
    } else {
      const show = 'Número de documento'
      setShowtext(show)
    }
  }

  // Para traer la data del formulario
  // const userData = register('personal')

  const onSubmit = (data, e) => {
    setUser(data)
    setUser((prevValue) => ({
      ...prevValue
    }))
    e.target.reset()
  }

  // useEffect(() => {
  //   const subscription = watch(({ personal }, _) => {
  //     console.log(personal)
  //     mappedDoctype(personal?.docType)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [watch])

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      console.log('')
    } else if (Object.entries(user).length !== 0) {
      submitingUser(user)
    }
  }, [user])

  // function mappedDoctype (v) {
  //   switch (v) {
  //     case 'DNI':
  //       return /^[0-9]{8}$/i
  //     case 'CE':
  //       return /^[A-z0-9]{9}$/i
  //     case 'Pasaporte':
  //       return /^[0-9]{9}$/i

  //     default:
  //       return /^[0-9]{7,8}$/i
  //   }
  // }

  function submitingUser (user) {
    client.submitUser(user)
    alert('Registro exitoso')
  }

  return (
    <div className="flex items-center justify-center flex-col pt-10">
      <h2 className="text-2xl pb-9 italic">Registro de Pasajeros</h2>
      <p className="text-gray-500 text-sm pb-6">
        Registro máximo de 4 pasajeros
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm text-gray-500 m-3">Nombres</label>
          <input autoFocus
            className="focus:border-blue-400 w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4"
            type="text"
            {...register("personal.firstName", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[a-zA-Z ]+$/i,
                message: "Please enter a valid name"
              }
            })}
          />
          {errors?.personal?.firstName && (
            <p className="error">{errors.personal.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-500 m-3">Apellidos</label>
          <input
            className="w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4"
            type="text"
            {...register("personal.lastName", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[a-zA-Z ]+$/i,
                message: "Please enter a valid name"
              }
            })}
          />
          {errors?.personal?.lastName && (
            <p className="error">{errors.personal.lastName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-500 m-3">País</label>
          <input
            className="w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4"
            type="text"
            {...register("personal.country", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /([a-zA-Z]|[à-ü]|[À-Ü])/g,
                message: "Solo carácteres alfabéticos"
              }
            })}
          />
          {errors?.personal?.country && (
            <p className="error">{errors.personal.country.message}</p>
          )}
        </div>

        <div className="select">
          <label className="text-sm text-gray-500 m-3">Tipo de documento</label>
          <select
            className="w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4"
            type="text"
            onChange={(e) => handletext(e)}
            {...register('personal.docType', {
              required: { message: 'Este campo es requerido' }
            })}
          >
            <option value="">Seleccionar...</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          {errors?.personal?.docType && (
            <p className="error">{errors.personal.docType.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-500 m-3">{showText}</label>
          <input
            className="w-full py-3 pl-3 rounded-md bg-gray-100 text-gray-600 px-1 outline-none mb-4"
            type="text"
            {...register('personal.document', {
              required: { value: true, message: 'This field is required' },
              // onBlur: console.log(blur),
              pattern: {
                // value: mappedDoctype,
                message: 'Por favor ingrese un documento válido'
              },
              maxLength: {
                value: 8,
                message: 'Por favor ingrese un documento válido'
              }
            })}
          />
          {errors?.personal?.document && (
            <p className="error">{errors.personal.document.message}</p>
          )}
        </div>

        <input
          className="bg-red-600 w-full font-bold text-lg text-gray-100 py-4 my-10 rounded-lg hover:bg-red-500 transition-colors cursor-pointer"
          type="submit"
          value="Registrar"
        />

        {/* <p>{JSON.stringify(mappedDoctype)}</p> */}
      </form>
    </div>
  )
}

export default Form
