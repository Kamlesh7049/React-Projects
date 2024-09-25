import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App=()=>{  
    return(
        <>

<Container fluid>
      <Row>
        <Col className='bg-primary'>1 of 1</Col>
        <Col className='bg-secondary'>1 of 1</Col>
        <Col className='bg-danger'>1 of 1</Col>
        <Col className='bg-warning'>1 of 1</Col>
      </Row>
      <Row>
      <Col className='bg-success'>Hello Enginneers</Col>
      <Col className='bg-dark'>Hello Enginneers</Col>
      </Row>
    </Container>
        
       </>
    )
    }
    export default App;
