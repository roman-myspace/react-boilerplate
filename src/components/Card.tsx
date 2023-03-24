import React from 'react'
import { ContextProviderPropTypes } from "../@types/types";

export default function Card(props:any) {
  return (
    <div className={`shadow-sm rounded-lg w-full p-4 ${props.className}`}>
        {props.children}
    </div>
  )
}
