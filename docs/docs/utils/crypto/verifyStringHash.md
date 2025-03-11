---
id: generate-string-hash
sidebar_label: Generate Hash
sidebar_position: 1
---

# generateStringHash

Generates a cryptographic hash of a given string using the specified algorithm and encoding.

The algorithm to use for hashing. Defaults to "SHA256".

Available options: "SHA256", "SHA1", "MD5", "SHA512", "SHA224", "SHA384".

encoding The encoding format for the hash output. Defaults to "hex".

Available options: "hex", "base64", "binary", "base64url".

- import the method

```js
import { generateStringHash } from "nodelpers";
```

- params

```js
s: string;
algo: TAlgorithmKey;
encoding: TEncoding;

TAlgorithmKey = keyof typeof HASH_ALGORITHMS;
TEncoding = BinaryToTextEncoding;
```

- usage

```js
generateStringHash("Hello World!!");
generateStringHash("Hello World!!", "MD5");
generateStringHash("Hello World!!", "SHA256512", "base64");
```
