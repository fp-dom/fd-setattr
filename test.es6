import assert from 'assert';
import elem from 'fd-elem';
import setAttr from './';

let h1 = elem('h1', 'Hello Test');

it('fd-setattr', () => {
 setAttr('hidden', true)(h1);
 assert.equal(h1.hidden, true);
});
