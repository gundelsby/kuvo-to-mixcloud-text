import { readFileSync, writeFileSync } from 'fs';
import { parse } from './parser/parser.js';

const inputFileName = process.argv[2];

if (!inputFileName) {
	console.log(`usage: node ${process.argv[1]} <filename>`);
	process.exit();
}

const parsed = readFileSync(inputFileName, 'utf16le')
	.split(/\r?\n/)
	.filter((line) => /^\d/.test(line))
	.map(parse)
	.join('\n');

writeFileSync(inputFileName, parsed, 'utf-8');
