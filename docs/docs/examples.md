---
title: Examples
sidebar_label: Examples
---

## 🔑 Generating a String Hash

### Example 1: SHA256 Hash in Hex Format

```ts
import { generateStringHash } from "nodelpers";

const hash = generateStringHash("Hello, world!", "SHA256", "hex");
console.log("SHA256 Hash (Hex):", hash);
```

**Output:**

```
SHA256 Hash (Hex): a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b53a42febcdaeea6c
```

### Example 2: MD5 Hash in Base64 Format

```ts
const hash = generateStringHash("Hello, world!", "MD5", "base64");
console.log("MD5 Hash (Base64):", hash);
```

**Output:**

```
MD5 Hash (Base64): XrY7u+Ae7tCTyyK7j1rNww==
```

### Example 3: SHA512 Hash in Binary Format

```ts
const hash = generateStringHash("Hello, world!", "SHA512", "binary");
console.log("SHA512 Hash (Binary):", hash);
```

# Logging Examples for `logToConsole`

The `logToConsole` function allows you to log messages with various log levels and optionally save them to a file. Below are some usage examples.

## Example 1: Simple Logging with Log Level

```ts
import { logToConsole } from "./path/to/logToConsole";

// Log an info message
logToConsole("Server started", {
  level: "info",
});
```

**Output**

```
[2025-02-02T12:34:56.789Z] [INFO]: Server started
```

## 🔑 Email Validation with `isValidEmail`

The `isValidEmail` function validates if the provided email string is in a valid email format. It checks if the email is not empty, contains the "@" symbol, and has a valid domain. If the email is invalid, it throws an error.

### Function Signature

```ts
import { isValidEmail } from "./path/to/isValidEmail";

try {
  const isValid = isValidEmail("example@domain.com");
  console.log(isValid); // true
} catch (error) {
  console.error(error.message);
}
```

**Output**

```
true
```

📌 **Tip:** Ensure you choose the right encoding based on your use case, as binary format may not be human-readable.

🚀 **Try it out and secure your data efficiently!**
