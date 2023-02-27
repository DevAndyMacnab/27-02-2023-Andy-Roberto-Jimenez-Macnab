import { useEffect } from "react"
import ProductCard from "../components/ProductCard";
import { useManage
 } from "../context/ManageContext";
function ProductsPage() {

  const { products, loadProduct } = useManage();

  useEffect(() => {
    loadProduct();
  }, [])


  return (
    <div>
      <h1 >PRODUCTOS</h1>
      <div>
        {products.map(product => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>

    </div>
  )
}

export default ProductsPage