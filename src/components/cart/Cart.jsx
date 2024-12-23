import React , {useEffect , useState} from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router-dom';

function Cart() {
   
  const[itemCount, setItemCount] = useState(1);

  const decrementItemCount = () => {
    setItemCount(itemCount-1)
  }

  const incrementItemCount = () => {
    setItemCount(itemCount+1)
  }


  return (
    <div className='container mx-auto text-center bg-[#e5f4e6] text-black p-5'>
      <h1 className='font-extrabold text-2xl p-2'>Your Cart - 4 Items</h1>
      <ul className='grid grid-cols-1 md:grid-cols-4 gap-5 border-solid border-y-2 border-black  p-3'>
        <li>Item</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>

      <ul className='grid grid-cols-1 md:grid-cols-4 gap-5 border-solid border-y-2 border-black items-center py-3'>
        <li className='flex items-center'>
          <img className='w-full h-40 p-2' src="/public/hero_product_2.jpg" alt="productImg" />
          <div>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        <li>$4299</li>
        <li className='flex gap-2 justify-center'>
          <p onClick={decrementItemCount} className='hover:cursor-pointer'>-</p>
          <p className='items-center'>{itemCount}</p>
          <p onClick={incrementItemCount} className='hover:cursor-pointer'>+</p>
        </li>
        <li>$4299</li>
      </ul>
    </div>
  );
}


export default Cart;