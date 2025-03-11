---
id: generate-random-string
sidebar_label: Generate Random String
sidebar_position: 6
---

# generateRandomString

Generates a random string based on the given options.

- import the method

```js
import { generateRandomString } from "nodelpers";
```

- params

```js
options: TRandomStringOptions;

TRandomStringOptions = {
  length?: number;
  allowedChars?: Set<TAllowedChar>;
};

TAllowedChar = "number" | "alphabet" | "special";
```

- usage

```js
generateRandomString(); // random string
```
