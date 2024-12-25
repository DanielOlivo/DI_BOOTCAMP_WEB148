import React, {useState, useEffect, useRef} from "react";
import big from '../assets/big.webp'
import small from '../assets/small.jpeg'

export default function Scroll(){

    // const big = '../assets/big.webp'
    // const small = '../assets/small.jpeg'

    const [posts, setPosts] = useState([])
    const [onLoading, setOnLoading] = useState(false)
    const scrollRef = useRef(null)

    const handleScroll = (e) => {
        console.log('scroll')
    }

    const isOnBottom = (e) => e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;

    const loadNext = async () => {

        if(onLoading){
            return;
        }

        setOnLoading(true);
        await wait(1000);        
        setOnLoading(false);
    }

    useEffect(() => {
        const id = setInterval(() => {
            const bottom = isOnBottom(scrollRef)
            console.log('bottom', bottom);
        }, 1000)

        return () => clearInterval(id);
    }, [])

    useEffect(() => {
        setPosts([
            {
                idx: 0,
                posts: [
                    {src: big},
                    {src: small},
                ]
            },
            {
                idx: 1,
                posts: [
                    {src: big},
                    {src: big}
                ]
            }
        ])

    }, [])

    return (
        <div className='scroll' onScroll={handleScroll} ref={scrollRef}>
            {posts.map(({posts: ps}) => (
                <div className="column">
                    {ps.map(({src}) => (
                        <div className='holder'>
                            <img src={src} /> 
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

function wait(ms){
    return new Promise(res => setTimeout(res, ms));
}