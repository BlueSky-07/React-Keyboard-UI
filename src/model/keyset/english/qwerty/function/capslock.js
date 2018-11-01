/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |       CapsLock        |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class CapsLock extends Key {
  constructor() {
    super({
      name: 'CapsLock',
      type: KeyType.FUNCTION,
      description: '⇪, to cause all letters of Latin-based scripts to be generated in capitals, each press reverses its action',
      content: {center: 'CapsLock'},
      actions: {self: CapsLock},
      style: {widthRatio: 1.75}
    })
  }
}

export default CapsLock
