---
id: write-json
sidebar_label: Write JSON
sidebar_position: 3
---

# writeJSON

Writes an object as JSON to a file.

- import the method

```js
import { writeJSON } from "nodelpers";
```

- params

```js
path: string;
data: any; // all supported json type
```

- usage

```js
let path = "/path/to/your/file.json";
writeJSON(path);
```
