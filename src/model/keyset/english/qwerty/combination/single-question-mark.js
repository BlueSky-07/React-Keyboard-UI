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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class QuestionMark extends Key {
  constructor() {
    super({
      name: 'QuestionMark',
      type: KeyType.COMBINATION,
      description: '?',
      content: {leftTop: '?'},
      actions: {
        self: QuestionMark,
        with: {shift: qwerty.Slash},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.QuestionMarkAndSlash
      }
    })
  }
}

export default QuestionMark