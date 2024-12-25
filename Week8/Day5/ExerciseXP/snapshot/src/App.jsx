import { useState, useEffect } from 'react'
// import './App.css'
import big from './assets/big.webp'
import small from './assets/small.jpeg'
import { createClient } from 'pexels';

const key = "7J7rPk0KzN5N6eiDP5LMXNXRSg0IYG4pFrSXiDIdqSh6ZsKDDqcOTZk2";
const client = createClient(key)

async function loadImages(word, fn){
  try {
    const photos = await client.photos.search({query: word, per_page: 20}) 
    console.log('photos', photos.photos);
    fn(photos.photos)
  }
  catch(err){
    console.log('ERR', err)
  }
}

export default function App() {
  const [imgs, setImgs] = useState([]);
  const [word, setWord] = useState('Nature');
  const [header, setHeader] = useState('')

  const handlePhotos = (photos) => {
      setImgs(photos.map(ph => ph.src.medium))
      setHeader(word);
  }

  const getNext = () => Math.random() > 0.5 ? big : small;

  const handleClick = (e) => loadImages(word, handlePhotos)

  const handleChange = (e) => setWord(e.target.value)

  useEffect(() => {
    // setImgs(Array.from({length: 20}, (_) => getNext()))
    loadImages('Nature', handlePhotos)
  }, [])

  return (
    <>
      <div className='container'>
        <h1 className='logo'>Snapshot</h1>
        <div className='search'>
          <input type='text' onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="tags">
          {['Nature', 'Mountain', 'Sea', 'Moon'].map(w => (
            <button onClick={() => loadImages(w, handlePhotos)}>{w}</button>
          ))}
        </div>
        <div id='result'>
          <h1>{header} pictures</h1>
          <div id='grid'>
            {imgs.map((src) => (
              <div className='holder'>
                <img src={src} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Scroll /> */}
    </>
  )
}

