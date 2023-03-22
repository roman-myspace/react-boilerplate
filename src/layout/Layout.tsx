import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { ContextProviderPropTypes } from '../@types/types';
import { Outlet } from 'react-router-dom';
import AppContextProvider from '../context/appContext';

export default function Layout({ children }: ContextProviderPropTypes) {
  
    const token = useSelector((state: RootState) => state.user.token);
    console.log("token ===>> ", token);
    
    return (
        <>
            <AppContextProvider>
                { children }
            </AppContextProvider>
            <Outlet />
        </>
    );
}
