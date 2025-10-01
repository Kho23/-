import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { no } = useParams();
  const [one, setOne] = useState({})
  console.log(no);
  useEffect(() => {
    const get = async() =>{
        const {data} = await axios.get(`http://localhost:8080/todo/read/${no}`)
        console.log(data)
        setOne(data)
    } ; get();
  }, [])
  
  
  return <div>{one.sno}</div>
};

export default ReadPage;
