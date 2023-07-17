import React from 'react';

// import Poster from '../../assets/image/video/poster-video.webp';

import ReactPlayer from 'react-player/youtube';

import { Container, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// import { AllowedLanguages, translationsContext } from '../../translations';
import { VideoContainer } from './styled';

// const switchVideo = (lang: AllowedLanguages): string => {
//   switch (lang) {
//     case 'en':
//       return 'https://youtu.be/DJeha9Ug2PA';
//     case 'es':
//       return 'https://youtu.be/q8Otoe3SyFU';
//     default:
//       return 'https://youtu.be/42Rcw1fyuCE';
//   }
// };

const Video: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { inView, ref } = useInView({ threshold: 0.5 });

  // const translations = useContext(translationsContext);

  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    if (inView && !isMobile) {
      setVideoPlaying(true);
    } else {
      if (videoPlaying) {
        setVideoPlaying(false);
      }
    }
  }, [inView]);

  React.useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <VideoContainer>
      <Container maxWidth={false} disableGutters={isMobile}>
        <div ref={ref} className="video-wrapper">
          {showVideo ? (
            <ReactPlayer
              className="video"
              width="100%"
              height="auto"
              controls
              url={'https://youtu.be/42Rcw1fyuCE'}
              playing={videoPlaying}
              muted
            />
          ) : null}
        </div>
      </Container>
    </VideoContainer>
  );
};

export default Video;
