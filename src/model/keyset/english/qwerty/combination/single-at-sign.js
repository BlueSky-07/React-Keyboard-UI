/**
 
 +-----------+-----------+
 |           |           |
 |     @     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class AtSign extends Key {
  constructor() {
    super({
      name: 'AtSign',
      type: KeyType.COMBINATION,
      description: '@',
      content: {leftTop: '@'},
      actions: {
        self: AtSign,
        with: {shift: qwerty.DigitTwo},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AtSignAndDigitTwo
      }
    })
  }
}

export default AtSign