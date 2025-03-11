---
id: get-month
sidebar_label: Month
sidebar_position: 7
---

# getMonth

Returns the full year of the current date.

- import the method

```js
import { getMonth } from "nodelpers";
```

- params

```js
date?: TDate;
asString: boolean;

TDate = number | string | Date;
```

- usage

```js
getMonth(); // current month
getMonth("2025-03-11"); // 3
getMonth("2025-03-11", true); // March
```
