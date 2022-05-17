import React from "react"
import { NavLink } from "react-router-dom"
import { RiMenu5Fill } from "react-icons/ri"
import { BiMessageAlt } from "react-icons/bi"
import { MdNotifications } from "react-icons/md"
import { BsCaretDownFill } from "react-icons/bs"

const NavbarEnd = () => {
	return (
		<div className="h-full">
			<ul className="flex items-center h-full">
				<NavLink to="/profile" className="flex py-2 px-4 hover:bg-[#e4e6eb] rounded-full">
					<img
						src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-1/273443710_1387869878341188_482088473555734950_n.jpg?stp=c17.0.490.490a_cp0_dst-jpg_s50x50&_nc_cat=104&ccb=1-6&_nc_sid=7206a8&_nc_eui2=AeEsznyKXKnSjm92JU3JjrojAZJjJCNQnPYBkmMkI1Cc9mmRallO2EQ1BPlneHhr6BTasbULQgrDlyy3m2XpfSr9&_nc_ohc=dU3xVp92rJwAX8pl-Ab&_nc_ht=scontent.fdac135-1.fna&oh=00_AT9IxdfdDFwR-wdutMEzqogK0X1CIBtyLn1pnmdyVo9TAQ&oe=6288B5C1"
						alt=""
						className="rounded-full h-[28px] w-[28px]"
					/>
                    <span>Samiul ...</span>
				</NavLink>
				<li className="h-[40px] w-[40px] rounded-full flex items-center justify-center mx-2 bg-[#e4e6eb] hover:bg-[#D8DADF]">
					<button>
						<RiMenu5Fill size={'1.2em'}/>
					</button>
				</li>
				<li className="h-[40px] w-[40px] rounded-full flex items-center justify-center mx-2 bg-[#e4e6eb]  hover:bg-[#D8DADF]">
					<button>
						<BiMessageAlt size={'1.2em'}/>
					</button>
				</li>
				<li className="h-[40px] w-[40px] rounded-full flex items-center justify-center mx-2 bg-[#e4e6eb] hover:bg-[#D8DADF]">
					<button>
						<MdNotifications size={'1.2em'}/>
					</button>
				</li>
				<li className="h-[40px] w-[40px] rounded-full flex items-center justify-center mx-2 bg-[#e4e6eb] hover:bg-[#D8DADF]">
					<button>
						<BsCaretDownFill size={'1.2em'}/>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default NavbarEnd
