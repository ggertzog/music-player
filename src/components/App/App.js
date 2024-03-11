import React, { useEffect, useState } from 'react';
import '../../blocks/App.css';
import Player from '../Player/Player';
import songs from '../../utils/constants';
import useSound from 'use-sound';

import { CurrentContext } from '../../contexts/CurrentContext';

export default function App() {

  let musicIndex = 3;

  const [currentSong, setCurrentSong] = useState(songs[musicIndex]);

  const nextSong = () => {
    if(musicIndex >= songs.length + 1) {
      setCurrentSong(songs[0])
    }
    stop();
    setIsPlay(false);
    musicIndex += 1;
    setCurrentSong(songs[musicIndex]);
    // play();
  }

  // const loadMusic = (song) => {
  //   setCurrentSong(song);
  // }

  // useEffect(() => {
  //   loadMusic(songs[0]);
  // }, [musicIndex]);

  const [isPlay, setIsPlay] = useState(false);

  const [play, {stop}] = useSound(currentSong.path);

  
  const togglePlay = () => {
    if(isPlay) {
      stop();
      setIsPlay(false);
    } else {
      play();
      setIsPlay(true);
    }
  }

  return (
    <CurrentContext.Provider value={currentSong}>
     <div className='body'>
        <Player
          isPlay={isPlay}
          togglePlay={togglePlay}
          nextSong={nextSong}
        />
      </div>
    </CurrentContext.Provider>
  )
}


// import React, { useEffect, useState } from 'react';
// import '../../blocks/App.css';
// import Player from '../Player/Player';
// import songs from '../../utils/constants';
// import useSound from 'use-sound';

// export default function App() {
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const currentSong = songs[currentSongIndex];
//   const [isPlaying, setIsPlaying] = useState(false);

//   const changeMusic = (direction) => {
//     const newIndex = (currentSongIndex + direction + songs.length) % songs.length;
//     setCurrentSongIndex(newIndex);
//   };

//   const loadMusic = (song) => {
//     if (!song) {
//       return;
//     }
//     setCurrentSongIndex(songs.indexOf(song));
//   };

//   useEffect(() => {
//     loadMusic(songs[currentSongIndex]);
//   }, []);

//   // const togglePlay = () => {
//   //   setIsPlaying(prevState => !prevState);
//   // };

//   const [play, { pause }] = useSound(currentSong ? currentSong.path : '', {
//     onError: (error) => {
//       console.error('Error loading sound:', error);
//     }
//   });

//   // useEffect(() => {
//   //   if (isPlaying) {
//   //     play();
//   //   } else {
//   //     pause();
//   //   }
//   // }, [isPlaying, play, pause]);

//   const togglePlay = () => {
//         if(isPlaying) {
//           pause();
//           setIsPlaying(false);
//         } else {
//           play();
//           setIsPlaying(true);
//         }
//       }

//   if (!currentSong) {
//     return null;
//   }

//   return (
//     <div className='body'>
//       <Player
//         image={currentSong.cover}
//         title={currentSong.songTitle}
//         artist={currentSong.artist}
//         isPlay={isPlaying}
//         togglePlay={togglePlay}
//         changeMusic={changeMusic}
//       />
//     </div>
//   );
// }
