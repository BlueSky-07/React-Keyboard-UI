/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     iu    |
 |           |     ou    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: iu, ou',
      content: {leftTop: 'S', rightBottom: ['iu', 'ou']},
      actions: {
        self: S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
