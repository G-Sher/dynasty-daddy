"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropMessagesTable = exports.insertMessages = exports.createMessageTable = void 0;
var createMessageTable = "\nDROP TABLE IF EXISTS messages;\nCREATE TABLE IF NOT EXISTS messages (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR DEFAULT '',\n  message VARCHAR NOT NULL\n  )\n  ";
exports.createMessageTable = createMessageTable;
var insertMessages = "\nINSERT INTO messages(name, message)\nVALUES ('chidimo', 'first message'),\n      ('orji', 'second message')\n";
exports.insertMessages = insertMessages;
var dropMessagesTable = 'DROP TABLE messages';
exports.dropMessagesTable = dropMessagesTable;