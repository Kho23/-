import axios from "axios";
import React, { useEffect } from "react";

const AddPage = () => {
  useEffect(() => {
    const f = async () => {
      const res = await axios.post("http://localhost:8080/todo/add", {
        tno: 8000,
        writer: "이건호이다",
        title: "안녕하지 않습니다",
        complete: true,
        dueDate: "2025-09-23",
      });
    };f()
  }, []);

  return <div>Todo AddPage</div>;
};

export default AddPage;
