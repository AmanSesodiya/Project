import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const UploadProduct = ({ onClose, fetchData }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: ""
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    setData((prev) => ({ ...prev, productImage: [...prev.productImage, uploadImageCloudinary.url] }));
  };

  const handleDeleteProductImage = (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((prev) => ({ ...prev, productImage: newProductImage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      fetchData();
    } else {
      toast.error(responseData.message);
    }
  };

  return (
    <div className='fixed inset-0 bg-slate-200 bg-opacity-35 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Upload Product</h2>
          <div className='text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </div>
        </div>
        <form className='grid p-4 gap-4 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
          <label htmlFor='productName'>Product Name:</label>
          <input
            type='text'
            id='productName'
            name='productName'
            value={data.productName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            placeholder='Enter product name'
            required
          />
          <label htmlFor='brandName'>Brand Name:</label>
          <input
            type='text'
            id='brandName'
            name='brandName'
            value={data.brandName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            placeholder='Enter brand name'
            required
          />
          <label htmlFor='category'>Category:</label>
          <select
            name='category'
            value={data.category}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          >
            <option value="">Select Category</option>
            {productCategory.map((el, index) => (
              <option key={index} value={el.value}>{el.label}</option>
            ))}
          </select>
          <label htmlFor='productImage'>Product Image:</label>
          <label htmlFor='uploadImageInput' className='cursor-pointer'>
            <div className='p-4 bg-slate-100 border rounded h-32 flex justify-center items-center'>
              <div className='text-slate-500 flex flex-col items-center gap-2'>
                <FaCloudUploadAlt className='text-4xl' />
                <p className='text-sm'>Upload Product Image</p>
              </div>
            </div>
          </label>
          <input
            type='file'
            id='uploadImageInput'
            className='hidden'
            onChange={handleUploadProduct}
          />
          <div className='flex gap-2 mt-2'>
            {data.productImage.map((el, index) => (
              <div key={index} className='relative group'>
                <img
                  src={el}
                  alt={`Product ${index}`}
                  className='w-20 h-20 bg-slate-100 border cursor-pointer'
                  onClick={() => {
                    setOpenFullScreenImage(true);
                    setFullScreenImage(el);
                  }}
                />
                <div
                  className='absolute bottom-0 right-0 p-1 bg-red-600 text-white rounded-full hidden group-hover:block cursor-pointer'
                  onClick={() => handleDeleteProductImage(index)}
                >
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            name='price'
            value={data.price}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            placeholder='Enter price'
            required
          />
          <label htmlFor='sellingPrice'>Selling Price:</label>
          <input
            type='number'
            id='sellingPrice'
            name='sellingPrice'
            value={data.sellingPrice}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            placeholder='Enter selling price'
            required
          />
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            value={data.description}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded resize-none h-28'
            placeholder='Enter product description'
            rows={3}
            required
          ></textarea>
          <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'>
            Upload Product
          </button>
        </form>
      </div>
      {openFullScreenImage && (
        <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
      )}
    </div>
  );
};

export default UploadProduct;
