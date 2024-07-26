import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

const AllOrder = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.allOrder.url, {
      method: SummaryApi.allOrder.method,
      credentials: 'include',
    });

    const responseData = await response.json();
    setData(responseData.data);
    console.log("order list", responseData);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className='h-[calc(100vh-190px)] overflow-y-scroll p-6 bg-gray-100'>
      {!data[0] && (
        <p className='text-center text-gray-600'>No Orders available</p>
      )}

      <div className='space-y-6'>
        {data.map((item, index) => (
          <div key={item.userId + index} className='border rounded-lg p-6 bg-white shadow-lg'>
            <div className='mb-4'>
              <p className='font-semibold text-xl text-gray-800'>{moment(item.createdAt).format('LL')}</p>
              <p className='text-sm text-gray-500'>Order ID: {item._id}</p>
              <p className='text-sm text-gray-500'>Email: {item.email}</p> {/* User Email */}
            </div>
            <div className='space-y-4'>
              {item?.productDetails.map((product, index) => (
                <div key={product.productId + index} className='flex gap-4 bg-gray-50 p-4 rounded-md'>
                  <img
                    src={product.image[0]}
                    className='w-28 h-28 object-cover rounded-md'
                    alt={product.name}
                  />
                  <div className='flex-1'>
                    <h3 className='font-medium text-lg text-gray-900 truncate'>{truncateString(product.name, 40)}</h3>
                    <div className='flex items-center gap-4 mt-2'>
                      <span className='text-lg text-red-500'>{displayINRCurrency(product.price)}</span>
                      <span className='text-gray-700'>Qty: {product.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6'>
              <h4 className='text-lg font-medium text-gray-800'>Payment Details</h4>
              <p className='text-gray-700'>Method: {item.paymentDetails.payment_method_type[0]}</p>
              <p className='text-gray-700'>Status: {item.paymentDetails.payment_status}</p>
            </div>
            <div className='mt-4'>
              <h4 className='text-lg font-medium text-gray-800'>Shipping Details</h4>
              {item.shipping_options.map((shipping, index) => (
                <p key={shipping.shipping_rate} className='text-gray-700'>
                  Amount: {displayINRCurrency(shipping.shipping_amount)}
                </p>
              ))}
            </div>
            <div className='font-semibold mt-6 text-right text-lg text-gray-900'>
              Total: {displayINRCurrency(item.totalAmount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;
