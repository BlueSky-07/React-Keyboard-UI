/**
 
 +-----------+-----------+
 |           |           |
 |     C     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ie    |
 |           |     ua    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LETTER,
      description: 'C: ie, ua',
      content: {leftTop: 'C', rightBottom: ['ie', 'ua']},
      actions: {
        self: C
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
