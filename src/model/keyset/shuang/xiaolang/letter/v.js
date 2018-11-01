/**
 
 +-----------+-----------+
 |           |           |
 |     V     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |    ing    |
 |    sh     |    uai    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: sh, ing, uai',
      content: {leftTop: 'V', rightBottom: ['ing', 'uai'], leftBottom: 'sh'},
      actions: {
        self: V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
