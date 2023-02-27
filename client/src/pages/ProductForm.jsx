//Formik sera utilizado en lugar de un useState para manejar los estados de los valores ingresados por el usuario
import { Form, Formik } from "formik";
import { useManage } from "../context/ManageContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductForm() {

    const { createProduct, getProduct, updateProduct } = useManage()
    const params = useParams()
    const navigate = useNavigate()
    const [product, setProducts] = useState({
        nombre: "",
        categoria: "",
        descripcion: ""
    })

    useEffect(() => {
        const loadProduct = async () => {
            if (params.id) {
                const gettingProduct = await getProduct(params.id)
                setProducts({
                    nombre: gettingProduct.nombre,
                    categoria: gettingProduct.categoria,
                    descripcion: gettingProduct.descripcion
                })
            }
        }
        loadProduct()
    }, [])


    return (

        <div>
            <h1>{params.id ? "Editar Producto" : "Nuevo Producto"}</h1>

            <Formik
                initialValues={product}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    if (params.id) {
                        await updateProduct(params.id, values)
                        navigate("/productos")
                    } else {
                        await createProduct(values);

                    }
                    setProducts({
                        nombre: "",
                        categoria: "",
                        descripcion: ""
                    })
                }}
            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>

                        <div>
                            <label>Ingrese el nombre del producto</label>
                            <input type="text" name="nombre" required
                                onChange={handleChange}
                                value={values.nombre}
                            />
                        </div>

                        <div>
                            <label>Ingrese la cateogira del producto</label>
                            <input type="text" name="categoria" required
                                onChange={handleChange}
                                value={values.categoria}
                            />
                        </div>


                        <label>Ingrese la descripcion del producto</label>
                        <textarea name="descripcion" rows="3" placeholder="Escribe una descripcion"
                            onChange={handleChange}
                            value={values.descripcion}
                        ></textarea>
                        <button type="submit"
                            disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}
                        </button>

                    </Form>

                )}
            </Formik>
        </div>
    )
}
