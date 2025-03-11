---
id: is-file
sidebar_label: Is File
sidebar_position: 1
---

# isFile

Checks if the given path is a file.

- import the method

```js
import { isFile } from "nodelpers";
```

- params

```js
path: TPath;

TPath: fs.PathLike;
```

- usage

```js
let path = "/path/to/your/file";
isFile(path); // true or false
```
