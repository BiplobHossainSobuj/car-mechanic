import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    console.log(user,loading);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} ></Navigate> ;
};

export default Private;