import { LinkI } from '@features/linkSlice'
import { RootState } from '@redux/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from './Link'

const LinksContainer = () => {
    const links = useSelector((state:RootState)=> state.links)
    const [isAdding, setIsAdding] = useState<boolean>(false) 
    return (
        <div className="links-container">
            {links.map((link: LinkI, i: number) =>
                <Link
                    address={link.address}
                    id={link.id}
                    imgSrc={link.imgSrc}
                    key={i}
                    text={link.text}
                />
            )}
            <button
                className="rounded-sm bg-gray-600 text-white font-semibold"
                onClick={() => {
                    setIsAdding((prevState) => !prevState)
                }}
            >
                {isAdding ?"Add Link" : "Discard"}
            </button>
        </div>
    )
}

export default LinksContainer
