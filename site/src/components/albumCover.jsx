const AlbumCover = ({ image, title }) => {
	return (
		<img src={`/assets/cover-images/${image}`} alt={title} />
	)
}

export default AlbumCover
