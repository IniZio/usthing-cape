import skygear from 'skygear'

export const EventRecord = skygear.Record.extend('event')
export const EventCategoryRecord = skygear.Record.extend('event_categories')
export const AttendanceRecord = skygear.Record.extend('attendance')
export const RegistrationRecord = skygear.Record.extend('registration')
export const SpecialAccountRecord = skygear.Record.extend('special_accounts')
export const UserRecord = skygear.UserRecord

// Core record operations
export const writeRecords = records => {
  return new Promise((resolve, reject) => {
    skygear.publicDB.save(Array.isArray(records) ? records : [records])
      .then(
        (result = {}) => {
          resolve((!result.overallCount && result[0]) ? Array.from(result) : result)
        },
        error => {
          console.error(error)
          reject(error)
        })
  })
}

export const readQuery = query => {
  return new Promise((resolve, reject) => {
    skygear.publicDB.query(query)
      .then(
        (result = {}) => resolve((!result.overallCount && result[0]) ? Array.from(result) : result),
        error => {
          console.error(error)
          reject(error)
        })
  })
}

// NOTE: seems skygear delete does not return deleted events on callback
export const deleteRecords = records => {
  return new Promise((resolve, reject) => {
    skygear.publicDB.delete(Array.isArray(records) ? records : [records])
      .then(
        (result = {}) => resolve((!result.overallCount && result[0]) ? Array.from(result) : result),
        error => {
          console.error(error)
          reject(error)
        })
  })
}
