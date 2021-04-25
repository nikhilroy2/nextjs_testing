import Link from 'next/link'


const Nav = ()=> {
    return (
        <div className="">

        <Link href="/">
            <a> Home page</a>
        </Link>
        <Link  href="about">
        <a> About page </a>
        </Link>
    </div>
    )
}
export default Nav