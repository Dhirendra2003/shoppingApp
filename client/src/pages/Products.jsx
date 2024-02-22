
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/Breadcrums';
import ProductDisplay from '../components/product display/ProductDisplay';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RelatedProducts from '../components/relatedproducts/RelatedProducts';


export default function Products() {
  //const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  //const product =all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Navbar/>
      <Breadcrums productId={productId}/>
      <ProductDisplay productId={productId}/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}
