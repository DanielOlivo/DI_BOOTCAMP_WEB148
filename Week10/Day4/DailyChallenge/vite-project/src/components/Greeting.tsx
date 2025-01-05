import { FC } from "react"

interface HasName {
    name: string
}

const Greeting: FC<HasName> = ({name}) => {
    return (
        <h1>Hi, {name}!</h1>
    )
}

export default Greeting