import Track from "./track";

const TrackList = ({ tracks, autoPlay, setTrack }) => {
	return (
		<ul className="tracks">
			{tracks.map(track => (
				<Track
					key={track.id}
					track={track}
					setTrack={setTrack}
					autoPlay={autoPlay}
				/>
			))}		
		</ul>
	)
}

export default TrackList