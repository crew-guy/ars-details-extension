import { LinkI, updateLink } from '@features/linkSlice'
import { AppDispatch } from '@redux/store'
import React from 'react'
import { useDispatch } from 'react-redux'
import FormInput from './FormInput'

const LinkForm:React.FC<LinkI> = ({id, address,imgSrc, text}) => {
    const dispatch: AppDispatch = useDispatch()
    return (
        <form>
            <FormInput
                label="Link Name"
                handleChange={(e:any) => dispatch(updateLink({id, text: e.target.value}))}
                value={text}
            />
            <FormInput
                label="Link Address"
                handleChange={(e:any) => dispatch(updateLink({id, address: e.target.value}))}
                value={address}
            />
            <FormInput
                label="Link Image URL"
                handleChange={(e:any) => dispatch(updateLink({id, address: e.target.value}))}
                value={imgSrc}
            />
        </form>
    )
}

export default LinkForm