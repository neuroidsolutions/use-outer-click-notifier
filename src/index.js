import * as React from "react";

export const useOuterClickNotifier = (onOuterClick, innerRef) => {
  React.useEffect(
    () => {
      if (innerRef.current) {
        // add listener only, if element exists
        document.addEventListener("click", handleClick);
        // unmount previous listener first
        return () => document.removeEventListener("click", handleClick);
      }
      function handleClick(e) {
        innerRef.current &&
          !innerRef.current.contains(e.target) &&
          onOuterClick(e);
      }
    },
    [onOuterClick, innerRef] // invoke again, if deps have changed
  );
};
