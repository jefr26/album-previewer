import Track from "./track";

const TrackList = ({ tracks }) => {
	return (
		<ul className="tracks">
			{tracks.map(track => (
				<Track track={track} key={track.id} />
			))}		
		</ul>
	)
}

export default TrackList