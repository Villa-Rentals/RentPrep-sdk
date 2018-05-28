'use strict'

import { assert } from 'chai'
import RentPrep from '../../lib/rentprep-sdk'
import '../../env'

describe('Given an instance of Library', () => {
  let lib

  before(() => {
    lib = new RentPrep({
      production: false,
      key: process.env.API_KEY
    }).SmartMove()
  })

  it('constructor works', () => {
    return lib.create({
      'Product': 'PackageCorePlusEviction',
      'Application': {
        'Applicants': ['bolencki13@gmail.com', 'applicanttwo@test.com'],
        'LeaseTermInMonths': 12,
        'Rent': 800.00,
        'IR': 2,
        'declineForOpenBankruptcies': false,
        'openBankruptcyWindow': 0
      },
      'Customer': {
        'referenceId': '123'
      },
      'Property': {
        'LandlordCity': 'Springfield',
        'LandlordFirstName': 'Homer',
        'LandlordLastName': 'Simpson',
        'LandlordPhoneNumber': '5555555555',
        'LandlordState': 'NY',
        'LandlordStreetAddressLineOne': '123 Fake Street',
        'LandlordZip': '12345',
        'LandlordEmail': 'bolencki13@bolencki13.com',
        'Street': '123 Property Street',
        'City': 'Springfield',
        'State': 'NY',
        'Zip': '12345',
        'PropertyName': '742 Evergreen Terrace',
        'Classification': 'Conventional',
        'IsFcraAgreementAccepted': true
      }
    })
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })
})
