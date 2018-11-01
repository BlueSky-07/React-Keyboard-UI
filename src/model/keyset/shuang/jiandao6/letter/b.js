/**
 
 +-----------+-----------+
 |           |           |
 |     B     |           |
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

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'B: in, ui',
      content: {leftTop: 'B', rightBottom: ['in', 'ui']},
      actions: {
        self: B
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
