/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |         Ctrl          |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class CtrlRight extends Key {
  constructor() {
    super({
      name: 'CtrlRight',
      type: KeyType.FUNCTION,
      description: '⎈, to be pressed in conjunction with another key, performs a special operation',
      content: {center: 'Ctrl'},
      actions: {self: CtrlRight},
      style: {widthRatio: 1.5}
    })
  }
}

export default CtrlRight
