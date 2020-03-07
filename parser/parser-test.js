import { assert } from '@sinonjs/referee';
import { parse } from './parser.js';

describe('Line parser', () => {
	it('input #1', () => {
		const input = `1		A Little Closer	Seba	Sweet Magnolia EP	Drum & Bass	175.00	***  	05:33	Fm	2019-12-17`;

		const actual = parse(input);

		assert.equals(actual, 'Seba - A Little Closer');
	});

	it('input #1', () => {
		const input = `24		Slow Down (Paul SG Remix)	Camo & Krooked, Robb			174.00	***  	05:34	Bbm	2018-05-29`;

		const actual = parse(input);

		assert.equals(actual, 'Camo & Krooked, Robb - Slow Down (Paul SG Remix)');
	});

	it('input #1', () => {
		const input = `29		Easy Street	Sikey, Speedwagon			175.00	***  	05:15	Gm	2020-01-28`;

		const actual = parse(input);

		assert.equals(actual, 'Sikey, Speedwagon - Easy Street');
	});

	it('input #1', () => {
		const input = `8		Class Of '92 (Conduct Remix) - Ten Eight Seven Mastered	BCee	Thanks for Joining Us	Drum & Bass	174.00	     	05:09	Dm	2016-11-23`;

		const actual = parse(input);

		assert.equals(actual, `BCee - Class Of '92 (Conduct Remix) - Ten Eight Seven Mastered`);
	});
});
