import { poolProducts, poolSucursal } from "../config.db.js"

export const getProducts = async (req, res) => {
    const [rows] = await poolProducts.query("SELECT * FROM products")
    res.json(rows)
}

export const getSucursales = async (req, res) => {
    const [rows] = await poolSucursal.query("SELECT * FROM sucursal")
    res.json(rows)
}

export const getProduct=async(req,res)=>{
    const [result]=await poolProducts.query("SELECT * FROM products WHERE id =?",[req.params.id])
    if(result.length<=0){
        res.status(404).json({message:'Product not found'});
    }else{
        res.json(result[0])
    }

}

export const getSucursal=async(req,res)=>{
    const [result]=await poolSucursal.query("SELECT * FROM sucursal WHERE id =?",[req.params.id])
    if(result.length<=0){
        res.status(404).json({message:'Branch not found'});
    }else{
        res.json(result[0])
    }
}


export const createProducts = async (req, res) => {
    const { nombre, categoria, descripcion } = req.body
    const [result] = await poolProducts.query("INSERT INTO products (nombre,categoria,descripcion) VALUES(?,?,?)", [nombre, categoria, descripcion])
    res.json({
        status: "success",
        id: result.insertId,
        nombre,
        categoria,
        descripcion,
    })
    console.log(result)
}

export const createSucursal = async (req, res) => {
    const { nombre, direccion, correo, departamento, municipio, telefono } = req.body
    const [result] = await poolSucursal.query("INSERT INTO sucursal (nombre,direccion,correo,departamento,municipio,telefono) VALUES (?,?,?,?,?,?)",
        [nombre, direccion, correo, departamento, municipio, telefono])

    res.json({
        status: "success",
        id: result.insertId,
        nombre,
        direccion,
        correo,
        departamento,
        municipio,
        telefono
    })
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { nombre, categoria, descripcion } = req.body
    const [result] = await poolProducts.query('UPDATE products SET ? WHERE ID=?', [req.body, req.params.id])
    if (result.affectedRows == 0) return res.status(404).json({ message: "El producto que desea editar no se encuentra en la base de datos" })

    const [rows] = await poolProducts.query("SELECT * FROM products WHERE id=?", [id])
    res.json(rows[0])
}



export const updateSucursal = async (req, res) => {
    const { id } = req.params
    const { nombre, direccion, correo, departamento, municipio, telefono } = req.body
    const result = await poolSucursal.query('UPDATE sucursal SET ? WHERE ID=?', [req.body, req.params.id])
    if (result.affectedRows == 0) return res.status(404).json({ message: "La sucursal que desea editar no se encuentra en la base de datos" })
    const [rows] = await poolSucursal.query("SELECT * FROM sucursal WHERE id=?", [id])
    res.json(result)
}


export const deleteProduct=async (req,res)=>{
    const [result] = await poolProducts.query("DELETE FROM products WHERE id =?",[req.params.id])
    if (result.affectedRows<=0){
       return res.status(404).json({message:'Product not found'});
    }else{
        return res.status(204).json("Se ha eliminado correctamente")
    }
}


export const deleteBranch=async (req,res)=>{
    const [result] = await poolSucursal.query("DELETE FROM sucursal WHERE id =?",[req.params.id])
    if (result.affectedRows<=0){
       return res.status(404).json({message:'Branch not found'});
    }else{
        return res.status(204).json("Se ha eliminado correctamente")
    }
}

