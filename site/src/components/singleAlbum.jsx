import AlbumCover from './albumCover'

const SingleAlbum = ({ album, setShowAlbum }) => {

	return (
		<article className="album" onClick={() => setShowAlbum(album.id)}>
			<AlbumCover image={album.cover_image} title={album.title}/>
			<h2 className="album-artist">{album.title }</h2>
			<h3 className="artist">by {album.artist}</h3>
		</article>
	)
}

export default SingleAlbum
