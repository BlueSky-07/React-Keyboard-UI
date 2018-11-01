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
 |           |           |
 |    zh     |     ui    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: zh, ui',
      content: {leftTop: 'V', rightBottom: 'ui', leftBottom: 'zh'},
      actions: {
        self: V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
