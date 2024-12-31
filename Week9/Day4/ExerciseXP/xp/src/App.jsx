import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './features/posts/postSlice'
// import './App.css'

function App() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const error = useSelector(state => state.posts.error)

  return (
    <div
      className='flex flex-row' 
    >
      <div
        className='flex flex-col justify-start items-center w-1/2
        border-r-black border-2
        ' 
      >
        <h1
          className='text-4xl' 
        >Should be successful</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts'))
          }} 
        >Load</button>
        <div
          className='h-96 overflow-y-scroll' 
        >
          {posts.map(post => (
            <div
              className='border-2 rounded border-gray-300' 
            >
              <h3
                className='font-bold' 
              >{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='flex flex-col justify-start items-center w-1/2' 
      >
        <h1
          className='text-4xl' 
        >Should be unsuccessful</h1>
        <button
          onClick={(e) => (async function(){
            e.preventDefault()
            try{
              const result = await dispatch(fetchPosts('https://jsonplaceholder.typicode.com/wrong')).unwrap()
            }
            catch(err){
              console.log(error)
            }
            // console.log(result)
          })()} 
        >Load</button>
        <div>
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default App
