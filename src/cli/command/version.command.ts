import { readFileSync } from 'node:fs';
import { Command } from './command.interface.js';

export class VersionCommand implements Command {
  public readonly name = '--version';

  public execute(): void {
    try {
      const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
      console.log(`Версия приложения: ${packageJson.version}`);
    } catch {
      console.error('Не удалось прочитать версию из package.json');
    }
  }
}
