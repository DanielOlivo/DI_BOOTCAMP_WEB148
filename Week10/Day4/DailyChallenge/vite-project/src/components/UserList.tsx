import { FC, useEffect, useState } from "react";


interface User {
    name: string 
    username: string
    email: string
    id: number
}

type CallbackFn = (user: User[]) => void

async function fetchUsers(callback: CallbackFn): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json: User[] = await response.json()
    callback(json)
}


const UserList: FC = () => {

    const [users, setUsers] = useState<User[]>([])
    const [onLoading, setOnLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    useEffect(() => {
        setOnLoading(true)
        fetchUsers(users => {
            try{
                setUsers(users)
                setSuccess(true)
            }
            catch(err){
                setError(String(err))
            }
            finally {
                setOnLoading(false)
            }
        }
        )}, [])

    if(onLoading) return <div>loading...</div>

    if(!success) return <div>something went wrong: {error}</div>

    return (
        <div>
            {users.map(({name, username, email, id}) => 
                <div>
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{id}</p>
                </div>
            )}
        </div>
    )
}

export default UserList;