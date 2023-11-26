import React, {useEffect, useState}from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'


const CreateBook = () => {
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publishedYear, setPublishedYear] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const saveBook = ()=>{
    setLoading(true);
    const data = {
      title,
      author,
      publishedYear
    }
  axios
  .post(`http://localhost:5555/books`, data)
  .then(()=>{
    setLoading(false);
    navigate('/')
  })
  .catch((error)=>{
    setLoading(false);
    console.log(error)
  })

  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Title </label>
          <input 
          type= 'text'
          value= {title}
          onChange={(e)=> setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Author </label>
          <input 
          type= 'text'
          value= {author}
          onChange={(e)=> setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Publish Year </label>
          <input 
          type= 'text'
          value= {publishedYear}
          onChange={(e)=> setPublishedYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={saveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook