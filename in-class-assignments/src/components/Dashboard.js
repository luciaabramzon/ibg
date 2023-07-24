import ListGroup from 'react-bootstrap/ListGroup';
import list from './json/assignements.json'
import { Link } from 'react-router-dom';
import './styles/card.css'
const Dashboard=()=>{
return(
    <>
    <h1> In class Assignments</h1>
    <h4>Lucia Abramzon</h4>
    <h4>Assignments</h4>
   
    <ListGroup>
        {Object.keys(list).map((key) => {
          const item = list[key];
          const { name, link, type } = item;

          if (type === "i") {
            return (
              <ListGroup.Item key={key}>
                <Link to={link}>{name}</Link>
              </ListGroup.Item>
            );
          } else if (type === "e") {
            return (
              <ListGroup.Item key={key}>
                <a href={link}>{name}</a>
              </ListGroup.Item>
            );
          } else {
            return null; // Otra opción de manejo de casos no esperados
          }
        })}
      </ListGroup>

    </>
)
}

export default Dashboard