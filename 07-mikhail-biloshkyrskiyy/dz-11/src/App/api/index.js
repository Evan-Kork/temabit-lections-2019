import * as R from 'ramda'
import request from 'superagent'

import arrays from 'api/methodArray'

export const fetchMethodArray = async () => {
  return new Promise(resolve => {
    resolve(arrays)
  })
}
