import React from 'react'
import TopHeader from './TopHeader'
import Search from './Search'
const Header = () => {
    return (
        <div>
            <div className="container-fluid">
                <TopHeader />
                <Search />
            </div>
        </div>
    )
}

export default Header