import { LinkI } from '@features/linkSlice'
import { AppDispatch } from '@redux/store'
import React from 'react'
import { useDispatch } from 'react-redux'

const LinkForm:React.FC<LinkI> = ({id, address,imgSrc, text}) => {
    const dispatch: AppDispatch = useDispatch()
    return (
        <form>

        </form>
    )
}

export default LinkForm
