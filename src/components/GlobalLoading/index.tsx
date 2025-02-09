import React, {useImperativeHandle, useState} from 'react';
import {Modal, StatusBar, View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

export const globalLoadingRef = React.createRef<any>();

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show();
  },
  hide: () => {
    globalLoadingRef?.current?.hide();
  },
};

const GlobalLoading = React.forwardRef((_props, ref) => {
  const [visible, setVisible] = useState<boolean>(true);

  useImperativeHandle(ref, () => {
    return {show: show, hide: hide};
  });

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType={'none'} transparent>
      <StatusBar
        backgroundColor={'rgba(0,0,0,0.6)'}
        barStyle={'light-content'}
      />
      <View style={styles.main}>
        <ActivityIndicator color="white" size="large" />
      </View>
    </Modal>
  );
});

export default GlobalLoading;
