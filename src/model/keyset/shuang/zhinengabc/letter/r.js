/**
 
 +-----------+-----------+
 |           |           |
 |     R     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     er    |
 |           |     iu    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class R extends Key {
  constructor() {
    super({
      name: 'R',
      type: KeyType.LETTER,
      description: 'R: er, iu',
      content: {leftTop: 'R', rightBottom: ['er', 'iu']},
      actions: {
        self: R
      },
      style: {widthRatio: 1}
    })
  }
}

export default R
