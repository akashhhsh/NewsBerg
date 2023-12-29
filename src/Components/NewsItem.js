import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

function NewsItem(props) {

  return (
    <Card className='m-3'>
      <Card.Img variant="top" src={props.img} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{!props.source ? "Unknowns" : props.source}</span>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Footer className="text-muted">Published : {props.published}</Card.Footer>
        <Button variant="primary" href={props.articleURL} target='_blank'>Read More...</Button>
      </Card.Body>
    </Card>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  articleURL: PropTypes.string,
  img: PropTypes.string,
}


export default NewsItem;