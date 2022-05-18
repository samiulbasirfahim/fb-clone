import { useState } from "react"
import Navbar from "./shared/Navbar"

const App = () => {
	const [menuFor, setMenuFor] = useState(null)
	return (
		<div className="bg-[#F0F2F5]">
			<Navbar menuFor={menuFor} setMenuFor={setMenuFor} />
			<div
				onClick={() => setMenuFor(null)}
				className="min-h-screen"
			></div>
		</div>
	)
}

export default App
