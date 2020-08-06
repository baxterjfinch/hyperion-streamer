import store from 'store';
import { logStart } from 'store/reducers/errorlog';

export const errorLog = (...obj) => {
  if (obj) {
    store.dispatch(logStart());
    console.log([...obj, new Date()]);
  }
}
