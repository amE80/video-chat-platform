let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingStram: null,
  allowConnectionFromStrangers: false,
  screenSharingActive: false,
};

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
  console.log(state);
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

export const setallowConnectionFromStrangers = (allowConnection) => {
  state = {
    ...state,
    allowConnectionFromStrangers: allowConnection,
  };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

export const setScreenSharingStram = (stream) => {
  state = {
    ...state,
    screenSharingStram: stream,
  };
};

export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream,
  };
};

export const getState = () => {
  return state;
};
