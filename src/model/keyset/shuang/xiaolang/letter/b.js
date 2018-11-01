/**
 
 +-----------+-----------+
 |           |           |
 |     B     |           |
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

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'B: ue, ve',
      content: {leftTop: 'B', rightBottom: ['ue', 've']},
      actions: {
        self: B
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
