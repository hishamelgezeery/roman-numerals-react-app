import * as RomanNumeralsApi from '../../Utils/RomanNumerals'

describe('roman numerals api functions', () => {    
  //fromRoman function test
  test('should throw an error when input is not a valid Roman Numerals string', () => {
    expect(() => RomanNumeralsApi.fromRoman('2323')).toThrowError(TypeError('Input must be a valid Roman Numeral!'))
  })
  test('should throw an error when input is valid Roman Numerals string but not in 1-3999 range', () => {
    expect(() => RomanNumeralsApi.fromRoman('MMMM')).toThrowError(TypeError('Input must be a valid Roman Numeral!'))
    expect(() => RomanNumeralsApi.fromRoman('')).toThrowError(TypeError('Input must be a valid Roman Numeral!'))
  })
  test('should return a valid decimal representation for a valid roman numerals number', () => {
    const fromRomanSpy = jest.spyOn(RomanNumeralsApi, 'fromRoman')
    RomanNumeralsApi.fromRoman('MMMCMXCIX')
    expect(fromRomanSpy).toHaveReturnedWith(3999)
  })

  //toRoman function test
  test('should throw an error when input is not a valid decimal number', () => {
    expect(() => RomanNumeralsApi.toRoman('')).toThrowError(TypeError('Input must be a number!'))
    expect(() => RomanNumeralsApi.toRoman('ABC')).toThrowError(TypeError('Input must be a number!'))
    expect(() => RomanNumeralsApi.toRoman('123ABC')).toThrowError(TypeError('Input must be a number!'))
    expect(() => RomanNumeralsApi.toRoman({})).toThrowError(TypeError('Input must be a number!'))

  })

  test('should throw an error when input is not a decimal number within 1-3999 range', () => {
    expect(() => RomanNumeralsApi.toRoman('0')).toThrowError(TypeError('Input must be a number between 1 and 3999!'))
    expect(() => RomanNumeralsApi.toRoman('4000')).toThrowError(TypeError('Input must be a number between 1 and 3999!'))
  })

  test('should accepts decimal number inputs within 1-3999 range and return correct Roman numeral representation', () => {
    const toRomanSpy = jest.spyOn(RomanNumeralsApi, 'toRoman')
    RomanNumeralsApi.toRoman('1')
    expect(toRomanSpy).toHaveReturnedWith('I')
    RomanNumeralsApi.toRoman('3999')
    expect(toRomanSpy).toHaveReturnedWith('MMMCMXCIX')
    RomanNumeralsApi.toRoman('1234')
    expect(toRomanSpy).toHaveReturnedWith('MCCXXXIV')
  })
})