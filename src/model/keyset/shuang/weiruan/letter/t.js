/**
 
 +-----------+-----------+
 |           |           |
 |     T     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class T extends Key {
  constructor() {
    super({
      name: 'T',
      type: KeyType.LETTER,
      description: 'T: ue',
      content: {leftTop: 'T', rightBottom: 'ue'},
      actions: {
        self: T
      },
      style: {widthRatio: 1}
    })
  }
}

export default T
