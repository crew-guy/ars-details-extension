import { addLink, updateLink } from '../redux/features/linkSlice'
import { AppDispatch } from '../redux/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from './FormInput'

interface ILinkForm {
    id?:string,
    text: string,
    imgSrc: string,
    address:string
}

const LinkForm:React.FC<ILinkForm> = ({ id, address,imgSrc, text}) => {
    const dispatch: AppDispatch = useDispatch()
    const [inputs, setInputs] = useState({
        address: address,
        imgSrc: imgSrc,
        text: text
    })
    return (
        <form>
            <FormInput
                label="Link Name"
                handleChange={(e:any) => setInputs({...inputs, text: e.target.value})}
                value={inputs.text}
            />
            <FormInput
                label="Link Address"
                handleChange={(e:any) => setInputs({...inputs, address: e.target.value})}
                value={inputs.address}
            />
            <FormInput
                label="Link Image URL"
                handleChange={(e:any) => setInputs({...inputs, imgSrc: e.target.value})}
                value={inputs.imgSrc}
            />
            <button
                className="rounded-sm bg-gray-600 text-white font-semibold"
                onClick={() => {
                    id === undefined ? dispatch(addLink(inputs)):dispatch(updateLink({id,...inputs}))
                } }
            >
                Save
            </button>
        </form>
    )
}

export default LinkForm