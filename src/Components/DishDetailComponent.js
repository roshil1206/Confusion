import React , {Component} from 'react';
import { Card , CardImg , CardBody , CardText , CardTitle} from 'reactstrap';

class DishDetail extends Component {

    renderComments()
    {
        
           
                const comment = this.props.dish.comments.map((comment)=>{
                    return(
                                       <div className="p-2">      
                                  {comment.comment}
                                  <br />
                                  --{comment.author} {"  "}
                            {comment.date}
                                  </div>
                    );
                })
                return(
            <div  className="col-12 col-md-5 m-1">
            
            <Card>
                <CardBody> 
                 
                    <h4>Comments</h4>  
                   {comment}   
                </CardBody>
            </Card>
        </div>
        );
    }
    render(){
        
            if (this.props.dish != null){
            return( 
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            
                    {this.renderComments()}
                 
                </div>
              
            );}
        else
            return(
                <div></div>
            );
           
        
    }
}
export default DishDetail;