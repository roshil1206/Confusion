import React , {Component} from 'react';
import { Card , CardImg , CardBody , CardText , CardTitle} from 'reactstrap';



   function RenderComments({comments})
    {
        
           
                const comment = comments.map((comment)=>{
                    return(
                                       <div className="p-2">      
                                  {comment.comment}
                                  <br />
                                  --{comment.author} {"  "}
                                  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                  </div>
                    );
                });
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
   function RenderDish({dish}){
        
            {
            return( 
                
                  <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                
                
            );}
       
           
        
    }
const DishDetail = (props) => {
    if (props.dish != null){
        return(
            <div className="container">
            <div className="row" >               
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
            </div>
            </div>

        );
    }
    else
    return(
        <div></div>
    );

}
export default DishDetail;