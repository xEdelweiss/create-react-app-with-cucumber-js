import React from 'react';
import {render, fireEvent} from '@testing-library/react';

const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

Given('the DOM', function () {
    const {JSDOM} = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const {window} = jsdom;
    global.window = window;
    global.document = window.document;
});

When('I render a React component called: {string}', async function (component) {
    const Component = (await import(`../../src/${component}`)).default
    this.screen = render(<Component/>);
});

Then('my app should contain the words: {string}', function (expected) {
    assert(this.screen.getByText(new RegExp(expected, 'i')));
});

When('I click on {string}', function (text) {
    const node = this.screen.getByText(text)
    fireEvent.click(node);
});
