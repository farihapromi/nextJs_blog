import Link from 'next/link'
const About=()=>{
    return(
        <div>
            <h3>This is about page</h3>
            <Link href={'/about/aboutstudent'}>
            Go to about collage page</Link>
        </div>
    )
}
export default About;