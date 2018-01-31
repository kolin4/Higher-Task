import React from 'react';
import axios from 'axios';
import SingleImage from './singleImage';


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
                arrayId.shift();
                this.setState({
                    data:arrayId,
                    isData:true
                })
                          
            })
            .catch(error =>{
                console.log(error);
                
            })
    }
    changePhoto =(event)=>{
        let elemId = event.target.dataset.id;
        let page = this.state.page;
        switch(elemId){
            case 'prev' :
                if(page < 3){
                    page = 0;
                } else {
                    page -= 3
                }
                 break;
            case 'next' :
                if (page + 3 > this.state.data.length ){
                    page = this.state.data.length -3;
                } else {
                    page += 3;
                }
                 break;
            default :
                 break;
        }
        
        this.setState({
            page
        })
    }
    render (){
      
        let imageToLoad = this.state.data.slice(this.state.page,this.state.page+3);
        console.log(imageToLoad);
        
        return (
            <div className='content'>
                <div className='main-container'>
                    <div className='navigation'>
                        <p><strong onClick={this.changePhoto}  data-id='prev'>prev</strong> / <strong data-id='next' onClick={this.changePhoto} >next</strong></p>
                    </div>
                    <div className='images-container' >
                    {!this.state.isData ? null : (
                        imageToLoad.map( (elem,index)=>{
                            return  <SingleImage  key={elem} imgUrl={elem}/>
                        } )
                    )}
                    </div>
                   
                </div>
            </div>
        )
    }
}


export default Images;