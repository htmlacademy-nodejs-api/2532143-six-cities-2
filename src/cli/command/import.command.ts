import { Command } from './command.interface.js';
import { TSVFileReader } from '../../types/tsv-file-reader.js';
import chalk from 'chalk';


export class ImportCommand implements Command {
  public readonly name = '--import';

  public execute(filePath: string): void {
    if (!filePath) {
      console.error('Укажите путь к TSV-файлу. Пример: --import mocks/mocks.tsv');
      return;
    }

    console.log(chalk.blue(`Импортирую данные из файла: ${filePath}`));
    const tsvFileReader = new TSVFileReader(filePath);
    tsvFileReader.read();
    console.log(tsvFileReader.toObject());
  }
}
