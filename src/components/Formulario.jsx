import { useState,useEffect } from "react"
import { Error } from "./Error";


export const Formulario = ( {pacientes,setPacientes ,paciente,setPaciente}) => {

  const [ nombre , setNombre] = useState('');
  const [ propietario , setPropietario] = useState('');
  const [ email , setEmail] = useState('');
  const [ alta , setAlta] = useState('');
  const [ sintomas , setSintomas] = useState('');

  
  const [error,setError] = useState(false); 

  useEffect(() => {
    if(Object.keys(paciente || {}).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])
  

  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre,email,propietario,alta,sintomas].includes('')){
      console.log('todos los campos deben ser completados')
      setError(true)
      return;
    }
    setError(false);

    const objetoPacientes={
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      
    }

    if(paciente.id) {
      // Editando el Registro
      objetoPacientes.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})
     

  } else {
      // Nuevo registro
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
  }

  // Reiniciar el form
  setNombre('')
  setPropietario('')
  setEmail('')
  setAlta('')
  setSintomas('')

  }

    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
  
      <h2 className="text-3xl font-black m-10">Seguimiento Pacientes</h2>
      <p className="text-xl mb-10">
        Añade pacientes y <span className=" font-bold text-indigo-600"> Administralos</span>
      </p>
 
        <form className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
          { error && <Error mensaje="Todos los componentes son necesarios"/>  }
            <div className="mb-5">
            <label className="mx-2 block font-bold uppercase text-gray-700" htmlFor="mascota">Nombre mascota</label>
            <input id="mascota" placeholder="Nombre de la mascota" value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" className="rounded-md border-2 w-full p-2 mt-2 placeholder-slate-400"/>
            </div>
            <div className="mb-5">
            <label className="mx-2 block font-bold uppercase text-gray-700" htmlFor="propietario">Nombre propietario</label>
            <input id="propietario" placeholder="Nombre de el propietario" value={propietario} onChange={(e)=> setPropietario(e.target.value)} type="text" className="rounded-md border-2 w-full p-2 mt-2 placeholder-slate-400"/>
            </div>
            <div className="mb-5">
            <label className="mx-2 block font-bold uppercase text-gray-700" htmlFor="email">E-mail</label>
            <input id="email" placeholder=" Email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="rounded-md border-2 w-full p-2 mt-2 placeholder-slate-400"/>
            </div>
            <div className="mb-5">
            <label className="mx-2 block font-bold uppercase text-gray-700" htmlFor="date">Alta</label>
            <input id="date" placeholder=" date" value={alta} onChange={(e)=> setAlta(e.target.value)} type="date" className="rounded-md border-2 w-full p-2 mt-2 placeholder-slate-400"/>
            </div>
            <div className="mb-5">
            <label className="mx-2 block font-bold uppercase text-gray-700" htmlFor="date">Sintomas</label>
            <textarea id="sintomas" placeholder=" sintomas" value={sintomas} onChange={(e)=> setSintomas(e.target.value)} type="text area" className="rounded-md border-2 w-full p-2 mt-2 placeholder-slate-400"/>
            </div>
            <input type="submit" value={ paciente.id ?"Editar paciente" :"Agregar paciente"} onClick={handleSubmit}  className="p-3 w-full cursor-pointer transition-all hover:bg-indigo-700 bg-indigo-600 text-white uppercase font-bold"/>
        </form> 
      </div>
      
    )
  }
  