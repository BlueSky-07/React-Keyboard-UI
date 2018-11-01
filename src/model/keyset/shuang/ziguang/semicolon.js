/**
 
 +-----------+-----------+
 |           |           |
 |     ;     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    ing    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../Key'

class Semicolon extends Key {
  constructor() {
    super({
      name: 'Semicolon',
      type: KeyType.LETTER,
      description: ';: ing',
      content: {leftTop: ';', rightBottom: 'ing'},
      actions: {
        self: Semicolon
      },
      style: {widthRatio: 1}
    })
  }
}

export default Semicolon
