import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import Context from '../context';
import displayINRCurrency from '../helpers/displayCurrency';
import { MdDelete } from 'react-icons/md';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const context = useContext(Context);
    const loadingCart = new Array(4).fill(null);

    const fetchData = async () => {
        try {
            const response = await fetch(SummaryApi.addToCartProductView.url, {
                method: SummaryApi.addToCartProductView.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseData = await response.json();

            if (responseData.success) {
                setData(responseData.data);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const handleLoading = async () => {
        await fetchData();
    };

    useEffect(() => {
        setLoading(true);
        handleLoading().finally(() => setLoading(false));
    }, []);

    const increaseQty = async (id, qty) => {
        try {
            const response = await fetch(SummaryApi.updateCartProduct.url, {
                method: SummaryApi.updateCartProduct.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id,
                    quantity: qty + 1,
                }),
            });

            const responseData = await response.json();

            if (responseData.success) {
                fetchData();
            }
        } catch (error) {
            console.error('Failed to increase quantity:', error);
        }
    };

    const decreaseQty = async (id, qty) => {
        if (qty >= 2) {
            try {
                const response = await fetch(SummaryApi.updateCartProduct.url, {
                    method: SummaryApi.updateCartProduct.method,
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id: id,
                        quantity: qty - 1,
                    }),
                });

                const responseData = await response.json();

                if (responseData.success) {
                    fetchData();
                }
            } catch (error) {
                console.error('Failed to decrease quantity:', error);
            }
        }
    };

    const deleteCartProduct = async (id) => {
        try {
            const response = await fetch(SummaryApi.deleteCartProduct.url, {
                method: SummaryApi.deleteCartProduct.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id,
                }),
            });

            const responseData = await response.json();

            if (responseData.success) {
                fetchData();
                context.fetchUserAddToCart();
            }
        } catch (error) {
            console.error('Failed to delete cart product:', error);
        }
    };

    const handlePayment = async () => {
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
        try {
            const response = await fetch(SummaryApi.payment.url, {
                method: SummaryApi.payment.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems: data,
                }),
            });

            const responseData = await response.json();

            if (responseData?.id) {
                stripePromise.redirectToCheckout({ sessionId: responseData.id });
            }
        } catch (error) {
            console.error('Failed to handle payment:', error);
        }
    };

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0);

    const truncateText = (text, length) => {
        if (!text) return '';
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <div className='container mx-auto'>
            <div className='text-center my-4'>
                {data.length === 0 && !loading && (
                    <div className='flex flex-col items-center'>
                        <div className='text-6xl text-gray-400 mb-4'>
                            <MdDelete />
                        </div>
                        <h2 className='text-2xl font-semibold mb-2'>Your Cart is Empty</h2>
                        <p className='text-lg text-gray-600'>
                            It looks like you haven't added any items to your cart. <br />
                            <a href='/' className='text-blue-500 underline'>Browse Products</a> to find something you like!
                        </p>
                    </div>
                )}
            </div>

            <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                {/*** View Product */}
                <div className='w-full max-w-3xl'>
                    {loading ? (
                        loadingCart.map((_, index) => (
                            <div
                                key={`loading-cart-item-${index}`}
                                className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'
                            ></div>
                        ))
                    ) : (
                        data.map((product) => (
                            <div
                                key={product?._id}
                                className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'
                            >
                                <div className='w-32 h-32 bg-slate-200'>
                                    <img
                                        src={product?.productId?.productImage[0]}
                                        alt={product?.productId?.productName}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='px-4 py-2 relative'>
                                    {/** Delete Product */}
                                    <div
                                        className='absolute right-0 top-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer'
                                        onClick={() => deleteCartProduct(product?._id)}
                                    >
                                        <MdDelete />
                                    </div>

                                    <h2 className='text-lg lg:text-xl'>{truncateText(product?.productId?.productName, 30)}</h2>
                                    <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                        <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-1'>
                                        <button
                                            className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-8 h-8 flex justify-center items-center rounded'
                                            onClick={() => decreaseQty(product?._id, product?.quantity)}
                                        >
                                            -
                                        </button>
                                        <span className='text-lg'>{product?.quantity}</span>
                                        <button
                                            className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-8 h-8 flex justify-center items-center rounded'
                                            onClick={() => increaseQty(product?._id, product?.quantity)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/*** Summary */}
                {data.length > 0 && (
                    <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                        {loading ? (
                            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'></div>
                        ) : (
                            <div className='h-36 bg-white border border-slate-300 rounded'>
                                <h2 className='text-white bg-red-600 px-4 py-1 font-semibold'>Summary</h2>
                                <div className='flex items-center justify-between px-4 py-2 font-medium text-lg text-slate-600'>
                                    <p>Quantity</p>
                                    <p>{totalQty}</p>
                                </div>
                                <div className='flex items-center justify-between px-4 py-2 font-medium text-lg text-slate-600'>
                                    <p>Total Price</p>
                                    <p>{displayINRCurrency(totalPrice)}</p>
                                </div>
                                <button
                                    className='bg-blue-600 p-2 text-white w-full mt-2 rounded'
                                    onClick={handlePayment}
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
