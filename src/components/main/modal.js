import React from 'react';

class Modal extends React.Component {
    render(){
        return (
            <div onClick={this.props.hideModal} className='modal'>
                <img src={this.props.imgUrl} alt='bigView'/>
            
            </div>
        )
    }
}

export default Modal;