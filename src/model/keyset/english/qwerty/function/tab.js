/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |          Tab          |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Tab extends Key {
  constructor() {
    super({
      name: 'Tab',
      type: KeyType.FUNCTION,
      description: '↹, to advance the cursor to the next tab stop',
      content: {center: 'Tab'},
      actions: {self: Tab},
      style: {widthRatio: 1.5}
    })
  }
}

export default Tab
