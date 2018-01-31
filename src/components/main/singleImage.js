import React from 'react';

class SingleImage extends React.Component{
    render(){
        return (
            <div className='image'>
                <img src={this.props.imgUrl} alt='img'/>
            </div>
        )
    }
}


export default SingleImage;