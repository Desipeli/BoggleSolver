const { searchWords } = require('../../services/SearchWords')

const g = [
  ['A', 'I', 'T'],
  ['E', 'K', 'O'],
  ['I', 'A', 'Ä'],
]

const d = {
  words: ['AIKA', 'ALKU', 'AITO', 'EIKÄ', 'EKA', 'MAITO'],
  language: 'fi',
}

test('find words and routes', () => {
  const result = searchWords(g, d)
  expect(result[0]).toEqual(['AIKA', '00', '01', '11', '21'])
  expect(result[1]).toEqual(['AIKA', '21', '20', '11', '00'])
  expect(result[5]).toEqual(['EKA', '10', '11', '00'])
})
