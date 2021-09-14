import VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map((video) => 
        <VideoItem 
            video={video} 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} 
        />
    );
    return <div className="ui relaxed divided list"> {renderedVideos} </div>;
}

export default VideosList;
