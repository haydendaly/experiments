"""
Collection of the core mathematical operators used throughout the code base.
"""

import math

# ## Task 0.1

# Implementation of a prelude of elementary functions.


def mul(x, y):
    ":math:`f(x, y) = x * y`"
    return x * y


def id(x):
    ":math:`f(x) = x`"
    return x


def add(x, y):
    ":math:`f(x, y) = x + y`"
    return x + y


def neg(x):
    ":math:`f(x) = -x`"
    return -x


def lt(x, y):
    ":math:`f(x) =` 1.0 if x is less than y else 0.0"
    return 1.0 if x < y else 0.0


def eq(x, y):
    ":math:`f(x) =` 1.0 if x is equal to y else 0.0"
    return 1.0 if x == y else 0.0


def max(x, y):
    ":math:`f(x) =` x if x is greater than y else y"
    return y if x < y else x


def is_close(x, y):
    ":math:`f(x) = |x - y| < 1e-2`"
    return 1.0 if abs(x - y) < 1e-2 else 0.0


def sigmoid(x):

    if x >= 0.0:
        return 1.0 / (1.0 + math.exp(-x))
    return math.exp(x) / (1.0 + math.exp(x))


def relu(x):

    if x > 0.0:
        return x
    else:
        return 0.0


EPS = 1e-6


def log(x):
    ":math:`f(x) = log(x)`"
    return math.log(x + EPS)


def exp(x):
    ":math:`f(x) = e^{x}`"
    return math.exp(x)


def log_back(x, d):
    r"If :math:`f = log` as above, compute d :math:`d \times f'(x)`"
    return d / x


def sigmoid_back(x):
    result = sigmoid(x) * (1 - sigmoid(x))
    return result


def inv(x):
    ":math:`f(x) = 1/x`"
    return 1.0 / x


def inv_back(x, d):
    "If :math:`f(x) = 1/x` compute d :math:`d \times f'(x)`"
    return (-1.0 * d) / (x * x)
    return d * math.ldexp(inv(x))


def relu_back(x, d):
    "If :math:`f = relu` compute d :math:`d \times f'(x)`"
    if x > 0:
        return d
    else:
        return 0


# ## Task 0.3

# Small library of elementary higher-order functions for practice.


def map(fn):
    """
    Higher-order map.

    .. image:: figs/Ops/maplist.png


    See `<https://en.wikipedia.org/wiki/Map_(higher-order_function)>`_

    Args:
        fn (one-arg function): Function from one value to one value.

    Returns:
        function : A function that takes a list, applies `fn` to each element, and returns a
        new list
    """

    def lowerOrder(ls):
        lst = []
        for each in ls:
            lst.append(fn(each))
        return lst

    return lowerOrder


def negList(ls):
    "Use :func:`map` and :func:`neg` to negate each element in `ls`"
    ans = map(neg)
    return ans(ls)


def zipWith(fn):
    """
    Higher-order zipwith (or map2).

    .. image:: figs/Ops/ziplist.png

    See `<https://en.wikipedia.org/wiki/Map_(higher-order_function)>`_

    Args:
        fn (two-arg function): combine two values

    Returns:
        function : takes two equally sized lists `ls1` and `ls2`, produce a new list by
        applying fn(x, y) on each pair of elements.

    """

    def lowerOrder(ls1, ls2):
        lst = []
        for i, j in zip(ls1, ls2):
            lst.append(fn(i, j))
        return lst

    return lowerOrder


def addLists(ls1, ls2):
    "Add the elements of `ls1` and `ls2` using :func:`zipWith` and :func:`add`"
    ans = zipWith(add)
    return ans(ls1, ls2)


def reduce(fn, start):
    r"""
    Higher-order reduce.

    .. image:: figs/Ops/reducelist.png
    Args:
        fn (two-arg function): combine two values
        start (float): start value :math:`x_0`
    Returns:
        function : function that takes a list `ls` of elements
        :math:`x_1 \ldots x_n` and computes the reduction :math:`fn(x_3, fn(x_2,
        fn(x_1, x_0)))`

        reduce()
        def HigherOrder(ls):
        ls.append(start)
        for i in range(len(ls+1)):
            total= fn(first,i)
        return total
    return HigherOrder

    """

    def HigherOrder(ls):
        total = start
        for i in range(len(ls)):
            total = fn(total, ls[i])
        return total

    return HigherOrder


def sum(ls):
    "Sum up a list using :func:`reduce` and :func:`add`."
    ans = reduce(add, 0.0)
    return ans(ls)


def prod(ls):
    "Product of a list using :func:`reduce` and :func:`mul`."
    ans = reduce(mul, 1)
    return ans(ls)
