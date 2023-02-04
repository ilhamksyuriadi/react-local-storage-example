import React from 'react'

const DashboardPage = () => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <h1>DashboardPage</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default DashboardPage