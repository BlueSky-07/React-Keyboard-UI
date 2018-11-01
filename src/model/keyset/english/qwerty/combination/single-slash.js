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
 |     /     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Slash extends Key {
  constructor() {
    super({
      name: 'Slash',
      type: KeyType.COMBINATION,
      description: '/',
      content: {leftBottom: '/'},
      actions: {
        self: Slash,
        with: {shift: qwerty.QuestionMark}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.QuestionMarkAndSlash
      }
    })
  }
}

export default Slash