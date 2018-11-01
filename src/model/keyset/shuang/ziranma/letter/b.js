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
 |           |           |
 |           |     ou    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'B: ou',
      content: {leftTop: 'B', rightBottom: 'ou'},
      actions: {
        self:B
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
