import { createContext, useContext, useState } from "react";
import {
    getProductsRequest,
    getBranchRequest,
    createBranchRequest,
    createProductRequest,
    aviableProductRequest,
    updateBranchRequest,
    updateProductRequest,
    deleteBranchRequest,
    deleteProductRequest,
    getBranchReq,
    getProductReq,
} from "../api/manage.api";

export const manageContext = createContext()
//Comprueba que nuestros componentes esten dentro del contexto proveido, de lo contrario enviará un error
export const useManage = () => {
    const context = useContext(manageContext)
    if (!context) {
        throw new Error("No context")
    }
    return context
}


export const ManageContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [branch, setBranch] = useState([]);

    async function loadProduct() {
        const productsResponse = await getProductsRequest()
        setProducts(productsResponse.data)
    }

    async function loadBranch(){
        const branchResponse = await getBranchRequest()
        setBranch(branchResponse.data)

    }

    const createProduct = async (product) => {
        try {
            const response = await createProductRequest(product)
        } catch (error) {
            console.log(error)
        }
    }

    const createBranch = async (branch) => {
        try {
            const response = await createBranchRequest(branch)
        } catch (error) {
            console.error(error)
        }
    }

    const updateProduct = async (id, newData)=>{
        const response = await updateProductRequest(id, newData)
        console.log(response)
    }
    const updateBranch = async (id, newData)=>{
        const response = await updateBranchRequest(id, newData)
        console.log(response)
    }

    const toggleAviableProduct = async(id) => {
        try {
            const productFound = products.find((product) => product.id == id)
            await aviableProductRequest(id, productFound.disponible == 1 ? false : true)
            setProducts(products.map((product) => (product.id == id ? { ...product, disponible: !product.disponible } : product)))
        } catch (error) {
            console.error(error)
        }
    }

    const deleteProduct = async (id) => {
        try {
            const response = await deleteProductRequest(id)
            setProducts(products.filter(product => product.id !== id))
        } catch (error) {
            console.error(error)
        }

    }

    const deleteBranch = async (id) => {
        try {
            const response = await deleteBranchRequest(id)
            setBranch(branch.filter(sucursal => sucursal.id !== id))
        } catch (error) {
            console.error(error)
        }

    }

    const getProduct = async (id) => {
        try {
            const response = await getProductReq(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const getBranch = async (id) => {
        try {
            const response = await getBranchReq(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <manageContext.Provider value={{
            loadProduct,
            loadBranch,
            createProduct,
            createBranch,
            updateBranch,
            updateProduct,
            toggleAviableProduct,
            deleteBranch,
            deleteProduct,
            getBranch,
            getProduct,
            products,
            branch
        }}>
            {children}
        </manageContext.Provider>
    )

}

