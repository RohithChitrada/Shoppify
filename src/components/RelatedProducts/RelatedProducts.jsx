import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

const RelatedProducts = (props) => {
  const { category } = props;
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
              if (category === item.category) {
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null
              }
            })}
        </div>
    </div>
  )
}

export default RelatedProducts