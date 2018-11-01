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
 |    zh     |     ve    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: ui, ve',
      content: {leftTop: 'V', rightBottom: ['ui', 've'], leftBottom: 'zh'},
      actions: {
        self: V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
