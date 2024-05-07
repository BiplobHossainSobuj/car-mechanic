import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(user,loading);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login'></Navigate> ;
};

export default Private;