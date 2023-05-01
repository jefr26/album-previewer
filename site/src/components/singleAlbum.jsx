import { useState } from 'react'
import AlbumCover from './albumCover'

const SingleAlbum = ({ album, setShowAlbum }) => {
	const [showTracks, setShowTracks] = useState(false)

	return (
		<article className="album" onClick={() => setShowTracks(!showTracks)}>
			<AlbumCover image={ album.cover_image } title={ album.title }/>
			<h2 className="album-artist">{ album.title }</h2>
			<h3 className="artist">by { album.artist }</h3>
			{showTracks && (
				<ul className="tracks">

				</ul>
			)}
		</article>
	)
}

export default SingleAlbum
