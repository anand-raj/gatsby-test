import React from 'react'
import Navbar from './nav-bar'

export default ({ children }) => (
    <div>
        <Navbar />
        <div className={"container"}>
            {children}
        </div>
    </div>
)

