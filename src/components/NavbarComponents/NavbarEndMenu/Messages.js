import React from "react"
import { BsThreeDots } from "react-icons/bs"
import { HiOutlineArrowsExpand } from "react-icons/hi"
import { RiEditLine, RiVideoAddFill } from "react-icons/ri"

const Messages = () => {
	return (
		<div>
			<div className="flex justify-between  mx-2">
				<p className="font-bold text-2xl  my-3">Chats</p>
				<div className="flex items-center">
					<button className="text-gray-600 hover:bg-gray-500/20 p-3 rounded-full">
						<BsThreeDots />
					</button>
					<button className="text-gray-600 hover:bg-gray-500/20 p-3 rounded-full">
						<HiOutlineArrowsExpand />
					</button>
					<button className="text-gray-600 hover:bg-gray-500/20 p-3 rounded-full">
						<RiVideoAddFill />
					</button>
					<button className="text-gray-600 hover:bg-gray-500/20 p-3 rounded-full">
						<RiEditLine />
					</button>
				</div>
			</div>
			<form>
				<span className="px-2 relative grid items-center">
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
					<input
						type="text"
						className="h-[36px] bg-gray-200 focus:outline-none rounded-3xl pl-10"
						name=""
						id=""
					/>
				</span>
			</form>
		</div>
	)
}

export default Messages
