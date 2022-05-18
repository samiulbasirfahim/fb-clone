import React from "react"
import { NavLink } from "react-router-dom"
import { AiFillHome, AiOutlineVideoCameraAdd } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { HiUserGroup } from "react-icons/hi"
import { SiFacebookgaming } from "react-icons/si"

const NavbarSecond = ({ setMenuFor}) => {
	return (
		<div onClick={() => setMenuFor(null)}>
			<ul className="flex items-center ">
				<NavLink
					style={({ isActive }) => {
						return isActive
							? {
									borderBottom: "3px solid #1b74e4",
									color: "#1b74e4",
									backgroundColor: "white",
									borderRadius: "0px",
							  }
							: {}
					}}
					className={
						"h-[56px] w-[130px] text-2xl flex items-center justify-center  hover:bg-gray-100/90 hover:rounded-2xl "
					}
					to="/"
				>
					{AiFillHome}
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						return isActive
							? {
									borderBottom: "3px solid #1b74e4",
									color: "#1b74e4",
									backgroundColor: "white",
									borderRadius: "0px",
							  }
							: {}
					}}
					className={
						"h-[56px] w-[130px] text-2xl flex items-center justify-center  hover:bg-gray-100/90 hover:rounded-2xl"
					}
					to="/add-friends"
				>
					{FaUserFriends}
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						return isActive
							? {
									borderBottom: "3px solid #1b74e4",
									color: "#1b74e4",
									backgroundColor: "white",
									borderRadius: "0px",
							  }
							: {}
					}}
					className={
						"h-[56px] w-[130px] text-2xl flex items-center justify-center  hover:bg-gray-100/90 hover:rounded-2xl"
					}
					to="/videos"
				>
					{AiOutlineVideoCameraAdd}
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						return isActive
							? {
									borderBottom: "3px solid #1b74e4",
									color: "#1b74e4",
									backgroundColor: "white",
									borderRadius: "0px",
							  }
							: {}
					}}
					className={
						"h-[56px] w-[130px] text-2xl flex items-center justify-center  hover:bg-gray-100/90 hover:rounded-2xl"
					}
					to="/groups"
				>
					{HiUserGroup}
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						return isActive
							? {
									borderBottom: "3px solid #1b74e4",
									color: "#1b74e4",
									backgroundColor: "white",
									borderRadius: "0px",
							  }
							: {}
					}}
					className={
						"h-[56px] w-[130px] text-2xl flex items-center justify-center  hover:bg-gray-100/90 hover:rounded-2xl"
					}
					to="/games"
				>
					{SiFacebookgaming}
				</NavLink>
			</ul>
		</div>
	)
}

export default NavbarSecond
