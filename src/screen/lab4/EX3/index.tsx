import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import TrackPlayer, {
  Capability,
  State as PlayBackState,
} from 'react-native-track-player';

const PlaylistScreen = () => {
  useEffect(() => {
    setupPlayer();
    setupEventListeners();
  }, []);

  
  const setupEventListeners=()=> {
    TrackPlayer.addEventListener('playback-state', (state) => {
        if (state === TrackPlayer.STATE_PAUSED) {
          // Xử lý khi phát nhạc tạm dừng
          console.log('Phát nhạc đã tạm dừng');
        }
      });
     }

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add([
      {
        id: '1',
        url: 'https://example.com/song1.mp3',
        title: 'Song 1',
        artist: 'Artist 1',
      },
      {
        id: '2',
        url: 'https://example.com/song2.mp3',
        title: 'Song 2',
        artist: 'Artist 2',
      },
      {
        id: '3',
        url: 'https://example.com/song3.mp3',
        title: 'Song 3',
        artist: 'Artist 3',
      },
      {
        id: '4',
        url: 'https://example.com/song4.mp3',
        title: 'Song 4',
        artist: 'Artist 4',
      },
      {
        id: '5',
        url: 'https://example.com/song5.mp3',
        title: 'Song 5',
        artist: 'Artist 5',
      },
    ]);
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
  };

 
  const onTogglePlayTrack = async () => {
    const playbackState = await TrackPlayer.getState();
    if (playbackState === PlayBackState.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const onStop = async () => {
    await TrackPlayer.stop();
  };

  const onSeekTo = (toTime: number) => {
     TrackPlayer.seekTo(toTime);
  };

  const onSkipToNext = (initialPosition?: number) => {
     TrackPlayer.skipToNext(initialPosition);
  };

  const onSkipToPrevious = (initialPosition?: number)=> {
    TrackPlayer.skipToPrevious(initialPosition);
  };

  return (
    <View>
      <Button title="Play/Pause" onPress={onTogglePlayTrack} />
      <Button title="Stop" onPress={onStop} />
    </View>
  );
};


export default PlaylistScreen;