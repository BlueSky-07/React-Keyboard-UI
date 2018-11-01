/**
 
 +-----------+-----------+
 |           |           |
 |     Z     |           |
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

class Z extends Key {
  constructor() {
    super({
      name: 'Z',
      type: KeyType.LETTER,
      description: 'uppercase of z',
      content: {center: 'Z'},
      actions: {
        self: Z,
        with: {shift: qwerty.z},
        after: {capslock: qwerty.z}
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
