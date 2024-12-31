'use client'
import Link from 'next/link'
import './login.css'
import { usePathname } from 'next/navigation'
const Layout=({children})=>{
    const pathName=usePathname()
    console.log(pathName)
    return(
        <div>
            {
                pathName!=='/login/loginteacher'?
                <ul className='login-menu'>
                <li>
                    <Link href='/login'>Login
                    </Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Student Login
                    </Link>
                </li>
                <li>
                    <Link href='/login/loginteacher'>Teacher Login
                    </Link>
                </li>
            </ul>:<Link href='/login'>Go to main Login page</Link>
            }
            {
                children
            }

        </div>
    )

}
export default Layout