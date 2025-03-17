---
id: get-unix-timestamp
sidebar_label: Get Unix Timestamp
sidebar_position: 12
---

# getUnixTimestamp

Gets the `Unix` timestamp.

- import the method

```js
import { getUnixTimestamp } from "nodelpers";
```

- params

```js
date: TDate; // optional

TDate = number | string | Date;
```

- usage

```js
getUnixTimestamp();
getUnixTimestamp(2000);
getUnixTimestamp("2025-03-17");
```
