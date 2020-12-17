import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

//helper
import menus from './helper'
import logo from '../../Assets/images/logo.png'
import MobileNavbar from '../MobileNavbar'

//Styles
import './navbar.css'

export default () => {
    const [active, setActive] = useState('#home')
    const [fixedProp, setFixedProp] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleClick = (value) => {
        setActive(value)
    }

    const changeFixedProp = () => {
        if (window.scrollY > 50) {
            setFixedProp(true)
        } else {
            setFixedProp(false)
        }
    }

    useEffect(() => {
        changeFixedProp()
        window.addEventListener('scroll', (e) => {
            changeFixedProp()
        })

        return () => {
            window.removeEventListener('scroll', changeFixedProp)
        }
    }, [])

    const resize = () => {
        if (window.innerWidth <= 992) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', () => {
            resize()
        })

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <div className={`navbar${fixedProp ? ' navbar-fixed' : ''}`}>
            <div className="container">
                <div className="navbar-wrapper mobile-padding">
                    <span
                        onClick={() => setActive('#home')}
                        className="logo-span"
                    >
                        <AnchorLink
                            href="#home"
                            offset={() => isMobile ? 60 : 72}
                            className="logo"
                        >
                            <img src={logo} alt="logo" />
                        </AnchorLink>
                    </span>
                    {
                        isMobile
                            ? <MobileNavbar />
                            : (
                                <ul className="nav-menu">
                                    {
                                        menus.map((navbarData) => (
                                            <li
                                                key={navbarData.id}
                                                onClick={() => handleClick(navbarData.url)}
                                                className={`nav-menu-item${active === navbarData.url ? ' active' : ''}`}
                                            >
                                                <AnchorLink
                                                    href={navbarData.url}
                                                    offset={() => isMobile ? 60 : 72}
                                                    className="nav-menu-link"
                                                >
                                                    {navbarData.name}
                                                </AnchorLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                    }

                </div>
            </div>
        </div>
    )
}