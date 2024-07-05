import { Validator } from '../validator';

const userName = new Validator();

test.each([
    [
        'test1-name_homework', true
    ],
    [
        'test1_23-name_homework', true
    ],
    [
        '3test-name_homework', false
    ],
    [
        'test123-name_homework', true
    ],
    [
        '_test-name', false
    ],
    [
        '-test-name', false
    ],
    [
        'Аtest-name', false
    ],
    [
        '.test-name', false
    ],
    [
        '=test-name', false
    ],
    [
        'test-name_homework1', false
    ],
    [
        'test-name_homework-', false
    ],
    [
        'test-name_homework_', false
    ],
    [
        'test-name_homeworkА', false
    ],
    [
        'test-name_homework=', false
    ],
    [
        'test-name_homework.', false
    ],
])('Testing name validation', (name, expected) => {
    const result = userName.validateUsername(name);
    expect(result).toBe(expected);
});