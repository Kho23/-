import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListPage = () => {
    const [list, setList] = useState([])
  useEffect(() => {
    const read = async () => {
      const {data} = await axios.get(`http://localhost:8080/todo/list`);
      console.log(data)
      setList(data.slice(200))
    };
    read();
  }, []);

  return (
    <div className='p-4 w-full bg-orange-200'>
     <div className="text-3xl font-extrabold">{list.map(i=>(
    <li>
       <ul>수학: {i.math}</ul> 
       <ul>국어: {i.korea}</ul> 
       <ul>영어: {i.eng}</ul> 
       <ul>총점: {i.total}</ul> 
       <ul>평균: {i.avg}</ul> 
       <ul>등급: {i.grade}</ul>
       <Link to={`/todo/read/${i.sno}`}></Link>
    </li>
  ))}</div>;
    </div>
  )
}

export default ListPage