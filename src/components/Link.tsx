import { deleteLink, LinkI } from '../redux/features/linkSlice'
import React, { useRef, useState } from 'react'
import deleteIcon from '../assets/images/delete.png'
import copy from '../assets/images/copy.png'
import edit from '../assets/images/edit.png'
import save from '../assets/images/save.png'
import goto from '../assets/images/goto.png'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import LinkForm from './LinkForm'


const Link: React.FC<LinkI> = ({ id, text, imgSrc, address }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const dispatch:AppDispatch = useDispatch()

    const handleClick = () => {
        const el = ref.current!
        navigator.clipboard.writeText(el.getAttribute('data-value')!);
        el.classList.add('clicked')
        setTimeout(() => {
            el.classList.remove('clicked')
        },1000)
    }


    return (
        <>
        <div className="link-container" ref={ref} data-value={address} >
            <div className="info-container" onClick={handleClick} >
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
                <img src={!isEditing ? edit : save} alt="edit_link" onClick={() => setIsEditing((prevState) => !prevState)} />
                <img src={deleteIcon} alt="edit_link" onClick={()=> dispatch(deleteLink(id))} />
                
            </div>
        </div>
        { isEditing && <LinkForm id={id} address={address} imgSrc={imgSrc} text={text} /> }
        </>
    )
}

export default Link
