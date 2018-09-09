[![npm version](https://badge.fury.io/js/chat-arg-parser.svg)](https://badge.fury.io/js/chat-arg-parser)
[![StyleCI](https://github.styleci.io/repos/148063326/shield?branch=master)](https://github.styleci.io/repos/148063326)

## cmd-arg-parser

Parses commands with a specified prefix, delimited by spaces, with support for double & single quotations, and no need for escaping.

## Installation

Using npm:

```
$ npm install cmd-arg-parser
```

## How to use

```javascript
const parseCommandInput = require('cmd-arg-parser');

// command_input would be set by an event where a user sends a command,
// for example, this could be a Discord server chat message

var command_input = '!jail';
parseCommandInput('!', command_input);
// ['jail', []]

var command_input = '!jail "name with spaces" 10s';
parseCommandInput('!', command_input);
// ['jail', ['name with spaces', '10s']]

var command_input = "!jail 'name with spaces' 10s";
parseCommandInput('!', command_input);
// ['jail', ['name with spaces', '10s']]

var command_input = '!jail "name with "quotation" 10s';
parseCommandInput('!', command_input);
// ['jail', ['name with "quotation', '10s']]

var command_input = 'not a command';
parseCommandInput('!', command_input);
// false
```
