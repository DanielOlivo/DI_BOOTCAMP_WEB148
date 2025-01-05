import { FC } from "react"

interface User {
    name?: string 
    age?: number
    role?: string
}

const UserCard: FC<User> = (user: User) => {

    const {name, age, role} = user

    const nameOption = name ? <p>{name}</p> : <></>
    const ageOption = age ? <p>{age}</p> : <></>
    const roleOption = role ? <p>{role}</p> : <></>

    return (
        <div>
            {nameOption}
            {ageOption}
            {roleOption}
        </div>
    )
}

export default UserCard;
export type {User};