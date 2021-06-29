import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Address';
import NavBar from './component/navbar/NavBar';
import { Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App"  >
     
        <NavBar/>
        <Card style={{ width: '50%',marginLeft:"25%",boxShadow:"1 1 5 black",backgroundColor:"#52565e"}}>
          <ProfilePhoto/>
            <Card.Body>
            
              <Card.Title><FullName  /></Card.Title>
              <Adress />
              
              <Card.Text style={{color:"#caccd1",fontSize: 14,fontWeight:"normal" ,marginTop:"1em"}}>
                  I don’t like to define myself by the work I’ve done. I define myself by the work I want
                  to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue
                  challenging myself and do interesting things that matter.

              </Card.Text>
            </Card.Body>
        </Card>  
        
    </div>
  );
}

export default App;
