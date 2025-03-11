---
id: decrypt-string
sidebar_label: Decrypt
sidebar_position: 5
---

# decryptString

Decrypts an encrypted string using AES-256-CBC.

- import the method

```js
import { decryptString, generateRandomBytes } from "nodelpers";
```

- params

```js
encryptedText: string;
key: Buffer<ArrayBufferLike>;
```

- usage

```js
decryptString(encryptedText, generateRandomBytes(32));
```
