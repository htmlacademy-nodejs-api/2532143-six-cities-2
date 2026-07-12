import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public readonly name = '--help';

  public execute(): void {
    console.log(`
Доступные команды:
  ${chalk.yellow('--help     — выводит информацию о списке команд')}
  ${chalk.green('--version  — выводит версию приложения')}
  ${chalk.blue('--import   — импортирует данные из TSV-файла')}
`);
  }
}
