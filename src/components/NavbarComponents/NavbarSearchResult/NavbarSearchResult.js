import React from "react"

import { AiOutlineClockCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

const NavbarSearchResult = () => {
	return (
		<Link to='/' className="w-full flex justify-between hover:bg-gray-100 rounded-xl h-[48px] mt-3">
			<div className="flex items-center ">
				<span className="rounded-full p-2 mr-2 bg-gray-100">
					<AiOutlineClockCircle size={"1em"} />
				</span>
				<span className="text-gray-700">Samiul Basir Fahim</span>
			</div>
			<div className="flex items-center">
				<button className="hover:bg-gray-300 p-3 rounded-full">x</button>
			</div>
		</Link>
	)
}

export default NavbarSearchResult
