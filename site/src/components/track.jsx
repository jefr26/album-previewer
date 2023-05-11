const Track = ({ track, setTrack, autoPlay }) => {
	return (
		<li
			onClick={() => setTrack(`/assets/tracks/${track.file_name}`)}
		>
			{track.title}
		</li>
	)
}

export default Track