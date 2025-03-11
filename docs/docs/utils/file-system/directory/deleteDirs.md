---
id: delete-dirs
sidebar_label: Delete Dirs
sidebar_position: 3
---

# deleteDirs

Deletes multiple directories.

- import the method

```js
import { deleteDirs } from "nodelpers";
```

- params

```js
dirs: string[];
options?: fs.RmOptions;
```

- usage

```js
deleteDirs(["logs", "data", "temp/1"]);
```
