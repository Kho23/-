import axios from 'axios'

export const API_SERVER_HOST='http://localhost:8080'
const prefix=`${API_SERVER_HOST}/todo`

export const getOne = async (tno) =>{
    const {data} = await axios.get(`${prefix}/read/${tno}`)
    return data;
}

export const getList = async () => {
  var str = `${prefix}/list`;
  const {data} = await axios.get(str);
  console.log(data)
  return data;
};

export const postAdd = async (todoObj) => {
  const res = await axios.post(`${prefix}/`, todoObj)
  return res.data
}