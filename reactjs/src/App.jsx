import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App=()=>{  
    return(
        <>

<Container >
      <Row>
        <Col md={1} className='bg-primary'><h6>Welcome to Cybrom</h6></Col>
        <Col md={2} className='bg-success'><h6>Welcome to Cybrom</h6></Col>
        <Col md={3} className='bg-danger'><h6>Welcome to Cybrom</h6></Col>
        <Col md={6} className='bg-warning'><h6>Welcome to Cybrom</h6></Col>
       </Row>

       <Row>
        <Col md={2} className='bg-primary'><h6>Welcome to Cybrom</h6></Col>
        <Col md={2} className='bg-success'><h6>Welcome to Cybrom</h6></Col>
        <Col md={4} className='bg-danger'><h6>Welcome to Cybrom</h6></Col>
        <Col md={2} className='bg-warning'><h6>Welcome to Cybrom</h6></Col>
        <Col md={2} className='bg-warning'><h6>Welcome to Cybrom</h6></Col>

       </Row>
    </Container>
        
       </>
    )
    }
    export default App;
