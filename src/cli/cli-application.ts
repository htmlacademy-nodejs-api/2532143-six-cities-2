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
    this.commands[new HelpCommand().getName()] = new HelpCommand();
    this.commands[new VersionCommand().getName()] = new VersionCommand();
    this.commands[new ImportCommand().getName()] = new ImportCommand();
  }

  public async run(args: string[]): Promise<void> {
    const commandName = args[2] ?? new HelpCommand().getName();
    const command = this.commands[commandName];

    if (!command) {
      console.error(`Неизвестная команда: ${commandName}`);
      this.commands[new HelpCommand().getName()].execute();
      return;
    }

    command.execute(...args.slice(3));
  }
}
