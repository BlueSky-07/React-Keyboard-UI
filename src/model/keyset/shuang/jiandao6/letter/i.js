/**
 
 +-----------+-----------+
 |           |           |
 |     I     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class I extends Key {
  constructor() {
    super({
      name: 'I',
      type: KeyType.LETTER,
      description: 'I',
      content: {leftTop: 'I'},
      actions: {
        self: I
      },
      style: {widthRatio: 1}
    })
  }
}

export default I
