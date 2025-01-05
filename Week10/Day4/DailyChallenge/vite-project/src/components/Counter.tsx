import { FC, useCallback, useState, MouseEvent } from "react"

const Counter: FC = () => {
    const [count, setCount] = useState<number>(0)

    const handler = useCallback((e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={handler} 
            >inc</button>
        </div>
    )
}

export default Counter;