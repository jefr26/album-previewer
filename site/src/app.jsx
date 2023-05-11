import {useEffect, useState, useTransition} from 'react'
import Albums from './components/albums'
import AlbumDetail from './components/albumDetail'

const App = () => {
	const [isPending, startTransition] = useTransition()
	const [showAlbum, setShowAlbum] = useState(null)
	const [albumData, setAlbumData] = useState(null)

	const selectAlbum = (albumId) => {
		startTransition(() => {
			let data = albums.find(album => album.id === albumId)
			setShowAlbum(albumId)
			setAlbumData(data)
		})
	}

	return (
		<>
			{!showAlbum && <Albums albums={albums} setShowAlbum={selectAlbum} />}
			{!isPending && showAlbum && <AlbumDetail album={albumData} setShowAlbum={setShowAlbum} />}
		</>
	)
}

export default App
