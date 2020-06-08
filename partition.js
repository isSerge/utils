const partition = (predicate, xs) => 
    xs.reduce(([pass, fail], x) => 
        predicate(x) 
            ? [[...pass, x], fail]
            : [pass, [...fail, x]], 
    [[], []])