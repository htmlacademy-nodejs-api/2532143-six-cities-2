import { Command } from './command.interface.js';
import { TSVFileReader } from '../../types/tsv-file-reader.js';
import chalk from 'chalk';


export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }
  public async execute(...parameters: string[]): Promise<void> {
    const filePath = parameters[0] ?? '';
    if (!filePath) {
      console.error('Укажите путь к TSV-файлу. Пример: --import mocks/mocks.tsv');
      throw new Error('Не указан путь к TSV-файлу');
    }

    console.log(chalk.blue(`Импортирую данные из файла: ${filePath}`));
    const tsvFileReader = new TSVFileReader(filePath);
    tsvFileReader.read();
    console.log(tsvFileReader.toObject());
  }
}
