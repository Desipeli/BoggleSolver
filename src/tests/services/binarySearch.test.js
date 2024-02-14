const { binarySearchDict } = require('../../services/SearchWords')

const dictionaryEven = ['AIKA', 'AITO', 'EIKÄ', 'EKA']
const dictionaryUneven = ['AIKA', 'AITO', 'EIKÄ', 'EKA', 'TOKA']

describe('use dictionary with even number of elements', () => {
  for (let i = 0; i < dictionaryEven.length; i++) {
    test(`Find ${i}:th word, return correct index`, () => {
      const result = binarySearchDict(dictionaryEven[i], dictionaryEven)
      expect(result[0]).toBe(true)
      expect(result[1]).toBe(i)
    })
  }
})

describe('use dictionary with uneven number of elements', () => {
  for (let i = 0; i < dictionaryUneven.length; i++) {
    test(`Find ${i}:th word, return correct index`, () => {
      const result = binarySearchDict(dictionaryUneven[i], dictionaryUneven)
      expect(result[0]).toBe(true)
      expect(result[1]).toBe(i)
    })
  }
})

test('return [false, true] if some word starts with used search string', () => {
  const result = binarySearchDict('AIT', dictionaryUneven)
  expect(result[0]).toBe(false)
  expect(result[1]).toBe(true)
})

test('return [false, false] if none of visited words start with search string', () => {
  const result = binarySearchDict('AIM', dictionaryUneven)
  expect(result[0]).toBe(false)
  expect(result[1]).toBe(false)
})
