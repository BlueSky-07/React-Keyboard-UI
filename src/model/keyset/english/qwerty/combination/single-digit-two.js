/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
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

class DigitTwo extends Key {
  constructor() {
    super({
      name: 'DigitTwo',
      type: KeyType.COMBINATION,
      description: '2',
      content: {leftBottom: '2'},
      actions: {
        self: DigitTwo,
        with: {shift: qwerty.AtSign}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AtSignAndDigitTwo
      }
    })
  }
}

export default DigitTwo