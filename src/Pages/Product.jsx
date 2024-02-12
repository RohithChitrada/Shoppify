import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import './CSS/product.css'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}= useParams();
  const product= all_product.find((e)=> e.id=== Number(productId));
  const productCategory=product.category
  
  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts category={productCategory} product={product}/>
    </div>
  )
}
export default Product