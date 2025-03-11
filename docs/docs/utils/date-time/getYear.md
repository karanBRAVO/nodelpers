---
id: get-year
sidebar_label: Year
sidebar_position: 6
---

# getYear

Returns the full year of the current date.

- import the method

```js
import { getYear } from "nodelpers";
```

- params

```js
date?: TDate;

TDate = number | string | Date;
```

- usage

```js
getYear(); // current year
getYear("2025-03-11"); // 2025
```
