---
id: is-directory
sidebar_label: Is Directory
sidebar_position: 1
---

# isDirectory

Checks if the given path is a directory.

- import the method

```js
import { isDirectory } from "nodelpers";
```

- params

```js
path: TPath;

TPath: fs.PathLike;
```

- usage

```js
let path = "/path/to/your/dir";
isDirectory(path); // true or false
```
