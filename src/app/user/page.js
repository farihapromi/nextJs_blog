


import custom from '../custom.module.css'

export default function Page(){
    // const [h3style,seth3Style]=useState({backgroundColor:'red'})
    return(
        <div>
            {/* <h3 style={h3style}>This is mY heafing</h3> */}
            {/* <button onClick={()=>seth3Style({backgroundColor:'blue'})}>Change color</button> */}
            <h4 >My name is promi</h4>

        </div>
    )
}

//meta data for title name
export function generateMetadata({params}){
    return{
        title:'user page',
        description:'my user'

    }

}