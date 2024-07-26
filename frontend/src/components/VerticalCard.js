import React, { useContext } from 'react';
import scrollTop from '../helpers/scrollTop';
import displayINRCurrency from '../helpers/displayCurrency';
import Context from '../context';
import addToCart from '../helpers/addToCart';
import { Link } from 'react-router-dom';

const VerticalCard = ({ loading, data = [] }) => {
    const loadingList = new Array(13).fill(null);
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        e.preventDefault();
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 overflow-x-auto scrollbar-none transition-all">
            {loading ? (
                loadingList.map((_, index) => (
                    <div key={index} className="w-full min-w-[260px] max-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gray-200 h-44 flex justify-center items-center animate-pulse">
                            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="p-4 grid gap-3">
                            <h2 className="font-medium text-base text-gray-700 p-1 py-2 animate-pulse bg-gray-200 rounded-full"></h2>
                            <p className="text-gray-500 p-1 py-2 animate-pulse bg-gray-200 rounded-full"></p>
                            <div className="flex gap-3">
                                <p className="text-red-600 font-medium p-1 animate-pulse bg-gray-200 rounded-full w-full py-2"></p>
                                <p className="text-gray-500 line-through p-1 animate-pulse bg-gray-200 rounded-full w-full py-2"></p>
                            </div>
                            <button className="text-sm text-white px-4 py-2 rounded-full bg-gray-200 animate-pulse"></button>
                        </div>
                    </div>
                ))
            ) : (
                data.map((product) => (
                    <Link
                        key={product?._id}
                        to={`/product/${product?._id}`}
                        className="w-full min-w-[260px] max-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        onClick={scrollTop}
                    >
                        <div className="bg-gray-100 h-44 flex justify-center items-center">
                            <img
                                src={product?.productImage[0]}
                                alt={product?.productName}
                                className="object-cover h-36 w-auto"
                            />
                        </div>
                        <div className="p-4 grid gap-3">
                            <h2 className="font-medium text-base text-gray-800 truncate">{product?.productName}</h2>
                            <p className="text-gray-500 capitalize">{product?.category}</p>
                            <div className="flex gap-3">
                                <p className="text-red-600 font-medium">{displayINRCurrency(product?.sellingPrice)}</p>
                                <p className="text-gray-500 line-through">{displayINRCurrency(product?.price)}</p>
                            </div>
                            <button
                                className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full"
                                onClick={(e) => handleAddToCart(e, product?._id)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default VerticalCard;
