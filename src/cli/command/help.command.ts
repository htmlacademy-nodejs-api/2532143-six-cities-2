import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public readonly name = '--help';

  public execute(): void {
    console.log(`
Доступные команды:
  --help     — выводит информацию о списке команд
  --version  — выводит версию приложения
  --import   — импортирует данные из TSV-файла
`);
  }
}