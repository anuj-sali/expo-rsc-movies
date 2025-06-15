"use client";

import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function VideoPlayer() {
  const videoSource = {
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
