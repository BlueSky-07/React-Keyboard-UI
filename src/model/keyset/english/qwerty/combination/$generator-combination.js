const fs = require('fs')

const schemename = 'qwerty'
const template = {
  combination: `/**
 
 +-----------+-----------+
 |           |           |
 |     $LEFTTOPSYMBOL$     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     $LEFTBOTTOMSYMBOL$     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import $SCHEMENAME$ from '../$SCHEMENAME$'

class $LEFTTOPCLASSNAME$And$LEFTBOTTOMCLASSNAME$ extends Key {
  constructor() {
    super({
      name: '$LEFTTOPCLASSNAME$&$LEFTBOTTOMCLASSNAME$',
      type: KeyType.COMBINATION,
      description: '$LEFTTOPSYMBOL$ $LEFTBOTTOMSYMBOL$',
      content: {leftTop: '$LEFTTOPSYMBOL$', leftBottom: '$LEFTBOTTOMSYMBOL$'},
      actions: {
        self: $SCHEMENAME$.$LEFTBOTTOMCLASSNAME$,
        with: {shift: $SCHEMENAME$.$LEFTTOPCLASSNAME$},
      },
      style: {widthRatio: 1},
      combination: {
        set: [$SCHEMENAME$.$LEFTBOTTOMCLASSNAME$, $SCHEMENAME$.$LEFTTOPCLASSNAME$]
      }
    })
  }
}

export default $LEFTTOPCLASSNAME$And$LEFTBOTTOMCLASSNAME$`,
  leftTop: `/**
 
 +-----------+-----------+
 |           |           |
 |     $LEFTTOPSYMBOL$     |           |
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
import $SCHEMENAME$ from '../$SCHEMENAME$'

class $LEFTTOPCLASSNAME$ extends Key {
  constructor() {
    super({
      name: '$LEFTTOPCLASSNAME$',
      type: KeyType.COMBINATION,
      description: '$LEFTTOPSYMBOL$',
      content: {leftTop: '$LEFTTOPSYMBOL$'},
      actions: {
        self: $LEFTTOPCLASSNAME$,
        with: {shift: $SCHEMENAME$.$LEFTBOTTOMCLASSNAME$},
      },
      style: {widthRatio: 1},
      combination: {
        from: $SCHEMENAME$.$LEFTTOPCLASSNAME$And$LEFTBOTTOMCLASSNAME$
      }
    })
  }
}

export default $LEFTTOPCLASSNAME$`,
  leftBottom: `/**
 
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
 |     $LEFTBOTTOMSYMBOL$     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import $SCHEMENAME$ from '../$SCHEMENAME$'

class $LEFTBOTTOMCLASSNAME$ extends Key {
  constructor() {
    super({
      name: '$LEFTBOTTOMCLASSNAME$',
      type: KeyType.COMBINATION,
      description: '$LEFTBOTTOMSYMBOL$',
      content: {leftBottom: '$LEFTBOTTOMSYMBOL$'},
      actions: {
        self: $LEFTBOTTOMCLASSNAME$,
        with: {shift: $SCHEMENAME$.$LEFTTOPCLASSNAME$}
      },
      style: {widthRatio: 1},
      combination: {
        from: $SCHEMENAME$.$LEFTTOPCLASSNAME$And$LEFTBOTTOMCLASSNAME$
      }
    })
  }
}

export default $LEFTBOTTOMCLASSNAME$`
}

const list = [
  [
    ['tilde', '~'],
    ['backquote', '`']
  ], [
    ['exclamation mark', '!'],
    ['digit one', '1']
  ], [
    ['at sign', '@'],
    ['digit two', '2']
  ], [
    ['number sign', '#'],
    ['digit three', '3']
  ], [
    ['dollar sign', '$'],
    ['digit four', '4']
  ], [
    ['percent', '%'],
    ['digit five', '5']
  ], [
    ['caret', '^'],
    ['digit six', '6']
  ], [
    ['ampersand', '&'],
    ['digit seven', '7']
  ], [
    ['asterisk', '*'],
    ['digit eight', '8']
  ], [
    ['open round bracket', '('],
    ['digit nine', '9']
  ], [
    ['close round bracket', ')'],
    ['digit zero', '0']
  ], [
    ['understrike', '_'],
    ['minus', '-']
  ], [
    ['plus', '+'],
    ['equals sign', '=']
  ], [
    ['open curly bracket', '{'],
    ['open square bracket', '[']
  ], [
    ['close curly bracket', '}'],
    ['close square bracket', ']']
  ], [
    ['vertical bar', '|'],
    ['backslash', '\\']
  ], [
    ['colon', ':'],
    ['semicolon', ';']
  ], [
    ['quote', '"'],
    ['single quote', '\'']
  ], [
    ['open pointy bracket', '<'],
    ['comma', ',']
  ], [
    ['close pointy bracket', '>'],
    ['period', ',']
  ], [
    ['question mark', '?'],
    ['slash', '/']
  ]
]


