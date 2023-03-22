import { Outlet } from 'react-router-dom';
import { ContextProviderPropTypes } from '../@types/types';

export default function BlankLayout() {

  return (
    <Outlet /> //shows child pages here    
  );
  
}

/*
    BLANK LAYOUT Provides
    - Completely Blank Page ( No Header & Footer )    
*/