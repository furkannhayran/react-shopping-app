import React , { useContext, useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContent } from '../App'

function Home() {
  
  const { productData, setProductData } = useContext(UserContent)
  const [total ,setTotal] = useState(0)
  useEffect(() =>{
    // setTotal(total = 0)
    productData.basket.map(item =>  setTotal(
      total + item.amaount * item.price
      ))
  },[productData.basket])
  return (
    <div>
      <div className='HomeContainer'>
        <h1>
          <Link to={"/"}>Ürün Listesi</Link>
        </h1>
        <h3>
          toplam Fiyat : 
          {total.toFixed(2)}
        </h3>
        <h3>
          <Link to={"/cart"}>Sepet({productData.basket.length})</Link>
        </h3>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home