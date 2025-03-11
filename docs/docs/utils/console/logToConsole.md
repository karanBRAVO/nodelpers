---
id: log-to-console
sidebar_label: Console Log
sidebar_position: 1
---

# logToConsole

Logs a message to the console with a specified log level and optionally saves it to a file.

- import the method

```js
import { logToConsole } from "nodelpers";
```

- params

```js
message: any;
options: ILogOptions;

TLogLevel = "default" | "info" | "warn" | "error";

ILogOptions {
  level: TLogLevel;
  devOnly?: boolean; // Only log in non-production environments
  logPath?: string; // File path to save logs
}
```

- setup

set `NODE_ENV` to either `production` or `development` in .env file.

```text
NODE_ENV=development
```

- usage

```js
logToConsole("Hello World!");
logToConsole("Hello World!", { devOnly: true });
logToConsole("Hello World!", { logPath: "/path/to/logs.txt" });
```
