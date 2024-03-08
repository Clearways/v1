import { argv } from 'process';
import { readFile, writeFile } from 'fs/promises';

if (argv.length <= 2) {
  console.log('No extra commands provided. Exiting... (Use npm/pnpm run modservice help for Assistance)');
  process.exit(1);
} else {
  const command = argv[2];
  const argument = argv[3];
  if (command) {
    if (argument) {
      eval(`${command}('${argument}')`);
    } else {
      eval(`${command}()`);
    }
  } else {
    console.log('Command not recognized.');
  }
}

function help() {
  console.log('-- ModService 1.0 --');
  console.log('*modservice install_rh -- Installs Rammerhead Dependencies');
  console.log('*modservice resetboot -- Reinstalls the Old Boot Manager');
  console.log('*modservice install_nodeunblocker -- Installs NodeUnblocker');
  console.log('*modservice version -- Gets the version');
}

async function resetboot() {
  try {
    const data = await readFile('./src/archive/bootstrap.gitkeep', 'utf8');
    console.log(`✅ Reset Boot has been requested!\n----------------------------\n${data}`);
    await writeFile('./src/index.mjs', data);
    console.log('Data written to index.mjs successfully!');
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
}

async function version() {
  try {
    const packageJson = await readFile('./package.json', 'utf-8');
    const { version } = JSON.parse(packageJson);
    console.log('Version:', version);
  } catch (error) {
    console.error('Error reading package.json:', error);
  }
}
