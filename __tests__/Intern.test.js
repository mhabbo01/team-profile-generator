const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Intern = require('../lib/Intern');

test('gets intern school', () => {
    const intern = new Intern('Matt', 45, 'matthabbo45@gmail.com', 'Oakland University');
    expect(intern.school).toEqual(expect.any(String));
})

test('return school from input', () => {
    const intern = new Intern('Matt', 45, 'matthabbo45@gmail.com', 'Oakland University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test('gets intern role', () => {
    const intern = new Intern('Matt', 45, 'matthabbo45@gmail.com', 'Oakland University');
    expect(intern.getRole()).toEqual('Intern');
})