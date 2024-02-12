import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'


const Popular = () => {
  return (
    <div className='popular'>
        <br/>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
              if(item.category==='women'){
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

export default Popular