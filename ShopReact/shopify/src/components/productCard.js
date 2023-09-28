import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
export default function ItemCard(props) {

  const data = props.data;
  return (
    <Col key={data._id}>
      <Card className="m-1 shadow shadow-sm border-0">
        <div style={{height:250,margin:"auto",display:"block"}} >
          <Image src={data.pimage} width={300} height="auto" style={{margin:"center"}} ></Image>
        </div>
        <Badge className="position-absolute end-0" pill bg="secondary">${data.price}</Badge>
        <Card.Body className="bg-light" style={{height:150,overflowY:"scroll"}} >
          <Card.Title >
            {data.title}
            
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
          
            <Container>
                <Nav.Item>
                  <Nav.Link className="btn btn-warning btn-small" href={"/update-product/".concat(data._id)}>
                    Update
                  </Nav.Link>
                </Nav.Item>
            </Container>
          

        </Card.Body>
      </Card>
    </Col>
  );
}
