---
id: get-full-date
sidebar_label: Full Date
sidebar_position: 5
---

# getFullDate

Formats the current date according to the specified format.

- import the method

```js
import { getFullDate } from "nodelpers";
```

- params

```js
format: TDateFormat;
date?: TDate;

TDateFormat = "local" | "iso" | "utc";
TDate = number | string | Date;
```

- usage

```js
getFullDate("local");
getFullDate("iso");
getFullDate("utc");
```
