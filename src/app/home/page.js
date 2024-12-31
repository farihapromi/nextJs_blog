 import Image from 'next/image';
 import profile from '../../../public/vercel.svg'
 export default function Home(){
    return(
        <main>
            <h1>Image optimization</h1>
            <Image src={profile}/>
        </main>
    )
 }