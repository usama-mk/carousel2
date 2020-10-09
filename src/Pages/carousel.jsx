import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';
import { Button, IconButton } from '@material-ui/core';
import { storage } from "../firebase";
import { db } from "../firebase";
var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;


class DemoCarousel extends React.Component {
   
   

    constructor(){
        super();
        this.state={
            imageUrls:null,
            transTime: null,
        }
        
    }




componentDidMount(){
    const that=this;
    const IU=[];

    storage.ref("images").listAll().then(function(result){
        result.items.forEach(function(imageRef){
            // console.log("Image reference"+ imageRef);
            imageRef.getDownloadURL().then(function(url){
                // console.log(url)
                IU.push(url);
                // that.setState({imageUrls: IU}
               
           that.setState({...that.state,imageUrls: IU}, ()=> console.log(that.state.imageUrls));
                
                console.log(that.state)
  
            })
            
            
        })
        console.log("IIIUUU")
        console.log(IU);
        // that.setState({...that.state, transTime: })
      
        db.collection('transition').onSnapshot((snapshot)=>
        {
       that.setState({...that.state, transTime: snapshot.docs.map(doc =>                             
        ({
            id: doc.id,        //the unique 'auto' ids
            data: doc.data(),  //the data inside the doc(coll>doc>data)
        })
        )} )
        } );
      
        setTimeout(function () {
            window.location.reload()
        }, 120000);
        console.log("WITH ZZZZZZZZZZZZZZZZZZZZZZ TIMESTATE")
        console.log(that.state.transTime)
         

         
    });

    
}


 

// handleTransTime=(event)=>{
//     // console.log(event.target.value)
//     this.setState({...this.setState.imageUrls, transTime: event.target.value})
// }


 

render(){
   
    return (
        (this.state.imageUrls)&&(this.state.transTime)?
        <div className="carousel">

            <Carousel autoPlay interval={ this.state.transTime[0].data.transitionTime} infiniteLoop swipeable emulateTouch dynamicHeight showThumbs={false} >

                {this.state.imageUrls.map((url) =>
                    (<div>

                        <IconButton href={form} style={{ width: "99vw" }}>
                            <img alt="Not Loaded" src={url} height="400" width="480" />

                        </IconButton>
                        </div>
                    )
                )
                    }
                    </Carousel>
                    <br/><b></b>
                    <div>
                    {/* <label style={{fontWeight:"bold", margin: "20px"}} >Enter the speed of Transitions in Milliseconds</label>
                        <input type="number" min="0" value={this.state.transTime} onChange={this.handleTransTime}/> */}
                    </div>
                    </div>:
                     <div>
                     <h1 style={{display: "flex", alignItems: "center", justifyContent:"center"}}>Fetching Data ...</h1>
                     </div>


    );

}
 

}

const form = "https://goasolutions.paperform.co/";
export default DemoCarousel;



