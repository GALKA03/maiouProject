import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <Link href="/">HOME</Link>
        <Link href="/siamo">CHI SIAMO</Link> 
        <Link href="/progetti">PROGETTI</Link> 
            <Link href="/contatti">CONTATTACI</Link>
            
        </nav>
    )
}
export default Nav