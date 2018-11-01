/**
 
 +-----------+-----------+
 |           |           |
 |     W     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ia    |
 |           |     ua    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: ia, ua',
      content: {leftTop: 'W', rightBottom: ['ia', 'ua']},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