const imports = []
const exports_ = []

list.forEach(combination => {
  const leftTopName = combination[0][0]
  const leftTopClassName = leftTopName.split(' ').map(c => c.slice(0, 1).toUpperCase() + c.slice(1)).join('')
  const leftTopSymbol = combination[0][1]
  const leftTopFilename = leftTopName.replace(/ /g, '-')
  
  const leftBottomName = combination[1][0]
  const leftBottomClassName = leftBottomName.split(' ').map(c => c.slice(0, 1).toUpperCase() + c.slice(1)).join('')
  const leftBottomSymbol = combination[1][1]
  const leftBottomFilename = leftBottomName.replace(/ /g, '-')
  
  const classes = []
  classes.push(leftTopClassName + 'And' + leftBottomClassName)
  classes.push(leftTopClassName)
  classes.push(leftBottomClassName)
  exports_.push(classes.join(', '))
  
  fs.writeFile(
      `combination-${leftTopFilename}-${leftBottomFilename}.js`,
      template.combination
          .replace(/\$LEFTBOTTOMCLASSNAME\$/g, leftBottomClassName)
          .replace(/\$LEFTTOPCLASSNAME\$/g, leftTopClassName)
          .replace(/\$LEFTTOPSYMBOL\$/g, leftTopSymbol)
          .replace(/\$LEFTBOTTOMSYMBOL\$/g, leftBottomSymbol)
          .replace(/\$SCHEMENAME\$/g, schemename)
          .replace(/\\/g, '\\\\')
          .replace(/'''/g, '\'\\\'\'')
      ,
      e => {
        console.log(`combination-${leftTopFilename}-${leftBottomFilename}.js`, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
  imports.push(
      'import ' +
      leftTopClassName + 'And' + leftBottomClassName +
      ' from \'./combination/' +
      `combination-${leftTopFilename}-${leftBottomFilename}` +
      '\''
  )
  fs.writeFile(
      `single-${leftTopFilename}.js`,
      template.leftTop
          .replace(/\$LEFTBOTTOMCLASSNAME\$/g, leftBottomClassName)
          .replace(/\$LEFTTOPCLASSNAME\$/g, leftTopClassName)
          .replace(/\$LEFTTOPSYMBOL\$/g, leftTopSymbol)
          .replace(/\$LEFTBOTTOMSYMBOL\$/g, leftBottomSymbol)
          .replace(/\$SCHEMENAME\$/g, schemename)
          .replace(/\\/g, '\\\\')
          .replace(/'''/g, '\'\\\'\'')
      ,
      e => {
        console.log(`single-${leftTopFilename}.js`, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
  imports.push(
      'import ' +
      leftTopClassName +
      ' from \'./combination/' +
      `single-${leftTopFilename}` +
      '\''
  )
  fs.writeFile(
      `single-${leftBottomFilename}.js`,
      template.leftBottom
          .replace(/\$LEFTBOTTOMCLASSNAME\$/g, leftBottomClassName)
          .replace(/\$LEFTTOPCLASSNAME\$/g, leftTopClassName)
          .replace(/\$LEFTTOPSYMBOL\$/g, leftTopSymbol)
          .replace(/\$LEFTBOTTOMSYMBOL\$/g, leftBottomSymbol)
          .replace(/\$SCHEMENAME\$/g, schemename)
          .replace(/\\/g, '\\\\')
          .replace(/'''/g, '\'\\\'\'')
      ,
      e => {
        console.log(`single-${leftBottomFilename}.js`, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
  imports.push(
      'import ' +
      leftBottomClassName +
      ' from \'./combination/' +
      `single-${leftBottomFilename}` +
      '\''
  )
})

fs.writeFile(
    '$imports.txt',
    imports.join('\n'),
    e => {
      console.log(`$imports.txt`, 'generated', (e ? 'un' : '') + 'successfully')
    }
)

fs.writeFile(
    '$exports.txt',
    exports_.join(',\n'),
    e => {
      console.log(`$exports.txt`, 'generated', (e ? 'un' : '') + 'successfully')
    }
)