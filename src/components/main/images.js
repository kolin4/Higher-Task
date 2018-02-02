import React from 'react';
import axios from 'axios';
import SingleImage from './singleImage';
import Spinner from '../spinner';
import Modal from './modal';
import Error from '../error';


class Images extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data : [],
            isData : false,
            page :0,
            error :false,
            modalShow:false,
            modalImgUrl:''
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
                this.setState({
                    error:true
                })
                
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
    hideModal = ()=>{
        this.setState({
            modalShow:false
        })
    }
    showModal = (url)=>{
        this.setState({
            modalShow:true,
            modalImgUrl:url
        })
        
    }
    render (){
      
        let imageToLoad = this.state.data.slice(this.state.page,this.state.page+3);
   
        
        return (
            <div className='content'>
            {this.state.modalShow ? <Modal hideModal={this.hideModal} imgUrl={this.state.modalImgUrl} />: null}
            {this.state.error ? <Error /> : null}   
                <div className='main-container'>
                    <div className='navigation'>
                        <div className='btnBox'>
                            <div className='prev' onClick={this.changePhoto}  data-id='prev'>prev</div>
                            <div className='next' data-id='next' onClick={this.changePhoto} >next</div>
                        </div>
                    </div>
                    <div className='images-container' >
                    {!this.state.isData ? <Spinner /> : (
                        imageToLoad.map( (elem,index)=>{
                            return  <SingleImage showModal={()=> this.showModal(elem)} key={elem} imgUrl={elem}/>
                        } )
                    )}
                    </div>
                   
                </div>
            </div>
        )
    }
}


export default Images;