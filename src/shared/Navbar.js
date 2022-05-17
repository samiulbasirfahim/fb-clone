import React from "react"
import NavbarSecond from "../components/NavbarSecond"
import NavbarStart from "../components/NavbarStart"

const Navbar = () => {
	return (
		<header className="bg-white shadow-md fixed w-full top-0 h-[56px] flex justify-between">
			<NavbarStart />
			<NavbarSecond />
		</header>
	)
}

export default Navbar
