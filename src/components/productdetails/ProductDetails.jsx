import React, { useEffect, useState } from 'react';
import products from '../../index';


function ProductDetails() {

  const[product, setProduct] = useState({});
  
  useEffect(() => {
    setProduct(products);
  }, [])

  return (
    <div className="container mx-auto py-10 bg-[#e5f4e6] p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-2/3 object-cover rounded-lg" />
        </div>
        <div className='py-1'>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-red-600">Price: ${product.price}</p>

          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded my-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;