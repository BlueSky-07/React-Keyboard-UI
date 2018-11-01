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
 |           |    ue v   |
 |    sh     |     ve    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'V: sh, ue, v, ve',
      content: {leftTop: 'V', rightBottom: ['ue', 'v', 've'], leftBottom: 'sh'},
      actions: {
        self: V
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
