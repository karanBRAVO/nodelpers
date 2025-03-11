---
id: get-day
sidebar_label: Day
sidebar_position: 11
---

# getDay

Returns the `day` of the week for the given date.

- import the method

```js
import { getDay } from "nodelpers";
```

- params

```js
date?: TDate;
fullName: boolean;

TDate: number | string | Date;
```

- usage

```js
getDay(); // current day (say 'Sun')
getDay("2025-03-11"); // 'Tue'
getDay("2025-03-11", true); // 'Tuesday'
```
