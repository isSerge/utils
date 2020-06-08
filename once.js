const once = fn => (...args) => {
    if (!fn) return;
    const res = fn(...args);
    fn = null;
    return res;
  };

  