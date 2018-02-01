import React from 'react';


class SingleImage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            modalShow : true,
            imgUrl :''
        }
    }
    hideModal = ()=>{
        this.setState({
            modalShow:false
        })
    }
    render(){
        return (            
                <div className='image' onClick={this.props.showModal}>
                    <img src={this.props.imgUrl} alt='img'/>
                </div>
        )
    }
}


export default SingleImage;