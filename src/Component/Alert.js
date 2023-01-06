import React, { Component } from 'react';

import { sideBarLinks } from '../Mock/SidebarLinks';
//import '../Sass/main.css'

class Alert extends Component {
    state = {}
    render() {
        const alerts = sideBarLinks.map((data)=>{return data.style})
        console.log('data-upper =>', alerts);
        return (
            <div className='main_div'>
                <h1>Alerts</h1>
                <p className='para_width'>The alert method displays an alert box with a message and an OK button.
                    The alert method is used when you want information to come through to the user.</p>
                <p>Alerts are available for any length of text and color</p>
                
               
                
                {alerts[0].map((data)=>{
                    let style = {
                        width: data.width,
                        height: data.height,
                        backgroundColor: data.backgroundColor,
                        marginBottom: data.margin_bottom
                    }
                    console.log('data=>', data);
                    return (<div style={style}>This is a {data.name} alert—check it out!</div>);
                })}
                
            </div>
        );
    }
}

export default Alert;