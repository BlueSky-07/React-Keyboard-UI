/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     in    |
 |           |     ui    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: in, ui',
      content: {leftTop: 'D', rightBottom: ['in', 'ui']},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
