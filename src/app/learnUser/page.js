import getUsers from "../../../services/getUsers"
import Link from 'next/link'

export default async function Page(){
    const getUserList=getUsers()
    const users=await getUserList
    return(
        <div>
            <h2>Users list</h2>
            {
                users.map((user)=>(
                    <h2 key={user.id}> <Link href={`/learnUser/${user.id}`}>
                    user name:{user.name}</Link></h2>
                ))
            }

        </div>
    )

}