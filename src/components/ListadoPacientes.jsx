import Paciente from "./Paciente"

export const ListadoPacientes = ( {pacientes,setPaciente,eliminandoPaciente} ) => {
  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
     {   pacientes && pacientes.length ?
     
     
     ( <> 
      <h2 className="font-black text-3xl text-center m-10">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {' '}
      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
    </p>
       { pacientes.map( paciente=>
        (<Paciente
        key={ paciente.id }
        paciente={paciente}
        setPaciente={setPaciente}
        eliminandoPaciente={eliminandoPaciente}
          /> ))}
     </> 
     ) : (
      <> 
            <h2 className="font-black text-3xl text-center m-10">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            <span className="text-indigo-600 font-bold">No hay pacientes</span>
            </p>
     </>
        )}
    


    </div>
    
  )
}
