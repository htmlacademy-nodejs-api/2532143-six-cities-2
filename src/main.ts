#!/usr/bin/env node
import { CLIApplication } from './cli/cli-application.js';

const application = new CLIApplication();
application.run(process.argv);
