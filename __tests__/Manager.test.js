const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('gets office number for manager', () => {
    const manager = new Manager('Matt', 45, 'matthabbo45@gmail.com', 8);
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets manager role', () => {
    const manager = new Manager('Matt', 45, 'matthabbo45@gmail.com', 8);
    expect(manager.getRole()).toEqual("Manager");
})