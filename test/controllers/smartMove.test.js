'use strict'

import { assert } from 'chai'
import RentPrep from '../../lib/rentprep-sdk'
import '../../env'

describe('Given an instance of Library', () => {
  let lib
  let applicationId

  before(() => {
    lib = new RentPrep({
      production: false,
      key: process.env.API_KEY
    }).SmartMove()
  })

  it('create a new application', () => {
    return lib.create(
      'PackageCorePlusEviction',
      {
        'Applicants': ['applicant@test.com'],
        'LeaseTermInMonths': 12,
        'Rent': 800.00,
        'IR': 2,
        'declineForOpenBankruptcies': false,
        'openBankruptcyWindow': 0
      },
      {
        'referenceId': '123'
      },
      {
        'LandlordCity': 'Springfield',
        'LandlordFirstName': 'Homer',
        'LandlordLastName': 'Simpson',
        'LandlordPhoneNumber': '5555555555',
        'LandlordState': 'NY',
        'LandlordStreetAddressLineOne': '123 Fake Street',
        'LandlordZip': '12345',
        'LandlordEmail': 'applicant@landlord.com',
        'Street': '123 Property Street',
        'City': 'Springfield',
        'State': 'NY',
        'Zip': '12345',
        'PropertyName': '742 Evergreen Terrace',
        'Classification': 'Conventional'
      }
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('create a new application natively', () => {
    return lib.create(
      'PackageCorePlusEviction',
      {
        'Applicants': ['applicant2@test.com'],
        'LeaseTermInMonths': 12,
        'Rent': 800.00,
        'IR': 2,
        'declineForOpenBankruptcies': false,
        'openBankruptcyWindow': 0
      },
      {
        'referenceId': '123'
      },
      {
        'LandlordCity': 'Springfield',
        'LandlordFirstName': 'Homer',
        'LandlordLastName': 'Simpson',
        'LandlordPhoneNumber': '5555555555',
        'LandlordState': 'NY',
        'LandlordStreetAddressLineOne': '123 Fake Street',
        'LandlordZip': '12345',
        'LandlordEmail': 'applicant@landlord.com',
        'Street': '123 Property Street',
        'City': 'Springfield',
        'State': 'NY',
        'Zip': '12345',
        'PropertyName': '742 Evergreen Terrace',
        'Classification': 'Conventional'
      },
      {
        'firstName': 'Homer',
        'lastName': 'Simpson',
        'cardType': 'mastercard',
        'cardNumber': '5419543578415880',
        'cardSecurity': '554',
        'expireMonth': '09',
        'expireYear': '2022'
      }
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('get all applications', () => {
    return lib.get(
      '123'
    )
      .then(({data}) => {
        applicationId = data[0].ApplicationId
        assert.isArray(data)
      })
  })

  it('add an applicant', () => {
    return lib.addApplicant(
      applicationId,
      '123',
      'applicant3@test.com'
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('get an application', () => {
    return lib.getById(
      applicationId,
      '123'
    )
      .then(({data}) => {
        assert.equal(data.ApplicationId, applicationId)
      })
  })

  it('cancel application', () => {
    return lib.cancelApplication(
      applicationId,
      '1234'
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('delete an applicant', () => {
    return lib.removeApplicant(
      applicationId,
      '123',
      'applicant@test.com'
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('get report url', () => {
    return lib.getReportURL(
      applicationId,
      '123'
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })

  it('get report status', () => {
    return lib.getReportStatus(
      applicationId,
      '123'
    )
      .then(({data}) => {
        assert.isNotNull(data)
      })
  })
})
