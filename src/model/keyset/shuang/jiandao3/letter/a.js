/**
 
 +-----------+-----------+
 |           |           |
 |     A     |           |
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

class A extends Key {
  constructor() {
    super({
      name: 'A',
      type: KeyType.LETTER,
      description: 'A',
      content: {leftTop: 'A'},
      actions: {
        self: A
      },
      style: {widthRatio: 1}
    })
  }
}

export default A
