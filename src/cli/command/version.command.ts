import { readFileSync } from 'node:fs';
import { Command } from './command.interface.js';
import chalk from 'chalk';

export class VersionCommand implements Command {
  public getName(): string {
    return '--version';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    try {
      const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
      console.info(chalk.green(`Версия приложения: ${packageJson.version}`));
    } catch {
      console.error('Не удалось прочитать версию из package.json');
    }
  }
}
