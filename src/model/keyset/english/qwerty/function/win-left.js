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

class WinLeft extends Key {
  constructor() {
    super({
      name: '⊞, WinLeft',
      type: KeyType.FUNCTION,
      description: 'to invoke the operating system\'s start menu, if it has one',
      content: {center: 'Win'},
      actions: {self: WinLeft},
      style: {widthRatio: 1}
    })
  }
}

export default WinLeft
