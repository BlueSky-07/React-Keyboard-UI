/**
 
 +-----------+-----------+
 |           |           |
 |     T     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ue    |
 |           |     ve    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class T extends Key {
  constructor() {
    super({
      name: 'T',
      type: KeyType.LETTER,
      description: 'T: ue, ve',
      content: {leftTop: 'T', rightBottom: ['ue', 've']},
      actions: {
        self: T
      },
      style: {widthRatio: 1}
    })
  }
}

export default T
