import React from "react"
import NavbarEnd from "../components/NavbarComponents/NavbarEnd"
import NavbarSecond from "../components/NavbarComponents/NavbarSecond"
import NavbarStart from "../components/NavbarComponents/NavbarStart"

const Navbar = ({ menuFor, setMenuFor }) => {
	return (
		<header className="bg-white shadow-md fixed w-full z-10 top-0 h-[56px] flex justify-between">
			<NavbarStart menuFor={menuFor} setMenuFor={setMenuFor} />
			<NavbarSecond menuFor={menuFor} setMenuFor={setMenuFor} />
			<NavbarEnd menuFor={menuFor} setMenuFor={setMenuFor} />
		</header>
	)
}

export default Navbar
