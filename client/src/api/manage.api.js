import axios from "axios";

export const createProductRequest=async (product)=>{
    return await axios.post("http://localhost:5500/productos", product);
}

export const createBranchRequest=async (branch)=>{
    return await axios.post("http://localhost:5500/sucursales", branch);
}


export const getProductsRequest=async ()=>{
    return await axios.get("http://localhost:5500/productos");
}
export const getBranchRequest=async ()=>{
    return await axios.get("http://localhost:5500/sucursales");
}


//Request para actualizacion y edicion de datos
export const updateProductRequest=async (id,newData)=>{
    return await axios.put(`http://localhost:5500/productos/${id}`,newData)
}

export const updateBranchRequest=async (id,newData)=>{
    return await axios.put(`http://localhost:5500/sucursales/${id}`,newData)
}

export const  aviableProductRequest=async (id,disponible)=>{
    return await axios.put(`http://localhost:5500/productos/${id}`,{disponible})
}

export const getProductReq=async(id)=>{
    return await axios.get(`http://localhost:5500/productos/${id}`)
}

export const getBranchReq=async(id)=>{
    return await axios.get(`http://localhost:5500/sucursales/${id}`)
}


export const deleteProductRequest=async(id)=>{
    return await axios.delete(`http://localhost:5500/productos/${id}`)
}


export const deleteBranchRequest=async(id)=>{
    return await axios.delete(`http://localhost:5500/sucursales/${id}`)
}