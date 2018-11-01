/**
 
 +-----------+-----------+
 |           |           |
 |     K     e     y     |
 |           |           |
 +-----------+-----------+
 |                       |
 |     B  o  a  r  d     |
 |                       |
 +-----------+-----------+
 |           |           |
 |     j     |     s     |
 |           |           |
 +-----------+-----------+
 
 */

class Key {
  constructor(
      {
        name = 'unset', // name of key
        type = 'unset', // KeyType
        description = '', // comment
        content = {
          leftTop: [],
          leftBottom: [],
          center: [],
          centerCorner: [],
          rightTop: [],
          rightBottom: []
        },
        actions = { // when pressed, value must be Key or null
          self: null, // just itself, Key or null
          with: { // pressed with
            shift: null, // Key or null
            alt: null, // Key or null
            ctrl: null // Key or null
            // etc.
          },
          after: { // pressed after
            shift: null, // Key or null
            alt: null, // Key or null
            ctrl: null // Key or null
            // etc.
          }
        },
        style = {
          widthRatio: 1, // ?x width of standard key (the most key of same size, set as width = height)
          multiLines: [ // fill in if the key is not standard shape
              // widthScale of the top line
              // widthScale of the second line
              // etc.
          ]
        },
        combination = { // if it consists of more than one Key
          from: null, // Key or null
          set: [
              // the first Key
              // the second Key
              // etc.
          ]
        }
      }
  ) {
    this.name = name
    this.type = type
    this.description = description
    this.content = content
    this.actions = actions
    this.style = style
    this.combination = combination
  }
}

const KeyType = {
  'LETTER': 1,
  'FUNCTION': 2,
  'COMBINATION': 3
}

export default Key
export {Key, KeyType}