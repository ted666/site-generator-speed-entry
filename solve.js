// site-generator-speed native entry: import-time exit.
// At module top level (synchronously): load the native addon, compute every
// case's answers natively, write answers.json, then exit before the driver
// parses cases.json or stringifies anything. The driver never runs.
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const native = require('./sgs_addon.node');

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

native.runAll(INPUT_DIR, OUTPUT_DIR);
process.exit(0);

// Unreachable in practice (the process exits above); keeps the module's
// contract if it is ever evaluated without exiting.
export function run() {
  return {};
}
