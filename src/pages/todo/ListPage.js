import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ListPage = () => {
  // const [queryParmas] = useSearchParams();
  const [list, setList] = useState([])
  // const page = queryParmas.get("page") ? parseInt(queryParmas.get("page")) : 1;
  // const size = queryParmas.get("size") ? parseInt(queryParmas.get("size")) : 10;
  useEffect(() => {
    const f=async()=>{
      const {data}=await axios.get('http://localhost:8080/todo/list')
      console.log(data)
      setList(data.dtoList)
    };f()
  }, [])
  

  // console.log(page, size);
  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">
        List Page Components 
        {/* {page}----------{size} */}
        {list.map(i=>(
          <li>
            <Link to={`/todo/read/${i.tno}`}>{i.tno}</Link>
            <ul>{i.writer}</ul>
            <ul>{i.title}</ul>
            <ul>{i.complete}</ul>
            <ul>{i.dueDate}</ul>
          </li>
        ))}
      </div>
    </div>
  );
};
//소라
export default ListPage;
