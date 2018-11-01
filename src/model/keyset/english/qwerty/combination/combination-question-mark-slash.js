/**
 
 +-----------+-----------+
 |           |           |
 |     ?     |           |
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

class QuestionMarkAndSlash extends Key {
  constructor() {
    super({
      name: 'QuestionMark&Slash',
      type: KeyType.COMBINATION,
      description: '? /',
      content: {leftTop: '?', leftBottom: '/'},
      actions: {
        self: qwerty.Slash,
        with: {shift: qwerty.QuestionMark},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Slash, qwerty.QuestionMark]
      }
    })
  }
}

export default QuestionMarkAndSlash