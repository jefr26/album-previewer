import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import AlbumCover from "./albumCover"
import TrackList from "./trackList"


const AlbumDetail = ({ album, setShowAlbum }) => {
	return (
		<>
			<h3 className="go-back" onClick={() => setShowAlbum(null)}>Go back</h3>
			<section className="album-detail">
				<div className="album-cover">
					<AlbumCover image={album.cover_image} title={album.title} />
				</div>
				<div className="track-list">
					<TrackList tracks={album.tracks} />
					<AudioPlayer
						autoPlay
						src="http://example.com/audio.mp3"
						onPlay={e => console.log("onPlay")}
					/>
				</div>
			</section>
		</>
	)
}

export default AlbumDetail
