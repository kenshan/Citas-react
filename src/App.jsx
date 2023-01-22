import { useState, useEffect } from "react"
import Header from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { Formulario } from "./components/Formulario"

function App() {

  const [ pacientes, setPacientes] =useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [ paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminandoPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mt-20 mx-auto">
     <Header />
     <div className="mt-12 md:flex">
      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminandoPaciente={eliminandoPaciente}
       />
     </div>
     
    </div>
  )
}

export default App
