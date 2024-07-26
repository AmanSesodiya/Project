import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../components/VerticalCard'
import { FaSpinner } from 'react-icons/fa'
import { MdSearchOff } from 'react-icons/md'

const SearchProduct = () => {
    const query = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProduct = async () => {
        setLoading(true)
        try {
            const response = await fetch(SummaryApi.searchProduct.url + query.search)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const dataResponse = await response.json()
            setData(dataResponse.data)
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [query.search]) // Adjusted dependency to only trigger on query.search changes

    return (
        <div className='container mx-auto p-4'>
            {loading ? (
                <div className='flex flex-col justify-center items-center min-h-screen'>
                    <FaSpinner className='animate-spin text-4xl text-blue-500 mb-4' />
                    <p className='text-lg text-center'>Loading your results...</p>
                </div>
            ) : (
                <>
                    <p className='text-lg font-semibold my-3'>Search Results: {data.length}</p>

                    {data.length === 0 && !loading && (
                        <div className='flex flex-col justify-center items-center min-h-screen bg-white p-6 rounded shadow-lg'>
                            <MdSearchOff className='text-6xl text-gray-400 mb-4' />
                            <p className='text-lg font-semibold text-gray-600 mb-2'>No Results Found</p>
                            <p className='text-gray-500 mb-4'>Try searching for something else or return to the home page.</p>
                            <a
                                href='/'
                                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                            >
                                Go to Home
                            </a>
                        </div>
                    )}

                    {data.length > 0 && (
                        <VerticalCard data={data} />
                    )}
                </>
            )}
        </div>
    )
}

export default SearchProduct
