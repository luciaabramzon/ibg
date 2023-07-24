import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import '../styles/nasa.css'

const Eleven=()=>{
    const [apod,setApod]=useState(null)
    const [seeApod,setSeeApod]=useState(true)
    const [marsPhotos,setMarsPhotos]=useState(null)
    const [seeMarsPhotos,setSeeMarsPhotos]=useState(true)
    const [neoBrowse,setNeoBrowse]=useState(null)
    const [seeNeoBrowse,setSeeNeoBrowse]=useState(true)
    const [searchDate,setSearchDate]=useState('')
    const [apodByDate,setApodByDate]=useState(null)
    const [seePictureByDate,setSeePictureByDate]=useState(true)
    const NasaKey=process.env.REACT_APP_NASA_API_KEY
    const baseURL='http://localhost:8000'

    const client=axios.create({
        baseURL,
        headers:{}
    })
    
    const fetchApod=async()=>{
        try{
            const res=await client.get('/apod')
            setApod(res)
        }
        catch(err){
            console.log(err)
        }
    }

    const fetchMars=async()=>{
        try{
            const res=await client.get('/mars')
            setMarsPhotos(res.data.photos)
        }catch (err){
            console.log(err)
        }
    }

    const fetchNeo=async()=>{
        try{
            const res=await client.get('/neo')
            setNeoBrowse(res.data.near_earth_objects)

        }catch(err){
            console.log(err)
        }
    }

    const fetchByDate=async()=>{
        try{
            const res=await client.get('/apodbydate',{
                params:{searchDate}
            })
            setApodByDate(res)
            setSeePictureByDate(false)

        }catch(err){
            console.log(err)
        }
    }
    const lookAgain=()=>{
        setApodByDate(null)
        setSeePictureByDate(true)
        setSearchDate('')
    }

    useEffect(()=>{
        fetchApod()
        fetchMars()
        fetchNeo()
    },[])

    return(
        <div >
        <h1 >Welcome to the NASA</h1>
        <h4>Checkout what you can do!</h4>
       <ul className='nasaOptions'>
        {
            seeApod?(
                <>
                <li>
                <p className='nasaP'>Do you want to see the picture of the day?</p>
                <button  onClick={()=>setSeeApod(false)}>See Picture!</button>
                </li>
                </>
            ):(
                <div key={apod.data.title}>
                <p className='titleNasa'>Picture of the day</p>
                 <p className='titleApod'>{apod.data.title}</p>
                 <div className='apod'>
                 <img src={apod.data.url} alt={`Nasa photo of the day - ${apod.data.title}`} className='apodImg'/>
                <div className='apodText'>
                 <p>{apod.data.explanation}</p>
                 <button  onClick={()=>setSeeApod(true)}>Close</button>
                 </div>
                </div>
                </div>
            )
        }
        {
            seePictureByDate ? (
                <>
                <li className='searchByDate'>
            <p className='nasaP'>Or do you want to search a picture by Date?</p>
            <input
            type='date'
            value={searchDate}
            onChange={(e)=>setSearchDate(e.target.value)}
            />
            <button onClick={fetchByDate}>Look up!</button>
            </li>
                </>
            ):(
            <div key={apodByDate.data.title}>
                        <p className='titleNasa'>Picture by date</p>
                        <p className='titleApod'>{apodByDate.data.title}</p>
                        <div className='apod'>
                        <img src={apodByDate.data.url} alt={`Photo of the date ${searchDate}`} className='apodImg'/>
                        <div className='apodText'>
                        <p>{apodByDate.data.explanation}</p>
                        <button onClick={lookAgain}>Close</button>
                        </div>
                        </div>
                    </div>
            )
        }
        {
            seeMarsPhotos ? (
                <>
           <li> <p className='nasaP'>Do you want to see mars photos?</p>
                <button onClick={()=>setSeeMarsPhotos(false)}>See!</button>
                </li>
                </>
            ):(
                <>
                <p className='titleNasa'>Mars pictures</p>
                <div className='photoContainer'>  
                {marsPhotos.map((mars)=>(
                    <div key={mars.id}>
                    <img  src={mars.img_src} alt={`Mars Photos-${mars.rover.name}`}/>
                    <p>{mars.earth_date}</p>
                    </div>
                ))}
                </div>
                <button onClick={()=>setSeeMarsPhotos(true)}>Close</button>
                </>
            )
        }
        {
            seeNeoBrowse ? (
                <>
             <li> <p className='nasaP'>Do you wanna learn more about Near-Earth-Objects?</p>
                <button onClick={()=>setSeeNeoBrowse(false)}>Yes please!</button>
                </li>
                </>
            ) : (
                <>
                <div className='photoContainer'>
                    {neoBrowse.map((neo)=>(
                       <div key={neo.id}>
                        <Card className='card'>
                        <Card.Title>
                        <p className='cardTitle'>Name : {neo.name}</p>
                        </Card.Title>
                        <Card.Body>
                        <p>Estimated diameter max : {neo.estimated_diameter.kilometers.estimated_diameter_max} Kilometers</p>
                        <p>Estimated diameter min : {neo.estimated_diameter.kilometers.estimated_diameter_min} Kilometers</p>
                        <p>First observation date : {neo.orbital_data.first_observation_date}</p>
                        <p>Is potentially hazardus: {neo.is_potentially_hazardus_asteroid ? "Yes" : "No"}</p>
                        </Card.Body>
                        </Card>
                        </div>
                    ))}
                </div>
                <button className='NEOButton' onClick={()=>setSeeNeoBrowse(true)}>Close</button>
                </>
            )
        }
    </ul>
        </div>
    )

}
export default Eleven