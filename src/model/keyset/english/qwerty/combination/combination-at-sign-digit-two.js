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
 |     2     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class AtSignAndDigitTwo extends Key {
  constructor() {
    super({
      name: 'AtSign&DigitTwo',
      type: KeyType.COMBINATION,
      description: '@ 2',
      content: {leftTop: '@', leftBottom: '2'},
      actions: {
        self: qwerty.DigitTwo,
        with: {shift: qwerty.AtSign},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitTwo, qwerty.AtSign]
      }
    })
  }
}

export default AtSignAndDigitTwo