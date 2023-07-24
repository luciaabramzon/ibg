import four from '../json/four.json'
import '../styles/4card.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Four =()=>{
    return(
        <>
        <h1 >Fourth assignment</h1>
        <h2>JavaScript ES6</h2>
        <div className='cards'>
        {
           Object.keys(four).map((key)=>{
            const entry=four[key]
            return(
               
                <div className="flip-card" key={key}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">{entry.name}</p>
                        <p></p>
                    </div>
                    <div className="flip-card-back">
                        <p >{entry.definition}</p>
                        <p></p>
                    </div>
                </div>
            </div>
            
            )
           })
        }
        <Link to='/'><Button variant="warning">Go Back</Button></Link> 
        </div>
        </>
       
    )
}

export default Four