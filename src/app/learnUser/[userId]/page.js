import getUsers from "../../../../services/getUsers"
export default  async function Page(props){
    const getUserList=getUsers()
    const users=await getUserList
    // console.log(users)
    const currentId=props.params.userId;
    console.log(currentId)
    const userData=users[currentId-1]
    console.log(userData)
    return(
        <div>
            <h3>User details</h3>
            <h4>Id:{userData.id}</h4>
            <h4>Name:{userData.name}</h4>
            <h4>Website:{userData.website}</h4>
        </div>
    )
}
export async function generateStaticParams(){
    const getUserList=getUsers()
    const users=await getUserList;
    return users.map(user=>(
        {
            userId:user.id.toString()
        }
    ))
}