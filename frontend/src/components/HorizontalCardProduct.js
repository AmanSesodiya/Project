import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const HorizontalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingList = new Array(13).fill(null);
    const scrollElement = useRef();
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        e.preventDefault();
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchCategoryWiseProduct(category);
        setLoading(false);
        setData(categoryProduct?.data || []);
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    };

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold mb-4'>{heading}</h2>
            <div className='relative'>
                <button
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 text-lg hidden md:block hover:bg-gray-200'
                    onClick={scrollLeft}
                >
                    <FaAngleLeft />
                </button>
                <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 text-lg hidden md:block hover:bg-gray-200'
                    onClick={scrollRight}
                >
                    <FaAngleRight />
                </button>
                <div className='relative flex items-center overflow-x-auto scrollbar-none' ref={scrollElement}>
                    <div className='flex gap-4 md:gap-6 transition-transform'>
                        {loading ? (
                            loadingList.map((_, index) => (
                                <div
                                    key={index}
                                    className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-40 bg-white rounded-lg shadow flex animate-pulse'
                                >
                                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'></div>
                                    <div className='p-4 grid w-full gap-2'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                        <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                        <div className='flex gap-3 w-full'>
                                            <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                            <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                        </div>
                                        <button className='text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            data.map((product) => (
                                <Link
                                    key={product._id}
                                    to={`/product/${product._id}`}
                                    className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-40 bg-white rounded-lg shadow flex'
                                >
                                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] flex items-center justify-center'>
                                        <img
                                            src={product.productImage[0]}
                                            alt={product.productName}
                                            className='object-contain h-full w-full hover:scale-110 transition-all'
                                        />
                                    </div>
                                    <div className='p-4 grid w-full'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product.productName}</h2>
                                        <p className='capitalize text-slate-500'>{product.category}</p>
                                        <div className='flex gap-3'>
                                            <p className='text-red-600 font-medium'>{displayINRCurrency(product.sellingPrice)}</p>
                                            <p className='text-slate-500 line-through'>{displayINRCurrency(product.price)}</p>
                                        </div>
                                        <button
                                            className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full mt-2'
                                            onClick={(e) => handleAddToCart(e, product._id)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCardProduct;
