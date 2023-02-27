import {Router} from "express";
import { getProducts,getSucursales,createProducts,createSucursal,updateProduct,updateSucursal,
deleteBranch,deleteProduct,getProduct,getSucursal } from "../controllers/manage.controller.js";

const router=Router()

//RUTAS PARA OBTENER TODOS LOS DATOS DE PRODUCTOS Y SUCURSALES
router.get("/productos", getProducts)
router.get("/sucursales",getSucursales)

//RUTAS PARA OBTENER UN DATO ESPECIFICO DE SUCURSALES Y PRODUCTOS
router.get("/sucursales/:id",getSucursal)
router.get("/productos/:id",getProduct)

//RUTAS PARA CREAR NUEVOS DATOS DE SUCURSALES Y PRODUCTOS
router.post("/productos",createProducts)
router.post("/sucursales",createSucursal)

//RURAS PARA ACTUALIZAR LOS DATOS DE SUCURSALES Y PRODUCTOS
router.put("/productos/:id",updateProduct)
router.put("/sucursales/:id",updateSucursal)


router.delete("/productos/:id", deleteProduct)
router.delete("/sucursales/:id",deleteBranch)

export default router;
