import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

 class Header extends Component {
    render() {
        return (
            <div className='box'>
                <Link to='/home' className='home'>HOME</Link>
                <Link to='/student' className='student'>STUDENT</Link>
                <Link to='/contact' className='contact'>CONTACT</Link>
            </div>
        )
    }
}

export default Header