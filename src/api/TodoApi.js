import axios from 'axios'

export const API_SERVER_HOST='http://localhost:8080'
const prefix=`${API_SERVER_HOST}/todo`

export const getOne = async (tno) =>{
    const {data} = await axios.get(`${prefix}/read/${tno}`)
    return data;
}