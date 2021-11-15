import React, { useRef } from 'react'
import copy from '../assets/images/copy.png'
import goto from '../assets/images/goto.png'

interface LinkI {
    text: string,
    imgSrc: string,
    address:string
}

const Link: React.FC<LinkI> = ({ text, imgSrc, address }) => {
    const ref = useRef<HTMLDivElement>(null)


    const handleClick = () => {
        const el = ref.current!
        navigator.clipboard.writeText(el.getAttribute('data-value')!);
        el.classList.add('clicked')
        setTimeout(() => {
            el.classList.remove('clicked')
        },1000)
    }


    return (
        <div className="link-container" ref={ref} data-value={address} onClick={handleClick}  >
            <div className="info-container">
                <div className="img-container">
                    <img src={imgSrc} alt="" />
                </div>
                <p className="link-name" >{text}</p>
            </div>
            <div className="action-container">
                <img src={copy} alt="copy" onClick={handleClick} />
                {/* eslint-disable-next-line */}
                <a onClick={(e: any) => { e.stopPropagation()}} href={address} target="_blank" >
                    <img src={goto} alt="go to"/>
                </a>
            </div>
        </div>
    )
}

export default Link
