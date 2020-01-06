# flo-datetime



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default                                         |
| --------------- | ---------------- | ----------- | -------- | ----------------------------------------------- |
| `displayFormat` | `display-format` |             | `string` | `"D MMM YYYY H:mm"`                             |
| `max`           | `max`            |             | `string` | `(new Date().getUTCFullYear() + 10).toString()` |
| `min`           | `min`            |             | `string` | `(new Date().getUTCFullYear() - 10).toString()` |
| `text`          | `text`           |             | `string` | `"Date / Time"`                                 |
| `value`         | `value`          |             | `string` | `new Date().toISOString()`                      |


## Dependencies

### Depends on

- ion-item
- ion-label
- ion-datetime

### Graph
```mermaid
graph TD;
  flo-datetime --> ion-item
  flo-datetime --> ion-label
  flo-datetime --> ion-datetime
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style flo-datetime fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
