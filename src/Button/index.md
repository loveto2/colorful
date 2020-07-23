## Button

按钮:

```tsx
import React from 'react'
import { Button } from 'colorful'

export default () => (
  <>
    <Button btnType="primary" disabled>
      primary
    </Button>
    <Button btnType="secondary">secondary</Button>
    <Button btnType="success">success</Button>
    <Button btnType="warning">warning</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" disabled>
      link
    </Button>
  </>
)
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
