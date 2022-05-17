import React from "react"
import NavbarEnd from "../components/NavbarComponents/NavbarEnd"
import NavbarSecond from "../components/NavbarComponents/NavbarSecond"
import NavbarStart from "../components/NavbarComponents/NavbarStart"

const Navbar = () => {
	return (
		<header className="bg-white shadow-md fixed w-full top-0 h-[56px] flex justify-between">
			<NavbarStart />
			<NavbarSecond />
			<NavbarEnd />
		</header>
	)
}

export default Navbar
