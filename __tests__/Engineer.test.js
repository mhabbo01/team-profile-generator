const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets github username from engineer', () => {
    const engineer = new Engineer('Matt', 45, 'matthabbo45@gmail.com', 'mhabbo01');
    expect(engineer.github).toEqual(expect.any(String))
})

test('gets github url', () => {
    const engineer = new Engineer('Matt', 45, 'matthabbo45@gmail.com', 'mhabbo01');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('gets engineer role', () => {
    const engineer = new Engineer('Matt', 45, 'matthabbo45@gmail.com', 'mhabbo01');
    expect(engineer.getRole()).toEqual('Engineer');
})