import { useState } from "react"
import Albums from "./components/albums"

const App = () => {
	const [showAlbum, setShowAlbum] = useState(false)

	return (
		<>
			{!showAlbum && <Albums albums={albums} setShowAlbum={setShowAlbum} />}
		</>
	)
}

export default App
