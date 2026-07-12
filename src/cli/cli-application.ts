import { Command } from './command/command.interface.js';
import { HelpCommand } from './command/help.command.js';
import { VersionCommand } from './command/version.command.js';
import { ImportCommand } from './command/import.command.js';

export class CLIApplication {
  private commands: Record<string, Command> = {};

  constructor() {
    this.registerCommands();
  }

  private registerCommands(): void {
    this.commands['--help'] = new HelpCommand();
    this.commands['--version'] = new VersionCommand();
    this.commands['--import'] = new ImportCommand();
  }

  public run(args: string[]): void {
    const commandName = args[2] ?? '--help';
    const command = this.commands[commandName];

    if (!command) {
      console.error(`Неизвестная команда: ${commandName}`);
      this.commands['--help'].execute();
      return;
    }

    command.execute(...args.slice(3));
  }
}