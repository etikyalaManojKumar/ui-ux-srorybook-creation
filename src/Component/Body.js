import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { pageDetails } from '../Mock/Mock';
import { sideBarLinks } from '../Mock/SidebarLinks';

import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Alert from './Alert';
import Button from './Button';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import Figure from './Figure';
import Modal from './Modal'
import Heading from './Heading';



class Body extends Component {
    state = {}
    render() {
        const components = {
            'Home': <Home />,
            'About': <About />,
            'Contactus': <Contactus />,
            'Alert': <Alert />,
            'Button': <Button />,
            'Navbar': <Navbar/>,
            'Dropdown': <Dropdown/>,
            'Figure': <Figure/>,
            'Modal': <Modal/>,
            'Heading': <Heading/>,
            
        
        }
        
        return (

            <div className='body'>

                <Routes>                               

                {
                pageDetails.map(( data)=>{
                    return (
                        <>
                        <Route  path={data.path} element={components[data.name]}/>                        
                        </>
                        )
                    })
                }
                {
                    sideBarLinks.map(( data)=>{
                        return (
                            <>
                            <Route  path={data.path} element={components[data.name]}/>                        
                            </>
                            )
                        }) 
                } 
                </Routes>
            </div>



        );
    }
}

export default Body;