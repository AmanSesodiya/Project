import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

const OrderPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.getOrder.url, {
        method: SummaryApi.getOrder.method,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch order details');
      }

      const responseData = await response.json();
      setData(responseData.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <p className="ml-2 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <AiOutlineShoppingCart className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No Orders Available</h2>
        <p className="text-lg text-gray-600 mb-4">It looks like you haven’t placed any orders yet.</p>
        <p className="text-lg text-gray-600">Check back later or <a href="/" className="text-blue-500 underline">start shopping now</a>!</p>
      </div>
    );
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      {data.map((item, index) => (
        <div key={item.userId + index} className="mb-8 bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div>
              <p className="font-semibold text-xl mb-2">
                Order Date: {moment(item.createdAt).format('LL')}
              </p>
              <p className="text-gray-500">Order ID: {item._id}</p>
            </div>
            <div className="flex items-center lg:justify-end text-right text-gray-700">
              <div className="mr-6">
                <p className="text-lg font-medium">Total Amount:</p>
                <p className="text-2xl font-bold">{displayINRCurrency(item.totalAmount)}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 grid gap-4">
              {item?.productDetails.map((product, index) => (
                <div
                  key={product.productId + index}
                  className="flex gap-4 p-4 bg-gray-100 rounded-lg"
                >
                  <img
                    src={product.image[0] || 'https://via.placeholder.com/80'}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="font-medium text-lg truncate">{truncateString(product.name, 30)}</div>
                    <div className="flex items-center gap-5 mt-1">
                      <div className="text-lg text-red-500">
                        {displayINRCurrency(product.price)}
                      </div>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-lg font-medium mb-1">Payment Details:</div>
                <p>Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
                <p>Payment Status: {item.paymentDetails.payment_status}</p>
              </div>
              <div>
                <div className="text-lg font-medium mb-1">Shipping Details:</div>
                {item.shipping_options.map((shipping, index) => (
                  <p key={shipping.shipping_rate}>
                    Shipping Amount: {displayINRCurrency(shipping.shipping_amount)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
