---
id: encrypt-string
sidebar_label: Encrypt
sidebar_position: 4
---

# encryptString

Encrypts a string using AES-256-CBC.

- import the method

```js
import { encryptString, generateRandomBytes } from "nodelpers";
```

- params

```js
text: string;
key: Buffer<ArrayBufferLike>;
```

- usage

```js
encryptString("Hello World!", generateRandomBytes(32));
```
