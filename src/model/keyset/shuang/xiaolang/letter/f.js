/**
 
 +-----------+-----------+
 |           |           |
 |     F     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |    ian    |
 |           |     ua    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class F extends Key {
  constructor() {
    super({
      name: 'F',
      type: KeyType.LETTER,
      description: 'F: ian, ua',
      content: {leftTop: 'F', rightBottom: ['ian', 'ua']},
      actions: {
        self: F
      },
      style: {widthRatio: 1}
    })
  }
}

export default F
