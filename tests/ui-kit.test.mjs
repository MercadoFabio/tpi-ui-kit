import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  buttonClass,
  cardClass,
  fieldClass,
  statusClass,
} from '../src/index.js';

test('exports stable presentation classes for the login form', () => {
  assert.match(buttonClass('primary'), /bg-brand-600/);
  assert.match(fieldClass, /focus:ring-brand-500/);
});

test('exports safe display variants for users and products', () => {
  assert.match(cardClass, /rounded-xl/);
  assert.equal(statusClass('active'), 'bg-emerald-100 text-emerald-800');
  assert.equal(statusClass('unknown'), 'bg-slate-100 text-slate-700');
});

test('registers shared utility class sources for Tailwind compilation', async () => {
  const stylesheet = await readFile(
    new URL('../src/styles.css', import.meta.url),
    'utf8',
  );

  assert.match(stylesheet, /@source\s+["']\.\/index\.js["'];/);
});
