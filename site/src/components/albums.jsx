import SingleAlbum from "./singleAlbum"

const Albums = ({ albums, setShowAlbum }) => {
	return (
		<section className="albums">
			{albums.map((album, index) => (
				<SingleAlbum album={album} setShowAlbum={setShowAlbum} key={index} />
			))}
		</section>
	)
}

export default Albums
