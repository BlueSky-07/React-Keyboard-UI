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
 |           |     ui    |
 |    sh     |     v     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: sh, ui, v',
      content: {leftTop: 'V', rightBottom: ['ui', 'v'], leftBottom: 'sh'},
      actions: {
        self: V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
