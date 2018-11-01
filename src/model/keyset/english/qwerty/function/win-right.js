/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |          Win          |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class WinRight extends Key {
  constructor() {
    super({
      name: '⊞, WinRight',
      type: KeyType.FUNCTION,
      description: 'to invoke the operating system\'s start menu, if it has one',
      content: {center: 'Win'},
      actions: {self: WinRight},
      style: {widthRatio: 1}
    })
  }
}

export default WinRight
