"use client";

import * as AC from '@bacons/apple-colors';
import React, { useState } from 'react';
import { Button, Modal, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import VideoPlayer from './VideoPlayer';
import { IconSymbol } from './ui/IconSymbol';
import TouchableBounce from './ui/TouchableBounce';

export default function WatchButton({ style }: { style?: StyleProp<ViewStyle> }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <TouchableBounce onPress={() => setModalVisible(true)}>
        <View style={styles.iconButton}>
          <IconSymbol name="play.fill" size={24} color={AC.label} />
        </View>
      </TouchableBounce>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <VideoPlayer />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  iconButton: {
    backgroundColor: 'black',
    borderRadius: 4,
    padding: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
