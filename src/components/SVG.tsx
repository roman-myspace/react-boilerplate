import React from 'react'
import { ReactSVG } from 'react-svg'
import CONSTENTS from '../utils/constents';

interface ParamTypes {
    type: String | undefined, 
    icon: String | undefined, 
    sizeClass?: String | undefined
};

export default function SVG({type, icon, sizeClass=''}: ParamTypes) {
  
    let path = `../assets/icons/${type}/${icon}.svg`;
    
    return (
        <>
            <ReactSVG
                src={`/assets/icons/${type}/${icon}.svg`}
                className={`${sizeClass ? sizeClass : "svg_default_size"}`}
            />
        </>
    );

}
