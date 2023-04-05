import React, { useContext, useEffect } from 'react'
import { UserContent } from '../App'

function Cart() {
  const { productData, setProductData } = useContext(UserContent)


  useEffect(() => { console.log("ss", productData.basket) }, [productData])
  return (
    <div>
      
      <div className='productContainer'>
        {
          productData.basket.map(item => (
            <div key={item.id} className='productNavbar'>
              <img src={item.image} alt={item.name} />
              <div className='producContent'>
                <h4 className='producContentTitle'>{item.name}</h4>
                <span className='producContentPrice'>{item.price}</span>
                <p>amount : {item.amaount}</p>
                <div>
                  <button
                    onClick={() =>
                      setProductData({
                        ...productData,
                        basket: productData.basket.map(el => el.id === item.id  && el.amaount > 1 ?{...el, amaount: el.amaount - 1 }:el)
                      })

                    }>-</button>
                  <button
                    onClick={() =>
                      setProductData(
                        {
                          ...productData,
                          basket: productData.basket.filter(el => el.id !== item.id)
                        }
                      )

                    }>Sepetten Çıkart</button>
                  <button
                  onClick={()=>{
                    setProductData({
                      ...productData,
                      basket: productData.basket.map(el => el.id === item.id ? {...el,amaount: el.amaount + 1 }:el)
                    })
                  }}
                  >+</button>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart