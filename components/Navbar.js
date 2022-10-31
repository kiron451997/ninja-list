import Link from "next/link"

const Navbar = () => {
	return (

		<nav>
			<div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			
			</div> 
		</nav>
		);
}
export default Navbar;