import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';

const AdminProductCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-200'>
      {/* Image Section */}
      <div className='w-full flex justify-center items-center p-4'>
        <img
          src={data?.productImage[0]}
          alt={data.productName}
          className='w-28 h-28 object-cover rounded-lg'  // Increased size
        />
      </div>

      {/* Content Section */}
      <div className='flex-1 p-4'>
        <h2 className='text-lg font-semibold text-gray-800 truncate'>{data.productName}</h2>
        <p className='text-gray-600 text-sm mt-1'>{displayINRCurrency(data.sellingPrice)}</p>
      </div>

      {/* Action Section */}
      <div className='p-4 border-t border-gray-200'>
        <button
          className='flex items-center justify-center bg-blue-500 text-white p-2 rounded-full shadow-sm hover:bg-blue-600 transition'
          onClick={() => setEditProduct(true)}
          aria-label="Edit Product"
        >
          <MdModeEditOutline size={20} />
        </button>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
}

export default AdminProductCard;
