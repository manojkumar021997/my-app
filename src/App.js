import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from 'react-icons/fa';
import './assets/App.css';
let URL = 'https://course-api.com/react-tabs-project';

const App = () => {
    let [company, setcompany ] = useState([]);
    let [isloding, setloding] = useState(true);
    let [value, setvalue] = useState(0);

    const fetchcompany = async()=>{
        const responce = await fetch(URL);
        const data = await responce.json();
        console.log(data);
        setcompany(data);
        setloding(false);
    
    };
    useEffect(()=>{
        fetchcompany()
    },[]);
    if(isloding){
        return(<h1>Loding...</h1>)
        
    } 
    const {title, dates, duties} = company[value];
    // console.log(title);
    return(
        <div>
            <h2>Experience</h2>
            {company.map((val, index)=>{
                return <button className="job-btn" key={uuidv4()} onClick={() => {setvalue(index)}}>{val.company}</button>
            })}
            <div className="job-date">{dates}</div>
            <div className="title">{title}</div>
            {duties.map((description)=>{
                return(
                    <>
                    <FaAngleDoubleRight />
                    <p key={uuidv4()}>{description}</p>
                    </>
                    
                )
            })}
        </div>
    )


    
};



export default App;