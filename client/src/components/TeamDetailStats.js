import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function TeamDetailStats({ team_data, user_stats }) {
  const team_members = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com",
  ];
  console.log(team_data);
  console.log(user_stats);

  const navigate = useNavigate();

  const handleCompareStatsClick = (user) => {
    console.log(user_stats);
    navigate("/compare-stats", { state: { user_data: user_stats, second_user_email: user } });
  };

  return (
     <Container>
       <br></br>
       <br></br>
    <Row>
      <Col xs={12} md={6}>
        
      <Card style={{height:"100%"}} >
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <div style={{backgroundColor:'rgb(39, 83, 148)',color:'white'}} className="card-header"><b>Team Details</b></div>

    <Card.Body>
      <Card.Text>
      <div className="row">
      <div className="col">
        <h5 className="card-title"><b>Team Name :</b></h5>
      </div>
      <div className="col">
        <p className="card-text">{team_data.team_name}</p>
      </div>
    </div>


  
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
      <Col xs={12} md={6}>
    
      <Card >
    <div style={{backgroundColor:'rgb(39, 83, 148)',color:'white'}} className="card-header"><b>Team Members</b></div>

    <Card.Body>
      <Card.Text>
      
            {team_members.map((user, index) => (
          <div>
          
            <div className="row">
                <br></br>
                <br></br>
            <div className="col">
                <p>{user}</p>
            </div>
            <div className="col">
                <Button style={{backgroundColor:'rgb(39, 83, 148)'}} className="btn-sm "
                  onClick={() => handleCompareStatsClick(user)}> Compare Stats</Button>

            </div>
            </div>
            </div>
           
            ))}
    
      </Card.Text>
     
    </Card.Body>
  </Card>
    
      </Col>
      
    </Row>
   
   
  </Container>

  
    
  );
}

export default TeamDetailStats;
