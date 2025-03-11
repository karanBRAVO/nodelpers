---
id: is-valid-email
sidebar_label: Valid
sidebar_position: 1
---

# isValidEmail

Validates if the provided email string is in a valid email format. The email must `not be empty`, must contain the `@` symbol, and must `contain a valid domain`.

- import the method

```js
import { isValidEmail } from "nodelpers";
```

- params

```js
email: string;
```

- usage

```js
isValidEmail("example@gmail.com"); // true
```
