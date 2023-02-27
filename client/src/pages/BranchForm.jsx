import { departamentosData } from "../data/Departamentos";
import { Form, Formik, getIn } from "formik";
import { useManage } from "../context/ManageContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BranchForm() {

    const { createBranch, getBranch, updateBranch } = useManage()
    const params = useParams()
    const navigate = useNavigate()
    const [branch, setBranch] = useState({
        nombre: "",
        direccion: "",
        correo: "",
        departamento:"",
        municipio:"",
        telefono: "",

    })

    const [municipios, setMunicipios] = useState(-1)
    const handlerOptions = (event) => {
        const option = event.target.value
        console.log(option)
        console.log(departamentosData[option].title)
        setMunicipios(option)
               
    }

    useEffect(() => {
        const loadBranch = async () => {
            if (params.id) {
                const gettingBranch = await getBranch(params.id)
                setBranch({
                    nombre: gettingBranch.nombre,
                    direccion: gettingBranch.direccion,
                    correo: gettingBranch.correo,
                    departamento:gettingBranch.departamento,
                    municipio:gettingBranch.municipio,
                    telefono: gettingBranch.telefono
                })
            }
        }
        loadBranch()
    }, [])


    return (

        <div>
            <h1>{params.id ? "Editar Sucursal" : "Nueva Sucursal"}</h1>

            <Formik
                initialValues={branch}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    if (params.id) {
                        await updateBranch(params.id,{
                            nombre: values.nombre,
                            direccion:values.direccion,
                            correo:values.correo,
                            departamento:departamentosData[values.departamento].title,
                            municipio:values.municipio,
                            telefono:values.telefono 
                        })
                        navigate("/sucursales")
                    } else {
                        await createBranch({
                            nombre: values.nombre,
                            direccion:values.direccion,
                            correo:values.correo,
                            departamento:departamentosData[values.departamento].title,
                            municipio:values.municipio,
                            telefono:values.telefono
                        });

                    }
                    setBranch({
                        nombre: "",
                        direccion: "",
                        correo:"",
                        departamento:"",
                        municipio:"",
                        telefono:""
                    })
                }}
            >

                {({ handleChange, handleSubmit, values, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label>Ingrese el nombre de la sucursal</label>
                            <input type="text" name="nombre" required
                                onChange={handleChange}
                                value={values.nombre}
                            />
                        </div>

                        <div>
                            <label>Ingrese la direccion de la sucursal</label>
                            <input type="text" name="direccion" required
                                onChange={handleChange}
                                value={values.direccion}
                            />
                        </div>

                        <div>
                            <label>Ingrese el correo de la sucursal</label>
                            <input type="email" name="correo" required
                                onChange={handleChange}
                                value={values.correo}
                            />
                        </div>


                        <div>
                            <select  name="departamento" onClick={handlerOptions} value={values.departamento}  onChange={handleChange}>
                                <option key={-1}>Seleccione</option>
                                {
                                    departamentosData.map((item, i) => (
                                        <option key={i} value={i}>
                                        {item.title}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>

                        <div>
                            <select name="municipio" onChange={handleChange} value={values.municipio}>
                                <option key={-1}>Seleccione una opcion:</option>
                                {
                                    municipios > -1 && (
                                        departamentosData[municipios].mun.map((item, i) => (
                                            <option key={"Municpios" + i} value={item}>{item}</option>
                                        ))
                                    )
                                }
                            </select>
                        </div>

                        <div>
                            <label>Ingrese el numero de telefono de la sucursal</label>
                            <input type="tel" name="telefono" required
                                onChange={handleChange}
                                value={values.telefono}
                            />
                        </div>
                        <button type="submit"
                            disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}
                        </button>

                    </Form>

                )}
            </Formik>
        </div>
    )
}