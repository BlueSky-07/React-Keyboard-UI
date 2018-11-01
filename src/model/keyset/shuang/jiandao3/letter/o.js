/**
 
 +-----------+-----------+
 |           |           |
 |     O     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class O extends Key {
  constructor() {
    super({
      name: 'O',
      type: KeyType.LETTER,
      description: 'O',
      content: {leftTop: 'O'},
      actions: {
        self: O
      },
      style: {widthRatio: 1}
    })
  }
}

export default O
