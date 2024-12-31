import Link from 'next/link'
export default function StudentList(){
    return(
        <div>
            <h4>Student List</h4>
            <ul>
                <li>
                    <Link href='/studentlist/Anil'>Anil</Link>
                </li>
                <li>
                    <Link href='/studentlist/Piya'>Piya</Link>
                </li>
                <li>
                    <Link href='/studentlist/Sherer'>Sherer</Link>
                </li>
                <li>
                    <Link href='/studentlist/4'>Param</Link>
                </li>
            </ul>

        </div>
    )
}