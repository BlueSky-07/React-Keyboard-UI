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

class CtrlLeft extends Key {
  constructor() {
    super({
      name: 'CtrlLeft',
      type: KeyType.FUNCTION,
      description: '⎈, to be pressed in conjunction with another key, performs a special operation',
      content: {center: 'Ctrl'},
      actions: {self: CtrlLeft},
      style: {widthRatio: 1.5}
    })
  }
}

export default CtrlLeft
