import React, { useState } from "react"
import { Link } from "react-router-dom"
import fbLogo from "../../assets/Facebook-f_Logo-Blue-Logo.wine.png"
import NavbarSearchResult from "./NavbarSearchResult/NavbarSearchResult"

const NavbarStart = ({ setMenuFor }) => {
	const [searchModalOpen, setSearchModalOpen] = useState(false)

	return (
		<div
			onClick={() => setMenuFor(null)}
			className={`px-4 py-2  ${
				searchModalOpen && "h-[50vh]  bg-white  shadow-xl rounded-lg "
			}`}
		>
			<div className="flex ">
				{searchModalOpen ? (
					<span className="w-[40px] h-[40px] text-gray-600 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 28 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
					</span>
				) : (
					<Link to="/">
						<img
							src={fbLogo}
							className="w-[40px] h-[40px]"
							alt=""
						/>
					</Link>
				)}
				<div>
					<form className="relative flex items-center">
						{!searchModalOpen && (
							<p className="absolute text-gray-400 left-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 28 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</p>
						)}
						<input
							type="text"
							onFocus={() => setSearchModalOpen(true)}
							onBlur={() => setSearchModalOpen(false)}
							className={`bg-[#f0f2f5] h-[40px] w-[240px] rounded-full ml-2 pl-4 focus:outline-none ${
								searchModalOpen ? "" : "pl-8"
							}`}
							placeholder="Search facebook"
						/>
					</form>
				</div>
			</div>
			{searchModalOpen && (
				<div>
					<NavbarSearchResult />
					<NavbarSearchResult />
					<NavbarSearchResult />
					<NavbarSearchResult />
				</div>
			)}
		</div>
	)
}

export default NavbarStart
