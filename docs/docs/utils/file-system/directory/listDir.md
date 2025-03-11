---
id: list-dir
sidebar_label: List Dir
sidebar_position: 4
---

# listDir

Lists the contents of a directory.

- import the method

```js
import { listDir } from "nodelpers";
```

- params

```js
path: string;
options: TListDirOptions;

TListDirOptions = { dirsOnly?: boolean; filesOnly?: boolean };
```

- usage

```js
let path = "/path/to/dir";
listDir(path);
listDir(path, { dirsOnly: true });
listDir(path, { filesOnly: true });
```
