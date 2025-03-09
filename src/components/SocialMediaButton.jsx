import React from 'react'

export const SocialMediaButton = ({ name, link }) => {
    return (
        <a href={link} className='text-white bg-stone-700 p-4 w-full rounded-lg mb-4 
        text-center hover:bg-lime-300 hover:text-black' target='_blank'>
            {name}
        </a>
    )
}
