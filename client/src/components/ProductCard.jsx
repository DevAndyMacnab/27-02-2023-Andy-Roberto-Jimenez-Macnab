import { useManage } from "../context/ManageContext"
import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {

    const { deleteProduct,toggleAviableProduct } = useManage()
    const navigate = useNavigate()
    const handleAviable = async () => {
        await toggleAviableProduct(product.id)
    }

    return (
        <div >
            <header >
                <h2 >{product.nombre}</h2>
                <span>Disponible: {product.disponible == 1 ? "✓" : "✗"}</span>
            </header>
            <div>
                <span>{product.categoria}</span>
                <p>{product.descripcion}</p>
            </div>
            <div >
            <button onClick={() => {
                    console.log("Eliminando...")
                    deleteProduct(product.id)
                }}>Delete</button>

                <button onClick={() => navigate(`/editarproducto/${product.id}`)}>Edit</button>
                <button onClick={() => {
                    handleAviable(product.disponible)

                }}>Cambiar Disponibilidad</button>
            </div>
        </div>
    )
}
