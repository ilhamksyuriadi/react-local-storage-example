import React, { useEffect, useState } from 'react'
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ exact, path, component }) => {
    const [isLoggedin, setIsLoggedin] = useState(false)

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo?.accessToken) {
            setIsLoggedin(true)
        } else {
            setIsLoggedin(false)
        }
    }, [])

    return isLoggedin ? <Route exact={exact} path={path} component={component} /> : <Redirect to="/login" />
}
export default PrivateRoute