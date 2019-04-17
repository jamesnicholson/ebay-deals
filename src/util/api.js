import {init} from './DATA'
export function getInitialData () {
    return Promise.all([
      init(),
    ]).then(([items]) => ({
      items
    }))
  }