import first from '../json/first.json'
import '../styles/card.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const First =()=>{
return(
    <>
    <h1 >First assignment</h1>
    <h2>Terminology-Vocabulary-General</h2>
    <div className='cards'>
    {
       Object.keys(first).map((key)=>{
        const entry=first[key]
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

export default First