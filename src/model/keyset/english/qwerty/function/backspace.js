/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |       Backspace       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Backspace extends Key {
  constructor() {
    super({
      name: 'Backspace',
      type: KeyType.FUNCTION,
      description: '⌫, to move the display cursor one position backwards, delete the character at that position, and shift back the text after that position by one position',
      content: {center: 'Backspace'},
      actions: {self: Backspace},
      style: {
        widthRatio: 2
      }
    })
  }
}

export default Backspace
