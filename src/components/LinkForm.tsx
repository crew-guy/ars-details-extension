import { LinkI } from '@features/linkSlice'
import { AppDispatch, RootState } from '@redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LinkForm:React.FC<LinkI> = ({id, address,imgSrc, text}) => {
    const dispatch: AppDispatch = useDispatch()
    return (
        <form>
            
        </form>
    )
}

export default LinkForm
