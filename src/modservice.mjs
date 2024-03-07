import { argv } from 'process';
if (argv.length <= 2) {
  console.log('No extra commands provided. Exiting...');
  process.exit(1);
}