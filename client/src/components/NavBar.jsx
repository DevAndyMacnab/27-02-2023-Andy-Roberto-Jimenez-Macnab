import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div >
      <h1>ANDY ROBERTO JIMENEZ MACNAB</h1>
      <ul >
        <li>
          <Link to="/productos">Ver productos</Link>
        </li>
        <li>
          <Link to="/sucursales">Ver Sucursales</Link>

        </li>
        <li>
          <Link to="/nuevoproducto">Crear Producto</Link>
        </li>
        <li>
          <Link to="/nuevasucursal">Crear Sucursal</Link>
        </li>
      </ul>
    </div>
  )
}
