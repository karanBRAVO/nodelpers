---
id: open-file
sidebar_label: Open File
sidebar_position: 4
---

# openFile

Opens a file with the specified mode and returns an object to perform read/write operations.

- `read()`: Reads the file content (available in `"r"` mode).
- `write(content)`: Writes content (available in `"w"` mode).
- `write(content)`: Appends content (available in `"a"` mode).
- `close()`: Closes the file.

- import the method

```js
import { openFile } from "nodelpers";
```

- params

```js
mode: TFileMode;
path: TPath;

TFileMode = "r" | "w" | "a";
TPath = fs.PathLike;
```

- usage

```js
// Reading a file
const file = await openFile("r", "example.txt");
const content = await file.read();
console.log(content);
await file.close();

// Writing to a file
const file = await openFile("w", "example.txt");
await file.write("Hello, world!");
await file.close();

// Appending to a file
const file = await openFile("a", "example.txt");
await file.append(" Appended content!");
await file.close();
```
