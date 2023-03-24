import React from 'react'
import Select from "react-tailwindcss-select";

export default function ReactSelect(props:any) {
  return (
    <>
        <Select
            options={props.options}
            value={props.value}
            onChange={props.onChange}
            primaryColor={'blue'}            
            isSearchable={true}
            isClearable={false}
            isMultiple={props.multiple ?? false}  
            classNames={{
                menuButton: () => (
                    `rounded-lg flex p-1 bg-gray-50 border border-gray-300 text-gray-700 text-sm`
                ),
                closeIcon: "border-2 border-red-400"                
            }}          
            placeholder={props.placeholder}
        />
    </>
  )
}
