---
id: verify-string-hash
sidebar_label: Verify Hash
sidebar_position: 2
---

# verifyStringHash

Verifies if the provided string, when hashed using the given algorithm and encoding, matches the provided hash.

The `algorithm` to use for hashing. Defaults to `"SHA256"`.

Available options: "SHA256", "SHA1", "MD5", "SHA512", "SHA224", "SHA384".

`encoding` The encoding format for the hash output. Defaults to `"hex"`.

Available options: "hex", "base64", "binary", "base64url".

- import the method

```js
import { verifyStringHash } from "nodelpers";
```

- params

```js
s: string;
hash: string;
algo: TAlgorithmKey;
encoding: TEncoding;

TAlgorithmKey = keyof typeof HASH_ALGORITHMS;
TEncoding = BinaryToTextEncoding;
```

- usage

```js
verifyStringHash(
  "Hello World!!",
  "096c0a72c31f9a2d65126d8e8a401a2ab2f2e21d0a282a6ffe6642bbef65ffd9"
);
```
