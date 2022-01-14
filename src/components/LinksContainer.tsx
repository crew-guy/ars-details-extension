import { LinkI } from '@features/linkSlice'
import { RootState } from '@redux/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from './Link'
import LinkForm from './LinkForm'

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
                className="primary-button"
                onClick={() => {
                    setIsAdding((prevState) => !prevState)
                }}
            >
                {!isAdding ? "Add Link" : "Discard"}
            </button>
            {isAdding && <LinkForm
                text=''
                address=''
                imgSrc=''
            />}
        </div>
    )
}

export default LinksContainer
