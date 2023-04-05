import React, { useContext, useEffect } from 'react'
import { UserContent } from '../App'
function Products() {
  const { productData, setProductData } = useContext(UserContent)
  // console.log(productData.data)
  useEffect(() => { console.log(productData) }, [productData])
  return (

    <div>
      <div className='productContainer'>
        {
          productData.data.map(item => (
            <div key={item.id} className='productNavbar'>
              <img src={item.image} alt={item.name} />
              <div className='producContent'>
                <h4 className='producContentTitle'>{item.name}</h4>
                <span className='producContentPrice'>{item.price}</span>
                <button onClick={() => setProductData(
                  {
                    ...productData,
                    basket: productData.basket.find(productItem => productItem.id === item.id)
                      ? productData.basket.map(el => el.id === item.id
                        ? { ...el, amaount: el.amaount + 1 } : el
                      )
                      : [...productData.basket, { ...item, amaount: 1 }]
                  }
                )
                  // [...productData,productData.basket:item]
                  // productData.basket.push(item)
                  // ...productData,productData.basket item
                  // productData.basket ? {...productData.basket,item}:{basket:item}
                  // {...productData, ...productData.basket,item}
                  // productData.basket ? {...productData.basket,item}:{basket:item}}
                  // {...productData,...(productData.basket ? {...productData.basket,item}:{basket:item})}
                  // [...productData.data, productData.basket ? {...productData.basket,item} : {basket: item}] 
                  // [
                  //   ...productData, productData.basket ? { ...productData.basket, item } : item
                  // ])
                } className='producContentBtn'>Sepete Ekle</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products