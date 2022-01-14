import React from 'react'


interface IFormInput{
    label: string,
    handleChange: ()=>void,
    value:string
}

const FormInput:React.FC<IFormInput> = ({label,handleChange, value }) => {
    return (
        <div className='flex flex-col justify-start items-stretch'>
            <label htmlFor={label} className="text-md text-sky-500 flex flex-row justify-start"></label>
            <input title={label} id={label} type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default FormInput
