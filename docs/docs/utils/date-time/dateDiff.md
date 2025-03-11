---
id: date-diff
sidebar_label: Date Difference
sidebar_position: 8
---

# dateDiff

Returns the absolute difference between two dates in the specified unit.

- import the method

```js
import { dateDiff } from "nodelpers";
```

- params

```js
d1: TDate;
d2: TDate;
unit: TDateUnits;
absolute: boolean;

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
dateDiff(2000, 1000); // 1000
```
