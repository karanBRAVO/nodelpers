---
id: add-time
sidebar_label: Add Time
sidebar_position: 9
---

# addTime

Adds or subtracts the specified amount of time to/from a date.

- import the method

```js
import { addTime } from "nodelpers";
```

- params

```js
date: TDate;
value: number;
unit: TDateUnits;

TDate = number | string | Date;
TDateUnits =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "milliseconds";
```

- usage

```js
addTime(2000, 1000); // 3000
addTime(2000, -1000); // 1000
```
