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
    <div className='container mx-auto text-center bg-[#e5f4e6] text-black md:p-5 p-2 '>
      <h1 className='font-extrabold text-2xl p-2'>Your Cart - 4 Items</h1>
      <ul className='grid grid-cols-4 gap-5 border-solid border-y-2 border-black  p-3'>
        <li>Item</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>

      <ul className='grid grid-cols-4 gap-5 border-solid border-y-2 border-black items-center py-2'>
        <li className='md:flex items-center'>
          <img className='md:w-full md:h-40 p-1' src="/hero_product_2.jpg" alt="productImg" />
          <div>
            <p className='md:text-base text-xs'>Lorem, ipsum dolor.</p>
            <p className='md:text-base text-xs'>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        <li>$4299</li>
        <li className='flex gap-2 justify-center'>
          <p onClick={decrementItemCount} className='hover:cursor-pointer'>-</p>
          <p className='items-center'>{itemCount}</p>
          <p onClick={incrementItemCount} className='hover:cursor-pointer'>+</p>
        </li>
        <li className='font-bold'>$4299</li>
      </ul>

      <button className='border-solid border-2 border-black rounded-md p-2 mt-3 bg-[#18841e] hover:bg-[#146f18]'>CheckOut</button>
    </div>
  );
}


export default Cart;