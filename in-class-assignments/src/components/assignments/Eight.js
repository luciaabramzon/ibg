import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/card.css'

const Eight=()=>{


    const num=()=>{
        const age=6
        console.log(age)
    }

    const name=()=>{
        const name='Lucia'
        console.log(name)
    }

    const ifElse=()=>{
        const num=1
        if(num>0){
            console.log('Num is positive')
        } else if(num<0){
            console.log('Num is a negative')
        }else if(num===0){
            console.log('Num is 0')
        }
    }
    

    const loop=()=>{
        for(let i=1; i<5;i++){
            console.log(i)
        }
    }

    const testFunctions=()=>{
        num()
        name()
        ifElse()
        loop()
    }
    useEffect(()=>{
        testFunctions()
    },[])



    return(
        <>
        <h1>Introduction to JavaScript Basics</h1>
        <h2>Check your console!</h2>
       <Link to='/'><Button variant="warning">Go Back</Button></Link> 
        </>
    )
}

export default Eight