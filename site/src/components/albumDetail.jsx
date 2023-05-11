import {useEffect, useRef, useState} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import AlbumCover from './albumCover'
import TrackList from './trackList'

const AlbumDetail = ({ album, setShowAlbum }) => {
	const [autoPlay, setAutoPlay] = useState(false)
	const [trakToPlay, setTrackToPlay] = useState('')
	const playerRef = useRef()

	return (
		<>
			<h3 className="go-back" onClick={() => setShowAlbum(null)}>Go back</h3>
			<section className="album-detail">
				<div className="album-cover">
					<AlbumCover image={album.cover_image} title={album.title} />
				</div>
				<div className="track-list">
					<TrackList
						tracks={album.tracks}
						autoPlay={setAutoPlay}
						setTrack={setTrackToPlay}
					/>
					<AudioPlayer
						ref={playerRef}
						autoPlay={autoPlay}
						src={trakToPlay}
						controls={true}
						onPlay={e => console.log("onPlay")}
					/>
				</div>
			</section>
		</>
	)
}

export default AlbumDetail
