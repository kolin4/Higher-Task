import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className='content'>
                <div className='header-container'>
                    <div className='logo'>
                        <h1>Image Viewer</h1>
                    </div>            
                </div>    
            </div>
        )
    }
}

export default Header;