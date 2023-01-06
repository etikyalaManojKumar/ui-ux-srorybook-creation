import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Modal extends Component {
    state = {}
    render() {
        const modals = sideBarLinks.map((data)=>{return data.style})
        console.log('modals =>', modals);
        return (
            

        <div className='modal' style={{backgroundColor:"rgb(139, 227, 243)"}}>

        <div className='firstrow'>
        <span><h2>Modal Tittle</h2></span>


<span className='close'></span>

</div>

            <div className='secondrow'>

            

            </div>
            {modals[5].map((data)=>{
                    let style = {
                        display: data. display,
                        justify_content: data.justify_content,
                        align_items  : data.align_items,
                        padding: data.padding,
                        border: data.border,
                        height: data.height,
                        font_size:data.font_size,
                        font_weight:data. font_weight,
                        
                    }
                  
                    return (<modal style={style}>{data.name}</modal>
                    );
                })}
            <div className='thirdrow'>

              <button>close</button>

              <button>Save Changes</button>

           

               

            </div>
            </div>
            
        );
    }
}

export default Modal;