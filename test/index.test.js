'use strict'

import { assert } from 'chai'
import RentPrep from '../lib/rentprep-sdk'
import '../env'

describe('Given an instance of Library', () => {
  let lib

  before(() => {
    lib = new RentPrep({
      production: false,
      key: process.env.API_KEY
    })
  })

  it('constructor works', () => {
    assert.equal(lib.production, false)
  })

  it('returns the SmartMovew object', () => {
    let smartMove = lib.SmartMove()

    assert.equal(smartMove.production, false)
    assert.equal(smartMove.key, process.env.API_KEY)
  })
})
