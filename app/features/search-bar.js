
"use client"

import { useState } from 'react';

export default function SearchBar() {
    /**
     * create a search bar that allows users to search for art pieces
     */

    // state variable to store the search query
    const [query, setQuery] = useState('');

    // function to handle the search change
    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    // function to handle the search submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query);
    }


    return(
        <div
        className='bg-custom-black-pearl
                    rounded
                    items-center
                    justify-between'
                    >
            <form 
            onSubmit={handleSubmit}
            className='flex w-full p-5 mt-10 mb-5 space-x-4'>
                <input
                className='text-custom-black-pearl w-3/4 rounded p-1' 
                type="text"
                placeholder="Search for art pieces..." 
                value={query} 
                onChange={handleSearch} />
                <button 
                type="submit"
                className='text-custom-milano-red 
                            bg-custom-black-pearl 
                            hover:bg-custom-blue-light
                            p-1
                            pl-2
                            pr-2
                            rounded'
                >Search</button>
            </form>
        </div>
    )
}