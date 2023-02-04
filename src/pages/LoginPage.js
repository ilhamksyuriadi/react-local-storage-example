import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        // disini nanti hit api nya
        // await axios.... (tambahin async diatas)
        // .then(res => {
        //     logic kalau bershasil disini
        // }) 
        // .catch(e => {
        //     logic kalau gagal disini
        // })

        // data dibawah harusnya response api
        const dummyRole = "admin"
        const dummyAccessToken = "dummyAccessToken"
        if (username === 'binar' && password === '123abc') {
            // berhasil login
            const userInfo = {
                role: dummyRole,
                accessToken: dummyAccessToken
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            // window.location.reload()
            history.push("/")
        } else {
            alert('Wrong password')
        }
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <input value={username} onChange={handleChangeUsername} type="text" placeholder='Username or email' />
            <input value={password} onChange={handleChangePassword} type="password" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage