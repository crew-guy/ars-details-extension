import React from 'react'


interface IFormInput{
    label: string,
    handleChange: (e:any)=>void,
    value:string
}

const FormInput:React.FC<IFormInput> = ({label,handleChange, value }) => {
    return (
        <div className='link-input'>
            <label htmlFor={label} >{ label}</label>
            <input title={label} id={label} type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default FormInput