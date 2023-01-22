const Paciente = ( { paciente, setPaciente, eliminandoPaciente}) => {
 const {nombre,propietario,email,alta,sintomas,id}= paciente
  
const handleEliminar = ()=>{
 const respuesta = confirm('seguro que lo quieres eliminar?');

 if(respuesta){
  eliminandoPaciente(id)
 }
}

  return (
    <>
    <div className="bg-white shadow-md mt-5 rounded-lg px-2 py-5">
    <div className="    mt-10  ">
      <p className="font-bold mb-3">
        Nombre:
        <span className="px-2 font-normal normal-case">
        {nombre}
        </span>
      </p>
    </div>
    <div className=" rounder-xl ">
      <p className="font-bold mb-3">
        Propietario:
        <span className="px-2 font-normal normal-case">
        {propietario}
        </span>
      </p>
    </div>
    <div>
      <p className="font-bold mb-3">
        Email:
        <span className="px-2 font-normal normal-case">
        {email}
        </span>
      </p>
    </div>
    <div>
      <p className="font-bold mb-3">
        Fecha de Alta:
        <span className="px-2 font-normal normal-case">
        {alta}
        </span>
      </p>
    </div>
    <div className="     ">
      <p className="font-bold mb-3">
        Sintomas:
        <span className="px-2 font-normal normal-case">
        {sintomas}
        </span>
      </p>
    </div>
    <div className="flex mt-10 justify-between">
      <button 
      className=" px-5 rounded-lg py-2 bg-indigo-600 hover:bg-indigo-700 text-cyan-50 uppercase font-bold" 
      type="button"
      onClick={()=>{ setPaciente(paciente) }}>
        Editar
      </button>
      <button onClick={handleEliminar} className="px-5 rounded-lg py-2 font-bold bg-red-600 hover:bg-red-700 text-cyan-50 uppercase" type="button">
        Eliminar
      </button>
    </div>
    </div>
    </>
  )
}

export default Paciente