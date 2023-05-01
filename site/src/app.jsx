import { useEffect, useState } from 'react'
import Albums from './components/albums'
import AlbumDetail from './components/albumDetail'

const App = () => {
	const [showAlbum, setShowAlbum] = useState(null)
	const [albumData, setAlbumData] = useState(null)

	useEffect(() => {
		if (showAlbum) {
			let data = albums.filter(album => album.id === showAlbum)
			console.log(showAlbum)
			console.log(data)
			setAlbumData(data)
		}
	}, [showAlbum])

	return (
		<>
			{!showAlbum && <Albums albums={albums} setShowAlbum={setShowAlbum} />}
			{showAlbum && <AlbumDetail album={albumData} />}
		</>
	)
}

export default App
