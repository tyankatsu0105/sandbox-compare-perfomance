import * as fs from "fs";
import { prompt } from "enquirer";
import shell from "shelljs";

const choices = fs.readdirSync('./packages')

prompt<{directory: string}>({
  name: 'directory',
  type: 'select',
  message: '検証したいdirectoryを選択してください。（対象directoryのindex.tsが呼ばれます）',
  choices
}).then((answer) => {
  console.log();
  console.log();
  shell.exec(`yarn --silent ts-node packages/${answer.directory}/index.ts`)
  console.log();
});