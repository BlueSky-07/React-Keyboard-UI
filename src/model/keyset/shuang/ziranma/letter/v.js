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
 |    zh     |     v     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: zh, ui, v',
      content: {leftTop: 'V', rightBottom: ['ui', 'v'], leftBottom: 'zh'},
      actions: {
        self:V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
