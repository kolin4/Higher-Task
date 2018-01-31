import React from 'react';
import axios from 'axios';

class Images extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data : [],
            isData : false,
            page :0 
        }
    }
    componentDidMount(){
        axios.get('https://picsum.photos/list')
            .then( response =>{

                const arrayId = [];
                for ( let elem of response.data ){
                    let idArray = elem.post_url.split('/');
                    let id = idArray[idArray.length-1];
                    arrayId.push(`http://source.unsplash.com/${id}`);
                }
           
                this.setState({
                    data:arrayId,
                    isData:true
                })
                          
            })
            .catch(error =>{
                console.log(error);
                
            })
    }
   
    render (){
      
        let imageToLoad = this.state.data.splice(this.state.page,this.state.page+3);
        console.log(imageToLoad);
        
        return (
            <div className='content'>
                <div className='main-container'>
                    {/* {!this.state.isData ? null : (

                    )} */}
                </div>
            </div>
        )
    }
}


export default Images;