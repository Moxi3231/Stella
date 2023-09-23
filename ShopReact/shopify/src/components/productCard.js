import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from 'react-bootstrap/Badge';
export default function ItemCard(props) {

  const data = props.data;
  return (
    <Col>
      <Card>
        <Image className="d-block w-100" variant="top" src={data.pimage} width={300} height={500} />
        <Card.Body className="bg-light">
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
