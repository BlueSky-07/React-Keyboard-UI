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
 |           |    uan    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class R extends Key {
  constructor() {
    super({
      name: 'R',
      type: KeyType.LETTER,
      description: 'R: er, uan',
      content: {leftTop: 'R', rightBottom: ['er', 'uan']},
      actions: {
        self: R
      },
      style: {widthRatio: 1}
    })
  }
}

export default R
