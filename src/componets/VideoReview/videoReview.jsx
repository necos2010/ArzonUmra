import React, { useState } from "react";
import Header from "../pages/Header/header";
import Footer from "../pages/Footer/footer";
import "./videoReview.css";
import VideoData from "../Data/VideoData.js";

function VideoReview() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div>
      <Header />
      <div className="video">
        <h2>Video sharxlar</h2>
        <div className="videos">
          {VideoData.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => handleVideoClick(video)}
            >
              <img src={video.thumbnail} alt={video.title} />
              <img
                className="pause-icon"
                src="./src/assets/rv-pause.svg"
                alt="pause"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="video-container">
              <iframe
                src={`${selectedVideo.url}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{selectedVideo.title}</h3>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default VideoReview;
