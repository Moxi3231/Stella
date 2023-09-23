import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from 'react-bootstrap/Badge';
export default function ItemCard(props) {

  const data = props.data;
  return (
    <Col key={data._id}>
      <Card className="m-1 shadow shadow-sm border-0">
        <div style={{height:300,margin:"auto",display:"block"}} >
          <Image src={data.pimage} width={300} height="auto" style={{margin:"center"}} ></Image>
        </div>
        <Card.Body className="bg-light" style={{height:100,overflowY:"scroll"}} >
          <Card.Title >
            {data.title}
            <Badge className="position-absolute end-0" pill bg="secondary">${data.price}</Badge>
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
