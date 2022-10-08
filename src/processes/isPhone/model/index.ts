import { createStore } from 'effector';
import { Dimensions } from 'react-native';

const isPhone = Dimensions.get('window').width < 550;

const $state = createStore<boolean>(isPhone);

export { $state };
