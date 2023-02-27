import { useManage } from "../context/ManageContext"
import { useNavigate } from "react-router-dom"

export default function BranchCard({ branch }) {

    const { deleteBranch } = useManage()
    const navigate = useNavigate()

    return (
        <div >
            <header >
                <h2 >NOMBRE: {branch.nombre}</h2>
            </header>
            <div>
                <p>DIRECCION: {branch.direccion}</p>
                <p>CORREO: {branch.correo}</p>
                <p>DEPARTAMENTO: {branch.departamento}</p>
                <p>MUNICIPIO: {branch.municipio}</p>
                <p>TELEFONO: {branch.telefono}</p>
            </div>
            <div >
                <button onClick={() => {
                    console.log("Eliminando...")
                    deleteBranch(branch.id)
                }}>Delete</button>
                <button onClick={() => navigate(`/editarsucursal/${branch.id}`)}>Edit</button>

            </div>
        </div>
    )
}
