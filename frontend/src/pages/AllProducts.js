import React, { useEffect, useState } from 'react';
import UploadProduct from '../components/UploadProduct';
import SummaryApi from '../common';
import AdminProductCard from '../components/AdminProductCard';

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await fetch(SummaryApi.allProduct.url);
      const dataResponse = await response.json();

      if (dataResponse.success) {
        setAllProduct(dataResponse.data || []);
      } else {
        console.error(dataResponse.message);
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <header className='bg-white shadow-md py-4 px-6 mb-6'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-800'>All Products</h1>
          <button
            className='bg-red-600 text-white hover:bg-red-700 transition-all py-2 px-4 rounded-full'
            onClick={() => setOpenUploadProduct(true)}
          >
            Upload Product
          </button>
        </div>
      </header>

      {/* Products Grid */}
      <div className='container mx-auto p-4'>
        {allProduct.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {allProduct.map((product) => (
              <AdminProductCard
                data={product}
                key={product._id}
                fetchData={fetchAllProduct}
              />
            ))}
          </div>
        ) : (
          <p className='text-gray-500 text-center'>No products available.</p>
        )}
      </div>

      {/* Upload Product Modal */}
      {openUploadProduct && (
        <UploadProduct
          onClose={() => setOpenUploadProduct(false)}
          fetchData={fetchAllProduct}
        />
      )}
    </div>
  );
};

export default AllProducts;
