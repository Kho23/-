import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModifyPage = () => {
  const [before, setBefore] = useState({
    tno: "",
    writer: "",
    title: "",
    dueDate: "",
    complete: false,
  });
  const { tno } = useParams();
  const navigate = useNavigate();
  const moveToRead = () => navigate(`todo/read/${tno}`);
  const moveToList = () => navigate(`todo/list`);

  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/todo/read/${tno}`
      );
      console.log(data);
      setBefore(data);
      console.log(before);
    };
    f();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBefore({ ...before, [name]: value });
  };

  const handleSubmit = async (e) => {

    const res = await axios.put("http://localhost:8080/todo/update", before);
  };

  return (
    <div className="text-3xl font-extrabold">
      ModifyPage
      <form>
        <div key={before.tno}>{before.tno}</div>
        <input
          name="writer"
          value={before.writer}
          onChange={handleChange}
        ></input>
        <input
          name="title"
          value={before.title}
          onChange={handleChange}
        ></input>
        <input
          name="complete"
          value={before.complete}
          onChange={handleChange}
        ></input>
        <input
          name="dueDate"
          value={before.dueDate}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>수정하기</button>
      </form>
    </div>
  );
};

export default ModifyPage;
