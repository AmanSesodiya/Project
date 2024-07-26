import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/productCategory';
import VerticalCard from '../components/VerticalCard';
import SummaryApi from '../common';
import LoadingSpinner from '../components/Spinner'; // Import your spinner component

const CategoryProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const urlSearch = new URLSearchParams(location.search);
    const urlCategoryListinArray = urlSearch.getAll("category");

    const urlCategoryListObject = {};
    urlCategoryListinArray.forEach(el => {
        urlCategoryListObject[el] = true;
    });

    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
    const [filterCategoryList, setFilterCategoryList] = useState([]);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(SummaryApi.filterProduct.url, {
                method: SummaryApi.filterProduct.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category: filterCategoryList
                })
            });

            const dataResponse = await response.json();
            setData(dataResponse?.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectCategory = (e) => {
        const { value, checked } = e.target;
        setSelectCategory(prev => ({
            ...prev,
            [value]: checked
        }));
    };

    useEffect(() => {
        fetchData();
    }, [filterCategoryList]);

    useEffect(() => {
        const arrayOfCategory = Object.keys(selectCategory).filter(categoryKeyName => selectCategory[categoryKeyName]);
        setFilterCategoryList(arrayOfCategory);

        const urlFormat = arrayOfCategory.length > 0 ? arrayOfCategory.map(el => `category=${el}`).join("&") : '';
        navigate("/product-category?" + urlFormat);
    }, [selectCategory]);

    const handleOnChangeSortBy = (e) => {
        const { value } = e.target;
        setSortBy(value);

        if (value === 'asc') {
            setData(prev => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
        } else if (value === 'dsc') {
            setData(prev => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
        }
    };

    return (
        <div className='container mx-auto p-6'>
            {/* Desktop Version */}
            <div className='hidden lg:grid grid-cols-[250px,1fr] gap-6'>
                {/* Left Side */}
                <aside className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2'>Sort By</h3>
                    <form className='text-sm flex flex-col gap-3'>
                        <label className='flex items-center gap-2'>
                            <input
                                type='radio'
                                name='sortBy'
                                checked={sortBy === 'asc'}
                                onChange={handleOnChangeSortBy}
                                value="asc"
                                className='form-radio text-red-500'
                            />
                            Price - Low to High
                        </label>
                        <label className='flex items-center gap-2'>
                            <input
                                type='radio'
                                name='sortBy'
                                checked={sortBy === 'dsc'}
                                onChange={handleOnChangeSortBy}
                                value="dsc"
                                className='form-radio text-red-500'
                            />
                            Price - High to Low
                        </label>
                    </form>

                    <h3 className='text-xl font-semibold text-gray-700 mt-6 mb-4 border-b border-gray-300 pb-2'>Category</h3>
                    <form className='text-sm flex flex-col gap-3'>
                        {productCategory.map((categoryName, index) => (
                            <label key={index} className='flex items-center gap-2'>
                                <input
                                    type='checkbox'
                                    name="category"
                                    checked={selectCategory[categoryName?.value] || false}
                                    value={categoryName?.value}
                                    id={categoryName?.value}
                                    onChange={handleSelectCategory}
                                    className='form-checkbox text-red-500'
                                />
                                {categoryName?.label}
                            </label>
                        ))}
                    </form>
                </aside>

                {/* Right Side (Products) */}
                <main className='px-4'>
                    {filterCategoryList.length === 0 && (
                        <div className='bg-yellow-50 p-6 rounded-lg shadow-md mb-4 flex items-center justify-center'>
                            <div className='text-center'>
                                <svg className='w-12 h-12 text-yellow-500 mb-4 mx-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927C11.377 2.366 12.056 2 12.75 2c.695 0 1.373.366 1.699.927l8.375 15.32A1.746 1.746 0 0121.75 21H2.25a1.746 1.746 0 01-1.074-2.753L9.051 2.927zM12 8v4.5M12 16h.01" />
                                </svg>
                                <h2 className='text-xl font-semibold text-gray-800 mb-2'>No Categories Selected</h2>
                                <p className='text-gray-600'>Please select at least one category to view products.</p>
                            </div>
                        </div>
                    )}
                    <p className='font-semibold text-gray-800 text-lg mb-4'>
                        {filterCategoryList.length > 0 ? `Search Results: ${data.length}` : ''}
                    </p>
                    <div className='min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] overflow-y-auto'>
                        {loading ? (
                            <LoadingSpinner /> // Display spinner when loading
                        ) : (
                            data.length ? (
                                <VerticalCard data={data} />
                            ) : (
                                filterCategoryList.length > 0 && (
                                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                        <p className='text-gray-600 text-center'>No products found for the selected categories.</p>
                                    </div>
                                )
                            )
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CategoryProduct;
