// Write your test here

const { repeatedWord } = require('./challenge02.js');

describe('Testing challenge 02: Repeated Word', () => {
    it('It should return the first repeated word in a string', () => {
        expect(repeatedWord('ASAC is a department at LTUC , it teaches programming in LTUC .')).toStrictEqual('LTUC');
        expect(repeatedWord('ASAC is a department at LTUC. ASAC teaches programming in LTUC.')).toStrictEqual('ASAC');
        expect(repeatedWord('shaima asbtyvuyvbhvh hvbhudsvbhd shaima')).toStrictEqual('shaima');

    });

    it('It should return "No repeated words" if no words are repeated', () => {
        expect(repeatedWord("")).toStrictEqual("No repeated words");
        expect(repeatedWord("ASAC")).toStrictEqual("No repeated words");
        expect(repeatedWord("I am learning programming at ASAC")).toStrictEqual("No repeated words");
    });
})
