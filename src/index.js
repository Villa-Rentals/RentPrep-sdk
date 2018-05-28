'use strict'

import SmartMove from './controllers/smartMove'

export default class RentPrep {
  constructor (args) {
    this.production = args.production
    this.key = args.key
  }

  SmartMove () {
    return new SmartMove({
      production: this.production,
      key: this.key
    })
  }
}
