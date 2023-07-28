import React from "react";

interface Option {
    key: string,
    text: string
}

interface Props {
    options: Array<Option>,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any
    value?: string,
    className?: string
}

const SelectInput: React.FC<Props> = ({ options, onChange, value, className='' }) => {
    return (
        <div className={className + " relative"}>
            <div className='right-4 absolute top-3'>
                <svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>
            </div>
            <select
                onChange={onChange}
                value={value}
                className={"shadow appearance-none border rounded-full w-full py-3 px-6 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"}
            >
                {options.map((item) => {
                    return <option key={item.key} value={item.key} selected={item.key === value}>
                        {item.text}
                    </option>
                })}
            </select>
        </div>
    )
}

export default SelectInput;