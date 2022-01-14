import React from 'react'


interface IFormInput{
    label: string,
    handleChange: (e:any)=>void,
    value:string
}

const FormInput:React.FC<IFormInput> = ({label,handleChange, value }) => {
    return (
        <div className='flex flex-col m-2 justify-start items-start'>
            <label htmlFor={label} className="flex-1 text-md text-sky-500 flex flex-row font-semibold justify-start">{ label}</label>
            <input title={label} id={label} className='flex-2 border-none outline-none' type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default FormInput