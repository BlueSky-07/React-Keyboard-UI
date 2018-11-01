/**
 
 +-----------+-----------+
 |           |           |
 |     F     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     en    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class F extends Key {
  constructor() {
    super({
      name: 'F',
      type: KeyType.LETTER,
      description: 'F: en',
      content: {leftTop: 'F', rightBottom: 'en'},
      actions: {
        self:F
      },
      style: {widthRatio: 1}
    })
  }
}

export default F
