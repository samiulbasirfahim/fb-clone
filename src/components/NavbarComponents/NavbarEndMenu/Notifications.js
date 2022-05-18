import { BsThreeDots } from "react-icons/bs"
import React from "react"

const Notifications = () => {
	return (
		<div>
			<div className="flex justify-between items-center mx-2">
				<span className="font-bold text-2xl  my-3">Notifications</span>
				<button className="text-gray-600 hover:bg-gray-500/20 p-3 rounded-full">
					<BsThreeDots />
				</button>
			</div>
		</div>
	)
}

export default Notifications
