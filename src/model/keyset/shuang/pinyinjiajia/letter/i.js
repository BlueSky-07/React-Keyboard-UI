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
 |    sh     |     i     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class I extends Key {
  constructor() {
    super({
      name: 'I',
      type: KeyType.LETTER,
      description: 'I: sh, i',
      content: {leftTop: 'I', rightBottom: 'i', leftBottom: 'sh'},
      actions: {
        self: I
      },
      style: {widthRatio: 1}
    })
  }
}

export default I
