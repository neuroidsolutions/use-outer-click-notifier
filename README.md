# use-outer-click-notifier

>

[![NPM](https://img.shields.io/npm/v/@neuroid/use-outer-click-notifier.svg)](https://www.npmjs.com/package/@neuroid/use-outer-click-notifier) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @neuroid/use-outer-click-notifier
```

## Usage

```jsx
import React, { useRef, useCallback } from "react";
import { useOuterClickNotifier } from "use-outer-click-notifier";

const App = () => {
  const innerRef = useRef(null);
  const handleOuterClick = useCallback(
    // memorized callback for optimized performance
    e => {
      window.alert("outside click");
    },
    [] // adjust deps to your needs
  );
  useOuterClickNotifier(handleOuterClick, innerRef);
  return (
    <div>
      <div ref={innerRef} style={{ width: 100, height: 100 }} />
    </div>
  );
};
```

## License

MIT © [neuroidsolutions](https://github.com/neuroidsolutions)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
