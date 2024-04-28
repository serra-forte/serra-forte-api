"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/fastify-plugin/lib/getPluginName.js
var require_getPluginName = __commonJS({
  "node_modules/fastify-plugin/lib/getPluginName.js"(exports, module2) {
    "use strict";
    var fpStackTracePattern = /at\s{1}(?:.*\.)?plugin\s{1}.*\n\s*(.*)/;
    var fileNamePattern = /(\w*(\.\w*)*)\..*/;
    module2.exports = function getPluginName(fn) {
      if (fn.name.length > 0)
        return fn.name;
      const stackTraceLimit = Error.stackTraceLimit;
      Error.stackTraceLimit = 10;
      try {
        throw new Error("anonymous function");
      } catch (e) {
        Error.stackTraceLimit = stackTraceLimit;
        return extractPluginName(e.stack);
      }
    };
    function extractPluginName(stack) {
      const m = stack.match(fpStackTracePattern);
      return m ? m[1].split(/[/\\]/).slice(-1)[0].match(fileNamePattern)[1] : "anonymous";
    }
    module2.exports.extractPluginName = extractPluginName;
  }
});

// node_modules/fastify-plugin/lib/toCamelCase.js
var require_toCamelCase = __commonJS({
  "node_modules/fastify-plugin/lib/toCamelCase.js"(exports, module2) {
    "use strict";
    module2.exports = function toCamelCase(name) {
      if (name[0] === "@") {
        name = name.slice(1).replace("/", "-");
      }
      const newName = name.replace(/-(.)/g, function(match, g1) {
        return g1.toUpperCase();
      });
      return newName;
    };
  }
});

// node_modules/fastify-plugin/plugin.js
var require_plugin = __commonJS({
  "node_modules/fastify-plugin/plugin.js"(exports, module2) {
    "use strict";
    var getPluginName = require_getPluginName();
    var toCamelCase = require_toCamelCase();
    var count = 0;
    function plugin(fn, options = {}) {
      let autoName = false;
      if (typeof fn.default !== "undefined") {
        fn = fn.default;
      }
      if (typeof fn !== "function") {
        throw new TypeError(
          `fastify-plugin expects a function, instead got a '${typeof fn}'`
        );
      }
      if (typeof options === "string") {
        options = {
          fastify: options
        };
      }
      if (typeof options !== "object" || Array.isArray(options) || options === null) {
        throw new TypeError("The options object should be an object");
      }
      if (options.fastify !== void 0 && typeof options.fastify !== "string") {
        throw new TypeError(`fastify-plugin expects a version string, instead got '${typeof options.fastify}'`);
      }
      if (!options.name) {
        autoName = true;
        options.name = getPluginName(fn) + "-auto-" + count++;
      }
      fn[Symbol.for("skip-override")] = options.encapsulate !== true;
      fn[Symbol.for("fastify.display-name")] = options.name;
      fn[Symbol.for("plugin-meta")] = options;
      if (!fn.default) {
        fn.default = fn;
      }
      const camelCase = toCamelCase(options.name);
      if (!autoName && !fn[camelCase]) {
        fn[camelCase] = fn;
      }
      return fn;
    }
    module2.exports = plugin;
    module2.exports.default = plugin;
    module2.exports.fastifyPlugin = plugin;
  }
});

// node_modules/obliterator/support.js
var require_support = __commonJS({
  "node_modules/obliterator/support.js"(exports) {
    "use strict";
    exports.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    exports.SYMBOL_SUPPORT = typeof Symbol !== "undefined";
  }
});

// node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/obliterator/foreach.js"(exports, module2) {
    "use strict";
    var support = require_support();
    var ARRAY_BUFFER_SUPPORT = support.ARRAY_BUFFER_SUPPORT;
    var SYMBOL_SUPPORT = support.SYMBOL_SUPPORT;
    module2.exports = function forEach(iterable, callback) {
      var iterator, k, i, l, s;
      if (!iterable)
        throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i = 0, l = iterable.length; i < l; i++)
          callback(iterable[i], i);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i = 0;
        while (s = iterator.next(), s.done !== true) {
          callback(s.value, i);
          i++;
        }
        return;
      }
      for (k in iterable) {
        if (iterable.hasOwnProperty(k)) {
          callback(iterable[k], k);
        }
      }
      return;
    };
  }
});

// node_modules/mnemonist/utils/comparators.js
var require_comparators = __commonJS({
  "node_modules/mnemonist/utils/comparators.js"(exports) {
    "use strict";
    var DEFAULT_COMPARATOR = function(a, b) {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    };
    var DEFAULT_REVERSE_COMPARATOR = function(a, b) {
      if (a < b)
        return 1;
      if (a > b)
        return -1;
      return 0;
    };
    function reverseComparator(comparator) {
      return function(a, b) {
        return comparator(b, a);
      };
    }
    function createTupleComparator(size) {
      if (size === 2) {
        return function(a, b) {
          if (a[0] < b[0])
            return -1;
          if (a[0] > b[0])
            return 1;
          if (a[1] < b[1])
            return -1;
          if (a[1] > b[1])
            return 1;
          return 0;
        };
      }
      return function(a, b) {
        var i = 0;
        while (i < size) {
          if (a[i] < b[i])
            return -1;
          if (a[i] > b[i])
            return 1;
          i++;
        }
        return 0;
      };
    }
    exports.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR;
    exports.DEFAULT_REVERSE_COMPARATOR = DEFAULT_REVERSE_COMPARATOR;
    exports.reverseComparator = reverseComparator;
    exports.createTupleComparator = createTupleComparator;
  }
});

// node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    "use strict";
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value) {
      if (value === (value | 0)) {
        if (Math.sign(value) === -1) {
          if (value <= 127 && value >= -128)
            return Int8Array;
          if (value <= 32767 && value >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value <= 255)
            return Uint8Array;
          if (value <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p, t, v, i, l;
      for (i = 0, l = array.length; i < l; i++) {
        v = getter ? getter(array[i]) : array[i];
        t = exports.getNumberType(v);
        p = TYPE_PRIORITY[t.name];
        if (p > maxPriority) {
          maxPriority = p;
          maxType = t;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
    };
    exports.concat = function() {
      var length = 0, i, o, l;
      for (i = 0, l = arguments.length; i < l; i++)
        length += arguments[i].length;
      var array = new arguments[0].constructor(length);
      for (i = 0, o = 0; i < l; i++) {
        array.set(arguments[i], o);
        o += arguments[i].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i = 0; i < length; i++)
        array[i] = i;
      return array;
    };
  }
});

// node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/mnemonist/utils/iterables.js"(exports) {
    "use strict";
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    function toArray(target) {
      var l = guessLength(target);
      var array = typeof l === "number" ? new Array(l) : [];
      var i = 0;
      forEach(target, function(value) {
        array[i++] = value;
      });
      return array;
    }
    function toArrayWithIndices(target) {
      var l = guessLength(target);
      var IndexArray = typeof l === "number" ? typed.getPointerArray(l) : Array;
      var array = typeof l === "number" ? new Array(l) : [];
      var indices = typeof l === "number" ? new IndexArray(l) : [];
      var i = 0;
      forEach(target, function(value) {
        array[i] = value;
        indices[i] = i++;
      });
      return [array, indices];
    }
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/mnemonist/heap.js
var require_heap = __commonJS({
  "node_modules/mnemonist/heap.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    var comparators = require_comparators();
    var iterables = require_iterables();
    var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR;
    var reverseComparator = comparators.reverseComparator;
    function siftDown(compare4, heap, startIndex, i) {
      var item = heap[i], parentIndex, parent;
      while (i > startIndex) {
        parentIndex = i - 1 >> 1;
        parent = heap[parentIndex];
        if (compare4(item, parent) < 0) {
          heap[i] = parent;
          i = parentIndex;
          continue;
        }
        break;
      }
      heap[i] = item;
    }
    function siftUp(compare4, heap, i) {
      var endIndex = heap.length, startIndex = i, item = heap[i], childIndex = 2 * i + 1, rightIndex;
      while (childIndex < endIndex) {
        rightIndex = childIndex + 1;
        if (rightIndex < endIndex && compare4(heap[childIndex], heap[rightIndex]) >= 0) {
          childIndex = rightIndex;
        }
        heap[i] = heap[childIndex];
        i = childIndex;
        childIndex = 2 * i + 1;
      }
      heap[i] = item;
      siftDown(compare4, heap, startIndex, i);
    }
    function push(compare4, heap, item) {
      heap.push(item);
      siftDown(compare4, heap, 0, heap.length - 1);
    }
    function pop(compare4, heap) {
      var lastItem = heap.pop();
      if (heap.length !== 0) {
        var item = heap[0];
        heap[0] = lastItem;
        siftUp(compare4, heap, 0);
        return item;
      }
      return lastItem;
    }
    function replace(compare4, heap, item) {
      if (heap.length === 0)
        throw new Error("mnemonist/heap.replace: cannot pop an empty heap.");
      var popped = heap[0];
      heap[0] = item;
      siftUp(compare4, heap, 0);
      return popped;
    }
    function pushpop(compare4, heap, item) {
      var tmp;
      if (heap.length !== 0 && compare4(heap[0], item) < 0) {
        tmp = heap[0];
        heap[0] = item;
        item = tmp;
        siftUp(compare4, heap, 0);
      }
      return item;
    }
    function heapify(compare4, array) {
      var n = array.length, l = n >> 1, i = l;
      while (--i >= 0)
        siftUp(compare4, array, i);
    }
    function consume(compare4, heap) {
      var l = heap.length, i = 0;
      var array = new Array(l);
      while (i < l)
        array[i++] = pop(compare4, heap);
      return array;
    }
    function nsmallest(compare4, n, iterable) {
      if (arguments.length === 2) {
        iterable = n;
        n = compare4;
        compare4 = DEFAULT_COMPARATOR;
      }
      var reverseCompare = reverseComparator(compare4);
      var i, l, v;
      var min = Infinity;
      var result;
      if (n === 1) {
        if (iterables.isArrayLike(iterable)) {
          for (i = 0, l = iterable.length; i < l; i++) {
            v = iterable[i];
            if (min === Infinity || compare4(v, min) < 0)
              min = v;
          }
          result = new iterable.constructor(1);
          result[0] = min;
          return result;
        }
        forEach(iterable, function(value) {
          if (min === Infinity || compare4(value, min) < 0)
            min = value;
        });
        return [min];
      }
      if (iterables.isArrayLike(iterable)) {
        if (n >= iterable.length)
          return iterable.slice().sort(compare4);
        result = iterable.slice(0, n);
        heapify(reverseCompare, result);
        for (i = n, l = iterable.length; i < l; i++)
          if (reverseCompare(iterable[i], result[0]) > 0)
            replace(reverseCompare, result, iterable[i]);
        return result.sort(compare4);
      }
      var size = iterables.guessLength(iterable);
      if (size !== null && size < n)
        n = size;
      result = new Array(n);
      i = 0;
      forEach(iterable, function(value) {
        if (i < n) {
          result[i] = value;
        } else {
          if (i === n)
            heapify(reverseCompare, result);
          if (reverseCompare(value, result[0]) > 0)
            replace(reverseCompare, result, value);
        }
        i++;
      });
      if (result.length > i)
        result.length = i;
      return result.sort(compare4);
    }
    function nlargest(compare4, n, iterable) {
      if (arguments.length === 2) {
        iterable = n;
        n = compare4;
        compare4 = DEFAULT_COMPARATOR;
      }
      var reverseCompare = reverseComparator(compare4);
      var i, l, v;
      var max = -Infinity;
      var result;
      if (n === 1) {
        if (iterables.isArrayLike(iterable)) {
          for (i = 0, l = iterable.length; i < l; i++) {
            v = iterable[i];
            if (max === -Infinity || compare4(v, max) > 0)
              max = v;
          }
          result = new iterable.constructor(1);
          result[0] = max;
          return result;
        }
        forEach(iterable, function(value) {
          if (max === -Infinity || compare4(value, max) > 0)
            max = value;
        });
        return [max];
      }
      if (iterables.isArrayLike(iterable)) {
        if (n >= iterable.length)
          return iterable.slice().sort(reverseCompare);
        result = iterable.slice(0, n);
        heapify(compare4, result);
        for (i = n, l = iterable.length; i < l; i++)
          if (compare4(iterable[i], result[0]) > 0)
            replace(compare4, result, iterable[i]);
        return result.sort(reverseCompare);
      }
      var size = iterables.guessLength(iterable);
      if (size !== null && size < n)
        n = size;
      result = new Array(n);
      i = 0;
      forEach(iterable, function(value) {
        if (i < n) {
          result[i] = value;
        } else {
          if (i === n)
            heapify(compare4, result);
          if (compare4(value, result[0]) > 0)
            replace(compare4, result, value);
        }
        i++;
      });
      if (result.length > i)
        result.length = i;
      return result.sort(reverseCompare);
    }
    function Heap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/Heap.constructor: given comparator should be a function.");
    }
    Heap.prototype.clear = function() {
      this.items = [];
      this.size = 0;
    };
    Heap.prototype.push = function(item) {
      push(this.comparator, this.items, item);
      return ++this.size;
    };
    Heap.prototype.peek = function() {
      return this.items[0];
    };
    Heap.prototype.pop = function() {
      if (this.size !== 0)
        this.size--;
      return pop(this.comparator, this.items);
    };
    Heap.prototype.replace = function(item) {
      return replace(this.comparator, this.items, item);
    };
    Heap.prototype.pushpop = function(item) {
      return pushpop(this.comparator, this.items, item);
    };
    Heap.prototype.consume = function() {
      this.size = 0;
      return consume(this.comparator, this.items);
    };
    Heap.prototype.toArray = function() {
      return consume(this.comparator, this.items.slice());
    };
    Heap.prototype.inspect = function() {
      var proxy = this.toArray();
      Object.defineProperty(proxy, "constructor", {
        value: Heap,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      Heap.prototype[Symbol.for("nodejs.util.inspect.custom")] = Heap.prototype.inspect;
    function MaxHeap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
      this.comparator = reverseComparator(this.comparator);
    }
    MaxHeap.prototype = Heap.prototype;
    Heap.from = function(iterable, comparator) {
      var heap = new Heap(comparator);
      var items;
      if (iterables.isArrayLike(iterable))
        items = iterable.slice();
      else
        items = iterables.toArray(iterable);
      heapify(heap.comparator, items);
      heap.items = items;
      heap.size = items.length;
      return heap;
    };
    MaxHeap.from = function(iterable, comparator) {
      var heap = new MaxHeap(comparator);
      var items;
      if (iterables.isArrayLike(iterable))
        items = iterable.slice();
      else
        items = iterables.toArray(iterable);
      heapify(heap.comparator, items);
      heap.items = items;
      heap.size = items.length;
      return heap;
    };
    Heap.siftUp = siftUp;
    Heap.siftDown = siftDown;
    Heap.push = push;
    Heap.pop = pop;
    Heap.replace = replace;
    Heap.pushpop = pushpop;
    Heap.heapify = heapify;
    Heap.consume = consume;
    Heap.nsmallest = nsmallest;
    Heap.nlargest = nlargest;
    Heap.MinHeap = Heap;
    Heap.MaxHeap = MaxHeap;
    module2.exports = Heap;
  }
});

// node_modules/mnemonist/fibonacci-heap.js
var require_fibonacci_heap = __commonJS({
  "node_modules/mnemonist/fibonacci-heap.js"(exports, module2) {
    "use strict";
    var comparators = require_comparators();
    var forEach = require_foreach();
    var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR;
    var reverseComparator = comparators.reverseComparator;
    function FibonacciHeap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/FibonacciHeap.constructor: given comparator should be a function.");
    }
    FibonacciHeap.prototype.clear = function() {
      this.root = null;
      this.min = null;
      this.size = 0;
    };
    function createNode(item) {
      return {
        item,
        degree: 0
      };
    }
    function mergeWithRoot(heap, node) {
      if (!heap.root) {
        heap.root = node;
      } else {
        node.right = heap.root.right;
        node.left = heap.root;
        heap.root.right.left = node;
        heap.root.right = node;
      }
    }
    FibonacciHeap.prototype.push = function(item) {
      var node = createNode(item);
      node.left = node;
      node.right = node;
      mergeWithRoot(this, node);
      if (!this.min || this.comparator(node.item, this.min.item) <= 0)
        this.min = node;
      return ++this.size;
    };
    FibonacciHeap.prototype.peek = function() {
      return this.min ? this.min.item : void 0;
    };
    function consumeLinkedList(head) {
      var nodes = [], node = head, flag = false;
      while (true) {
        if (node === head && flag)
          break;
        else if (node === head)
          flag = true;
        nodes.push(node);
        node = node.right;
      }
      return nodes;
    }
    function removeFromRoot(heap, node) {
      if (heap.root === node)
        heap.root = node.right;
      node.left.right = node.right;
      node.right.left = node.left;
    }
    function mergeWithChild(parent, node) {
      if (!parent.child) {
        parent.child = node;
      } else {
        node.right = parent.child.right;
        node.left = parent.child;
        parent.child.right.left = node;
        parent.child.right = node;
      }
    }
    function link(heap, y, x) {
      removeFromRoot(heap, y);
      y.left = y;
      y.right = y;
      mergeWithChild(x, y);
      x.degree++;
      y.parent = x;
    }
    function consolidate(heap) {
      var A = new Array(heap.size), nodes = consumeLinkedList(heap.root), i, l, x, y, d, t;
      for (i = 0, l = nodes.length; i < l; i++) {
        x = nodes[i];
        d = x.degree;
        while (A[d]) {
          y = A[d];
          if (heap.comparator(x.item, y.item) > 0) {
            t = x;
            x = y;
            y = t;
          }
          link(heap, y, x);
          A[d] = null;
          d++;
        }
        A[d] = x;
      }
      for (i = 0; i < heap.size; i++) {
        if (A[i] && heap.comparator(A[i].item, heap.min.item) <= 0)
          heap.min = A[i];
      }
    }
    FibonacciHeap.prototype.pop = function() {
      if (!this.size)
        return void 0;
      var z29 = this.min;
      if (z29.child) {
        var nodes = consumeLinkedList(z29.child), node, i, l;
        for (i = 0, l = nodes.length; i < l; i++) {
          node = nodes[i];
          mergeWithRoot(this, node);
          delete node.parent;
        }
      }
      removeFromRoot(this, z29);
      if (z29 === z29.right) {
        this.min = null;
        this.root = null;
      } else {
        this.min = z29.right;
        consolidate(this);
      }
      this.size--;
      return z29.item;
    };
    FibonacciHeap.prototype.inspect = function() {
      var proxy = {
        size: this.size
      };
      if (this.min && "item" in this.min)
        proxy.top = this.min.item;
      Object.defineProperty(proxy, "constructor", {
        value: FibonacciHeap,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      FibonacciHeap.prototype[Symbol.for("nodejs.util.inspect.custom")] = FibonacciHeap.prototype.inspect;
    function MaxFibonacciHeap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/FibonacciHeap.constructor: given comparator should be a function.");
      this.comparator = reverseComparator(this.comparator);
    }
    MaxFibonacciHeap.prototype = FibonacciHeap.prototype;
    FibonacciHeap.from = function(iterable, comparator) {
      var heap = new FibonacciHeap(comparator);
      forEach(iterable, function(value) {
        heap.push(value);
      });
      return heap;
    };
    MaxFibonacciHeap.from = function(iterable, comparator) {
      var heap = new MaxFibonacciHeap(comparator);
      forEach(iterable, function(value) {
        heap.push(value);
      });
      return heap;
    };
    FibonacciHeap.MinFibonacciHeap = FibonacciHeap;
    FibonacciHeap.MaxFibonacciHeap = MaxFibonacciHeap;
    module2.exports = FibonacciHeap;
  }
});

// node_modules/mnemonist/suffix-array.js
var require_suffix_array = __commonJS({
  "node_modules/mnemonist/suffix-array.js"(exports, module2) {
    "use strict";
    var SEPARATOR = "";
    function sort(string, array, offset) {
      var l = array.length, buckets = [], i = l, j = -1, b, d = 0, bits;
      while (i--)
        j = Math.max(string[array[i] + offset], j);
      bits = j >> 24 && 32 || j >> 16 && 24 || j >> 8 && 16 || 8;
      for (; d < bits; d += 4) {
        for (i = 16; i--; )
          buckets[i] = [];
        for (i = l; i--; )
          buckets[string[array[i] + offset] >> d & 15].push(array[i]);
        for (b = 0; b < 16; b++) {
          for (j = buckets[b].length; j--; )
            array[++i] = buckets[b][j];
        }
      }
    }
    function compare4(string, lookup, m, n) {
      return string[m] - string[n] || (m % 3 === 2 ? string[m + 1] - string[n + 1] || lookup[m + 2] - lookup[n + 2] : lookup[m + 1] - lookup[n + 1]);
    }
    function build(string, l) {
      var a = [], b = [], al = 2 * l / 3 | 0, bl = l - al, r = al + 1 >> 1, i = al, j = 0, k, lookup = [], result = [];
      if (l === 1)
        return [0];
      while (i--)
        a[i] = (i * 3 >> 1) + 1;
      for (i = 3; i--; )
        sort(string, a, i);
      j = b[(a[0] / 3 | 0) + (a[0] % 3 === 1 ? 0 : r)] = 1;
      for (i = 1; i < al; i++) {
        if (string[a[i]] !== string[a[i - 1]] || string[a[i] + 1] !== string[a[i - 1] + 1] || string[a[i] + 2] !== string[a[i - 1] + 2])
          j++;
        b[(a[i] / 3 | 0) + (a[i] % 3 === 1 ? 0 : r)] = j;
      }
      if (j < al) {
        b = build(b, al);
        for (i = al; i--; )
          a[i] = b[i] < r ? b[i] * 3 + 1 : (b[i] - r) * 3 + 2;
      }
      for (i = al; i--; )
        lookup[a[i]] = i;
      lookup[l] = -1;
      lookup[l + 1] = -2;
      b = l % 3 === 1 ? [l - 1] : [];
      for (i = 0; i < al; i++) {
        if (a[i] % 3 === 1)
          b.push(a[i] - 1);
      }
      sort(string, b, 0);
      for (i = 0, j = 0, k = 0; i < al && j < bl; )
        result[k++] = compare4(string, lookup, a[i], b[j]) < 0 ? a[i++] : b[j++];
      while (i < al)
        result[k++] = a[i++];
      while (j < bl)
        result[k++] = b[j++];
      return result;
    }
    function convert(target) {
      var length = target.length, paddingOffset = length % 3, array = new Array(length + paddingOffset), l, i;
      if (typeof target !== "string") {
        var uniqueTokens = /* @__PURE__ */ Object.create(null);
        for (i = 0; i < length; i++) {
          if (!uniqueTokens[target[i]])
            uniqueTokens[target[i]] = true;
        }
        var alphabet = /* @__PURE__ */ Object.create(null), sortedUniqueTokens = Object.keys(uniqueTokens).sort();
        for (i = 0, l = sortedUniqueTokens.length; i < l; i++)
          alphabet[sortedUniqueTokens[i]] = i + 1;
        for (i = 0; i < length; i++) {
          array[i] = alphabet[target[i]];
        }
      } else {
        for (i = 0; i < length; i++)
          array[i] = target.charCodeAt(i);
      }
      for (i = length; i < length + paddingOffset; i++)
        array[i] = 0;
      return array;
    }
    function SuffixArray(string) {
      this.hasArbitrarySequence = typeof string !== "string";
      this.string = string;
      this.length = string.length;
      this.array = build(convert(string), this.length);
    }
    SuffixArray.prototype.toString = function() {
      return this.array.join(",");
    };
    SuffixArray.prototype.toJSON = function() {
      return this.array;
    };
    SuffixArray.prototype.inspect = function() {
      var array = new Array(this.length);
      for (var i = 0; i < this.length; i++)
        array[i] = this.string.slice(this.array[i]);
      Object.defineProperty(array, "constructor", {
        value: SuffixArray,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      SuffixArray.prototype[Symbol.for("nodejs.util.inspect.custom")] = SuffixArray.prototype.inspect;
    function GeneralizedSuffixArray(strings) {
      this.hasArbitrarySequence = typeof strings[0] !== "string";
      this.size = strings.length;
      if (this.hasArbitrarySequence) {
        this.text = [];
        for (var i = 0, l = this.size; i < l; i++) {
          this.text.push.apply(this.text, strings[i]);
          if (i < l - 1)
            this.text.push(SEPARATOR);
        }
      } else {
        this.text = strings.join(SEPARATOR);
      }
      this.firstLength = strings[0].length;
      this.length = this.text.length;
      this.array = build(convert(this.text), this.length);
    }
    GeneralizedSuffixArray.prototype.longestCommonSubsequence = function() {
      var lcs = this.hasArbitrarySequence ? [] : "", lcp, i, j, s, t;
      for (i = 1; i < this.length; i++) {
        s = this.array[i];
        t = this.array[i - 1];
        if (s < this.firstLength && t < this.firstLength)
          continue;
        if (s > this.firstLength && t > this.firstLength)
          continue;
        lcp = Math.min(this.length - s, this.length - t);
        for (j = 0; j < lcp; j++) {
          if (this.text[s + j] !== this.text[t + j]) {
            lcp = j;
            break;
          }
        }
        if (lcp > lcs.length)
          lcs = this.text.slice(s, s + lcp);
      }
      return lcs;
    };
    GeneralizedSuffixArray.prototype.toString = function() {
      return this.array.join(",");
    };
    GeneralizedSuffixArray.prototype.toJSON = function() {
      return this.array;
    };
    GeneralizedSuffixArray.prototype.inspect = function() {
      var array = new Array(this.length);
      for (var i = 0; i < this.length; i++)
        array[i] = this.text.slice(this.array[i]);
      Object.defineProperty(array, "constructor", {
        value: GeneralizedSuffixArray,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      GeneralizedSuffixArray.prototype[Symbol.for("nodejs.util.inspect.custom")] = GeneralizedSuffixArray.prototype.inspect;
    SuffixArray.GeneralizedSuffixArray = GeneralizedSuffixArray;
    module2.exports = SuffixArray;
  }
});

// node_modules/mnemonist/bi-map.js
var require_bi_map = __commonJS({
  "node_modules/mnemonist/bi-map.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    function InverseMap(original) {
      this.size = 0;
      this.items = /* @__PURE__ */ new Map();
      this.inverse = original;
    }
    function BiMap() {
      this.size = 0;
      this.items = /* @__PURE__ */ new Map();
      this.inverse = new InverseMap(this);
    }
    function clear() {
      this.size = 0;
      this.items.clear();
      this.inverse.items.clear();
    }
    BiMap.prototype.clear = clear;
    InverseMap.prototype.clear = clear;
    function set(key, value) {
      if (this.items.has(key)) {
        var currentValue = this.items.get(key);
        if (currentValue === value)
          return this;
        else
          this.inverse.items.delete(currentValue);
      }
      if (this.inverse.items.has(value)) {
        var currentKey = this.inverse.items.get(value);
        if (currentKey === key)
          return this;
        else
          this.items.delete(currentKey);
      }
      this.items.set(key, value);
      this.inverse.items.set(value, key);
      this.size = this.items.size;
      this.inverse.size = this.inverse.items.size;
      return this;
    }
    BiMap.prototype.set = set;
    InverseMap.prototype.set = set;
    function del(key) {
      if (this.items.has(key)) {
        var currentValue = this.items.get(key);
        this.items.delete(key);
        this.inverse.items.delete(currentValue);
        this.size = this.items.size;
        this.inverse.size = this.inverse.items.size;
        return true;
      }
      return false;
    }
    BiMap.prototype.delete = del;
    InverseMap.prototype.delete = del;
    var METHODS = ["has", "get", "forEach", "keys", "values", "entries"];
    METHODS.forEach(function(name) {
      BiMap.prototype[name] = InverseMap.prototype[name] = function() {
        return Map.prototype[name].apply(this.items, arguments);
      };
    });
    if (typeof Symbol !== "undefined") {
      BiMap.prototype[Symbol.iterator] = BiMap.prototype.entries;
      InverseMap.prototype[Symbol.iterator] = InverseMap.prototype.entries;
    }
    BiMap.prototype.inspect = function() {
      var dummy = {
        left: this.items,
        right: this.inverse.items
      };
      Object.defineProperty(dummy, "constructor", {
        value: BiMap,
        enumerable: false
      });
      return dummy;
    };
    if (typeof Symbol !== "undefined")
      BiMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = BiMap.prototype.inspect;
    InverseMap.prototype.inspect = function() {
      var dummy = {
        left: this.inverse.items,
        right: this.items
      };
      Object.defineProperty(dummy, "constructor", {
        value: InverseMap,
        enumerable: false
      });
      return dummy;
    };
    if (typeof Symbol !== "undefined")
      InverseMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = InverseMap.prototype.inspect;
    BiMap.from = function(iterable) {
      var bimap = new BiMap();
      forEach(iterable, function(value, key) {
        bimap.set(key, value);
      });
      return bimap;
    };
    module2.exports = BiMap;
  }
});

// node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/obliterator/iterator.js"(exports, module2) {
    "use strict";
    function Iterator(next) {
      if (typeof next !== "function")
        throw new Error("obliterator/iterator: expecting a function!");
      this.next = next;
    }
    if (typeof Symbol !== "undefined")
      Iterator.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator.of = function() {
      var args = arguments, l = args.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return { done: true };
        return { done: false, value: args[i++] };
      });
    };
    Iterator.empty = function() {
      var iterator = new Iterator(function() {
        return { done: true };
      });
      return iterator;
    };
    Iterator.fromSequence = function(sequence) {
      var i = 0, l = sequence.length;
      return new Iterator(function() {
        if (i >= l)
          return { done: true };
        return { done: false, value: sequence[i++] };
      });
    };
    Iterator.is = function(value) {
      if (value instanceof Iterator)
        return true;
      return typeof value === "object" && value !== null && typeof value.next === "function";
    };
    module2.exports = Iterator;
  }
});

// node_modules/mnemonist/utils/bitwise.js
var require_bitwise = __commonJS({
  "node_modules/mnemonist/utils/bitwise.js"(exports) {
    "use strict";
    function msb32(x) {
      x |= x >> 1;
      x |= x >> 2;
      x |= x >> 4;
      x |= x >> 8;
      x |= x >> 16;
      return x & ~(x >> 1);
    }
    exports.msb32 = msb32;
    function msb8(x) {
      x |= x >> 1;
      x |= x >> 2;
      x |= x >> 4;
      return x & ~(x >> 1);
    }
    exports.msb8 = msb8;
    exports.test = function(x, pos) {
      return x >> pos & 1;
    };
    exports.criticalBit8 = function(a, b) {
      return msb8(a ^ b);
    };
    exports.criticalBit8Mask = function(a, b) {
      return ~msb8(a ^ b) >>> 0 & 255;
    };
    exports.testCriticalBit8 = function(x, mask) {
      return 1 + (x | mask) >> 8;
    };
    exports.criticalBit32Mask = function(a, b) {
      return ~msb32(a ^ b) >>> 0 & 4294967295;
    };
    exports.popcount = function(x) {
      x -= x >> 1 & 1431655765;
      x = (x & 858993459) + (x >> 2 & 858993459);
      x = x + (x >> 4) & 252645135;
      x += x >> 8;
      x += x >> 16;
      return x & 127;
    };
    var TABLE8 = new Uint8Array(Math.pow(2, 8));
    for (i = 0, l = TABLE8.length; i < l; i++)
      TABLE8[i] = exports.popcount(i);
    var i;
    var l;
    exports.table8Popcount = function(x) {
      return TABLE8[x & 255] + TABLE8[x >> 8 & 255] + TABLE8[x >> 16 & 255] + TABLE8[x >> 24 & 255];
    };
  }
});

// node_modules/mnemonist/bit-set.js
var require_bit_set = __commonJS({
  "node_modules/mnemonist/bit-set.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var bitwise = require_bitwise();
    function BitSet(length) {
      this.length = length;
      this.clear();
    }
    BitSet.prototype.clear = function() {
      this.size = 0;
      this.array = new Uint32Array(Math.ceil(this.length / 32));
    };
    BitSet.prototype.set = function(index, value) {
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex], newBytes;
      if (value === 0 || value === false)
        newBytes = this.array[byteIndex] &= ~(1 << pos);
      else
        newBytes = this.array[byteIndex] |= 1 << pos;
      newBytes = newBytes >>> 0;
      if (newBytes > oldBytes)
        this.size++;
      else if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitSet.prototype.reset = function(index) {
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex], newBytes;
      newBytes = this.array[byteIndex] &= ~(1 << pos);
      if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitSet.prototype.flip = function(index) {
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex];
      var newBytes = this.array[byteIndex] ^= 1 << pos;
      newBytes = newBytes >>> 0;
      if (newBytes > oldBytes)
        this.size++;
      else if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitSet.prototype.get = function(index) {
      var byteIndex = index >> 5, pos = index & 31;
      return this.array[byteIndex] >> pos & 1;
    };
    BitSet.prototype.test = function(index) {
      return Boolean(this.get(index));
    };
    BitSet.prototype.rank = function(i) {
      if (this.size === 0)
        return 0;
      var byteIndex = i >> 5, pos = i & 31, r = 0;
      for (var j = 0; j < byteIndex; j++)
        r += bitwise.table8Popcount(this.array[j]);
      var maskedByte = this.array[byteIndex] & (1 << pos) - 1;
      r += bitwise.table8Popcount(maskedByte);
      return r;
    };
    BitSet.prototype.select = function(r) {
      if (this.size === 0)
        return -1;
      if (r >= this.length)
        return -1;
      var byte, b = 32, p = 0, c = 0;
      for (var i = 0, l = this.array.length; i < l; i++) {
        byte = this.array[i];
        if (byte === 0)
          continue;
        if (i === l - 1)
          b = this.length % 32 || 32;
        for (var j = 0; j < b; j++, p++) {
          c += byte >> j & 1;
          if (c === r)
            return p;
        }
      }
    };
    BitSet.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var length = this.length, byte, bit, b = 32;
      for (var i = 0, l = this.array.length; i < l; i++) {
        byte = this.array[i];
        if (i === l - 1)
          b = length % 32 || 32;
        for (var j = 0; j < b; j++) {
          bit = byte >> j & 1;
          callback.call(scope, bit, i * 32 + j);
        }
      }
    };
    BitSet.prototype.values = function() {
      var length = this.length, inner = false, byte, bit, array = this.array, l = array.length, i = 0, j = -1, b = 32;
      return new Iterator(function next() {
        if (!inner) {
          if (i >= l)
            return {
              done: true
            };
          if (i === l - 1)
            b = length % 32 || 32;
          byte = array[i++];
          inner = true;
          j = -1;
        }
        j++;
        if (j >= b) {
          inner = false;
          return next();
        }
        bit = byte >> j & 1;
        return {
          value: bit
        };
      });
    };
    BitSet.prototype.entries = function() {
      var length = this.length, inner = false, byte, bit, array = this.array, index, l = array.length, i = 0, j = -1, b = 32;
      return new Iterator(function next() {
        if (!inner) {
          if (i >= l)
            return {
              done: true
            };
          if (i === l - 1)
            b = length % 32 || 32;
          byte = array[i++];
          inner = true;
          j = -1;
        }
        j++;
        index = ~-i * 32 + j;
        if (j >= b) {
          inner = false;
          return next();
        }
        bit = byte >> j & 1;
        return {
          value: [index, bit]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      BitSet.prototype[Symbol.iterator] = BitSet.prototype.values;
    BitSet.prototype.inspect = function() {
      var proxy = new Uint8Array(this.length);
      this.forEach(function(bit, i) {
        proxy[i] = bit;
      });
      Object.defineProperty(proxy, "constructor", {
        value: BitSet,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      BitSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = BitSet.prototype.inspect;
    BitSet.prototype.toJSON = function() {
      return Array.from(this.array);
    };
    module2.exports = BitSet;
  }
});

// node_modules/mnemonist/bit-vector.js
var require_bit_vector = __commonJS({
  "node_modules/mnemonist/bit-vector.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var bitwise = require_bitwise();
    var DEFAULT_GROWING_POLICY = function(capacity) {
      return Math.max(1, Math.ceil(capacity * 1.5));
    };
    function createByteArray(capacity) {
      return new Uint32Array(Math.ceil(capacity / 32));
    }
    function BitVector(initialLengthOrOptions) {
      var initialLength = initialLengthOrOptions || 0, policy = DEFAULT_GROWING_POLICY;
      if (typeof initialLengthOrOptions === "object") {
        initialLength = initialLengthOrOptions.initialLength || initialLengthOrOptions.initialCapacity || 0;
        policy = initialLengthOrOptions.policy || policy;
      }
      this.size = 0;
      this.length = initialLength;
      this.capacity = Math.ceil(this.length / 32) * 32;
      this.policy = policy;
      this.array = createByteArray(this.capacity);
    }
    BitVector.prototype.set = function(index, value) {
      if (this.length < index)
        throw new Error("BitVector.set: index out of bounds.");
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex], newBytes;
      if (value === 0 || value === false)
        newBytes = this.array[byteIndex] &= ~(1 << pos);
      else
        newBytes = this.array[byteIndex] |= 1 << pos;
      newBytes = newBytes >>> 0;
      if (newBytes > oldBytes)
        this.size++;
      else if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitVector.prototype.reset = function(index) {
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex], newBytes;
      newBytes = this.array[byteIndex] &= ~(1 << pos);
      if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitVector.prototype.flip = function(index) {
      var byteIndex = index >> 5, pos = index & 31, oldBytes = this.array[byteIndex];
      var newBytes = this.array[byteIndex] ^= 1 << pos;
      newBytes = newBytes >>> 0;
      if (newBytes > oldBytes)
        this.size++;
      else if (newBytes < oldBytes)
        this.size--;
      return this;
    };
    BitVector.prototype.applyPolicy = function(override) {
      var newCapacity = this.policy(override || this.capacity);
      if (typeof newCapacity !== "number" || newCapacity < 0)
        throw new Error("mnemonist/bit-vector.applyPolicy: policy returned an invalid value (expecting a positive integer).");
      if (newCapacity <= this.capacity)
        throw new Error("mnemonist/bit-vector.applyPolicy: policy returned a less or equal capacity to allocate.");
      return Math.ceil(newCapacity / 32) * 32;
    };
    BitVector.prototype.reallocate = function(capacity) {
      var virtualCapacity = capacity;
      capacity = Math.ceil(capacity / 32) * 32;
      if (virtualCapacity < this.length)
        this.length = virtualCapacity;
      if (capacity === this.capacity)
        return this;
      var oldArray = this.array;
      var storageLength = capacity / 32;
      if (storageLength === this.array.length)
        return this;
      if (storageLength > this.array.length) {
        this.array = new Uint32Array(storageLength);
        this.array.set(oldArray, 0);
      } else {
        this.array = oldArray.slice(0, storageLength);
      }
      this.capacity = capacity;
      return this;
    };
    BitVector.prototype.grow = function(capacity) {
      var newCapacity;
      if (typeof capacity === "number") {
        if (this.capacity >= capacity)
          return this;
        newCapacity = this.capacity;
        while (newCapacity < capacity)
          newCapacity = this.applyPolicy(newCapacity);
        this.reallocate(newCapacity);
        return this;
      }
      newCapacity = this.applyPolicy();
      this.reallocate(newCapacity);
      return this;
    };
    BitVector.prototype.resize = function(length) {
      if (length === this.length)
        return this;
      if (length < this.length) {
        this.length = length;
        return this;
      }
      this.length = length;
      this.reallocate(length);
      return this;
    };
    BitVector.prototype.push = function(value) {
      if (this.capacity === this.length)
        this.grow();
      if (value === 0 || value === false)
        return ++this.length;
      this.size++;
      var index = this.length++, byteIndex = index >> 5, pos = index & 31;
      this.array[byteIndex] |= 1 << pos;
      return this.length;
    };
    BitVector.prototype.pop = function() {
      if (this.length === 0)
        return;
      var index = --this.length;
      var byteIndex = index >> 5, pos = index & 31;
      return this.array[byteIndex] >> pos & 1;
    };
    BitVector.prototype.get = function(index) {
      if (this.length < index)
        return void 0;
      var byteIndex = index >> 5, pos = index & 31;
      return this.array[byteIndex] >> pos & 1;
    };
    BitVector.prototype.test = function(index) {
      if (this.length < index)
        return false;
      return Boolean(this.get(index));
    };
    BitVector.prototype.rank = function(i) {
      if (this.size === 0)
        return 0;
      var byteIndex = i >> 5, pos = i & 31, r = 0;
      for (var j = 0; j < byteIndex; j++)
        r += bitwise.table8Popcount(this.array[j]);
      var maskedByte = this.array[byteIndex] & (1 << pos) - 1;
      r += bitwise.table8Popcount(maskedByte);
      return r;
    };
    BitVector.prototype.select = function(r) {
      if (this.size === 0)
        return -1;
      if (r >= this.length)
        return -1;
      var byte, b = 32, p = 0, c = 0;
      for (var i = 0, l = this.array.length; i < l; i++) {
        byte = this.array[i];
        if (byte === 0)
          continue;
        if (i === l - 1)
          b = this.length % 32 || 32;
        for (var j = 0; j < b; j++, p++) {
          c += byte >> j & 1;
          if (c === r)
            return p;
        }
      }
    };
    BitVector.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var length = this.length, byte, bit, b = 32;
      for (var i = 0, l = this.array.length; i < l; i++) {
        byte = this.array[i];
        if (i === l - 1)
          b = length % 32 || 32;
        for (var j = 0; j < b; j++) {
          bit = byte >> j & 1;
          callback.call(scope, bit, i * 32 + j);
        }
      }
    };
    BitVector.prototype.values = function() {
      var length = this.length, inner = false, byte, bit, array = this.array, l = array.length, i = 0, j = -1, b = 32;
      return new Iterator(function next() {
        if (!inner) {
          if (i >= l)
            return {
              done: true
            };
          if (i === l - 1)
            b = length % 32 || 32;
          byte = array[i++];
          inner = true;
          j = -1;
        }
        j++;
        if (j >= b) {
          inner = false;
          return next();
        }
        bit = byte >> j & 1;
        return {
          value: bit
        };
      });
    };
    BitVector.prototype.entries = function() {
      var length = this.length, inner = false, byte, bit, array = this.array, index, l = array.length, i = 0, j = -1, b = 32;
      return new Iterator(function next() {
        if (!inner) {
          if (i >= l)
            return {
              done: true
            };
          if (i === l - 1)
            b = length % 32 || 32;
          byte = array[i++];
          inner = true;
          j = -1;
        }
        j++;
        index = ~-i * 32 + j;
        if (j >= b) {
          inner = false;
          return next();
        }
        bit = byte >> j & 1;
        return {
          value: [index, bit]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      BitVector.prototype[Symbol.iterator] = BitVector.prototype.values;
    BitVector.prototype.inspect = function() {
      var proxy = new Uint8Array(this.length);
      this.forEach(function(bit, i) {
        proxy[i] = bit;
      });
      Object.defineProperty(proxy, "constructor", {
        value: BitVector,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      BitVector.prototype[Symbol.for("nodejs.util.inspect.custom")] = BitVector.prototype.inspect;
    BitVector.prototype.toJSON = function() {
      return Array.from(this.array.slice(0, (this.length >> 5) + 1));
    };
    module2.exports = BitVector;
  }
});

// node_modules/mnemonist/utils/murmurhash3.js
var require_murmurhash3 = __commonJS({
  "node_modules/mnemonist/utils/murmurhash3.js"(exports, module2) {
    "use strict";
    function mul32(a, b) {
      return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16) & 4294967295;
    }
    function sum32(a, b) {
      return (a & 65535) + (b >>> 16) + (((a >>> 16) + b & 65535) << 16) & 4294967295;
    }
    function rotl32(a, b) {
      return a << b | a >>> 32 - b;
    }
    module2.exports = function murmurhash3(seed, data) {
      var c1 = 3432918353, c2 = 461845907, r1 = 15, r2 = 13, m = 5, n = 1801774676;
      var hash6 = seed, k1, i, l;
      for (i = 0, l = data.length - 4; i <= l; i += 4) {
        k1 = data[i] | data[i + 1] << 8 | data[i + 2] << 16 | data[i + 3] << 24;
        k1 = mul32(k1, c1);
        k1 = rotl32(k1, r1);
        k1 = mul32(k1, c2);
        hash6 ^= k1;
        hash6 = rotl32(hash6, r2);
        hash6 = mul32(hash6, m);
        hash6 = sum32(hash6, n);
      }
      k1 = 0;
      switch (data.length & 3) {
        case 3:
          k1 ^= data[i + 2] << 16;
        case 2:
          k1 ^= data[i + 1] << 8;
        case 1:
          k1 ^= data[i];
          k1 = mul32(k1, c1);
          k1 = rotl32(k1, r1);
          k1 = mul32(k1, c2);
          hash6 ^= k1;
        default:
      }
      hash6 ^= data.length;
      hash6 ^= hash6 >>> 16;
      hash6 = mul32(hash6, 2246822507);
      hash6 ^= hash6 >>> 13;
      hash6 = mul32(hash6, 3266489909);
      hash6 ^= hash6 >>> 16;
      return hash6 >>> 0;
    };
  }
});

// node_modules/mnemonist/bloom-filter.js
var require_bloom_filter = __commonJS({
  "node_modules/mnemonist/bloom-filter.js"(exports, module2) {
    "use strict";
    var murmurhash3 = require_murmurhash3();
    var forEach = require_foreach();
    var LN2_SQUARED = Math.LN2 * Math.LN2;
    var DEFAULTS = {
      errorRate: 5e-3
    };
    function stringToByteArray(string) {
      var array = new Uint16Array(string.length), i, l;
      for (i = 0, l = string.length; i < l; i++)
        array[i] = string.charCodeAt(i);
      return array;
    }
    function hashArray(length, seed, array) {
      var hash6 = murmurhash3(seed * 4221880213 & 4294967295, array);
      return hash6 % (length * 8);
    }
    function BloomFilter(capacityOrOptions) {
      var options = {};
      if (!capacityOrOptions)
        throw new Error("mnemonist/BloomFilter.constructor: a BloomFilter must be created with a capacity.");
      if (typeof capacityOrOptions === "object")
        options = capacityOrOptions;
      else
        options.capacity = capacityOrOptions;
      if (typeof options.capacity !== "number" || options.capacity <= 0)
        throw new Error("mnemonist/BloomFilter.constructor: `capacity` option should be a positive integer.");
      this.capacity = options.capacity;
      this.errorRate = options.errorRate || DEFAULTS.errorRate;
      if (typeof this.errorRate !== "number" || options.errorRate <= 0)
        throw new Error("mnemonist/BloomFilter.constructor: `errorRate` option should be a positive float.");
      this.clear();
    }
    BloomFilter.prototype.clear = function() {
      var bits = -1 / LN2_SQUARED * this.capacity * Math.log(this.errorRate), length = bits / 8 | 0;
      this.hashFunctions = length * 8 / this.capacity * Math.LN2 | 0;
      this.data = new Uint8Array(length);
      return;
    };
    BloomFilter.prototype.add = function(string) {
      var array = stringToByteArray(string);
      for (var i = 0, l = this.hashFunctions; i < l; i++) {
        var index = hashArray(this.data.length, i, array), position = 1 << (7 & index);
        this.data[index >> 3] |= position;
      }
      return this;
    };
    BloomFilter.prototype.test = function(string) {
      var array = stringToByteArray(string);
      for (var i = 0, l = this.hashFunctions; i < l; i++) {
        var index = hashArray(this.data.length, i, array);
        if (!(this.data[index >> 3] & 1 << (7 & index)))
          return false;
      }
      return true;
    };
    BloomFilter.prototype.toJSON = function() {
      return this.data;
    };
    BloomFilter.from = function(iterable, options) {
      if (!options) {
        options = iterable.length || iterable.size;
        if (typeof options !== "number")
          throw new Error("BloomFilter.from: could not infer the filter's capacity. Try passing it as second argument.");
      }
      var filter = new BloomFilter(options);
      forEach(iterable, function(value) {
        filter.add(value);
      });
      return filter;
    };
    module2.exports = BloomFilter;
  }
});

// node_modules/mnemonist/bk-tree.js
var require_bk_tree = __commonJS({
  "node_modules/mnemonist/bk-tree.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    function BKTree(distance) {
      if (typeof distance !== "function")
        throw new Error("mnemonist/BKTree.constructor: given `distance` should be a function.");
      this.distance = distance;
      this.clear();
    }
    BKTree.prototype.add = function(item) {
      if (!this.root) {
        this.root = {
          item,
          children: {}
        };
        this.size++;
        return this;
      }
      var node = this.root, d;
      while (true) {
        d = this.distance(item, node.item);
        if (!node.children[d])
          break;
        node = node.children[d];
      }
      node.children[d] = {
        item,
        children: {}
      };
      this.size++;
      return this;
    };
    BKTree.prototype.search = function(n, query) {
      if (!this.root)
        return [];
      var found = [], stack = [this.root], node, child, d, i, l;
      while (stack.length) {
        node = stack.pop();
        d = this.distance(query, node.item);
        if (d <= n)
          found.push({ item: node.item, distance: d });
        for (i = d - n, l = d + n + 1; i < l; i++) {
          child = node.children[i];
          if (child)
            stack.push(child);
        }
      }
      return found;
    };
    BKTree.prototype.clear = function() {
      this.size = 0;
      this.root = null;
    };
    BKTree.prototype.toJSON = function() {
      return this.root;
    };
    BKTree.prototype.inspect = function() {
      var array = [], stack = [this.root], node, d;
      while (stack.length) {
        node = stack.pop();
        if (!node)
          continue;
        array.push(node.item);
        for (d in node.children)
          stack.push(node.children[d]);
      }
      Object.defineProperty(array, "constructor", {
        value: BKTree,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      BKTree.prototype[Symbol.for("nodejs.util.inspect.custom")] = BKTree.prototype.inspect;
    BKTree.from = function(iterable, distance) {
      var tree = new BKTree(distance);
      forEach(iterable, function(value) {
        tree.add(value);
      });
      return tree;
    };
    module2.exports = BKTree;
  }
});

// node_modules/mnemonist/fixed-deque.js
var require_fixed_deque = __commonJS({
  "node_modules/mnemonist/fixed-deque.js"(exports, module2) {
    "use strict";
    var iterables = require_iterables();
    var Iterator = require_iterator();
    function FixedDeque(ArrayClass, capacity) {
      if (arguments.length < 2)
        throw new Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
      if (typeof capacity !== "number" || capacity <= 0)
        throw new Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
      this.ArrayClass = ArrayClass;
      this.capacity = capacity;
      this.items = new ArrayClass(this.capacity);
      this.clear();
    }
    FixedDeque.prototype.clear = function() {
      this.start = 0;
      this.size = 0;
    };
    FixedDeque.prototype.push = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
      var index = (this.start + this.size) % this.capacity;
      this.items[index] = item;
      return ++this.size;
    };
    FixedDeque.prototype.unshift = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
      var index = this.start - 1;
      if (this.start === 0)
        index = this.capacity - 1;
      this.items[index] = item;
      this.start = index;
      return ++this.size;
    };
    FixedDeque.prototype.pop = function() {
      if (this.size === 0)
        return;
      const index = (this.start + this.size - 1) % this.capacity;
      this.size--;
      return this.items[index];
    };
    FixedDeque.prototype.shift = function() {
      if (this.size === 0)
        return;
      var index = this.start;
      this.size--;
      this.start++;
      if (this.start === this.capacity)
        this.start = 0;
      return this.items[index];
    };
    FixedDeque.prototype.peekFirst = function() {
      if (this.size === 0)
        return;
      return this.items[this.start];
    };
    FixedDeque.prototype.peekLast = function() {
      if (this.size === 0)
        return;
      var index = this.start + this.size - 1;
      if (index > this.capacity)
        index -= this.capacity;
      return this.items[index];
    };
    FixedDeque.prototype.get = function(index) {
      if (this.size === 0)
        return;
      index = this.start + index;
      if (index > this.capacity)
        index -= this.capacity;
      return this.items[index];
    };
    FixedDeque.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var c = this.capacity, l = this.size, i = this.start, j = 0;
      while (j < l) {
        callback.call(scope, this.items[i], j, this);
        i++;
        j++;
        if (i === c)
          i = 0;
      }
    };
    FixedDeque.prototype.toArray = function() {
      var offset = this.start + this.size;
      if (offset < this.capacity)
        return this.items.slice(this.start, offset);
      var array = new this.ArrayClass(this.size), c = this.capacity, l = this.size, i = this.start, j = 0;
      while (j < l) {
        array[j] = this.items[i];
        i++;
        j++;
        if (i === c)
          i = 0;
      }
      return array;
    };
    FixedDeque.prototype.values = function() {
      var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
      return new Iterator(function() {
        if (j >= l)
          return {
            done: true
          };
        var value = items[i];
        i++;
        j++;
        if (i === c)
          i = 0;
        return {
          value,
          done: false
        };
      });
    };
    FixedDeque.prototype.entries = function() {
      var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
      return new Iterator(function() {
        if (j >= l)
          return {
            done: true
          };
        var value = items[i];
        i++;
        if (i === c)
          i = 0;
        return {
          value: [j++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      FixedDeque.prototype[Symbol.iterator] = FixedDeque.prototype.values;
    FixedDeque.prototype.inspect = function() {
      var array = this.toArray();
      array.type = this.ArrayClass.name;
      array.capacity = this.capacity;
      Object.defineProperty(array, "constructor", {
        value: FixedDeque,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FixedDeque.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedDeque.prototype.inspect;
    FixedDeque.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var deque = new FixedDeque(ArrayClass, capacity);
      if (iterables.isArrayLike(iterable)) {
        var i, l;
        for (i = 0, l = iterable.length; i < l; i++)
          deque.items[i] = iterable[i];
        deque.size = l;
        return deque;
      }
      iterables.forEach(iterable, function(value) {
        deque.push(value);
      });
      return deque;
    };
    module2.exports = FixedDeque;
  }
});

// node_modules/mnemonist/circular-buffer.js
var require_circular_buffer = __commonJS({
  "node_modules/mnemonist/circular-buffer.js"(exports, module2) {
    "use strict";
    var iterables = require_iterables();
    var FixedDeque = require_fixed_deque();
    function CircularBuffer(ArrayClass, capacity) {
      if (arguments.length < 2)
        throw new Error("mnemonist/circular-buffer: expecting an Array class and a capacity.");
      if (typeof capacity !== "number" || capacity <= 0)
        throw new Error("mnemonist/circular-buffer: `capacity` should be a positive number.");
      this.ArrayClass = ArrayClass;
      this.capacity = capacity;
      this.items = new ArrayClass(this.capacity);
      this.clear();
    }
    function paste(name) {
      CircularBuffer.prototype[name] = FixedDeque.prototype[name];
    }
    Object.keys(FixedDeque.prototype).forEach(paste);
    if (typeof Symbol !== "undefined")
      Object.getOwnPropertySymbols(FixedDeque.prototype).forEach(paste);
    CircularBuffer.prototype.push = function(item) {
      var index = (this.start + this.size) % this.capacity;
      this.items[index] = item;
      if (this.size === this.capacity) {
        this.start = (index + 1) % this.capacity;
        return this.size;
      }
      return ++this.size;
    };
    CircularBuffer.prototype.unshift = function(item) {
      var index = this.start - 1;
      if (this.start === 0)
        index = this.capacity - 1;
      this.items[index] = item;
      if (this.size === this.capacity) {
        this.start = index;
        return this.size;
      }
      this.start = index;
      return ++this.size;
    };
    CircularBuffer.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/circular-buffer.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var buffer = new CircularBuffer(ArrayClass, capacity);
      if (iterables.isArrayLike(iterable)) {
        var i, l;
        for (i = 0, l = iterable.length; i < l; i++)
          buffer.items[i] = iterable[i];
        buffer.size = l;
        return buffer;
      }
      iterables.forEach(iterable, function(value) {
        buffer.push(value);
      });
      return buffer;
    };
    module2.exports = CircularBuffer;
  }
});

// node_modules/mnemonist/default-map.js
var require_default_map = __commonJS({
  "node_modules/mnemonist/default-map.js"(exports, module2) {
    "use strict";
    function DefaultMap(factory) {
      if (typeof factory !== "function")
        throw new Error("mnemonist/DefaultMap.constructor: expecting a function.");
      this.items = /* @__PURE__ */ new Map();
      this.factory = factory;
      this.size = 0;
    }
    DefaultMap.prototype.clear = function() {
      this.items.clear();
      this.size = 0;
    };
    DefaultMap.prototype.get = function(key) {
      var value = this.items.get(key);
      if (typeof value === "undefined") {
        value = this.factory(key, this.size);
        this.items.set(key, value);
        this.size++;
      }
      return value;
    };
    DefaultMap.prototype.peek = function(key) {
      return this.items.get(key);
    };
    DefaultMap.prototype.set = function(key, value) {
      this.items.set(key, value);
      this.size = this.items.size;
      return this;
    };
    DefaultMap.prototype.has = function(key) {
      return this.items.has(key);
    };
    DefaultMap.prototype.delete = function(key) {
      var deleted = this.items.delete(key);
      this.size = this.items.size;
      return deleted;
    };
    DefaultMap.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      this.items.forEach(callback, scope);
    };
    DefaultMap.prototype.entries = function() {
      return this.items.entries();
    };
    DefaultMap.prototype.keys = function() {
      return this.items.keys();
    };
    DefaultMap.prototype.values = function() {
      return this.items.values();
    };
    if (typeof Symbol !== "undefined")
      DefaultMap.prototype[Symbol.iterator] = DefaultMap.prototype.entries;
    DefaultMap.prototype.inspect = function() {
      return this.items;
    };
    if (typeof Symbol !== "undefined")
      DefaultMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = DefaultMap.prototype.inspect;
    DefaultMap.autoIncrement = function() {
      var i = 0;
      return function() {
        return i++;
      };
    };
    module2.exports = DefaultMap;
  }
});

// node_modules/mnemonist/default-weak-map.js
var require_default_weak_map = __commonJS({
  "node_modules/mnemonist/default-weak-map.js"(exports, module2) {
    "use strict";
    function DefaultWeakMap(factory) {
      if (typeof factory !== "function")
        throw new Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");
      this.items = /* @__PURE__ */ new WeakMap();
      this.factory = factory;
    }
    DefaultWeakMap.prototype.clear = function() {
      this.items = /* @__PURE__ */ new WeakMap();
    };
    DefaultWeakMap.prototype.get = function(key) {
      var value = this.items.get(key);
      if (typeof value === "undefined") {
        value = this.factory(key);
        this.items.set(key, value);
      }
      return value;
    };
    DefaultWeakMap.prototype.peek = function(key) {
      return this.items.get(key);
    };
    DefaultWeakMap.prototype.set = function(key, value) {
      this.items.set(key, value);
      return this;
    };
    DefaultWeakMap.prototype.has = function(key) {
      return this.items.has(key);
    };
    DefaultWeakMap.prototype.delete = function(key) {
      return this.items.delete(key);
    };
    DefaultWeakMap.prototype.inspect = function() {
      return this.items;
    };
    if (typeof Symbol !== "undefined")
      DefaultWeakMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = DefaultWeakMap.prototype.inspect;
    module2.exports = DefaultWeakMap;
  }
});

// node_modules/mnemonist/static-disjoint-set.js
var require_static_disjoint_set = __commonJS({
  "node_modules/mnemonist/static-disjoint-set.js"(exports, module2) {
    "use strict";
    var helpers = require_typed_arrays();
    function StaticDisjointSet(size) {
      var ParentsTypedArray = helpers.getPointerArray(size), RanksTypedArray = helpers.getPointerArray(Math.log2(size));
      this.size = size;
      this.dimension = size;
      this.parents = new ParentsTypedArray(size);
      this.ranks = new RanksTypedArray(size);
      for (var i = 0; i < size; i++)
        this.parents[i] = i;
    }
    StaticDisjointSet.prototype.find = function(x) {
      var y = x;
      var c, p;
      while (true) {
        c = this.parents[y];
        if (y === c)
          break;
        y = c;
      }
      while (true) {
        p = this.parents[x];
        if (p === y)
          break;
        this.parents[x] = y;
        x = p;
      }
      return y;
    };
    StaticDisjointSet.prototype.union = function(x, y) {
      var xRoot = this.find(x), yRoot = this.find(y);
      if (xRoot === yRoot)
        return this;
      this.dimension--;
      var xRank = this.ranks[x], yRank = this.ranks[y];
      if (xRank < yRank) {
        this.parents[xRoot] = yRoot;
      } else if (xRank > yRank) {
        this.parents[yRoot] = xRoot;
      } else {
        this.parents[yRoot] = xRoot;
        this.ranks[xRoot]++;
      }
      return this;
    };
    StaticDisjointSet.prototype.connected = function(x, y) {
      var xRoot = this.find(x);
      return xRoot === this.find(y);
    };
    StaticDisjointSet.prototype.mapping = function() {
      var MappingClass = helpers.getPointerArray(this.dimension);
      var ids = {}, mapping = new MappingClass(this.size), c = 0;
      var r;
      for (var i = 0, l = this.parents.length; i < l; i++) {
        r = this.find(i);
        if (typeof ids[r] === "undefined") {
          mapping[i] = c;
          ids[r] = c++;
        } else {
          mapping[i] = ids[r];
        }
      }
      return mapping;
    };
    StaticDisjointSet.prototype.compile = function() {
      var ids = {}, result = new Array(this.dimension), c = 0;
      var r;
      for (var i = 0, l = this.parents.length; i < l; i++) {
        r = this.find(i);
        if (typeof ids[r] === "undefined") {
          result[c] = [i];
          ids[r] = c++;
        } else {
          result[ids[r]].push(i);
        }
      }
      return result;
    };
    StaticDisjointSet.prototype.inspect = function() {
      var array = this.compile();
      Object.defineProperty(array, "constructor", {
        value: StaticDisjointSet,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      StaticDisjointSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = StaticDisjointSet.prototype.inspect;
    module2.exports = StaticDisjointSet;
  }
});

// node_modules/mnemonist/fixed-reverse-heap.js
var require_fixed_reverse_heap = __commonJS({
  "node_modules/mnemonist/fixed-reverse-heap.js"(exports, module2) {
    "use strict";
    var comparators = require_comparators();
    var Heap = require_heap();
    var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR;
    var reverseComparator = comparators.reverseComparator;
    function siftUp(compare4, heap, size, i) {
      var endIndex = size, startIndex = i, item = heap[i], childIndex = 2 * i + 1, rightIndex;
      while (childIndex < endIndex) {
        rightIndex = childIndex + 1;
        if (rightIndex < endIndex && compare4(heap[childIndex], heap[rightIndex]) >= 0) {
          childIndex = rightIndex;
        }
        heap[i] = heap[childIndex];
        i = childIndex;
        childIndex = 2 * i + 1;
      }
      heap[i] = item;
      Heap.siftDown(compare4, heap, startIndex, i);
    }
    function consume(ArrayClass, compare4, heap, size) {
      var l = size, i = l;
      var array = new ArrayClass(size), lastItem, item;
      while (i > 0) {
        lastItem = heap[--i];
        if (i !== 0) {
          item = heap[0];
          heap[0] = lastItem;
          siftUp(compare4, heap, --size, 0);
          lastItem = item;
        }
        array[i] = lastItem;
      }
      return array;
    }
    function FixedReverseHeap(ArrayClass, comparator, capacity) {
      if (arguments.length === 2) {
        capacity = comparator;
        comparator = null;
      }
      this.ArrayClass = ArrayClass;
      this.capacity = capacity;
      this.items = new ArrayClass(capacity);
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof capacity !== "number" && capacity <= 0)
        throw new Error("mnemonist/FixedReverseHeap.constructor: capacity should be a number > 0.");
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/FixedReverseHeap.constructor: given comparator should be a function.");
      this.comparator = reverseComparator(this.comparator);
    }
    FixedReverseHeap.prototype.clear = function() {
      this.size = 0;
    };
    FixedReverseHeap.prototype.push = function(item) {
      if (this.size < this.capacity) {
        this.items[this.size] = item;
        Heap.siftDown(this.comparator, this.items, 0, this.size);
        this.size++;
      } else {
        if (this.comparator(item, this.items[0]) > 0)
          Heap.replace(this.comparator, this.items, item);
      }
      return this.size;
    };
    FixedReverseHeap.prototype.peek = function() {
      return this.items[0];
    };
    FixedReverseHeap.prototype.consume = function() {
      var items = consume(this.ArrayClass, this.comparator, this.items, this.size);
      this.size = 0;
      return items;
    };
    FixedReverseHeap.prototype.toArray = function() {
      return consume(this.ArrayClass, this.comparator, this.items.slice(0, this.size), this.size);
    };
    FixedReverseHeap.prototype.inspect = function() {
      var proxy = this.toArray();
      Object.defineProperty(proxy, "constructor", {
        value: FixedReverseHeap,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      FixedReverseHeap.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedReverseHeap.prototype.inspect;
    module2.exports = FixedReverseHeap;
  }
});

// node_modules/mnemonist/fuzzy-map.js
var require_fuzzy_map = __commonJS({
  "node_modules/mnemonist/fuzzy-map.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    var identity = function(x) {
      return x;
    };
    function FuzzyMap(descriptor) {
      this.items = /* @__PURE__ */ new Map();
      this.clear();
      if (Array.isArray(descriptor)) {
        this.writeHashFunction = descriptor[0];
        this.readHashFunction = descriptor[1];
      } else {
        this.writeHashFunction = descriptor;
        this.readHashFunction = descriptor;
      }
      if (!this.writeHashFunction)
        this.writeHashFunction = identity;
      if (!this.readHashFunction)
        this.readHashFunction = identity;
      if (typeof this.writeHashFunction !== "function")
        throw new Error("mnemonist/FuzzyMap.constructor: invalid hash function given.");
      if (typeof this.readHashFunction !== "function")
        throw new Error("mnemonist/FuzzyMap.constructor: invalid hash function given.");
    }
    FuzzyMap.prototype.clear = function() {
      this.items.clear();
      this.size = 0;
    };
    FuzzyMap.prototype.add = function(item) {
      var key = this.writeHashFunction(item);
      this.items.set(key, item);
      this.size = this.items.size;
      return this;
    };
    FuzzyMap.prototype.set = function(key, item) {
      key = this.writeHashFunction(key);
      this.items.set(key, item);
      this.size = this.items.size;
      return this;
    };
    FuzzyMap.prototype.get = function(key) {
      key = this.readHashFunction(key);
      return this.items.get(key);
    };
    FuzzyMap.prototype.has = function(key) {
      key = this.readHashFunction(key);
      return this.items.has(key);
    };
    FuzzyMap.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      this.items.forEach(function(value) {
        callback.call(scope, value, value);
      });
    };
    FuzzyMap.prototype.values = function() {
      return this.items.values();
    };
    if (typeof Symbol !== "undefined")
      FuzzyMap.prototype[Symbol.iterator] = FuzzyMap.prototype.values;
    FuzzyMap.prototype.inspect = function() {
      var array = Array.from(this.items.values());
      Object.defineProperty(array, "constructor", {
        value: FuzzyMap,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FuzzyMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = FuzzyMap.prototype.inspect;
    FuzzyMap.from = function(iterable, descriptor, useSet) {
      var map = new FuzzyMap(descriptor);
      forEach(iterable, function(value, key) {
        if (useSet)
          map.set(key, value);
        else
          map.add(value);
      });
      return map;
    };
    module2.exports = FuzzyMap;
  }
});

// node_modules/mnemonist/multi-map.js
var require_multi_map = __commonJS({
  "node_modules/mnemonist/multi-map.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    function MultiMap(Container) {
      this.Container = Container || Array;
      this.items = /* @__PURE__ */ new Map();
      this.clear();
      Object.defineProperty(this.items, "constructor", {
        value: MultiMap,
        enumerable: false
      });
    }
    MultiMap.prototype.clear = function() {
      this.size = 0;
      this.dimension = 0;
      this.items.clear();
    };
    MultiMap.prototype.set = function(key, value) {
      var container = this.items.get(key), sizeBefore;
      if (!container) {
        this.dimension++;
        container = new this.Container();
        this.items.set(key, container);
      }
      if (this.Container === Set) {
        sizeBefore = container.size;
        container.add(value);
        if (sizeBefore < container.size)
          this.size++;
      } else {
        container.push(value);
        this.size++;
      }
      return this;
    };
    MultiMap.prototype.delete = function(key) {
      var container = this.items.get(key);
      if (!container)
        return false;
      this.size -= this.Container === Set ? container.size : container.length;
      this.dimension--;
      this.items.delete(key);
      return true;
    };
    MultiMap.prototype.remove = function(key, value) {
      var container = this.items.get(key), wasDeleted, index;
      if (!container)
        return false;
      if (this.Container === Set) {
        wasDeleted = container.delete(value);
        if (wasDeleted)
          this.size--;
        if (container.size === 0) {
          this.items.delete(key);
          this.dimension--;
        }
        return wasDeleted;
      } else {
        index = container.indexOf(value);
        if (index === -1)
          return false;
        this.size--;
        if (container.length === 1) {
          this.items.delete(key);
          this.dimension--;
          return true;
        }
        container.splice(index, 1);
        return true;
      }
    };
    MultiMap.prototype.has = function(key) {
      return this.items.has(key);
    };
    MultiMap.prototype.get = function(key) {
      return this.items.get(key);
    };
    MultiMap.prototype.multiplicity = function(key) {
      var container = this.items.get(key);
      if (typeof container === "undefined")
        return 0;
      return this.Container === Set ? container.size : container.length;
    };
    MultiMap.prototype.count = MultiMap.prototype.multiplicity;
    MultiMap.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var key;
      function inner(value) {
        callback.call(scope, value, key);
      }
      this.items.forEach(function(container, k) {
        key = k;
        container.forEach(inner);
      });
    };
    MultiMap.prototype.forEachAssociation = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      this.items.forEach(callback, scope);
    };
    MultiMap.prototype.keys = function() {
      return this.items.keys();
    };
    MultiMap.prototype.values = function() {
      var iterator = this.items.values(), inContainer = false, countainer, step, i, l;
      if (this.Container === Set)
        return new Iterator(function next() {
          if (!inContainer) {
            step = iterator.next();
            if (step.done)
              return { done: true };
            inContainer = true;
            countainer = step.value.values();
          }
          step = countainer.next();
          if (step.done) {
            inContainer = false;
            return next();
          }
          return {
            done: false,
            value: step.value
          };
        });
      return new Iterator(function next() {
        if (!inContainer) {
          step = iterator.next();
          if (step.done)
            return { done: true };
          inContainer = true;
          countainer = step.value;
          i = 0;
          l = countainer.length;
        }
        if (i >= l) {
          inContainer = false;
          return next();
        }
        return {
          done: false,
          value: countainer[i++]
        };
      });
    };
    MultiMap.prototype.entries = function() {
      var iterator = this.items.entries(), inContainer = false, countainer, step, key, i, l;
      if (this.Container === Set)
        return new Iterator(function next() {
          if (!inContainer) {
            step = iterator.next();
            if (step.done)
              return { done: true };
            inContainer = true;
            key = step.value[0];
            countainer = step.value[1].values();
          }
          step = countainer.next();
          if (step.done) {
            inContainer = false;
            return next();
          }
          return {
            done: false,
            value: [key, step.value]
          };
        });
      return new Iterator(function next() {
        if (!inContainer) {
          step = iterator.next();
          if (step.done)
            return { done: true };
          inContainer = true;
          key = step.value[0];
          countainer = step.value[1];
          i = 0;
          l = countainer.length;
        }
        if (i >= l) {
          inContainer = false;
          return next();
        }
        return {
          done: false,
          value: [key, countainer[i++]]
        };
      });
    };
    MultiMap.prototype.containers = function() {
      return this.items.values();
    };
    MultiMap.prototype.associations = function() {
      return this.items.entries();
    };
    if (typeof Symbol !== "undefined")
      MultiMap.prototype[Symbol.iterator] = MultiMap.prototype.entries;
    MultiMap.prototype.inspect = function() {
      return this.items;
    };
    if (typeof Symbol !== "undefined")
      MultiMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = MultiMap.prototype.inspect;
    MultiMap.prototype.toJSON = function() {
      return this.items;
    };
    MultiMap.from = function(iterable, Container) {
      var map = new MultiMap(Container);
      forEach(iterable, function(value, key) {
        map.set(key, value);
      });
      return map;
    };
    module2.exports = MultiMap;
  }
});

// node_modules/mnemonist/fuzzy-multi-map.js
var require_fuzzy_multi_map = __commonJS({
  "node_modules/mnemonist/fuzzy-multi-map.js"(exports, module2) {
    "use strict";
    var MultiMap = require_multi_map();
    var forEach = require_foreach();
    var identity = function(x) {
      return x;
    };
    function FuzzyMultiMap(descriptor, Container) {
      this.items = new MultiMap(Container);
      this.clear();
      if (Array.isArray(descriptor)) {
        this.writeHashFunction = descriptor[0];
        this.readHashFunction = descriptor[1];
      } else {
        this.writeHashFunction = descriptor;
        this.readHashFunction = descriptor;
      }
      if (!this.writeHashFunction)
        this.writeHashFunction = identity;
      if (!this.readHashFunction)
        this.readHashFunction = identity;
      if (typeof this.writeHashFunction !== "function")
        throw new Error("mnemonist/FuzzyMultiMap.constructor: invalid hash function given.");
      if (typeof this.readHashFunction !== "function")
        throw new Error("mnemonist/FuzzyMultiMap.constructor: invalid hash function given.");
    }
    FuzzyMultiMap.prototype.clear = function() {
      this.items.clear();
      this.size = 0;
      this.dimension = 0;
    };
    FuzzyMultiMap.prototype.add = function(item) {
      var key = this.writeHashFunction(item);
      this.items.set(key, item);
      this.size = this.items.size;
      this.dimension = this.items.dimension;
      return this;
    };
    FuzzyMultiMap.prototype.set = function(key, item) {
      key = this.writeHashFunction(key);
      this.items.set(key, item);
      this.size = this.items.size;
      this.dimension = this.items.dimension;
      return this;
    };
    FuzzyMultiMap.prototype.get = function(key) {
      key = this.readHashFunction(key);
      return this.items.get(key);
    };
    FuzzyMultiMap.prototype.has = function(key) {
      key = this.readHashFunction(key);
      return this.items.has(key);
    };
    FuzzyMultiMap.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      this.items.forEach(function(value) {
        callback.call(scope, value, value);
      });
    };
    FuzzyMultiMap.prototype.values = function() {
      return this.items.values();
    };
    if (typeof Symbol !== "undefined")
      FuzzyMultiMap.prototype[Symbol.iterator] = FuzzyMultiMap.prototype.values;
    FuzzyMultiMap.prototype.inspect = function() {
      var array = Array.from(this);
      Object.defineProperty(array, "constructor", {
        value: FuzzyMultiMap,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FuzzyMultiMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = FuzzyMultiMap.prototype.inspect;
    FuzzyMultiMap.from = function(iterable, descriptor, Container, useSet) {
      if (arguments.length === 3) {
        if (typeof Container === "boolean") {
          useSet = Container;
          Container = Array;
        }
      }
      var map = new FuzzyMultiMap(descriptor, Container);
      forEach(iterable, function(value, key) {
        if (useSet)
          map.set(key, value);
        else
          map.add(value);
      });
      return map;
    };
    module2.exports = FuzzyMultiMap;
  }
});

// node_modules/mnemonist/hashed-array-tree.js
var require_hashed_array_tree = __commonJS({
  "node_modules/mnemonist/hashed-array-tree.js"(exports, module2) {
    "use strict";
    var DEFAULT_BLOCK_SIZE = 1024;
    function powerOfTwo(x) {
      return (x & x - 1) === 0;
    }
    function HashedArrayTree(ArrayClass, initialCapacityOrOptions) {
      if (arguments.length < 1)
        throw new Error("mnemonist/hashed-array-tree: expecting at least a byte array constructor.");
      var initialCapacity = initialCapacityOrOptions || 0, blockSize = DEFAULT_BLOCK_SIZE, initialLength = 0;
      if (typeof initialCapacityOrOptions === "object") {
        initialCapacity = initialCapacityOrOptions.initialCapacity || 0;
        initialLength = initialCapacityOrOptions.initialLength || 0;
        blockSize = initialCapacityOrOptions.blockSize || DEFAULT_BLOCK_SIZE;
      }
      if (!blockSize || !powerOfTwo(blockSize))
        throw new Error("mnemonist/hashed-array-tree: block size should be a power of two.");
      var capacity = Math.max(initialLength, initialCapacity), initialBlocks = Math.ceil(capacity / blockSize);
      this.ArrayClass = ArrayClass;
      this.length = initialLength;
      this.capacity = initialBlocks * blockSize;
      this.blockSize = blockSize;
      this.offsetMask = blockSize - 1;
      this.blockMask = Math.log2(blockSize);
      this.blocks = new Array(initialBlocks);
      for (var i = 0; i < initialBlocks; i++)
        this.blocks[i] = new this.ArrayClass(this.blockSize);
    }
    HashedArrayTree.prototype.set = function(index, value) {
      if (this.length < index)
        throw new Error("HashedArrayTree(" + this.ArrayClass.name + ").set: index out of bounds.");
      var block = index >> this.blockMask, i = index & this.offsetMask;
      this.blocks[block][i] = value;
      return this;
    };
    HashedArrayTree.prototype.get = function(index) {
      if (this.length < index)
        return;
      var block = index >> this.blockMask, i = index & this.offsetMask;
      return this.blocks[block][i];
    };
    HashedArrayTree.prototype.grow = function(capacity) {
      if (typeof capacity !== "number")
        capacity = this.capacity + this.blockSize;
      if (this.capacity >= capacity)
        return this;
      while (this.capacity < capacity) {
        this.blocks.push(new this.ArrayClass(this.blockSize));
        this.capacity += this.blockSize;
      }
      return this;
    };
    HashedArrayTree.prototype.resize = function(length) {
      if (length === this.length)
        return this;
      if (length < this.length) {
        this.length = length;
        return this;
      }
      this.length = length;
      this.grow(length);
      return this;
    };
    HashedArrayTree.prototype.push = function(value) {
      if (this.capacity === this.length)
        this.grow();
      var index = this.length;
      var block = index >> this.blockMask, i = index & this.offsetMask;
      this.blocks[block][i] = value;
      return ++this.length;
    };
    HashedArrayTree.prototype.pop = function() {
      if (this.length === 0)
        return;
      var lastBlock = this.blocks[this.blocks.length - 1];
      var i = --this.length & this.offsetMask;
      return lastBlock[i];
    };
    HashedArrayTree.prototype.inspect = function() {
      var proxy = new this.ArrayClass(this.length), block;
      for (var i = 0, l = this.length; i < l; i++) {
        block = i >> this.blockMask;
        proxy[i] = this.blocks[block][i & this.offsetMask];
      }
      proxy.type = this.ArrayClass.name;
      proxy.items = this.length;
      proxy.capacity = this.capacity;
      proxy.blockSize = this.blockSize;
      Object.defineProperty(proxy, "constructor", {
        value: HashedArrayTree,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      HashedArrayTree.prototype[Symbol.for("nodejs.util.inspect.custom")] = HashedArrayTree.prototype.inspect;
    module2.exports = HashedArrayTree;
  }
});

// node_modules/mnemonist/fixed-stack.js
var require_fixed_stack = __commonJS({
  "node_modules/mnemonist/fixed-stack.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var iterables = require_iterables();
    function FixedStack(ArrayClass, capacity) {
      if (arguments.length < 2)
        throw new Error("mnemonist/fixed-stack: expecting an Array class and a capacity.");
      if (typeof capacity !== "number" || capacity <= 0)
        throw new Error("mnemonist/fixed-stack: `capacity` should be a positive number.");
      this.capacity = capacity;
      this.ArrayClass = ArrayClass;
      this.items = new this.ArrayClass(this.capacity);
      this.clear();
    }
    FixedStack.prototype.clear = function() {
      this.size = 0;
    };
    FixedStack.prototype.push = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-stack.push: stack capacity (" + this.capacity + ") exceeded!");
      this.items[this.size++] = item;
      return this.size;
    };
    FixedStack.prototype.pop = function() {
      if (this.size === 0)
        return;
      return this.items[--this.size];
    };
    FixedStack.prototype.peek = function() {
      return this.items[this.size - 1];
    };
    FixedStack.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0, l = this.items.length; i < l; i++)
        callback.call(scope, this.items[l - i - 1], i, this);
    };
    FixedStack.prototype.toArray = function() {
      var array = new this.ArrayClass(this.size), l = this.size - 1, i = this.size;
      while (i--)
        array[i] = this.items[l - i];
      return array;
    };
    FixedStack.prototype.values = function() {
      var items = this.items, l = this.size, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    FixedStack.prototype.entries = function() {
      var items = this.items, l = this.size, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        return {
          value: [i++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      FixedStack.prototype[Symbol.iterator] = FixedStack.prototype.values;
    FixedStack.prototype.toString = function() {
      return this.toArray().join(",");
    };
    FixedStack.prototype.toJSON = function() {
      return this.toArray();
    };
    FixedStack.prototype.inspect = function() {
      var array = this.toArray();
      array.type = this.ArrayClass.name;
      array.capacity = this.capacity;
      Object.defineProperty(array, "constructor", {
        value: FixedStack,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FixedStack.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedStack.prototype.inspect;
    FixedStack.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/fixed-stack.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var stack = new FixedStack(ArrayClass, capacity);
      if (iterables.isArrayLike(iterable)) {
        var i, l;
        for (i = 0, l = iterable.length; i < l; i++)
          stack.items[i] = iterable[i];
        stack.size = l;
        return stack;
      }
      iterables.forEach(iterable, function(value) {
        stack.push(value);
      });
      return stack;
    };
    module2.exports = FixedStack;
  }
});

// node_modules/mnemonist/static-interval-tree.js
var require_static_interval_tree = __commonJS({
  "node_modules/mnemonist/static-interval-tree.js"(exports, module2) {
    "use strict";
    var iterables = require_iterables();
    var typed = require_typed_arrays();
    var FixedStack = require_fixed_stack();
    function buildBST(intervals, endGetter, sortedIndices, tree, augmentations, i, low, high) {
      var mid = low + (high - low) / 2 | 0, midMinusOne = ~-mid, midPlusOne = -~mid;
      var current = sortedIndices[mid];
      tree[i] = current + 1;
      var end = endGetter ? endGetter(intervals[current]) : intervals[current][1];
      var left = i * 2 + 1, right = i * 2 + 2;
      var leftEnd = -Infinity, rightEnd = -Infinity;
      if (low <= midMinusOne) {
        leftEnd = buildBST(
          intervals,
          endGetter,
          sortedIndices,
          tree,
          augmentations,
          left,
          low,
          midMinusOne
        );
      }
      if (midPlusOne <= high) {
        rightEnd = buildBST(
          intervals,
          endGetter,
          sortedIndices,
          tree,
          augmentations,
          right,
          midPlusOne,
          high
        );
      }
      var augmentation = Math.max(end, leftEnd, rightEnd);
      var augmentationPointer = current;
      if (augmentation === leftEnd)
        augmentationPointer = augmentations[tree[left] - 1];
      else if (augmentation === rightEnd)
        augmentationPointer = augmentations[tree[right] - 1];
      augmentations[current] = augmentationPointer;
      return augmentation;
    }
    function StaticIntervalTree(intervals, getters) {
      this.size = intervals.length;
      this.intervals = intervals;
      var startGetter = null, endGetter = null;
      if (Array.isArray(getters)) {
        startGetter = getters[0];
        endGetter = getters[1];
      }
      var length = intervals.length;
      var IndicesArray = typed.getPointerArray(length + 1);
      var indices = new IndicesArray(length);
      var i;
      for (i = 1; i < length; i++)
        indices[i] = i;
      indices.sort(function(a, b) {
        a = intervals[a];
        b = intervals[b];
        if (startGetter) {
          a = startGetter(a);
          b = startGetter(b);
        } else {
          a = a[0];
          b = b[0];
        }
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      });
      var height = Math.ceil(Math.log2(length + 1)), treeSize = Math.pow(2, height) - 1;
      var tree = new IndicesArray(treeSize);
      var augmentations = new IndicesArray(length);
      buildBST(
        intervals,
        endGetter,
        indices,
        tree,
        augmentations,
        0,
        0,
        length - 1
      );
      indices = null;
      this.height = height;
      this.tree = tree;
      this.augmentations = augmentations;
      this.startGetter = startGetter;
      this.endGetter = endGetter;
      this.stack = new FixedStack(IndicesArray, this.height);
    }
    StaticIntervalTree.prototype.intervalsContainingPoint = function(point) {
      var matches = [];
      var stack = this.stack;
      stack.clear();
      stack.push(0);
      var l = this.tree.length;
      var bstIndex, intervalIndex, interval, maxInterval, start, end, max, left, right;
      while (stack.size) {
        bstIndex = stack.pop();
        intervalIndex = this.tree[bstIndex] - 1;
        interval = this.intervals[intervalIndex];
        maxInterval = this.intervals[this.augmentations[intervalIndex]];
        max = this.endGetter ? this.endGetter(maxInterval) : maxInterval[1];
        if (point > max)
          continue;
        left = bstIndex * 2 + 1;
        if (left < l && this.tree[left] !== 0)
          stack.push(left);
        start = this.startGetter ? this.startGetter(interval) : interval[0];
        end = this.endGetter ? this.endGetter(interval) : interval[1];
        if (point >= start && point <= end)
          matches.push(interval);
        if (point < start)
          continue;
        right = bstIndex * 2 + 2;
        if (right < l && this.tree[right] !== 0)
          stack.push(right);
      }
      return matches;
    };
    StaticIntervalTree.prototype.intervalsOverlappingInterval = function(interval) {
      var intervalStart = this.startGetter ? this.startGetter(interval) : interval[0], intervalEnd = this.endGetter ? this.endGetter(interval) : interval[1];
      var matches = [];
      var stack = this.stack;
      stack.clear();
      stack.push(0);
      var l = this.tree.length;
      var bstIndex, intervalIndex, currentInterval, maxInterval, start, end, max, left, right;
      while (stack.size) {
        bstIndex = stack.pop();
        intervalIndex = this.tree[bstIndex] - 1;
        currentInterval = this.intervals[intervalIndex];
        maxInterval = this.intervals[this.augmentations[intervalIndex]];
        max = this.endGetter ? this.endGetter(maxInterval) : maxInterval[1];
        if (intervalStart > max)
          continue;
        left = bstIndex * 2 + 1;
        if (left < l && this.tree[left] !== 0)
          stack.push(left);
        start = this.startGetter ? this.startGetter(currentInterval) : currentInterval[0];
        end = this.endGetter ? this.endGetter(currentInterval) : currentInterval[1];
        if (intervalEnd >= start && intervalStart <= end)
          matches.push(currentInterval);
        if (intervalEnd < start)
          continue;
        right = bstIndex * 2 + 2;
        if (right < l && this.tree[right] !== 0)
          stack.push(right);
      }
      return matches;
    };
    StaticIntervalTree.prototype.inspect = function() {
      var proxy = this.intervals.slice();
      Object.defineProperty(proxy, "constructor", {
        value: StaticIntervalTree,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      StaticIntervalTree.prototype[Symbol.for("nodejs.util.inspect.custom")] = StaticIntervalTree.prototype.inspect;
    StaticIntervalTree.from = function(iterable, getters) {
      if (iterables.isArrayLike(iterable))
        return new StaticIntervalTree(iterable, getters);
      return new StaticIntervalTree(Array.from(iterable), getters);
    };
    module2.exports = StaticIntervalTree;
  }
});

// node_modules/mnemonist/utils/binary-search.js
var require_binary_search = __commonJS({
  "node_modules/mnemonist/utils/binary-search.js"(exports) {
    "use strict";
    exports.search = function(array, value, lo, hi) {
      var mid = 0;
      lo = typeof lo !== "undefined" ? lo : 0;
      hi = typeof hi !== "undefined" ? hi : array.length;
      hi--;
      var current;
      while (lo <= hi) {
        mid = lo + hi >>> 1;
        current = array[mid];
        if (current > value) {
          hi = ~-mid;
        } else if (current < value) {
          lo = -~mid;
        } else {
          return mid;
        }
      }
      return -1;
    };
    exports.searchWithComparator = function(comparator, array, value) {
      var mid = 0, lo = 0, hi = ~-array.length, comparison;
      while (lo <= hi) {
        mid = lo + hi >>> 1;
        comparison = comparator(array[mid], value);
        if (comparison > 0) {
          hi = ~-mid;
        } else if (comparison < 0) {
          lo = -~mid;
        } else {
          return mid;
        }
      }
      return -1;
    };
    exports.lowerBound = function(array, value, lo, hi) {
      var mid = 0;
      lo = typeof lo !== "undefined" ? lo : 0;
      hi = typeof hi !== "undefined" ? hi : array.length;
      while (lo < hi) {
        mid = lo + hi >>> 1;
        if (value <= array[mid]) {
          hi = mid;
        } else {
          lo = -~mid;
        }
      }
      return lo;
    };
    exports.lowerBoundWithComparator = function(comparator, array, value) {
      var mid = 0, lo = 0, hi = array.length;
      while (lo < hi) {
        mid = lo + hi >>> 1;
        if (comparator(value, array[mid]) <= 0) {
          hi = mid;
        } else {
          lo = -~mid;
        }
      }
      return lo;
    };
    exports.lowerBoundIndices = function(array, indices, value, lo, hi) {
      var mid = 0;
      lo = typeof lo !== "undefined" ? lo : 0;
      hi = typeof hi !== "undefined" ? hi : array.length;
      while (lo < hi) {
        mid = lo + hi >>> 1;
        if (value <= array[indices[mid]]) {
          hi = mid;
        } else {
          lo = -~mid;
        }
      }
      return lo;
    };
    exports.upperBound = function(array, value, lo, hi) {
      var mid = 0;
      lo = typeof lo !== "undefined" ? lo : 0;
      hi = typeof hi !== "undefined" ? hi : array.length;
      while (lo < hi) {
        mid = lo + hi >>> 1;
        if (value >= array[mid]) {
          lo = -~mid;
        } else {
          hi = mid;
        }
      }
      return lo;
    };
    exports.upperBoundWithComparator = function(comparator, array, value) {
      var mid = 0, lo = 0, hi = array.length;
      while (lo < hi) {
        mid = lo + hi >>> 1;
        if (comparator(value, array[mid]) >= 0) {
          lo = -~mid;
        } else {
          hi = mid;
        }
      }
      return lo;
    };
  }
});

// node_modules/mnemonist/utils/merge.js
var require_merge = __commonJS({
  "node_modules/mnemonist/utils/merge.js"(exports) {
    "use strict";
    var typed = require_typed_arrays();
    var isArrayLike = require_iterables().isArrayLike;
    var binarySearch = require_binary_search();
    var FibonacciHeap = require_fibonacci_heap();
    function mergeArrays(a, b) {
      if (a.length === 0)
        return b.slice();
      if (b.length === 0)
        return a.slice();
      var tmp;
      if (a[0] > b[0]) {
        tmp = a;
        a = b;
        b = tmp;
      }
      var aEnd = a[a.length - 1], bStart = b[0];
      if (aEnd <= bStart) {
        if (typed.isTypedArray(a))
          return typed.concat(a, b);
        return a.concat(b);
      }
      var array = new a.constructor(a.length + b.length);
      var i, l, v;
      for (i = 0, l = a.length; i < l; i++) {
        v = a[i];
        if (v <= bStart)
          array[i] = v;
        else
          break;
      }
      var aPointer = i, aLength = a.length, bPointer = 0, bLength = b.length, aHead, bHead;
      while (aPointer < aLength && bPointer < bLength) {
        aHead = a[aPointer];
        bHead = b[bPointer];
        if (aHead <= bHead) {
          array[i++] = aHead;
          aPointer++;
        } else {
          array[i++] = bHead;
          bPointer++;
        }
      }
      while (aPointer < aLength)
        array[i++] = a[aPointer++];
      while (bPointer < bLength)
        array[i++] = b[bPointer++];
      return array;
    }
    function unionUniqueArrays(a, b) {
      if (a.length === 0)
        return b.slice();
      if (b.length === 0)
        return a.slice();
      var tmp;
      if (a[0] > b[0]) {
        tmp = a;
        a = b;
        b = tmp;
      }
      var aEnd = a[a.length - 1], bStart = b[0];
      if (aEnd < bStart) {
        if (typed.isTypedArray(a))
          return typed.concat(a, b);
        return a.concat(b);
      }
      var array = new a.constructor();
      var i, l, v;
      for (i = 0, l = a.length; i < l; i++) {
        v = a[i];
        if (v < bStart)
          array.push(v);
        else
          break;
      }
      var aPointer = i, aLength = a.length, bPointer = 0, bLength = b.length, aHead, bHead;
      while (aPointer < aLength && bPointer < bLength) {
        aHead = a[aPointer];
        bHead = b[bPointer];
        if (aHead <= bHead) {
          if (array.length === 0 || array[array.length - 1] !== aHead)
            array.push(aHead);
          aPointer++;
        } else {
          if (array.length === 0 || array[array.length - 1] !== bHead)
            array.push(bHead);
          bPointer++;
        }
      }
      while (aPointer < aLength) {
        aHead = a[aPointer++];
        if (array.length === 0 || array[array.length - 1] !== aHead)
          array.push(aHead);
      }
      while (bPointer < bLength) {
        bHead = b[bPointer++];
        if (array.length === 0 || array[array.length - 1] !== bHead)
          array.push(bHead);
      }
      return array;
    }
    exports.intersectionUniqueArrays = function(a, b) {
      if (a.length === 0 || b.length === 0)
        return new a.constructor(0);
      var tmp;
      if (a[0] > b[0]) {
        tmp = a;
        a = b;
        b = tmp;
      }
      var aEnd = a[a.length - 1], bStart = b[0];
      if (aEnd < bStart)
        return new a.constructor(0);
      var array = new a.constructor();
      var aPointer = binarySearch.lowerBound(a, bStart), aLength = a.length, bPointer = 0, bLength = binarySearch.upperBound(b, aEnd), aHead, bHead;
      while (aPointer < aLength && bPointer < bLength) {
        aHead = a[aPointer];
        bHead = b[bPointer];
        if (aHead < bHead) {
          aPointer = binarySearch.lowerBound(a, bHead, aPointer + 1);
        } else if (aHead > bHead) {
          bPointer = binarySearch.lowerBound(b, aHead, bPointer + 1);
        } else {
          array.push(aHead);
          aPointer++;
          bPointer++;
        }
      }
      return array;
    };
    function kWayMergeArrays(arrays) {
      var length = 0, max = -Infinity, al, i, l;
      var filtered = [];
      for (i = 0, l = arrays.length; i < l; i++) {
        al = arrays[i].length;
        if (al === 0)
          continue;
        filtered.push(arrays[i]);
        length += al;
        if (al > max)
          max = al;
      }
      if (filtered.length === 0)
        return new arrays[0].constructor(0);
      if (filtered.length === 1)
        return filtered[0].slice();
      if (filtered.length === 2)
        return mergeArrays(filtered[0], filtered[1]);
      arrays = filtered;
      var array = new arrays[0].constructor(length);
      var PointerArray = typed.getPointerArray(max);
      var pointers = new PointerArray(arrays.length);
      var heap = new FibonacciHeap(function(a, b) {
        a = arrays[a][pointers[a]];
        b = arrays[b][pointers[b]];
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      });
      for (i = 0; i < l; i++)
        heap.push(i);
      i = 0;
      var p, v;
      while (heap.size) {
        p = heap.pop();
        v = arrays[p][pointers[p]++];
        array[i++] = v;
        if (pointers[p] < arrays[p].length)
          heap.push(p);
      }
      return array;
    }
    function kWayUnionUniqueArrays(arrays) {
      var max = -Infinity, al, i, l;
      var filtered = [];
      for (i = 0, l = arrays.length; i < l; i++) {
        al = arrays[i].length;
        if (al === 0)
          continue;
        filtered.push(arrays[i]);
        if (al > max)
          max = al;
      }
      if (filtered.length === 0)
        return new arrays[0].constructor(0);
      if (filtered.length === 1)
        return filtered[0].slice();
      if (filtered.length === 2)
        return unionUniqueArrays(filtered[0], filtered[1]);
      arrays = filtered;
      var array = new arrays[0].constructor();
      var PointerArray = typed.getPointerArray(max);
      var pointers = new PointerArray(arrays.length);
      var heap = new FibonacciHeap(function(a, b) {
        a = arrays[a][pointers[a]];
        b = arrays[b][pointers[b]];
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      });
      for (i = 0; i < l; i++)
        heap.push(i);
      var p, v;
      while (heap.size) {
        p = heap.pop();
        v = arrays[p][pointers[p]++];
        if (array.length === 0 || array[array.length - 1] !== v)
          array.push(v);
        if (pointers[p] < arrays[p].length)
          heap.push(p);
      }
      return array;
    }
    exports.kWayIntersectionUniqueArrays = function(arrays) {
      var max = -Infinity, maxStart = -Infinity, minEnd = Infinity, first, last, al, i, l;
      for (i = 0, l = arrays.length; i < l; i++) {
        al = arrays[i].length;
        if (al === 0)
          return [];
        if (al > max)
          max = al;
        first = arrays[i][0];
        last = arrays[i][al - 1];
        if (first > maxStart)
          maxStart = first;
        if (last < minEnd)
          minEnd = last;
      }
      if (maxStart > minEnd)
        return [];
      if (maxStart === minEnd)
        return [maxStart];
      var a, b, array = arrays[0], aPointer, bPointer, aLimit, bLimit, aHead, bHead, start = maxStart;
      for (i = 1; i < l; i++) {
        a = array;
        b = arrays[i];
        array = new Array();
        aPointer = 0;
        bPointer = binarySearch.lowerBound(b, start);
        aLimit = a.length;
        bLimit = b.length;
        while (aPointer < aLimit && bPointer < bLimit) {
          aHead = a[aPointer];
          bHead = b[bPointer];
          if (aHead < bHead) {
            aPointer = binarySearch.lowerBound(a, bHead, aPointer + 1);
          } else if (aHead > bHead) {
            bPointer = binarySearch.lowerBound(b, aHead, bPointer + 1);
          } else {
            array.push(aHead);
            aPointer++;
            bPointer++;
          }
        }
        if (array.length === 0)
          return array;
        start = array[0];
      }
      return array;
    };
    exports.merge = function() {
      if (arguments.length === 2) {
        if (isArrayLike(arguments[0]))
          return mergeArrays(arguments[0], arguments[1]);
      } else {
        if (isArrayLike(arguments[0]))
          return kWayMergeArrays(arguments);
      }
      return null;
    };
    exports.unionUnique = function() {
      if (arguments.length === 2) {
        if (isArrayLike(arguments[0]))
          return unionUniqueArrays(arguments[0], arguments[1]);
      } else {
        if (isArrayLike(arguments[0]))
          return kWayUnionUniqueArrays(arguments);
      }
      return null;
    };
    exports.intersectionUnique = function() {
      if (arguments.length === 2) {
        if (isArrayLike(arguments[0]))
          return exports.intersectionUniqueArrays(arguments[0], arguments[1]);
      } else {
        if (isArrayLike(arguments[0]))
          return exports.kWayIntersectionUniqueArrays(arguments);
      }
      return null;
    };
  }
});

// node_modules/mnemonist/inverted-index.js
var require_inverted_index = __commonJS({
  "node_modules/mnemonist/inverted-index.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var helpers = require_merge();
    function identity(x) {
      return x;
    }
    function InvertedIndex(descriptor) {
      this.clear();
      if (Array.isArray(descriptor)) {
        this.documentTokenizer = descriptor[0];
        this.queryTokenizer = descriptor[1];
      } else {
        this.documentTokenizer = descriptor;
        this.queryTokenizer = descriptor;
      }
      if (!this.documentTokenizer)
        this.documentTokenizer = identity;
      if (!this.queryTokenizer)
        this.queryTokenizer = identity;
      if (typeof this.documentTokenizer !== "function")
        throw new Error("mnemonist/InvertedIndex.constructor: document tokenizer is not a function.");
      if (typeof this.queryTokenizer !== "function")
        throw new Error("mnemonist/InvertedIndex.constructor: query tokenizer is not a function.");
    }
    InvertedIndex.prototype.clear = function() {
      this.items = [];
      this.mapping = /* @__PURE__ */ new Map();
      this.size = 0;
      this.dimension = 0;
    };
    InvertedIndex.prototype.add = function(doc) {
      this.size++;
      var key = this.items.length;
      this.items.push(doc);
      var tokens = this.documentTokenizer(doc);
      if (!Array.isArray(tokens))
        throw new Error("mnemonist/InvertedIndex.add: tokenizer function should return an array of tokens.");
      var done = /* @__PURE__ */ new Set(), token, container;
      for (var i = 0, l = tokens.length; i < l; i++) {
        token = tokens[i];
        if (done.has(token))
          continue;
        done.add(token);
        container = this.mapping.get(token);
        if (!container) {
          container = [];
          this.mapping.set(token, container);
        }
        container.push(key);
      }
      this.dimension = this.mapping.size;
      return this;
    };
    InvertedIndex.prototype.get = function(query) {
      if (!this.size)
        return [];
      var tokens = this.queryTokenizer(query);
      if (!Array.isArray(tokens))
        throw new Error("mnemonist/InvertedIndex.query: tokenizer function should return an array of tokens.");
      if (!tokens.length)
        return [];
      var results = this.mapping.get(tokens[0]), c, i, l;
      if (typeof results === "undefined" || results.length === 0)
        return [];
      if (tokens.length > 1) {
        for (i = 1, l = tokens.length; i < l; i++) {
          c = this.mapping.get(tokens[i]);
          if (typeof c === "undefined" || c.length === 0)
            return [];
          results = helpers.intersectionUniqueArrays(results, c);
        }
      }
      var docs = new Array(results.length);
      for (i = 0, l = docs.length; i < l; i++)
        docs[i] = this.items[results[i]];
      return docs;
    };
    InvertedIndex.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0, l = this.documents.length; i < l; i++)
        callback.call(scope, this.documents[i], i, this);
    };
    InvertedIndex.prototype.documents = function() {
      var documents = this.items, l = documents.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = documents[i++];
        return {
          value,
          done: false
        };
      });
    };
    InvertedIndex.prototype.tokens = function() {
      return this.mapping.keys();
    };
    if (typeof Symbol !== "undefined")
      InvertedIndex.prototype[Symbol.iterator] = InvertedIndex.prototype.documents;
    InvertedIndex.prototype.inspect = function() {
      var array = this.items.slice();
      Object.defineProperty(array, "constructor", {
        value: InvertedIndex,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      InvertedIndex.prototype[Symbol.for("nodejs.util.inspect.custom")] = InvertedIndex.prototype.inspect;
    InvertedIndex.from = function(iterable, descriptor) {
      var index = new InvertedIndex(descriptor);
      forEach(iterable, function(doc) {
        index.add(doc);
      });
      return index;
    };
    module2.exports = InvertedIndex;
  }
});

// node_modules/mnemonist/sort/quick.js
var require_quick = __commonJS({
  "node_modules/mnemonist/sort/quick.js"(exports) {
    "use strict";
    var LOS = new Float64Array(64);
    var HIS = new Float64Array(64);
    function inplaceQuickSort(array, lo, hi) {
      var p, i, l, r, swap;
      LOS[0] = lo;
      HIS[0] = hi;
      i = 0;
      while (i >= 0) {
        l = LOS[i];
        r = HIS[i] - 1;
        if (l < r) {
          p = array[l];
          while (l < r) {
            while (array[r] >= p && l < r)
              r--;
            if (l < r)
              array[l++] = array[r];
            while (array[l] <= p && l < r)
              l++;
            if (l < r)
              array[r--] = array[l];
          }
          array[l] = p;
          LOS[i + 1] = l + 1;
          HIS[i + 1] = HIS[i];
          HIS[i++] = l;
          if (HIS[i] - LOS[i] > HIS[i - 1] - LOS[i - 1]) {
            swap = LOS[i];
            LOS[i] = LOS[i - 1];
            LOS[i - 1] = swap;
            swap = HIS[i];
            HIS[i] = HIS[i - 1];
            HIS[i - 1] = swap;
          }
        } else {
          i--;
        }
      }
      return array;
    }
    exports.inplaceQuickSort = inplaceQuickSort;
    function inplaceQuickSortIndices(array, indices, lo, hi) {
      var p, i, l, r, t, swap;
      LOS[0] = lo;
      HIS[0] = hi;
      i = 0;
      while (i >= 0) {
        l = LOS[i];
        r = HIS[i] - 1;
        if (l < r) {
          t = indices[l];
          p = array[t];
          while (l < r) {
            while (array[indices[r]] >= p && l < r)
              r--;
            if (l < r)
              indices[l++] = indices[r];
            while (array[indices[l]] <= p && l < r)
              l++;
            if (l < r)
              indices[r--] = indices[l];
          }
          indices[l] = t;
          LOS[i + 1] = l + 1;
          HIS[i + 1] = HIS[i];
          HIS[i++] = l;
          if (HIS[i] - LOS[i] > HIS[i - 1] - LOS[i - 1]) {
            swap = LOS[i];
            LOS[i] = LOS[i - 1];
            LOS[i - 1] = swap;
            swap = HIS[i];
            HIS[i] = HIS[i - 1];
            HIS[i - 1] = swap;
          }
        } else {
          i--;
        }
      }
      return indices;
    }
    exports.inplaceQuickSortIndices = inplaceQuickSortIndices;
  }
});

// node_modules/mnemonist/kd-tree.js
var require_kd_tree = __commonJS({
  "node_modules/mnemonist/kd-tree.js"(exports, module2) {
    "use strict";
    var iterables = require_iterables();
    var typed = require_typed_arrays();
    var createTupleComparator = require_comparators().createTupleComparator;
    var FixedReverseHeap = require_fixed_reverse_heap();
    var inplaceQuickSortIndices = require_quick().inplaceQuickSortIndices;
    function squaredDistanceAxes(dimensions, axes, pivot, b) {
      var d;
      var dist = 0, step;
      for (d = 0; d < dimensions; d++) {
        step = axes[d][pivot] - b[d];
        dist += step * step;
      }
      return dist;
    }
    function reshapeIntoAxes(dimensions, data) {
      var l = data.length;
      var axes = new Array(dimensions), labels = new Array(l), axis;
      var PointerArray = typed.getPointerArray(l);
      var ids = new PointerArray(l);
      var d, i, row;
      var f = true;
      for (d = 0; d < dimensions; d++) {
        axis = new Float64Array(l);
        for (i = 0; i < l; i++) {
          row = data[i];
          axis[i] = row[1][d];
          if (f) {
            labels[i] = row[0];
            ids[i] = i;
          }
        }
        f = false;
        axes[d] = axis;
      }
      return { axes, ids, labels };
    }
    function buildTree(dimensions, axes, ids, labels) {
      var l = labels.length;
      var PointerArray = typed.getPointerArray(l + 1);
      var pivots = new PointerArray(l), lefts = new PointerArray(l), rights = new PointerArray(l);
      var stack = [[0, 0, ids.length, -1, 0]], step, parent, direction, median, pivot, lo, hi;
      var d, i = 0;
      while (stack.length !== 0) {
        step = stack.pop();
        d = step[0];
        lo = step[1];
        hi = step[2];
        parent = step[3];
        direction = step[4];
        inplaceQuickSortIndices(axes[d], ids, lo, hi);
        l = hi - lo;
        median = lo + (l >>> 1);
        pivot = ids[median];
        pivots[i] = pivot;
        if (parent > -1) {
          if (direction === 0)
            lefts[parent] = i + 1;
          else
            rights[parent] = i + 1;
        }
        d = (d + 1) % dimensions;
        if (median !== lo && median !== hi - 1) {
          stack.push([d, median + 1, hi, i, 1]);
        }
        if (median !== lo) {
          stack.push([d, lo, median, i, 0]);
        }
        i++;
      }
      return {
        axes,
        labels,
        pivots,
        lefts,
        rights
      };
    }
    function KDTree(dimensions, build) {
      this.dimensions = dimensions;
      this.visited = 0;
      this.axes = build.axes;
      this.labels = build.labels;
      this.pivots = build.pivots;
      this.lefts = build.lefts;
      this.rights = build.rights;
      this.size = this.labels.length;
    }
    KDTree.prototype.nearestNeighbor = function(query) {
      var bestDistance = Infinity, best = null;
      var dimensions = this.dimensions, axes = this.axes, pivots = this.pivots, lefts = this.lefts, rights = this.rights;
      var visited = 0;
      function recurse(d, node) {
        visited++;
        var left = lefts[node], right = rights[node], pivot = pivots[node];
        var dist = squaredDistanceAxes(
          dimensions,
          axes,
          pivot,
          query
        );
        if (dist < bestDistance) {
          best = pivot;
          bestDistance = dist;
          if (dist === 0)
            return;
        }
        var dx = axes[d][pivot] - query[d];
        d = (d + 1) % dimensions;
        if (dx > 0) {
          if (left !== 0)
            recurse(d, left - 1);
        } else {
          if (right !== 0)
            recurse(d, right - 1);
        }
        if (dx * dx < bestDistance) {
          if (dx > 0) {
            if (right !== 0)
              recurse(d, right - 1);
          } else {
            if (left !== 0)
              recurse(d, left - 1);
          }
        }
      }
      recurse(0, 0);
      this.visited = visited;
      return this.labels[best];
    };
    var KNN_HEAP_COMPARATOR_3 = createTupleComparator(3);
    var KNN_HEAP_COMPARATOR_2 = createTupleComparator(2);
    KDTree.prototype.kNearestNeighbors = function(k, query) {
      if (k <= 0)
        throw new Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
      k = Math.min(k, this.size);
      if (k === 1)
        return [this.nearestNeighbor(query)];
      var heap = new FixedReverseHeap(Array, KNN_HEAP_COMPARATOR_3, k);
      var dimensions = this.dimensions, axes = this.axes, pivots = this.pivots, lefts = this.lefts, rights = this.rights;
      var visited = 0;
      function recurse(d, node) {
        var left = lefts[node], right = rights[node], pivot = pivots[node];
        var dist = squaredDistanceAxes(
          dimensions,
          axes,
          pivot,
          query
        );
        heap.push([dist, visited++, pivot]);
        var point = query[d], split = axes[d][pivot], dx = point - split;
        d = (d + 1) % dimensions;
        if (point < split) {
          if (left !== 0) {
            recurse(d, left - 1);
          }
        } else {
          if (right !== 0) {
            recurse(d, right - 1);
          }
        }
        if (dx * dx < heap.peek()[0] || heap.size < k) {
          if (point < split) {
            if (right !== 0) {
              recurse(d, right - 1);
            }
          } else {
            if (left !== 0) {
              recurse(d, left - 1);
            }
          }
        }
      }
      recurse(0, 0);
      this.visited = visited;
      var best = heap.consume();
      for (var i = 0; i < best.length; i++)
        best[i] = this.labels[best[i][2]];
      return best;
    };
    KDTree.prototype.linearKNearestNeighbors = function(k, query) {
      if (k <= 0)
        throw new Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
      k = Math.min(k, this.size);
      var heap = new FixedReverseHeap(Array, KNN_HEAP_COMPARATOR_2, k);
      var i, l, dist;
      for (i = 0, l = this.size; i < l; i++) {
        dist = squaredDistanceAxes(
          this.dimensions,
          this.axes,
          this.pivots[i],
          query
        );
        heap.push([dist, i]);
      }
      var best = heap.consume();
      for (i = 0; i < best.length; i++)
        best[i] = this.labels[this.pivots[best[i][1]]];
      return best;
    };
    KDTree.prototype.inspect = function() {
      var dummy = /* @__PURE__ */ new Map();
      dummy.dimensions = this.dimensions;
      Object.defineProperty(dummy, "constructor", {
        value: KDTree,
        enumerable: false
      });
      var i, j, point;
      for (i = 0; i < this.size; i++) {
        point = new Array(this.dimensions);
        for (j = 0; j < this.dimensions; j++)
          point[j] = this.axes[j][i];
        dummy.set(this.labels[i], point);
      }
      return dummy;
    };
    if (typeof Symbol !== "undefined")
      KDTree.prototype[Symbol.for("nodejs.util.inspect.custom")] = KDTree.prototype.inspect;
    KDTree.from = function(iterable, dimensions) {
      var data = iterables.toArray(iterable);
      var reshaped = reshapeIntoAxes(dimensions, data);
      var result = buildTree(dimensions, reshaped.axes, reshaped.ids, reshaped.labels);
      return new KDTree(dimensions, result);
    };
    KDTree.fromAxes = function(axes, labels) {
      if (!labels)
        labels = typed.indices(axes[0].length);
      var dimensions = axes.length;
      var result = buildTree(axes.length, axes, typed.indices(labels.length), labels);
      return new KDTree(dimensions, result);
    };
    module2.exports = KDTree;
  }
});

// node_modules/mnemonist/linked-list.js
var require_linked_list = __commonJS({
  "node_modules/mnemonist/linked-list.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    function LinkedList() {
      this.clear();
    }
    LinkedList.prototype.clear = function() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    };
    LinkedList.prototype.first = function() {
      return this.head ? this.head.item : void 0;
    };
    LinkedList.prototype.peek = LinkedList.prototype.first;
    LinkedList.prototype.last = function() {
      return this.tail ? this.tail.item : void 0;
    };
    LinkedList.prototype.push = function(item) {
      var node = { item, next: null };
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
      return this.size;
    };
    LinkedList.prototype.unshift = function(item) {
      var node = { item, next: null };
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        if (!this.head.next)
          this.tail = this.head;
        node.next = this.head;
        this.head = node;
      }
      this.size++;
      return this.size;
    };
    LinkedList.prototype.shift = function() {
      if (!this.size)
        return void 0;
      var node = this.head;
      this.head = node.next;
      this.size--;
      return node.item;
    };
    LinkedList.prototype.forEach = function(callback, scope) {
      if (!this.size)
        return;
      scope = arguments.length > 1 ? scope : this;
      var n = this.head, i = 0;
      while (n) {
        callback.call(scope, n.item, i, this);
        n = n.next;
        i++;
      }
    };
    LinkedList.prototype.toArray = function() {
      if (!this.size)
        return [];
      var array = new Array(this.size);
      for (var i = 0, l = this.size, n = this.head; i < l; i++) {
        array[i] = n.item;
        n = n.next;
      }
      return array;
    };
    LinkedList.prototype.values = function() {
      var n = this.head;
      return new Iterator(function() {
        if (!n)
          return {
            done: true
          };
        var value = n.item;
        n = n.next;
        return {
          value,
          done: false
        };
      });
    };
    LinkedList.prototype.entries = function() {
      var n = this.head, i = 0;
      return new Iterator(function() {
        if (!n)
          return {
            done: true
          };
        var value = n.item;
        n = n.next;
        i++;
        return {
          value: [i - 1, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LinkedList.prototype[Symbol.iterator] = LinkedList.prototype.values;
    LinkedList.prototype.toString = function() {
      return this.toArray().join(",");
    };
    LinkedList.prototype.toJSON = function() {
      return this.toArray();
    };
    LinkedList.prototype.inspect = function() {
      var array = this.toArray();
      Object.defineProperty(array, "constructor", {
        value: LinkedList,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      LinkedList.prototype[Symbol.for("nodejs.util.inspect.custom")] = LinkedList.prototype.inspect;
    LinkedList.from = function(iterable) {
      var list = new LinkedList();
      forEach(iterable, function(value) {
        list.push(value);
      });
      return list;
    };
    module2.exports = LinkedList;
  }
});

// node_modules/mnemonist/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/mnemonist/lru-cache.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCache(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      else if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
        throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }
    LRUCache.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    };
    LRUCache.prototype.splayOnTop = function(pointer) {
      var oldHead = this.head;
      if (this.head === pointer)
        return this;
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.tail === pointer) {
        this.tail = previous;
      } else {
        this.backward[next] = previous;
      }
      this.forward[previous] = next;
      this.backward[oldHead] = pointer;
      this.head = pointer;
      this.forward[pointer] = oldHead;
      return this;
    };
    LRUCache.prototype.set = function(key, value) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCache.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCache.prototype.has = function(key) {
      return key in this.items;
    };
    LRUCache.prototype.get = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUCache.prototype.peek = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUCache.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i = 0, l = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      while (i < l) {
        callback.call(scope, values[pointer], keys[pointer], this);
        pointer = forward[pointer];
        i++;
      }
    };
    LRUCache.prototype.keys = function() {
      var i = 0, l = this.size;
      var pointer = this.head, keys = this.K, forward = this.forward;
      return new Iterator(function() {
        if (i >= l)
          return { done: true };
        var key = keys[pointer];
        i++;
        if (i < l)
          pointer = forward[pointer];
        return {
          done: false,
          value: key
        };
      });
    };
    LRUCache.prototype.values = function() {
      var i = 0, l = this.size;
      var pointer = this.head, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i >= l)
          return { done: true };
        var value = values[pointer];
        i++;
        if (i < l)
          pointer = forward[pointer];
        return {
          done: false,
          value
        };
      });
    };
    LRUCache.prototype.entries = function() {
      var i = 0, l = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i >= l)
          return { done: true };
        var key = keys[pointer], value = values[pointer];
        i++;
        if (i < l)
          pointer = forward[pointer];
        return {
          done: false,
          value: [key, value]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LRUCache.prototype[Symbol.iterator] = LRUCache.prototype.entries;
    LRUCache.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      var iterator = this.entries(), step;
      while (step = iterator.next(), !step.done)
        proxy.set(step.value[0], step.value[1]);
      Object.defineProperty(proxy, "constructor", {
        value: LRUCache,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      LRUCache.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache.prototype.inspect;
    LRUCache.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUCache(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module2.exports = LRUCache;
  }
});

// node_modules/mnemonist/lru-cache-with-delete.js
var require_lru_cache_with_delete = __commonJS({
  "node_modules/mnemonist/lru-cache-with-delete.js"(exports, module2) {
    "use strict";
    var LRUCache = require_lru_cache();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCacheWithDelete(Keys, Values, capacity) {
      if (arguments.length < 2) {
        LRUCache.call(this, Keys);
      } else {
        LRUCache.call(this, Keys, Values, capacity);
      }
      var PointerArray = typed.getPointerArray(this.capacity);
      this.deleted = new PointerArray(this.capacity);
      this.deletedSize = 0;
    }
    for (k in LRUCache.prototype)
      LRUCacheWithDelete.prototype[k] = LRUCache.prototype[k];
    var k;
    if (typeof Symbol !== "undefined")
      LRUCacheWithDelete.prototype[Symbol.iterator] = LRUCache.prototype[Symbol.iterator];
    LRUCacheWithDelete.prototype.clear = function() {
      LRUCache.prototype.clear.call(this);
      this.deletedSize = 0;
    };
    LRUCacheWithDelete.prototype.set = function(key, value) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        if (this.deletedSize > 0) {
          pointer = this.deleted[--this.deletedSize];
        } else {
          pointer = this.size;
        }
        this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCacheWithDelete.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        if (this.deletedSize > 0) {
          pointer = this.deleted[--this.deletedSize];
        } else {
          pointer = this.size;
        }
        this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCacheWithDelete.prototype.delete = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined") {
        return false;
      }
      delete this.items[key];
      if (this.size === 1) {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.deletedSize = 0;
        return true;
      }
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.head === pointer) {
        this.head = next;
      }
      if (this.tail === pointer) {
        this.tail = previous;
      }
      this.forward[previous] = next;
      this.backward[next] = previous;
      this.size--;
      this.deleted[this.deletedSize++] = pointer;
      return true;
    };
    LRUCacheWithDelete.prototype.remove = function(key, missing = void 0) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined") {
        return missing;
      }
      var dead = this.V[pointer];
      delete this.items[key];
      if (this.size === 1) {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.deletedSize = 0;
        return dead;
      }
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.head === pointer) {
        this.head = next;
      }
      if (this.tail === pointer) {
        this.tail = previous;
      }
      this.forward[previous] = next;
      this.backward[next] = previous;
      this.size--;
      this.deleted[this.deletedSize++] = pointer;
      return dead;
    };
    LRUCacheWithDelete.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUCacheWithDelete(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module2.exports = LRUCacheWithDelete;
  }
});

// node_modules/mnemonist/lru-map.js
var require_lru_map = __commonJS({
  "node_modules/mnemonist/lru-map.js"(exports, module2) {
    "use strict";
    var LRUCache = require_lru_cache();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUMap(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-map: capacity should be positive number.");
      else if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
        throw new Error("mnemonist/lru-map: capacity should be a finite positive integer.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = /* @__PURE__ */ new Map();
    }
    LRUMap.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items.clear();
    };
    LRUMap.prototype.set = function(key, value) {
      var pointer = this.items.get(key);
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        this.items.delete(this.K[pointer]);
      }
      this.items.set(key, pointer);
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUMap.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items.get(key);
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        this.items.delete(this.K[pointer]);
      }
      this.items.set(key, pointer);
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUMap.prototype.has = function(key) {
      return this.items.has(key);
    };
    LRUMap.prototype.get = function(key) {
      var pointer = this.items.get(key);
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUMap.prototype.peek = function(key) {
      var pointer = this.items.get(key);
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUMap.prototype.splayOnTop = LRUCache.prototype.splayOnTop;
    LRUMap.prototype.forEach = LRUCache.prototype.forEach;
    LRUMap.prototype.keys = LRUCache.prototype.keys;
    LRUMap.prototype.values = LRUCache.prototype.values;
    LRUMap.prototype.entries = LRUCache.prototype.entries;
    if (typeof Symbol !== "undefined")
      LRUMap.prototype[Symbol.iterator] = LRUMap.prototype.entries;
    LRUMap.prototype.inspect = LRUCache.prototype.inspect;
    LRUMap.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUMap(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module2.exports = LRUMap;
  }
});

// node_modules/mnemonist/lru-map-with-delete.js
var require_lru_map_with_delete = __commonJS({
  "node_modules/mnemonist/lru-map-with-delete.js"(exports, module2) {
    "use strict";
    var LRUMap = require_lru_map();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUMapWithDelete(Keys, Values, capacity) {
      if (arguments.length < 2) {
        LRUMap.call(this, Keys);
      } else {
        LRUMap.call(this, Keys, Values, capacity);
      }
      var PointerArray = typed.getPointerArray(this.capacity);
      this.deleted = new PointerArray(this.capacity);
      this.deletedSize = 0;
    }
    for (k in LRUMap.prototype)
      LRUMapWithDelete.prototype[k] = LRUMap.prototype[k];
    var k;
    if (typeof Symbol !== "undefined")
      LRUMapWithDelete.prototype[Symbol.iterator] = LRUMap.prototype[Symbol.iterator];
    LRUMapWithDelete.prototype.clear = function() {
      LRUMap.prototype.clear.call(this);
      this.deletedSize = 0;
    };
    LRUMapWithDelete.prototype.set = function(key, value) {
      var pointer = this.items.get(key);
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        if (this.deletedSize > 0) {
          pointer = this.deleted[--this.deletedSize];
        } else {
          pointer = this.size;
        }
        this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        this.items.delete(this.K[pointer]);
      }
      this.items.set(key, pointer);
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUMapWithDelete.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items.get(key);
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        if (this.deletedSize > 0) {
          pointer = this.deleted[--this.deletedSize];
        } else {
          pointer = this.size;
        }
        this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        this.items.delete(this.K[pointer]);
      }
      this.items.set(key, pointer);
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUMapWithDelete.prototype.delete = function(key) {
      var pointer = this.items.get(key);
      if (typeof pointer === "undefined") {
        return false;
      }
      this.items.delete(key);
      if (this.size === 1) {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.deletedSize = 0;
        return true;
      }
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.head === pointer) {
        this.head = next;
      }
      if (this.tail === pointer) {
        this.tail = previous;
      }
      this.forward[previous] = next;
      this.backward[next] = previous;
      this.size--;
      this.deleted[this.deletedSize++] = pointer;
      return true;
    };
    LRUMapWithDelete.prototype.remove = function(key, missing = void 0) {
      var pointer = this.items.get(key);
      if (typeof pointer === "undefined") {
        return missing;
      }
      var dead = this.V[pointer];
      this.items.delete(key);
      if (this.size === 1) {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.deletedSize = 0;
        return dead;
      }
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.head === pointer) {
        this.head = next;
      }
      if (this.tail === pointer) {
        this.tail = previous;
      }
      this.forward[previous] = next;
      this.backward[next] = previous;
      this.size--;
      this.deleted[this.deletedSize++] = pointer;
      return dead;
    };
    LRUMapWithDelete.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUMapWithDelete(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module2.exports = LRUMapWithDelete;
  }
});

// node_modules/mnemonist/multi-set.js
var require_multi_set = __commonJS({
  "node_modules/mnemonist/multi-set.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var FixedReverseHeap = require_fixed_reverse_heap();
    var MULTISET_ITEM_COMPARATOR = function(a, b) {
      if (a[1] > b[1])
        return -1;
      if (a[1] < b[1])
        return 1;
      return 0;
    };
    function MultiSet() {
      this.items = /* @__PURE__ */ new Map();
      Object.defineProperty(this.items, "constructor", {
        value: MultiSet,
        enumerable: false
      });
      this.clear();
    }
    MultiSet.prototype.clear = function() {
      this.size = 0;
      this.dimension = 0;
      this.items.clear();
    };
    MultiSet.prototype.add = function(item, count) {
      if (count === 0)
        return this;
      if (count < 0)
        return this.remove(item, -count);
      count = count || 1;
      if (typeof count !== "number")
        throw new Error("mnemonist/multi-set.add: given count should be a number.");
      this.size += count;
      const currentCount = this.items.get(item);
      if (currentCount === void 0)
        this.dimension++;
      else
        count += currentCount;
      this.items.set(item, count);
      return this;
    };
    MultiSet.prototype.set = function(item, count) {
      var currentCount;
      if (typeof count !== "number")
        throw new Error("mnemonist/multi-set.set: given count should be a number.");
      if (count <= 0) {
        currentCount = this.items.get(item);
        if (typeof currentCount !== "undefined") {
          this.size -= currentCount;
          this.dimension--;
        }
        this.items.delete(item);
        return this;
      }
      count = count || 1;
      currentCount = this.items.get(item);
      if (typeof currentCount === "number") {
        this.items.set(item, currentCount + count);
      } else {
        this.dimension++;
        this.items.set(item, count);
      }
      this.size += count;
      return this;
    };
    MultiSet.prototype.has = function(item) {
      return this.items.has(item);
    };
    MultiSet.prototype.delete = function(item) {
      var count = this.items.get(item);
      if (count === 0)
        return false;
      this.size -= count;
      this.dimension--;
      this.items.delete(item);
      return true;
    };
    MultiSet.prototype.remove = function(item, count) {
      if (count === 0)
        return;
      if (count < 0)
        return this.add(item, -count);
      count = count || 1;
      if (typeof count !== "number")
        throw new Error("mnemonist/multi-set.remove: given count should be a number.");
      var currentCount = this.items.get(item);
      if (typeof currentCount === "undefined")
        return;
      var newCount = Math.max(0, currentCount - count);
      if (newCount === 0) {
        this.items.delete(item);
        this.size -= currentCount;
        this.dimension--;
      } else {
        this.items.set(item, newCount);
        this.size -= count;
      }
      return;
    };
    MultiSet.prototype.edit = function(a, b) {
      var am = this.multiplicity(a);
      if (am === 0)
        return;
      var bm = this.multiplicity(b);
      this.items.set(b, am + bm);
      this.items.delete(a);
      return this;
    };
    MultiSet.prototype.multiplicity = function(item) {
      var count = this.items.get(item);
      if (typeof count === "undefined")
        return 0;
      return count;
    };
    MultiSet.prototype.get = MultiSet.prototype.multiplicity;
    MultiSet.prototype.count = MultiSet.prototype.multiplicity;
    MultiSet.prototype.frequency = function(item) {
      if (this.size === 0)
        return 0;
      var count = this.multiplicity(item);
      return count / this.size;
    };
    MultiSet.prototype.top = function(n) {
      if (typeof n !== "number" || n <= 0)
        throw new Error("mnemonist/multi-set.top: n must be a number > 0.");
      var heap = new FixedReverseHeap(Array, MULTISET_ITEM_COMPARATOR, n);
      var iterator = this.items.entries(), step;
      while (step = iterator.next(), !step.done)
        heap.push(step.value);
      return heap.consume();
    };
    MultiSet.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i;
      this.items.forEach(function(multiplicity, value) {
        for (i = 0; i < multiplicity; i++)
          callback.call(scope, value, value);
      });
    };
    MultiSet.prototype.forEachMultiplicity = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      this.items.forEach(callback, scope);
    };
    MultiSet.prototype.keys = function() {
      return this.items.keys();
    };
    MultiSet.prototype.values = function() {
      var iterator = this.items.entries(), inContainer = false, step, value, multiplicity, i;
      return new Iterator(function next() {
        if (!inContainer) {
          step = iterator.next();
          if (step.done)
            return { done: true };
          inContainer = true;
          value = step.value[0];
          multiplicity = step.value[1];
          i = 0;
        }
        if (i >= multiplicity) {
          inContainer = false;
          return next();
        }
        i++;
        return {
          done: false,
          value
        };
      });
    };
    MultiSet.prototype.multiplicities = function() {
      return this.items.entries();
    };
    if (typeof Symbol !== "undefined")
      MultiSet.prototype[Symbol.iterator] = MultiSet.prototype.values;
    MultiSet.prototype.inspect = function() {
      return this.items;
    };
    if (typeof Symbol !== "undefined")
      MultiSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = MultiSet.prototype.inspect;
    MultiSet.prototype.toJSON = function() {
      return this.items;
    };
    MultiSet.from = function(iterable) {
      var set = new MultiSet();
      forEach(iterable, function(value) {
        set.add(value);
      });
      return set;
    };
    MultiSet.isSubset = function(A, B) {
      var iterator = A.multiplicities(), step, key, mA;
      if (A === B)
        return true;
      if (A.dimension > B.dimension)
        return false;
      while (step = iterator.next(), !step.done) {
        key = step.value[0];
        mA = step.value[1];
        if (B.multiplicity(key) < mA)
          return false;
      }
      return true;
    };
    MultiSet.isSuperset = function(A, B) {
      return MultiSet.isSubset(B, A);
    };
    module2.exports = MultiSet;
  }
});

// node_modules/mnemonist/passjoin-index.js
var require_passjoin_index = __commonJS({
  "node_modules/mnemonist/passjoin-index.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    function countSubstringsL(k, s, l) {
      return ((Math.pow(k, 2) - Math.pow(Math.abs(s - l), 2)) / 2 | 0) + k + 1;
    }
    function countKeys(k, s) {
      var c = 0;
      for (var l = 0, m = s + 1; l < m; l++)
        c += countSubstringsL(k, s, l);
      return c;
    }
    function comparator(a, b) {
      if (a.length > b.length)
        return -1;
      if (a.length < b.length)
        return 1;
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    }
    function partition(k, l) {
      var m = k + 1, a = l / m | 0, b = a + 1, i, j;
      var largeSegments = l - a * m, smallSegments = m - largeSegments;
      var tuples = new Array(k + 1);
      for (i = 0; i < smallSegments; i++)
        tuples[i] = [i * a, a];
      var offset = (i - 1) * a + a;
      for (j = 0; j < largeSegments; j++)
        tuples[i + j] = [offset + j * b, b];
      return tuples;
    }
    function segments(k, string) {
      var l = string.length, m = k + 1, a = l / m | 0, b = a + 1, o, i, j;
      var largeSegments = l - a * m, smallSegments = m - largeSegments;
      var S = new Array(k + 1);
      for (i = 0; i < smallSegments; i++) {
        o = i * a;
        S[i] = string.slice(o, o + a);
      }
      var offset = (i - 1) * a + a;
      for (j = 0; j < largeSegments; j++) {
        o = offset + j * b;
        S[i + j] = string.slice(o, o + b);
      }
      return S;
    }
    function segmentPos(k, i, string) {
      if (i === 0)
        return 0;
      var l = string.length;
      var m = k + 1, a = l / m | 0, b = a + 1;
      var largeSegments = l - a * m, smallSegments = m - largeSegments;
      if (i <= smallSegments - 1)
        return i * a;
      var offset = i - smallSegments;
      return smallSegments * a + offset * b;
    }
    function multiMatchAwareInterval(k, delta, i, s, pi, li) {
      var start1 = pi - i, end1 = pi + i;
      var o = k - i;
      var start2 = pi + delta - o, end2 = pi + delta + o;
      var end3 = s - li;
      return [Math.max(0, start1, start2), Math.min(end1, end2, end3)];
    }
    function multiMatchAwareSubstrings(k, string, l, i, pi, li) {
      var s = string.length;
      var delta = s - l;
      var interval = multiMatchAwareInterval(k, delta, i, s, pi, li);
      var start = interval[0], stop = interval[1];
      var currentSubstring = "";
      var substrings = [];
      var substring, j, m;
      for (j = start, m = stop + 1; j < m; j++) {
        substring = string.slice(j, j + li);
        if (substring === currentSubstring)
          continue;
        substrings.push(substring);
        currentSubstring = substring;
      }
      return substrings;
    }
    function PassjoinIndex(levenshtein, k) {
      if (typeof levenshtein !== "function")
        throw new Error("mnemonist/passjoin-index: `levenshtein` should be a function returning edit distance between two strings.");
      if (typeof k !== "number" || k < 1)
        throw new Error("mnemonist/passjoin-index: `k` should be a number > 0");
      this.levenshtein = levenshtein;
      this.k = k;
      this.clear();
    }
    PassjoinIndex.prototype.clear = function() {
      this.size = 0;
      this.strings = [];
      this.invertedIndices = {};
    };
    PassjoinIndex.prototype.add = function(value) {
      var l = value.length;
      var stringIndex = this.size;
      this.strings.push(value);
      this.size++;
      var S = segments(this.k, value);
      var Ll = this.invertedIndices[l];
      if (typeof Ll === "undefined") {
        Ll = {};
        this.invertedIndices[l] = Ll;
      }
      var segment, matches, key, i, m;
      for (i = 0, m = S.length; i < m; i++) {
        segment = S[i];
        key = segment + i;
        matches = Ll[key];
        if (typeof matches === "undefined") {
          matches = [stringIndex];
          Ll[key] = matches;
        } else {
          matches.push(stringIndex);
        }
      }
      return this;
    };
    PassjoinIndex.prototype.search = function(query) {
      var s = query.length, k = this.k;
      var M = /* @__PURE__ */ new Set();
      var candidates, candidate, queryPos, querySegmentLength, key, S, P, l, m, i, n1, j, n2, y, n3;
      for (l = Math.max(0, s - k), m = s + k + 1; l < m; l++) {
        var Ll = this.invertedIndices[l];
        if (typeof Ll === "undefined")
          continue;
        P = partition(k, l);
        for (i = 0, n1 = P.length; i < n1; i++) {
          queryPos = P[i][0];
          querySegmentLength = P[i][1];
          S = multiMatchAwareSubstrings(
            k,
            query,
            l,
            i,
            queryPos,
            querySegmentLength
          );
          if (!S.length)
            S = [""];
          for (j = 0, n2 = S.length; j < n2; j++) {
            key = S[j] + i;
            candidates = Ll[key];
            if (typeof candidates === "undefined")
              continue;
            for (y = 0, n3 = candidates.length; y < n3; y++) {
              candidate = this.strings[candidates[y]];
              if (s <= k && l <= k || !M.has(candidate) && this.levenshtein(query, candidate) <= k)
                M.add(candidate);
            }
          }
        }
      }
      return M;
    };
    PassjoinIndex.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0, l = this.strings.length; i < l; i++)
        callback.call(scope, this.strings[i], i, this);
    };
    PassjoinIndex.prototype.values = function() {
      var strings = this.strings, l = strings.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = strings[i];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      PassjoinIndex.prototype[Symbol.iterator] = PassjoinIndex.prototype.values;
    PassjoinIndex.prototype.inspect = function() {
      var array = this.strings.slice();
      Object.defineProperty(array, "constructor", {
        value: PassjoinIndex,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      PassjoinIndex.prototype[Symbol.for("nodejs.util.inspect.custom")] = PassjoinIndex.prototype.inspect;
    PassjoinIndex.from = function(iterable, levenshtein, k) {
      var index = new PassjoinIndex(levenshtein, k);
      forEach(iterable, function(string) {
        index.add(string);
      });
      return index;
    };
    PassjoinIndex.countKeys = countKeys;
    PassjoinIndex.comparator = comparator;
    PassjoinIndex.partition = partition;
    PassjoinIndex.segments = segments;
    PassjoinIndex.segmentPos = segmentPos;
    PassjoinIndex.multiMatchAwareInterval = multiMatchAwareInterval;
    PassjoinIndex.multiMatchAwareSubstrings = multiMatchAwareSubstrings;
    module2.exports = PassjoinIndex;
  }
});

// node_modules/mnemonist/queue.js
var require_queue = __commonJS({
  "node_modules/mnemonist/queue.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    function Queue() {
      this.clear();
    }
    Queue.prototype.clear = function() {
      this.items = [];
      this.offset = 0;
      this.size = 0;
    };
    Queue.prototype.enqueue = function(item) {
      this.items.push(item);
      return ++this.size;
    };
    Queue.prototype.dequeue = function() {
      if (!this.size)
        return;
      var item = this.items[this.offset];
      if (++this.offset * 2 >= this.items.length) {
        this.items = this.items.slice(this.offset);
        this.offset = 0;
      }
      this.size--;
      return item;
    };
    Queue.prototype.peek = function() {
      if (!this.size)
        return;
      return this.items[this.offset];
    };
    Queue.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = this.offset, j = 0, l = this.items.length; i < l; i++, j++)
        callback.call(scope, this.items[i], j, this);
    };
    Queue.prototype.toArray = function() {
      return this.items.slice(this.offset);
    };
    Queue.prototype.values = function() {
      var items = this.items, i = this.offset;
      return new Iterator(function() {
        if (i >= items.length)
          return {
            done: true
          };
        var value = items[i];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    Queue.prototype.entries = function() {
      var items = this.items, i = this.offset, j = 0;
      return new Iterator(function() {
        if (i >= items.length)
          return {
            done: true
          };
        var value = items[i];
        i++;
        return {
          value: [j++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      Queue.prototype[Symbol.iterator] = Queue.prototype.values;
    Queue.prototype.toString = function() {
      return this.toArray().join(",");
    };
    Queue.prototype.toJSON = function() {
      return this.toArray();
    };
    Queue.prototype.inspect = function() {
      var array = this.toArray();
      Object.defineProperty(array, "constructor", {
        value: Queue,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      Queue.prototype[Symbol.for("nodejs.util.inspect.custom")] = Queue.prototype.inspect;
    Queue.from = function(iterable) {
      var queue = new Queue();
      forEach(iterable, function(value) {
        queue.enqueue(value);
      });
      return queue;
    };
    Queue.of = function() {
      return Queue.from(arguments);
    };
    module2.exports = Queue;
  }
});

// node_modules/mnemonist/stack.js
var require_stack = __commonJS({
  "node_modules/mnemonist/stack.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    function Stack() {
      this.clear();
    }
    Stack.prototype.clear = function() {
      this.items = [];
      this.size = 0;
    };
    Stack.prototype.push = function(item) {
      this.items.push(item);
      return ++this.size;
    };
    Stack.prototype.pop = function() {
      if (this.size === 0)
        return;
      this.size--;
      return this.items.pop();
    };
    Stack.prototype.peek = function() {
      return this.items[this.size - 1];
    };
    Stack.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0, l = this.items.length; i < l; i++)
        callback.call(scope, this.items[l - i - 1], i, this);
    };
    Stack.prototype.toArray = function() {
      var array = new Array(this.size), l = this.size - 1, i = this.size;
      while (i--)
        array[i] = this.items[l - i];
      return array;
    };
    Stack.prototype.values = function() {
      var items = this.items, l = items.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    Stack.prototype.entries = function() {
      var items = this.items, l = items.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        return {
          value: [i++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      Stack.prototype[Symbol.iterator] = Stack.prototype.values;
    Stack.prototype.toString = function() {
      return this.toArray().join(",");
    };
    Stack.prototype.toJSON = function() {
      return this.toArray();
    };
    Stack.prototype.inspect = function() {
      var array = this.toArray();
      Object.defineProperty(array, "constructor", {
        value: Stack,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      Stack.prototype[Symbol.for("nodejs.util.inspect.custom")] = Stack.prototype.inspect;
    Stack.from = function(iterable) {
      var stack = new Stack();
      forEach(iterable, function(value) {
        stack.push(value);
      });
      return stack;
    };
    Stack.of = function() {
      return Stack.from(arguments);
    };
    module2.exports = Stack;
  }
});

// node_modules/mnemonist/set.js
var require_set = __commonJS({
  "node_modules/mnemonist/set.js"(exports) {
    "use strict";
    exports.intersection = function() {
      if (arguments.length < 2)
        throw new Error("mnemonist/Set.intersection: needs at least two arguments.");
      var I = /* @__PURE__ */ new Set();
      var smallestSize = Infinity, smallestSet = null;
      var s, i, l = arguments.length;
      for (i = 0; i < l; i++) {
        s = arguments[i];
        if (s.size === 0)
          return I;
        if (s.size < smallestSize) {
          smallestSize = s.size;
          smallestSet = s;
        }
      }
      var iterator = smallestSet.values(), step, item, add, set;
      while (step = iterator.next(), !step.done) {
        item = step.value;
        add = true;
        for (i = 0; i < l; i++) {
          set = arguments[i];
          if (set === smallestSet)
            continue;
          if (!set.has(item)) {
            add = false;
            break;
          }
        }
        if (add)
          I.add(item);
      }
      return I;
    };
    exports.union = function() {
      if (arguments.length < 2)
        throw new Error("mnemonist/Set.union: needs at least two arguments.");
      var U = /* @__PURE__ */ new Set();
      var i, l = arguments.length;
      var iterator, step;
      for (i = 0; i < l; i++) {
        iterator = arguments[i].values();
        while (step = iterator.next(), !step.done)
          U.add(step.value);
      }
      return U;
    };
    exports.difference = function(A, B) {
      if (!A.size)
        return /* @__PURE__ */ new Set();
      if (!B.size)
        return new Set(A);
      var D = /* @__PURE__ */ new Set();
      var iterator = A.values(), step;
      while (step = iterator.next(), !step.done) {
        if (!B.has(step.value))
          D.add(step.value);
      }
      return D;
    };
    exports.symmetricDifference = function(A, B) {
      var S = /* @__PURE__ */ new Set();
      var iterator = A.values(), step;
      while (step = iterator.next(), !step.done) {
        if (!B.has(step.value))
          S.add(step.value);
      }
      iterator = B.values();
      while (step = iterator.next(), !step.done) {
        if (!A.has(step.value))
          S.add(step.value);
      }
      return S;
    };
    exports.isSubset = function(A, B) {
      var iterator = A.values(), step;
      if (A === B)
        return true;
      if (A.size > B.size)
        return false;
      while (step = iterator.next(), !step.done) {
        if (!B.has(step.value))
          return false;
      }
      return true;
    };
    exports.isSuperset = function(A, B) {
      return exports.isSubset(B, A);
    };
    exports.add = function(A, B) {
      var iterator = B.values(), step;
      while (step = iterator.next(), !step.done)
        A.add(step.value);
      return;
    };
    exports.subtract = function(A, B) {
      var iterator = B.values(), step;
      while (step = iterator.next(), !step.done)
        A.delete(step.value);
      return;
    };
    exports.intersect = function(A, B) {
      var iterator = A.values(), step;
      while (step = iterator.next(), !step.done) {
        if (!B.has(step.value))
          A.delete(step.value);
      }
      return;
    };
    exports.disjunct = function(A, B) {
      var iterator = A.values(), step;
      var toRemove = [];
      while (step = iterator.next(), !step.done) {
        if (B.has(step.value))
          toRemove.push(step.value);
      }
      iterator = B.values();
      while (step = iterator.next(), !step.done) {
        if (!A.has(step.value))
          A.add(step.value);
      }
      for (var i = 0, l = toRemove.length; i < l; i++)
        A.delete(toRemove[i]);
      return;
    };
    exports.intersectionSize = function(A, B) {
      var tmp;
      if (A.size > B.size) {
        tmp = A;
        A = B;
        B = tmp;
      }
      if (A.size === 0)
        return 0;
      if (A === B)
        return A.size;
      var iterator = A.values(), step;
      var I = 0;
      while (step = iterator.next(), !step.done) {
        if (B.has(step.value))
          I++;
      }
      return I;
    };
    exports.unionSize = function(A, B) {
      var I = exports.intersectionSize(A, B);
      return A.size + B.size - I;
    };
    exports.jaccard = function(A, B) {
      var I = exports.intersectionSize(A, B);
      if (I === 0)
        return 0;
      var U = A.size + B.size - I;
      return I / U;
    };
    exports.overlap = function(A, B) {
      var I = exports.intersectionSize(A, B);
      if (I === 0)
        return 0;
      return I / Math.min(A.size, B.size);
    };
  }
});

// node_modules/mnemonist/sparse-queue-set.js
var require_sparse_queue_set = __commonJS({
  "node_modules/mnemonist/sparse-queue-set.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var getPointerArray = require_typed_arrays().getPointerArray;
    function SparseQueueSet(capacity) {
      var ByteArray = getPointerArray(capacity);
      this.start = 0;
      this.size = 0;
      this.capacity = capacity;
      this.dense = new ByteArray(capacity);
      this.sparse = new ByteArray(capacity);
    }
    SparseQueueSet.prototype.clear = function() {
      this.start = 0;
      this.size = 0;
    };
    SparseQueueSet.prototype.has = function(member) {
      if (this.size === 0)
        return false;
      var index = this.sparse[member];
      var inBounds = index < this.capacity && (index >= this.start && index < this.start + this.size) || index < (this.start + this.size) % this.capacity;
      return inBounds && this.dense[index] === member;
    };
    SparseQueueSet.prototype.enqueue = function(member) {
      var index = this.sparse[member];
      if (this.size !== 0) {
        var inBounds = index < this.capacity && (index >= this.start && index < this.start + this.size) || index < (this.start + this.size) % this.capacity;
        if (inBounds && this.dense[index] === member)
          return this;
      }
      index = (this.start + this.size) % this.capacity;
      this.dense[index] = member;
      this.sparse[member] = index;
      this.size++;
      return this;
    };
    SparseQueueSet.prototype.dequeue = function() {
      if (this.size === 0)
        return;
      var index = this.start;
      this.size--;
      this.start++;
      if (this.start === this.capacity)
        this.start = 0;
      var member = this.dense[index];
      this.sparse[member] = this.capacity;
      return member;
    };
    SparseQueueSet.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var c = this.capacity, l = this.size, i = this.start, j = 0;
      while (j < l) {
        callback.call(scope, this.dense[i], j, this);
        i++;
        j++;
        if (i === c)
          i = 0;
      }
    };
    SparseQueueSet.prototype.values = function() {
      var dense = this.dense, c = this.capacity, l = this.size, i = this.start, j = 0;
      return new Iterator(function() {
        if (j >= l)
          return {
            done: true
          };
        var value = dense[i];
        i++;
        j++;
        if (i === c)
          i = 0;
        return {
          value,
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      SparseQueueSet.prototype[Symbol.iterator] = SparseQueueSet.prototype.values;
    SparseQueueSet.prototype.inspect = function() {
      var proxy = [];
      this.forEach(function(member) {
        proxy.push(member);
      });
      Object.defineProperty(proxy, "constructor", {
        value: SparseQueueSet,
        enumerable: false
      });
      proxy.capacity = this.capacity;
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      SparseQueueSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = SparseQueueSet.prototype.inspect;
    module2.exports = SparseQueueSet;
  }
});

// node_modules/mnemonist/sparse-map.js
var require_sparse_map = __commonJS({
  "node_modules/mnemonist/sparse-map.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var getPointerArray = require_typed_arrays().getPointerArray;
    function SparseMap(Values, length) {
      if (arguments.length < 2) {
        length = Values;
        Values = Array;
      }
      var ByteArray = getPointerArray(length);
      this.size = 0;
      this.length = length;
      this.dense = new ByteArray(length);
      this.sparse = new ByteArray(length);
      this.vals = new Values(length);
    }
    SparseMap.prototype.clear = function() {
      this.size = 0;
    };
    SparseMap.prototype.has = function(member) {
      var index = this.sparse[member];
      return index < this.size && this.dense[index] === member;
    };
    SparseMap.prototype.get = function(member) {
      var index = this.sparse[member];
      if (index < this.size && this.dense[index] === member)
        return this.vals[index];
      return;
    };
    SparseMap.prototype.set = function(member, value) {
      var index = this.sparse[member];
      if (index < this.size && this.dense[index] === member) {
        this.vals[index] = value;
        return this;
      }
      this.dense[this.size] = member;
      this.sparse[member] = this.size;
      this.vals[this.size] = value;
      this.size++;
      return this;
    };
    SparseMap.prototype.delete = function(member) {
      var index = this.sparse[member];
      if (index >= this.size || this.dense[index] !== member)
        return false;
      index = this.dense[this.size - 1];
      this.dense[this.sparse[member]] = index;
      this.sparse[index] = this.sparse[member];
      this.size--;
      return true;
    };
    SparseMap.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0; i < this.size; i++)
        callback.call(scope, this.vals[i], this.dense[i]);
    };
    SparseMap.prototype.keys = function() {
      var size = this.size, dense = this.dense, i = 0;
      return new Iterator(function() {
        if (i < size) {
          var item = dense[i];
          i++;
          return {
            value: item
          };
        }
        return {
          done: true
        };
      });
    };
    SparseMap.prototype.values = function() {
      var size = this.size, values = this.vals, i = 0;
      return new Iterator(function() {
        if (i < size) {
          var item = values[i];
          i++;
          return {
            value: item
          };
        }
        return {
          done: true
        };
      });
    };
    SparseMap.prototype.entries = function() {
      var size = this.size, dense = this.dense, values = this.vals, i = 0;
      return new Iterator(function() {
        if (i < size) {
          var item = [dense[i], values[i]];
          i++;
          return {
            value: item
          };
        }
        return {
          done: true
        };
      });
    };
    if (typeof Symbol !== "undefined")
      SparseMap.prototype[Symbol.iterator] = SparseMap.prototype.entries;
    SparseMap.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      for (var i = 0; i < this.size; i++)
        proxy.set(this.dense[i], this.vals[i]);
      Object.defineProperty(proxy, "constructor", {
        value: SparseMap,
        enumerable: false
      });
      proxy.length = this.length;
      if (this.vals.constructor !== Array)
        proxy.type = this.vals.constructor.name;
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      SparseMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = SparseMap.prototype.inspect;
    module2.exports = SparseMap;
  }
});

// node_modules/mnemonist/sparse-set.js
var require_sparse_set = __commonJS({
  "node_modules/mnemonist/sparse-set.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var getPointerArray = require_typed_arrays().getPointerArray;
    function SparseSet(length) {
      var ByteArray = getPointerArray(length);
      this.size = 0;
      this.length = length;
      this.dense = new ByteArray(length);
      this.sparse = new ByteArray(length);
    }
    SparseSet.prototype.clear = function() {
      this.size = 0;
    };
    SparseSet.prototype.has = function(member) {
      var index = this.sparse[member];
      return index < this.size && this.dense[index] === member;
    };
    SparseSet.prototype.add = function(member) {
      var index = this.sparse[member];
      if (index < this.size && this.dense[index] === member)
        return this;
      this.dense[this.size] = member;
      this.sparse[member] = this.size;
      this.size++;
      return this;
    };
    SparseSet.prototype.delete = function(member) {
      var index = this.sparse[member];
      if (index >= this.size || this.dense[index] !== member)
        return false;
      index = this.dense[this.size - 1];
      this.dense[this.sparse[member]] = index;
      this.sparse[index] = this.sparse[member];
      this.size--;
      return true;
    };
    SparseSet.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var item;
      for (var i = 0; i < this.size; i++) {
        item = this.dense[i];
        callback.call(scope, item, item);
      }
    };
    SparseSet.prototype.values = function() {
      var size = this.size, dense = this.dense, i = 0;
      return new Iterator(function() {
        if (i < size) {
          var item = dense[i];
          i++;
          return {
            value: item
          };
        }
        return {
          done: true
        };
      });
    };
    if (typeof Symbol !== "undefined")
      SparseSet.prototype[Symbol.iterator] = SparseSet.prototype.values;
    SparseSet.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Set();
      for (var i = 0; i < this.size; i++)
        proxy.add(this.dense[i]);
      Object.defineProperty(proxy, "constructor", {
        value: SparseSet,
        enumerable: false
      });
      proxy.length = this.length;
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      SparseSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = SparseSet.prototype.inspect;
    module2.exports = SparseSet;
  }
});

// node_modules/mnemonist/symspell.js
var require_symspell = __commonJS({
  "node_modules/mnemonist/symspell.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    var DEFAULT_MAX_DISTANCE = 2;
    var DEFAULT_VERBOSITY = 2;
    var VERBOSITY = /* @__PURE__ */ new Set([
      // Returns only the top suggestion
      0,
      // Returns suggestions with the smallest edit distance
      1,
      // Returns every suggestion (no early termination)
      2
    ]);
    var VERBOSITY_EXPLANATIONS = {
      0: "Returns only the top suggestion",
      1: "Returns suggestions with the smallest edit distance",
      2: "Returns every suggestion (no early termination)"
    };
    function createDictionaryItem(value) {
      var suggestions = /* @__PURE__ */ new Set();
      if (typeof value === "number")
        suggestions.add(value);
      return {
        suggestions,
        count: 0
      };
    }
    function createSuggestionItem(term, distance, count) {
      return {
        term: term || "",
        distance: distance || 0,
        count: count || 0
      };
    }
    function edits(word, distance, max, deletes) {
      deletes = deletes || /* @__PURE__ */ new Set();
      distance++;
      var deletedItem, l = word.length, i;
      if (l > 1) {
        for (i = 0; i < l; i++) {
          deletedItem = word.substring(0, i) + word.substring(i + 1);
          if (!deletes.has(deletedItem)) {
            deletes.add(deletedItem);
            if (distance < max)
              edits(deletedItem, distance, max, deletes);
          }
        }
      }
      return deletes;
    }
    function addLowestDistance(words, verbosity, item, suggestion, int, deletedItem) {
      var first = item.suggestions.values().next().value;
      if (verbosity < 2 && item.suggestions.size > 0 && words[first].length - deletedItem.length > suggestion.length - deletedItem.length) {
        item.suggestions = /* @__PURE__ */ new Set();
        item.count = 0;
      }
      if (verbosity === 2 || !item.suggestions.size || words[first].length - deletedItem.length >= suggestion.length - deletedItem.length) {
        item.suggestions.add(int);
      }
    }
    function damerauLevenshtein(source, target) {
      var m = source.length, n = target.length, H = [[]], INF = m + n, sd = /* @__PURE__ */ new Map(), i, l, j;
      H[0][0] = INF;
      for (i = 0; i <= m; i++) {
        if (!H[i + 1])
          H[i + 1] = [];
        H[i + 1][1] = i;
        H[i + 1][0] = INF;
      }
      for (j = 0; j <= n; j++) {
        H[1][j + 1] = j;
        H[0][j + 1] = INF;
      }
      var st = source + target, letter;
      for (i = 0, l = st.length; i < l; i++) {
        letter = st[i];
        if (!sd.has(letter))
          sd.set(letter, 0);
      }
      for (i = 1; i <= m; i++) {
        var DB = 0;
        for (j = 1; j <= n; j++) {
          var i1 = sd.get(target[j - 1]), j1 = DB;
          if (source[i - 1] === target[j - 1]) {
            H[i + 1][j + 1] = H[i][j];
            DB = j;
          } else {
            H[i + 1][j + 1] = Math.min(
              H[i][j],
              H[i + 1][j],
              H[i][j + 1]
            ) + 1;
          }
          H[i + 1][j + 1] = Math.min(
            H[i + 1][j + 1],
            H[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1)
          );
        }
        sd.set(source[i - 1], i);
      }
      return H[m + 1][n + 1];
    }
    function lookup(dictionary, words, verbosity, maxDistance, maxLength, input) {
      var length = input.length;
      if (length - maxDistance > maxLength)
        return [];
      var candidates = [input], candidateSet = /* @__PURE__ */ new Set(), suggestionSet = /* @__PURE__ */ new Set();
      var suggestions = [], candidate, item;
      while (candidates.length > 0) {
        candidate = candidates.shift();
        if (verbosity < 2 && suggestions.length > 0 && length - candidate.length > suggestions[0].distance)
          break;
        item = dictionary[candidate];
        if (item !== void 0) {
          if (typeof item === "number")
            item = createDictionaryItem(item);
          if (item.count > 0 && !suggestionSet.has(candidate)) {
            suggestionSet.add(candidate);
            var suggestItem = createSuggestionItem(
              candidate,
              length - candidate.length,
              item.count
            );
            suggestions.push(suggestItem);
            if (verbosity < 2 && length - candidate.length === 0)
              break;
          }
          item.suggestions.forEach((index) => {
            var suggestion = words[index];
            if (suggestionSet.has(suggestion))
              return;
            suggestionSet.add(suggestion);
            var distance = 0;
            if (input !== suggestion) {
              if (suggestion.length === candidate.length) {
                distance = length - candidate.length;
              } else if (length === candidate.length) {
                distance = suggestion.length - candidate.length;
              } else {
                var ii = 0, jj = 0;
                var l2 = suggestion.length;
                while (ii < l2 && ii < length && suggestion[ii] === input[ii]) {
                  ii++;
                }
                while (jj < l2 - ii && jj < length && suggestion[l2 - jj - 1] === input[length - jj - 1]) {
                  jj++;
                }
                if (ii > 0 || jj > 0) {
                  distance = damerauLevenshtein(
                    suggestion.substr(ii, l2 - ii - jj),
                    input.substr(ii, length - ii - jj)
                  );
                } else {
                  distance = damerauLevenshtein(suggestion, input);
                }
              }
            }
            if (verbosity < 2 && suggestions.length > 0 && suggestions[0].distance > distance) {
              suggestions = [];
            }
            if (verbosity < 2 && suggestions.length > 0 && distance > suggestions[0].distance) {
              return;
            }
            if (distance <= maxDistance) {
              var target = dictionary[suggestion];
              if (target !== void 0) {
                suggestions.push(createSuggestionItem(
                  suggestion,
                  distance,
                  target.count
                ));
              }
            }
          });
        }
        if (length - candidate.length < maxDistance) {
          if (verbosity < 2 && suggestions.length > 0 && length - candidate.length >= suggestions[0].distance)
            continue;
          for (var i = 0, l = candidate.length; i < l; i++) {
            var deletedItem = candidate.substring(0, i) + candidate.substring(i + 1);
            if (!candidateSet.has(deletedItem)) {
              candidateSet.add(deletedItem);
              candidates.push(deletedItem);
            }
          }
        }
      }
      if (verbosity === 0)
        return suggestions.slice(0, 1);
      return suggestions;
    }
    function SymSpell(options) {
      options = options || {};
      this.clear();
      this.maxDistance = typeof options.maxDistance === "number" ? options.maxDistance : DEFAULT_MAX_DISTANCE;
      this.verbosity = typeof options.verbosity === "number" ? options.verbosity : DEFAULT_VERBOSITY;
      if (typeof this.maxDistance !== "number" || this.maxDistance <= 0)
        throw Error("mnemonist/SymSpell.constructor: invalid `maxDistance` option. Should be a integer greater than 0.");
      if (!VERBOSITY.has(this.verbosity))
        throw Error("mnemonist/SymSpell.constructor: invalid `verbosity` option. Should be either 0, 1 or 2.");
    }
    SymSpell.prototype.clear = function() {
      this.size = 0;
      this.dictionary = /* @__PURE__ */ Object.create(null);
      this.maxLength = 0;
      this.words = [];
    };
    SymSpell.prototype.add = function(word) {
      var item = this.dictionary[word];
      if (item !== void 0) {
        if (typeof item === "number") {
          item = createDictionaryItem(item);
          this.dictionary[word] = item;
        }
        item.count++;
      } else {
        item = createDictionaryItem();
        item.count++;
        this.dictionary[word] = item;
        if (word.length > this.maxLength)
          this.maxLength = word.length;
      }
      if (item.count === 1) {
        var number = this.words.length;
        this.words.push(word);
        var deletes = edits(word, 0, this.maxDistance);
        deletes.forEach((deletedItem) => {
          var target = this.dictionary[deletedItem];
          if (target !== void 0) {
            if (typeof target === "number") {
              target = createDictionaryItem(target);
              this.dictionary[deletedItem] = target;
            }
            if (!target.suggestions.has(number)) {
              addLowestDistance(
                this.words,
                this.verbosity,
                target,
                word,
                number,
                deletedItem
              );
            }
          } else {
            this.dictionary[deletedItem] = number;
          }
        });
      }
      this.size++;
      return this;
    };
    SymSpell.prototype.search = function(input) {
      return lookup(
        this.dictionary,
        this.words,
        this.verbosity,
        this.maxDistance,
        this.maxLength,
        input
      );
    };
    SymSpell.prototype.inspect = function() {
      var array = [];
      array.size = this.size;
      array.maxDistance = this.maxDistance;
      array.verbosity = this.verbosity;
      array.behavior = VERBOSITY_EXPLANATIONS[this.verbosity];
      for (var k in this.dictionary) {
        if (typeof this.dictionary[k] === "object" && this.dictionary[k].count)
          array.push([k, this.dictionary[k].count]);
      }
      Object.defineProperty(array, "constructor", {
        value: SymSpell,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      SymSpell.prototype[Symbol.for("nodejs.util.inspect.custom")] = SymSpell.prototype.inspect;
    SymSpell.from = function(iterable, options) {
      var index = new SymSpell(options);
      forEach(iterable, function(value) {
        index.add(value);
      });
      return index;
    };
    module2.exports = SymSpell;
  }
});

// node_modules/mnemonist/trie-map.js
var require_trie_map = __commonJS({
  "node_modules/mnemonist/trie-map.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    var Iterator = require_iterator();
    var SENTINEL = String.fromCharCode(0);
    function TrieMap(Token) {
      this.mode = Token === Array ? "array" : "string";
      this.clear();
    }
    TrieMap.prototype.clear = function() {
      this.root = {};
      this.size = 0;
    };
    TrieMap.prototype.set = function(prefix, value) {
      var node = this.root, token;
      for (var i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token] || (node[token] = {});
      }
      if (!(SENTINEL in node))
        this.size++;
      node[SENTINEL] = value;
      return this;
    };
    TrieMap.prototype.update = function(prefix, updateFunction) {
      var node = this.root, token;
      for (var i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token] || (node[token] = {});
      }
      if (!(SENTINEL in node))
        this.size++;
      node[SENTINEL] = updateFunction(node[SENTINEL]);
      return this;
    };
    TrieMap.prototype.get = function(prefix) {
      var node = this.root, token, i, l;
      for (i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token];
        if (typeof node === "undefined")
          return;
      }
      if (!(SENTINEL in node))
        return;
      return node[SENTINEL];
    };
    TrieMap.prototype.delete = function(prefix) {
      var node = this.root, toPrune = null, tokenToPrune = null, parent, token, i, l;
      for (i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        parent = node;
        node = node[token];
        if (typeof node === "undefined")
          return false;
        if (toPrune !== null) {
          if (Object.keys(node).length > 1) {
            toPrune = null;
            tokenToPrune = null;
          }
        } else {
          if (Object.keys(node).length < 2) {
            toPrune = parent;
            tokenToPrune = token;
          }
        }
      }
      if (!(SENTINEL in node))
        return false;
      this.size--;
      if (toPrune)
        delete toPrune[tokenToPrune];
      else
        delete node[SENTINEL];
      return true;
    };
    TrieMap.prototype.has = function(prefix) {
      var node = this.root, token;
      for (var i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token];
        if (typeof node === "undefined")
          return false;
      }
      return SENTINEL in node;
    };
    TrieMap.prototype.find = function(prefix) {
      var isString = typeof prefix === "string";
      var node = this.root, matches = [], token, i, l;
      for (i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token];
        if (typeof node === "undefined")
          return matches;
      }
      var nodeStack = [node], prefixStack = [prefix], k;
      while (nodeStack.length) {
        prefix = prefixStack.pop();
        node = nodeStack.pop();
        for (k in node) {
          if (k === SENTINEL) {
            matches.push([prefix, node[SENTINEL]]);
            continue;
          }
          nodeStack.push(node[k]);
          prefixStack.push(isString ? prefix + k : prefix.concat(k));
        }
      }
      return matches;
    };
    TrieMap.prototype.values = function(prefix) {
      var node = this.root, nodeStack = [], token, i, l;
      if (prefix) {
        for (i = 0, l = prefix.length; i < l; i++) {
          token = prefix[i];
          node = node[token];
          if (typeof node === "undefined")
            return Iterator.empty();
        }
      }
      nodeStack.push(node);
      return new Iterator(function() {
        var currentNode, hasValue = false, k;
        while (nodeStack.length) {
          currentNode = nodeStack.pop();
          for (k in currentNode) {
            if (k === SENTINEL) {
              hasValue = true;
              continue;
            }
            nodeStack.push(currentNode[k]);
          }
          if (hasValue)
            return { done: false, value: currentNode[SENTINEL] };
        }
        return { done: true };
      });
    };
    TrieMap.prototype.prefixes = function(prefix) {
      var node = this.root, nodeStack = [], prefixStack = [], token, i, l;
      var isString = this.mode === "string";
      if (prefix) {
        for (i = 0, l = prefix.length; i < l; i++) {
          token = prefix[i];
          node = node[token];
          if (typeof node === "undefined")
            return Iterator.empty();
        }
      } else {
        prefix = isString ? "" : [];
      }
      nodeStack.push(node);
      prefixStack.push(prefix);
      return new Iterator(function() {
        var currentNode, currentPrefix, hasValue = false, k;
        while (nodeStack.length) {
          currentNode = nodeStack.pop();
          currentPrefix = prefixStack.pop();
          for (k in currentNode) {
            if (k === SENTINEL) {
              hasValue = true;
              continue;
            }
            nodeStack.push(currentNode[k]);
            prefixStack.push(isString ? currentPrefix + k : currentPrefix.concat(k));
          }
          if (hasValue)
            return { done: false, value: currentPrefix };
        }
        return { done: true };
      });
    };
    TrieMap.prototype.keys = TrieMap.prototype.prefixes;
    TrieMap.prototype.entries = function(prefix) {
      var node = this.root, nodeStack = [], prefixStack = [], token, i, l;
      var isString = this.mode === "string";
      if (prefix) {
        for (i = 0, l = prefix.length; i < l; i++) {
          token = prefix[i];
          node = node[token];
          if (typeof node === "undefined")
            return Iterator.empty();
        }
      } else {
        prefix = isString ? "" : [];
      }
      nodeStack.push(node);
      prefixStack.push(prefix);
      return new Iterator(function() {
        var currentNode, currentPrefix, hasValue = false, k;
        while (nodeStack.length) {
          currentNode = nodeStack.pop();
          currentPrefix = prefixStack.pop();
          for (k in currentNode) {
            if (k === SENTINEL) {
              hasValue = true;
              continue;
            }
            nodeStack.push(currentNode[k]);
            prefixStack.push(isString ? currentPrefix + k : currentPrefix.concat(k));
          }
          if (hasValue)
            return { done: false, value: [currentPrefix, currentNode[SENTINEL]] };
        }
        return { done: true };
      });
    };
    if (typeof Symbol !== "undefined")
      TrieMap.prototype[Symbol.iterator] = TrieMap.prototype.entries;
    TrieMap.prototype.inspect = function() {
      var proxy = new Array(this.size);
      var iterator = this.entries(), step, i = 0;
      while (step = iterator.next(), !step.done)
        proxy[i++] = step.value;
      Object.defineProperty(proxy, "constructor", {
        value: TrieMap,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      TrieMap.prototype[Symbol.for("nodejs.util.inspect.custom")] = TrieMap.prototype.inspect;
    TrieMap.prototype.toJSON = function() {
      return this.root;
    };
    TrieMap.from = function(iterable) {
      var trie = new TrieMap();
      forEach(iterable, function(value, key) {
        trie.set(key, value);
      });
      return trie;
    };
    TrieMap.SENTINEL = SENTINEL;
    module2.exports = TrieMap;
  }
});

// node_modules/mnemonist/trie.js
var require_trie = __commonJS({
  "node_modules/mnemonist/trie.js"(exports, module2) {
    "use strict";
    var forEach = require_foreach();
    var TrieMap = require_trie_map();
    var SENTINEL = String.fromCharCode(0);
    function Trie(Token) {
      this.mode = Token === Array ? "array" : "string";
      this.clear();
    }
    for (methodName in TrieMap.prototype)
      Trie.prototype[methodName] = TrieMap.prototype[methodName];
    var methodName;
    delete Trie.prototype.set;
    delete Trie.prototype.get;
    delete Trie.prototype.values;
    delete Trie.prototype.entries;
    Trie.prototype.add = function(prefix) {
      var node = this.root, token;
      for (var i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token] || (node[token] = {});
      }
      if (!(SENTINEL in node))
        this.size++;
      node[SENTINEL] = true;
      return this;
    };
    Trie.prototype.find = function(prefix) {
      var isString = typeof prefix === "string";
      var node = this.root, matches = [], token, i, l;
      for (i = 0, l = prefix.length; i < l; i++) {
        token = prefix[i];
        node = node[token];
        if (typeof node === "undefined")
          return matches;
      }
      var nodeStack = [node], prefixStack = [prefix], k;
      while (nodeStack.length) {
        prefix = prefixStack.pop();
        node = nodeStack.pop();
        for (k in node) {
          if (k === SENTINEL) {
            matches.push(prefix);
            continue;
          }
          nodeStack.push(node[k]);
          prefixStack.push(isString ? prefix + k : prefix.concat(k));
        }
      }
      return matches;
    };
    if (typeof Symbol !== "undefined")
      Trie.prototype[Symbol.iterator] = Trie.prototype.keys;
    Trie.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Set();
      var iterator = this.keys(), step;
      while (step = iterator.next(), !step.done)
        proxy.add(step.value);
      Object.defineProperty(proxy, "constructor", {
        value: Trie,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      Trie.prototype[Symbol.for("nodejs.util.inspect.custom")] = Trie.prototype.inspect;
    Trie.prototype.toJSON = function() {
      return this.root;
    };
    Trie.from = function(iterable) {
      var trie = new Trie();
      forEach(iterable, function(value) {
        trie.add(value);
      });
      return trie;
    };
    Trie.SENTINEL = SENTINEL;
    module2.exports = Trie;
  }
});

// node_modules/mnemonist/vector.js
var require_vector = __commonJS({
  "node_modules/mnemonist/vector.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var iterables = require_iterables();
    var typed = require_typed_arrays();
    var DEFAULT_GROWING_POLICY = function(currentCapacity) {
      return Math.max(1, Math.ceil(currentCapacity * 1.5));
    };
    var pointerArrayFactory = function(capacity) {
      var PointerArray = typed.getPointerArray(capacity);
      return new PointerArray(capacity);
    };
    function Vector(ArrayClass, initialCapacityOrOptions) {
      if (arguments.length < 1)
        throw new Error("mnemonist/vector: expecting at least a byte array constructor.");
      var initialCapacity = initialCapacityOrOptions || 0, policy = DEFAULT_GROWING_POLICY, initialLength = 0, factory = false;
      if (typeof initialCapacityOrOptions === "object") {
        initialCapacity = initialCapacityOrOptions.initialCapacity || 0;
        initialLength = initialCapacityOrOptions.initialLength || 0;
        policy = initialCapacityOrOptions.policy || policy;
        factory = initialCapacityOrOptions.factory === true;
      }
      this.factory = factory ? ArrayClass : null;
      this.ArrayClass = ArrayClass;
      this.length = initialLength;
      this.capacity = Math.max(initialLength, initialCapacity);
      this.policy = policy;
      this.array = new ArrayClass(this.capacity);
    }
    Vector.prototype.set = function(index, value) {
      if (this.length < index)
        throw new Error("Vector(" + this.ArrayClass.name + ").set: index out of bounds.");
      this.array[index] = value;
      return this;
    };
    Vector.prototype.get = function(index) {
      if (this.length < index)
        return void 0;
      return this.array[index];
    };
    Vector.prototype.applyPolicy = function(override) {
      var newCapacity = this.policy(override || this.capacity);
      if (typeof newCapacity !== "number" || newCapacity < 0)
        throw new Error("mnemonist/vector.applyPolicy: policy returned an invalid value (expecting a positive integer).");
      if (newCapacity <= this.capacity)
        throw new Error("mnemonist/vector.applyPolicy: policy returned a less or equal capacity to allocate.");
      return newCapacity;
    };
    Vector.prototype.reallocate = function(capacity) {
      if (capacity === this.capacity)
        return this;
      var oldArray = this.array;
      if (capacity < this.length)
        this.length = capacity;
      if (capacity > this.capacity) {
        if (this.factory === null)
          this.array = new this.ArrayClass(capacity);
        else
          this.array = this.factory(capacity);
        if (typed.isTypedArray(this.array)) {
          this.array.set(oldArray, 0);
        } else {
          for (var i = 0, l = this.length; i < l; i++)
            this.array[i] = oldArray[i];
        }
      } else {
        this.array = oldArray.slice(0, capacity);
      }
      this.capacity = capacity;
      return this;
    };
    Vector.prototype.grow = function(capacity) {
      var newCapacity;
      if (typeof capacity === "number") {
        if (this.capacity >= capacity)
          return this;
        newCapacity = this.capacity;
        while (newCapacity < capacity)
          newCapacity = this.applyPolicy(newCapacity);
        this.reallocate(newCapacity);
        return this;
      }
      newCapacity = this.applyPolicy();
      this.reallocate(newCapacity);
      return this;
    };
    Vector.prototype.resize = function(length) {
      if (length === this.length)
        return this;
      if (length < this.length) {
        this.length = length;
        return this;
      }
      this.length = length;
      this.reallocate(length);
      return this;
    };
    Vector.prototype.push = function(value) {
      if (this.capacity === this.length)
        this.grow();
      this.array[this.length++] = value;
      return this.length;
    };
    Vector.prototype.pop = function() {
      if (this.length === 0)
        return;
      return this.array[--this.length];
    };
    Vector.prototype.values = function() {
      var items = this.array, l = this.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[i];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    Vector.prototype.entries = function() {
      var items = this.array, l = this.length, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[i];
        return {
          value: [i++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      Vector.prototype[Symbol.iterator] = Vector.prototype.values;
    Vector.prototype.inspect = function() {
      var proxy = this.array.slice(0, this.length);
      proxy.type = this.array.constructor.name;
      proxy.items = this.length;
      proxy.capacity = this.capacity;
      Object.defineProperty(proxy, "constructor", {
        value: Vector,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      Vector.prototype[Symbol.for("nodejs.util.inspect.custom")] = Vector.prototype.inspect;
    Vector.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/vector.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var vector = new Vector(ArrayClass, capacity);
      forEach(iterable, function(value) {
        vector.push(value);
      });
      return vector;
    };
    function subClass(ArrayClass) {
      var SubClass = function(initialCapacityOrOptions) {
        Vector.call(this, ArrayClass, initialCapacityOrOptions);
      };
      for (var k in Vector.prototype) {
        if (Vector.prototype.hasOwnProperty(k))
          SubClass.prototype[k] = Vector.prototype[k];
      }
      SubClass.from = function(iterable, capacity) {
        return Vector.from(iterable, ArrayClass, capacity);
      };
      if (typeof Symbol !== "undefined")
        SubClass.prototype[Symbol.iterator] = SubClass.prototype.values;
      return SubClass;
    }
    Vector.Int8Vector = subClass(Int8Array);
    Vector.Uint8Vector = subClass(Uint8Array);
    Vector.Uint8ClampedVector = subClass(Uint8ClampedArray);
    Vector.Int16Vector = subClass(Int16Array);
    Vector.Uint16Vector = subClass(Uint16Array);
    Vector.Int32Vector = subClass(Int32Array);
    Vector.Uint32Vector = subClass(Uint32Array);
    Vector.Float32Vector = subClass(Float32Array);
    Vector.Float64Vector = subClass(Float64Array);
    Vector.PointerVector = subClass(pointerArrayFactory);
    module2.exports = Vector;
  }
});

// node_modules/mnemonist/vp-tree.js
var require_vp_tree = __commonJS({
  "node_modules/mnemonist/vp-tree.js"(exports, module2) {
    "use strict";
    var iterables = require_iterables();
    var typed = require_typed_arrays();
    var inplaceQuickSortIndices = require_quick().inplaceQuickSortIndices;
    var lowerBoundIndices = require_binary_search().lowerBoundIndices;
    var Heap = require_heap();
    var getPointerArray = typed.getPointerArray;
    function comparator(a, b) {
      if (a.distance < b.distance)
        return 1;
      if (a.distance > b.distance)
        return -1;
      return 0;
    }
    function createBinaryTree(distance, items, indices) {
      var N = indices.length;
      var PointerArray = getPointerArray(N);
      var C = 0, nodes = new PointerArray(N), lefts = new PointerArray(N), rights = new PointerArray(N), mus = new Float64Array(N), stack = [0, 0, N], distances = new Float64Array(N), nodeIndex, vantagePoint, medianIndex, lo, hi, mid, mu, i, l;
      while (stack.length) {
        hi = stack.pop();
        lo = stack.pop();
        nodeIndex = stack.pop();
        vantagePoint = indices[hi - 1];
        hi--;
        l = hi - lo;
        nodes[nodeIndex] = vantagePoint;
        if (l === 0)
          continue;
        if (l === 1) {
          mu = distance(items[vantagePoint], items[indices[lo]]);
          mus[nodeIndex] = mu;
          C++;
          rights[nodeIndex] = C;
          nodes[C] = indices[lo];
          continue;
        }
        for (i = lo; i < hi; i++)
          distances[indices[i]] = distance(items[vantagePoint], items[indices[i]]);
        inplaceQuickSortIndices(distances, indices, lo, hi);
        medianIndex = lo + l / 2 - 1;
        if (medianIndex === (medianIndex | 0)) {
          mu = (distances[indices[medianIndex]] + distances[indices[medianIndex + 1]]) / 2;
        } else {
          mu = distances[indices[Math.ceil(medianIndex)]];
        }
        mus[nodeIndex] = mu;
        mid = lowerBoundIndices(distances, indices, mu, lo, hi);
        if (hi - mid > 0) {
          C++;
          rights[nodeIndex] = C;
          stack.push(C, mid, hi);
        }
        if (mid - lo > 0) {
          C++;
          lefts[nodeIndex] = C;
          stack.push(C, lo, mid);
        }
      }
      return {
        nodes,
        lefts,
        rights,
        mus
      };
    }
    function VPTree(distance, items) {
      if (typeof distance !== "function")
        throw new Error("mnemonist/VPTree.constructor: given `distance` must be a function.");
      if (!items)
        throw new Error("mnemonist/VPTree.constructor: you must provide items to the tree. A VPTree cannot be updated after its creation.");
      this.distance = distance;
      this.heap = new Heap(comparator);
      this.D = 0;
      var arrays = iterables.toArrayWithIndices(items);
      this.items = arrays[0];
      var indices = arrays[1];
      this.size = indices.length;
      var result = createBinaryTree(distance, this.items, indices);
      this.nodes = result.nodes;
      this.lefts = result.lefts;
      this.rights = result.rights;
      this.mus = result.mus;
    }
    VPTree.prototype.nearestNeighbors = function(k, query) {
      var neighbors = this.heap, stack = [0], tau = Infinity, nodeIndex, itemIndex, vantagePoint, leftIndex, rightIndex, mu, d;
      this.D = 0;
      while (stack.length) {
        nodeIndex = stack.pop();
        itemIndex = this.nodes[nodeIndex];
        vantagePoint = this.items[itemIndex];
        d = this.distance(vantagePoint, query);
        this.D++;
        if (d < tau) {
          neighbors.push({ distance: d, item: vantagePoint });
          if (neighbors.size > k)
            neighbors.pop();
          if (neighbors.size >= k)
            tau = neighbors.peek().distance;
        }
        leftIndex = this.lefts[nodeIndex];
        rightIndex = this.rights[nodeIndex];
        if (!leftIndex && !rightIndex)
          continue;
        mu = this.mus[nodeIndex];
        if (d < mu) {
          if (leftIndex && d < mu + tau)
            stack.push(leftIndex);
          if (rightIndex && d >= mu - tau)
            stack.push(rightIndex);
        } else {
          if (rightIndex && d >= mu - tau)
            stack.push(rightIndex);
          if (leftIndex && d < mu + tau)
            stack.push(leftIndex);
        }
      }
      var array = new Array(neighbors.size);
      for (var i = neighbors.size - 1; i >= 0; i--)
        array[i] = neighbors.pop();
      return array;
    };
    VPTree.prototype.neighbors = function(radius, query) {
      var neighbors = [], stack = [0], nodeIndex, itemIndex, vantagePoint, leftIndex, rightIndex, mu, d;
      this.D = 0;
      while (stack.length) {
        nodeIndex = stack.pop();
        itemIndex = this.nodes[nodeIndex];
        vantagePoint = this.items[itemIndex];
        d = this.distance(vantagePoint, query);
        this.D++;
        if (d <= radius)
          neighbors.push({ distance: d, item: vantagePoint });
        leftIndex = this.lefts[nodeIndex];
        rightIndex = this.rights[nodeIndex];
        if (!leftIndex && !rightIndex)
          continue;
        mu = this.mus[nodeIndex];
        if (d < mu) {
          if (leftIndex && d < mu + radius)
            stack.push(leftIndex);
          if (rightIndex && d >= mu - radius)
            stack.push(rightIndex);
        } else {
          if (rightIndex && d >= mu - radius)
            stack.push(rightIndex);
          if (leftIndex && d < mu + radius)
            stack.push(leftIndex);
        }
      }
      return neighbors;
    };
    VPTree.prototype.inspect = function() {
      var array = this.items.slice();
      Object.defineProperty(array, "constructor", {
        value: VPTree,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      VPTree.prototype[Symbol.for("nodejs.util.inspect.custom")] = VPTree.prototype.inspect;
    VPTree.from = function(iterable, distance) {
      return new VPTree(distance, iterable);
    };
    module2.exports = VPTree;
  }
});

// node_modules/mnemonist/index.js
var require_mnemonist = __commonJS({
  "node_modules/mnemonist/index.js"(exports, module2) {
    "use strict";
    var Heap = require_heap();
    var FibonacciHeap = require_fibonacci_heap();
    var SuffixArray = require_suffix_array();
    module2.exports = {
      BiMap: require_bi_map(),
      BitSet: require_bit_set(),
      BitVector: require_bit_vector(),
      BloomFilter: require_bloom_filter(),
      BKTree: require_bk_tree(),
      CircularBuffer: require_circular_buffer(),
      DefaultMap: require_default_map(),
      DefaultWeakMap: require_default_weak_map(),
      FixedDeque: require_fixed_deque(),
      StaticDisjointSet: require_static_disjoint_set(),
      FibonacciHeap,
      MinFibonacciHeap: FibonacciHeap.MinFibonacciHeap,
      MaxFibonacciHeap: FibonacciHeap.MaxFibonacciHeap,
      FixedReverseHeap: require_fixed_reverse_heap(),
      FuzzyMap: require_fuzzy_map(),
      FuzzyMultiMap: require_fuzzy_multi_map(),
      HashedArrayTree: require_hashed_array_tree(),
      Heap,
      MinHeap: Heap.MinHeap,
      MaxHeap: Heap.MaxHeap,
      StaticIntervalTree: require_static_interval_tree(),
      InvertedIndex: require_inverted_index(),
      KDTree: require_kd_tree(),
      LinkedList: require_linked_list(),
      LRUCache: require_lru_cache(),
      LRUCacheWithDelete: require_lru_cache_with_delete(),
      LRUMap: require_lru_map(),
      LRUMapWithDelete: require_lru_map_with_delete(),
      MultiMap: require_multi_map(),
      MultiSet: require_multi_set(),
      PassjoinIndex: require_passjoin_index(),
      Queue: require_queue(),
      FixedStack: require_fixed_stack(),
      Stack: require_stack(),
      SuffixArray,
      GeneralizedSuffixArray: SuffixArray.GeneralizedSuffixArray,
      Set: require_set(),
      SparseQueueSet: require_sparse_queue_set(),
      SparseMap: require_sparse_map(),
      SparseSet: require_sparse_set(),
      SymSpell: require_symspell(),
      Trie: require_trie(),
      TrieMap: require_trie_map(),
      Vector: require_vector(),
      VPTree: require_vp_tree()
    };
  }
});

// node_modules/@fastify/cors/vary.js
var require_vary = __commonJS({
  "node_modules/@fastify/cors/vary.js"(exports, module2) {
    "use strict";
    var LRUCache = require_mnemonist().LRUCache;
    var validFieldnameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function validateFieldname(fieldname) {
      if (validFieldnameRE.test(fieldname) === false) {
        throw new TypeError("Fieldname contains invalid characters.");
      }
    }
    function parse(header) {
      header = header.trim().toLowerCase();
      const result = [];
      if (header.length === 0) {
      } else if (header.indexOf(",") === -1) {
        result.push(header);
      } else {
        const il = header.length;
        let i = 0;
        let pos = 0;
        let char;
        for (i = 0; i < il; ++i) {
          char = header[i];
          if (char === " ") {
            pos = i + 1;
          } else if (char === ",") {
            if (pos !== i) {
              result.push(header.slice(pos, i));
            }
            pos = i + 1;
          }
        }
        if (pos !== i) {
          result.push(header.slice(pos, i));
        }
      }
      return result;
    }
    function createAddFieldnameToVary(fieldname) {
      const headerCache = new LRUCache(1e3);
      validateFieldname(fieldname);
      return function(reply) {
        let header = reply.getHeader("Vary");
        if (!header) {
          reply.header("Vary", fieldname);
          return;
        }
        if (header === "*") {
          return;
        }
        if (fieldname === "*") {
          reply.header("Vary", "*");
          return;
        }
        if (Array.isArray(header)) {
          header = header.join(", ");
        }
        if (!headerCache.has(header)) {
          const vals = parse(header);
          if (vals.indexOf("*") !== -1) {
            headerCache.set(header, "*");
          } else if (vals.indexOf(fieldname.toLowerCase()) === -1) {
            headerCache.set(header, header + ", " + fieldname);
          } else {
            headerCache.set(header, null);
          }
        }
        const cached = headerCache.get(header);
        if (cached !== null) {
          reply.header("Vary", cached);
        }
      };
    }
    module2.exports.createAddFieldnameToVary = createAddFieldnameToVary;
    module2.exports.addOriginToVaryHeader = createAddFieldnameToVary("Origin");
    module2.exports.addAccessControlRequestHeadersToVaryHeader = createAddFieldnameToVary("Access-Control-Request-Headers");
    module2.exports.parse = parse;
  }
});

// node_modules/@fastify/cors/index.js
var require_cors = __commonJS({
  "node_modules/@fastify/cors/index.js"(exports, module2) {
    "use strict";
    var fp = require_plugin();
    var {
      addAccessControlRequestHeadersToVaryHeader,
      addOriginToVaryHeader
    } = require_vary();
    var defaultOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      hook: "onRequest",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: false,
      exposedHeaders: null,
      allowedHeaders: null,
      maxAge: null,
      preflight: true,
      strictPreflight: true
    };
    var validHooks = [
      "onRequest",
      "preParsing",
      "preValidation",
      "preHandler",
      "preSerialization",
      "onSend"
    ];
    var hookWithPayload = [
      "preSerialization",
      "preParsing",
      "onSend"
    ];
    function validateHook(value, next) {
      if (validHooks.indexOf(value) !== -1) {
        return;
      }
      next(new TypeError("@fastify/cors: Invalid hook option provided."));
    }
    function fastifyCors2(fastify2, opts, next) {
      fastify2.decorateRequest("corsPreflightEnabled", false);
      let hideOptionsRoute = true;
      if (typeof opts === "function") {
        handleCorsOptionsDelegator(opts, fastify2, { hook: defaultOptions.hook }, next);
      } else if (opts.delegator) {
        const { delegator, ...options } = opts;
        handleCorsOptionsDelegator(delegator, fastify2, options, next);
      } else {
        if (opts.hideOptionsRoute !== void 0)
          hideOptionsRoute = opts.hideOptionsRoute;
        const corsOptions = normalizeCorsOptions(opts);
        validateHook(corsOptions.hook, next);
        if (hookWithPayload.indexOf(corsOptions.hook) !== -1) {
          fastify2.addHook(corsOptions.hook, function handleCors(req, reply, payload, next2) {
            addCorsHeadersHandler(fastify2, corsOptions, req, reply, next2);
          });
        } else {
          fastify2.addHook(corsOptions.hook, function handleCors(req, reply, next2) {
            addCorsHeadersHandler(fastify2, corsOptions, req, reply, next2);
          });
        }
      }
      fastify2.options("*", { schema: { hide: hideOptionsRoute } }, (req, reply) => {
        if (!req.corsPreflightEnabled) {
          reply.callNotFound();
          return;
        }
        reply.send();
      });
      next();
    }
    function handleCorsOptionsDelegator(optionsResolver, fastify2, opts, next) {
      const hook = opts && opts.hook || defaultOptions.hook;
      validateHook(hook, next);
      if (optionsResolver.length === 2) {
        if (hookWithPayload.indexOf(hook) !== -1) {
          fastify2.addHook(hook, function handleCors(req, reply, payload, next2) {
            handleCorsOptionsCallbackDelegator(optionsResolver, fastify2, req, reply, next2);
          });
        } else {
          fastify2.addHook(hook, function handleCors(req, reply, next2) {
            handleCorsOptionsCallbackDelegator(optionsResolver, fastify2, req, reply, next2);
          });
        }
      } else {
        if (hookWithPayload.indexOf(hook) !== -1) {
          fastify2.addHook(hook, function handleCors(req, reply, payload, next2) {
            const ret = optionsResolver(req);
            if (ret && typeof ret.then === "function") {
              ret.then((options) => addCorsHeadersHandler(fastify2, normalizeCorsOptions(options), req, reply, next2)).catch(next2);
              return;
            }
            next2(new Error("Invalid CORS origin option"));
          });
        } else {
          fastify2.addHook(hook, function handleCors(req, reply, next2) {
            const ret = optionsResolver(req);
            if (ret && typeof ret.then === "function") {
              ret.then((options) => addCorsHeadersHandler(fastify2, normalizeCorsOptions(options), req, reply, next2)).catch(next2);
              return;
            }
            next2(new Error("Invalid CORS origin option"));
          });
        }
      }
    }
    function handleCorsOptionsCallbackDelegator(optionsResolver, fastify2, req, reply, next) {
      optionsResolver(req, (err, options) => {
        if (err) {
          next(err);
        } else {
          addCorsHeadersHandler(fastify2, normalizeCorsOptions(options), req, reply, next);
        }
      });
    }
    function normalizeCorsOptions(opts) {
      const corsOptions = Object.assign({}, defaultOptions, opts);
      if (Array.isArray(opts.origin) && opts.origin.indexOf("*") !== -1) {
        corsOptions.origin = "*";
      }
      if (Number.isInteger(corsOptions.cacheControl)) {
        corsOptions.cacheControl = `max-age=${corsOptions.cacheControl}`;
      } else if (typeof corsOptions.cacheControl !== "string") {
        corsOptions.cacheControl = null;
      }
      return corsOptions;
    }
    function addCorsHeadersHandler(fastify2, options, req, reply, next) {
      addOriginToVaryHeader(reply);
      const resolveOriginOption = typeof options.origin === "function" ? resolveOriginWrapper(fastify2, options.origin) : (_, cb) => cb(null, options.origin);
      resolveOriginOption(req, (error, resolvedOriginOption) => {
        if (error !== null) {
          return next(error);
        }
        if (resolvedOriginOption === false) {
          return next();
        }
        if (!resolvedOriginOption) {
          return next(new Error("Invalid CORS origin option"));
        }
        addCorsHeaders(req, reply, resolvedOriginOption, options);
        if (req.raw.method === "OPTIONS" && options.preflight === true) {
          if (options.strictPreflight === true && (!req.headers.origin || !req.headers["access-control-request-method"])) {
            reply.status(400).type("text/plain").send("Invalid Preflight Request");
            return;
          }
          req.corsPreflightEnabled = true;
          addPreflightHeaders(req, reply, options);
          if (!options.preflightContinue) {
            reply.code(options.optionsSuccessStatus).header("Content-Length", "0").send();
            return;
          }
        }
        return next();
      });
    }
    function addCorsHeaders(req, reply, originOption, corsOptions) {
      const origin = getAccessControlAllowOriginHeader(req.headers.origin, originOption);
      if (origin) {
        reply.header("Access-Control-Allow-Origin", origin);
      }
      if (corsOptions.credentials) {
        reply.header("Access-Control-Allow-Credentials", "true");
      }
      if (corsOptions.exposedHeaders !== null) {
        reply.header(
          "Access-Control-Expose-Headers",
          Array.isArray(corsOptions.exposedHeaders) ? corsOptions.exposedHeaders.join(", ") : corsOptions.exposedHeaders
        );
      }
    }
    function addPreflightHeaders(req, reply, corsOptions) {
      reply.header(
        "Access-Control-Allow-Methods",
        Array.isArray(corsOptions.methods) ? corsOptions.methods.join(", ") : corsOptions.methods
      );
      if (corsOptions.allowedHeaders === null) {
        addAccessControlRequestHeadersToVaryHeader(reply);
        const reqAllowedHeaders = req.headers["access-control-request-headers"];
        if (reqAllowedHeaders !== void 0) {
          reply.header("Access-Control-Allow-Headers", reqAllowedHeaders);
        }
      } else {
        reply.header(
          "Access-Control-Allow-Headers",
          Array.isArray(corsOptions.allowedHeaders) ? corsOptions.allowedHeaders.join(", ") : corsOptions.allowedHeaders
        );
      }
      if (corsOptions.maxAge !== null) {
        reply.header("Access-Control-Max-Age", String(corsOptions.maxAge));
      }
      if (corsOptions.cacheControl) {
        reply.header("Cache-Control", corsOptions.cacheControl);
      }
    }
    function resolveOriginWrapper(fastify2, origin) {
      return function(req, cb) {
        const result = origin.call(fastify2, req.headers.origin, cb);
        if (result && typeof result.then === "function") {
          result.then((res) => cb(null, res), cb);
        }
      };
    }
    function getAccessControlAllowOriginHeader(reqOrigin, originOption) {
      if (originOption === "*") {
        return "*";
      }
      if (typeof originOption === "string") {
        return originOption;
      }
      return isRequestOriginAllowed(reqOrigin, originOption) ? reqOrigin : false;
    }
    function isRequestOriginAllowed(reqOrigin, allowedOrigin) {
      if (Array.isArray(allowedOrigin)) {
        for (let i = 0; i < allowedOrigin.length; ++i) {
          if (isRequestOriginAllowed(reqOrigin, allowedOrigin[i])) {
            return true;
          }
        }
        return false;
      } else if (typeof allowedOrigin === "string") {
        return reqOrigin === allowedOrigin;
      } else if (allowedOrigin instanceof RegExp) {
        allowedOrigin.lastIndex = 0;
        return allowedOrigin.test(reqOrigin);
      } else {
        return !!allowedOrigin;
      }
    }
    var _fastifyCors = fp(fastifyCors2, {
      fastify: "4.x",
      name: "@fastify/cors"
    });
    module2.exports = _fastifyCors;
    module2.exports.fastifyCors = _fastifyCors;
    module2.exports.default = _fastifyCors;
  }
});

// node_modules/@fastify/cookie/cookie.js
var require_cookie = __commonJS({
  "node_modules/@fastify/cookie/cookie.js"(exports, module2) {
    "use strict";
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, opt) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      const dec = opt?.decode || decodeURIComponent;
      const result = {};
      const strLen = str.length;
      let pos = 0;
      let terminatorPos = 0;
      while (true) {
        if (terminatorPos === strLen)
          break;
        terminatorPos = str.indexOf(";", pos);
        if (terminatorPos === -1)
          terminatorPos = strLen;
        let eqIdx = str.indexOf("=", pos);
        if (eqIdx === -1)
          break;
        if (eqIdx > terminatorPos) {
          pos = terminatorPos + 1;
          continue;
        }
        const key = str.substring(pos, eqIdx++).trim();
        if (result[key] === void 0) {
          const val = str.charCodeAt(eqIdx) === 34 ? str.substring(eqIdx + 1, terminatorPos - 1).trim() : str.substring(eqIdx, terminatorPos).trim();
          result[key] = !(dec === decodeURIComponent && val.indexOf("%") === -1) ? tryDecode(val, dec) : val;
        }
        pos = terminatorPos + 1;
      }
      return result;
    }
    function serialize(name, val, opt) {
      const enc = opt?.encode || encodeURIComponent;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (name && !fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      const value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      let str = name + "=" + value;
      if (opt == null)
        return str;
      if (opt.maxAge != null) {
        const maxAge = +opt.maxAge;
        if (!isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.trunc(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.priority) {
        const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode) {
      try {
        return decode(str);
      } catch {
        return str;
      }
    }
    module2.exports = {
      parse,
      serialize
    };
  }
});

// node_modules/@fastify/cookie/signer.js
var require_signer = __commonJS({
  "node_modules/@fastify/cookie/signer.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var base64PaddingRE = /=/gu;
    function Signer(secrets, algorithm = "sha256") {
      if (!(this instanceof Signer)) {
        return new Signer(secrets, algorithm);
      }
      this.secrets = Array.isArray(secrets) ? secrets : [secrets];
      this.signingKey = this.secrets[0];
      this.algorithm = algorithm;
      validateSecrets(this.secrets);
      validateAlgorithm(this.algorithm);
    }
    function validateSecrets(secrets) {
      for (let i = 0; i < secrets.length; ++i) {
        const secret = secrets[i];
        if (typeof secret !== "string" && Buffer.isBuffer(secret) === false) {
          throw new TypeError("Secret key must be a string or Buffer.");
        }
      }
    }
    function validateAlgorithm(algorithm) {
      try {
        crypto.createHmac(algorithm, crypto.randomBytes(16));
      } catch (e) {
        throw new TypeError(`Algorithm ${algorithm} not supported.`);
      }
    }
    function _sign(value, secret, algorithm) {
      if (typeof value !== "string") {
        throw new TypeError("Cookie value must be provided as a string.");
      }
      return value + "." + crypto.createHmac(algorithm, secret).update(value).digest("base64").replace(base64PaddingRE, "");
    }
    function _unsign(signedValue, secrets, algorithm) {
      if (typeof signedValue !== "string") {
        throw new TypeError("Signed cookie string must be provided.");
      }
      const value = signedValue.slice(0, signedValue.lastIndexOf("."));
      const actual = Buffer.from(signedValue.slice(signedValue.lastIndexOf(".") + 1));
      for (let i = 0; i < secrets.length; ++i) {
        const secret = secrets[i];
        const expected = Buffer.from(crypto.createHmac(algorithm, secret).update(value).digest("base64").replace(base64PaddingRE, ""));
        if (expected.length === actual.length && crypto.timingSafeEqual(expected, actual)) {
          return {
            valid: true,
            renew: secret !== secrets[0],
            value
          };
        }
      }
      return {
        valid: false,
        renew: false,
        value: null
      };
    }
    Signer.prototype.sign = function(value) {
      return _sign(value, this.signingKey, this.algorithm);
    };
    Signer.prototype.unsign = function(signedValue) {
      return _unsign(signedValue, this.secrets, this.algorithm);
    };
    function sign2(value, secret, algorithm = "sha256") {
      const secrets = Array.isArray(secret) ? secret : [secret];
      validateSecrets(secrets);
      return _sign(value, secrets[0], algorithm);
    }
    function unsign(signedValue, secret, algorithm = "sha256") {
      const secrets = Array.isArray(secret) ? secret : [secret];
      validateSecrets(secrets);
      return _unsign(signedValue, secrets, algorithm);
    }
    module2.exports = Signer;
    module2.exports.signerFactory = Signer;
    module2.exports.Signer = Signer;
    module2.exports.sign = sign2;
    module2.exports.unsign = unsign;
  }
});

// node_modules/@fastify/cookie/plugin.js
var require_plugin2 = __commonJS({
  "node_modules/@fastify/cookie/plugin.js"(exports, module2) {
    "use strict";
    var fp = require_plugin();
    var cookie2 = require_cookie();
    var { Signer, sign: sign2, unsign } = require_signer();
    var kReplySetCookies = Symbol("fastify.reply.setCookies");
    var kReplySetCookiesHookRan = Symbol("fastify.reply.setCookiesHookRan");
    function fastifyCookieSetCookie(reply, name, value, options) {
      parseCookies(reply.server, reply.request, reply);
      const opts = Object.assign({}, options);
      if (opts.expires && Number.isInteger(opts.expires)) {
        opts.expires = new Date(opts.expires);
      }
      if (opts.signed) {
        value = reply.signCookie(value);
      }
      if (opts.secure === "auto") {
        if (isConnectionSecure(reply.request)) {
          opts.secure = true;
        } else {
          opts.sameSite = "lax";
          opts.secure = false;
        }
      }
      reply[kReplySetCookies].set(`${name};${opts.domain};${opts.path || "/"}`, { name, value, opts });
      if (reply[kReplySetCookiesHookRan]) {
        setCookies(reply);
      }
      return reply;
    }
    function fastifyCookieClearCookie(reply, name, options) {
      const opts = Object.assign({ path: "/" }, options, {
        expires: /* @__PURE__ */ new Date(1),
        signed: void 0,
        maxAge: void 0
      });
      return fastifyCookieSetCookie(reply, name, "", opts);
    }
    function parseCookies(fastify2, request, reply) {
      if (reply[kReplySetCookies])
        return;
      const cookieHeader = request.raw.headers.cookie;
      request.cookies = cookieHeader ? fastify2.parseCookie(cookieHeader) : {};
      reply[kReplySetCookies] = /* @__PURE__ */ new Map();
    }
    function onReqHandlerWrapper(fastify2, hook) {
      return hook === "preParsing" ? function fastifyCookieHandler(fastifyReq, fastifyRes, payload, done) {
        parseCookies(fastify2, fastifyReq, fastifyRes);
        done();
      } : function fastifyCookieHandler(fastifyReq, fastifyRes, done) {
        parseCookies(fastify2, fastifyReq, fastifyRes);
        done();
      };
    }
    function setCookies(reply) {
      const setCookieHeaderValue = reply.getHeader("Set-Cookie");
      let cookieValue;
      if (setCookieHeaderValue === void 0) {
        if (reply[kReplySetCookies].size === 1) {
          const c = reply[kReplySetCookies].values().next().value;
          reply.header("Set-Cookie", cookie2.serialize(c.name, c.value, c.opts));
          reply[kReplySetCookies].clear();
          return;
        }
        cookieValue = [];
      } else if (typeof setCookieHeaderValue === "string") {
        cookieValue = [setCookieHeaderValue];
      } else {
        cookieValue = setCookieHeaderValue;
      }
      for (const c of reply[kReplySetCookies].values()) {
        cookieValue.push(cookie2.serialize(c.name, c.value, c.opts));
      }
      reply.removeHeader("Set-Cookie");
      reply.header("Set-Cookie", cookieValue);
      reply[kReplySetCookies].clear();
    }
    function fastifyCookieOnSendHandler(fastifyReq, fastifyRes, payload, done) {
      if (!fastifyRes[kReplySetCookies]) {
        done();
        return;
      }
      if (fastifyRes[kReplySetCookies].size) {
        setCookies(fastifyRes);
      }
      fastifyRes[kReplySetCookiesHookRan] = true;
      done();
    }
    function plugin(fastify2, options, next) {
      const secret = options.secret;
      const hook = getHook(options.hook);
      if (hook === void 0) {
        return next(new Error("@fastify/cookie: Invalid value provided for the hook-option. You can set the hook-option only to false, 'onRequest' , 'preParsing' , 'preValidation' or 'preHandler'"));
      }
      const isSigner = !secret || typeof secret.sign === "function" && typeof secret.unsign === "function";
      const signer = isSigner ? secret : new Signer(secret, options.algorithm || "sha256");
      fastify2.decorate("serializeCookie", cookie2.serialize);
      fastify2.decorate("parseCookie", parseCookie);
      if (secret !== void 0) {
        fastify2.decorate("signCookie", signCookie);
        fastify2.decorate("unsignCookie", unsignCookie);
        fastify2.decorateRequest("signCookie", signCookie);
        fastify2.decorateRequest("unsignCookie", unsignCookie);
        fastify2.decorateReply("signCookie", signCookie);
        fastify2.decorateReply("unsignCookie", unsignCookie);
      }
      fastify2.decorateRequest("cookies", null);
      fastify2.decorateReply(kReplySetCookies, null);
      fastify2.decorateReply(kReplySetCookiesHookRan, false);
      fastify2.decorateReply("cookie", setCookie);
      fastify2.decorateReply("setCookie", setCookie);
      fastify2.decorateReply("clearCookie", clearCookie);
      if (hook) {
        fastify2.addHook(hook, onReqHandlerWrapper(fastify2, hook));
        fastify2.addHook("onSend", fastifyCookieOnSendHandler);
      }
      next();
      function parseCookie(cookieHeader) {
        return cookie2.parse(cookieHeader, options.parseOptions);
      }
      function signCookie(value) {
        return signer.sign(value);
      }
      function unsignCookie(value) {
        return signer.unsign(value);
      }
      function setCookie(name, value, cookieOptions) {
        const opts = Object.assign({}, options.parseOptions, cookieOptions);
        return fastifyCookieSetCookie(this, name, value, opts);
      }
      function clearCookie(name, cookieOptions) {
        const opts = Object.assign({}, options.parseOptions, cookieOptions);
        return fastifyCookieClearCookie(this, name, opts);
      }
    }
    function getHook(hook = "onRequest") {
      const hooks = {
        onRequest: "onRequest",
        preParsing: "preParsing",
        preValidation: "preValidation",
        preHandler: "preHandler",
        [false]: false
      };
      return hooks[hook];
    }
    function isConnectionSecure(request) {
      return request.raw.socket?.encrypted === true || request.headers["x-forwarded-proto"] === "https";
    }
    var fastifyCookie = fp(plugin, {
      fastify: "4.x",
      name: "@fastify/cookie"
    });
    module2.exports = fastifyCookie;
    module2.exports.default = fastifyCookie;
    module2.exports.fastifyCookie = fastifyCookie;
    module2.exports.serialize = cookie2.serialize;
    module2.exports.parse = cookie2.parse;
    module2.exports.signerFactory = Signer;
    module2.exports.Signer = Signer;
    module2.exports.sign = sign2;
    module2.exports.unsign = unsign;
  }
});

// src/env/index.ts
var import_zod = require("zod");
var import_config = require("dotenv/config");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3335),
  HOST: import_zod.z.string().default("0.0.0.0"),
  DATABASE_URL: import_zod.z.string(),
  JWT_SECRET_ACCESS_TOKEN: import_zod.z.string(),
  JWT_SECRET_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_ACCESS_TOKEN: import_zod.z.string(),
  COOKIE_SECRET: import_zod.z.string(),
  SENDGRID_API_KEY: import_zod.z.string(),
  APP_URL_DEVLOPMENT: import_zod.z.string().optional(),
  APP_URL_PRODUCTION: import_zod.z.string().optional(),
  REDIS: import_zod.z.string(),
  CHARACTERS: import_zod.z.string(),
  ASAAS_API_URL: import_zod.z.string(),
  ASAAS_API_KEY: import_zod.z.string(),
  FIREBASE_PROJECT_ID: import_zod.z.string(),
  FIREBASE_CLIENT_EMAIL: import_zod.z.string().email(),
  FIREBASE_PRIVATE_KEY: import_zod.z.string(),
  FIREBASE_BUCKET: import_zod.z.string(),
  FOLDER_TMP_DEVELOPMENT: import_zod.z.string(),
  FOLDER_TMP_PRODUCTION: import_zod.z.string(),
  ASAAS_ACCESS_KEY: import_zod.z.string(),
  APP_URL_FRONTEND_DEVELOPMENT: import_zod.z.string(),
  APP_URL_FRONTEND_PRODUCTION: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success !== true) {
  console.error("Error converting environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/app.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require_cors());
var import_config25 = require("dotenv/config");
var import_multipart = __toESM(require("@fastify/multipart"));

// src/providers/MailProvider/implementations/provider-sendgrid.ts
var import_mail = __toESM(require("@sendgrid/mail"));
var import_config2 = require("dotenv/config");
var import_node_fs = __toESM(require("fs"));
var import_handlebars = __toESM(require("handlebars"));
var MailProvider = class {
  constructor() {
    import_mail.default.setApiKey(env.SENDGRID_API_KEY);
  }
  findMessageSent(email) {
    throw new Error("Method not implemented.");
  }
  async sendEmail(email, name, subject, link, pathTemplate, variables) {
    try {
      const readTemplate = import_node_fs.default.readFileSync(pathTemplate).toString("utf-8");
      const compileTemplate = import_handlebars.default.compile(readTemplate);
      const htmlTemplate = compileTemplate({ name, link, email, variables });
      const msg = {
        to: email,
        // Para 
        from: "4codesolutionss@gmail.com",
        // De 
        subject,
        // Assunto
        html: htmlTemplate
      };
      await import_mail.default.send(msg);
      console.log("Email enviado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }
};

// src/providers/DateProvider/implementations/provider-dayjs.ts
var import_dayjs = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
var import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_pt = require("dayjs/locale/pt");
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.locale("pt");
var DayjsDateProvider = class {
  compareIfAfter(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isAfter((0, import_dayjs.default)(end_date));
  }
  createDate(date) {
    const createDate = (0, import_dayjs.default)(date).startOf("day").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = createDate.substring(0, 19) + "." + createDate.substring(23);
    return convertDatePtBR;
  }
  dateTomorrow(date) {
    return import_dayjs.default.utc(date).add(1, "day").startOf("day").toDate();
  }
  dateIsSameByHour(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y") && (0, import_dayjs.default)(start_date).isSame(end_date, "hour");
  }
  dateIsSame(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y");
  }
  veirfyIsDateInBetween(dateVerify, start_date, end_date) {
    return (0, import_dayjs.default)(dateVerify).isBetween(start_date, (0, import_dayjs.default)(end_date), "date");
  }
  addHours(hours) {
    return (0, import_dayjs.default)().add(hours, "hour").toDate();
  }
  addDays(days) {
    const catchDatePtBR = (0, import_dayjs.default)().add(days, "days").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  addMoth(month) {
    const catchDatePtBR = (0, import_dayjs.default)().add(month, "months").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  compareInHours(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "hours");
  }
  convertToUTC(date) {
    return (0, import_dayjs.default)(date).utc().local().format();
  }
  dateNow(date) {
    return import_dayjs.default.utc(date).add(0, "day").startOf("day").toDate();
  }
  compareInDays(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "days");
  }
  compareIfBefore(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isBefore((0, import_dayjs.default)(end_date));
  }
};

// src/usecases/users/register/register-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config3 = require("dotenv/config");
var import_crypto = require("crypto");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/register/register-usecase.ts
var RegisterUseCase = class {
  constructor(usersRepository, dayjsDateProvider, usersTokensRepository, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.sendMailProvider = sendMailProvider;
  }
  async execute({
    email,
    name,
    password,
    phone,
    cpf
  }) {
    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (findEmailAlreadyExists) {
      throw new AppError("Email j\xE1 cadastrado", 409);
    }
    if (cpf) {
      const findCPFAlreadyExist = await this.usersRepository.findByCPF(cpf);
      if (findCPFAlreadyExist) {
        throw new AppError("CPF already exists!", 409);
      }
    }
    const criptingPassword = await (0, import_bcrypt.hash)(password, 8);
    const user = await this.usersRepository.create({
      email,
      name,
      password: criptingPassword,
      phone,
      cpf
    });
    let pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email.hbs" : "./build/views/emails/verify-email.hbs";
    const token = (0, import_crypto.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      userId: user.id,
      expireDate: expireDateHours,
      token
    });
    const link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}` : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`;
    await this.sendMailProvider.sendEmail(
      email,
      name,
      "Confirma\xE7\xE3o de email",
      link,
      pathTemplate,
      null
    );
    return {
      user
    };
  }
};

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async updateExpireRefundCredit({
    ListUserDifferentToPacientUseCase: ListUserDifferentToPacientUseCase2,
    date
  }) {
    await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase2
      },
      data: {
        expireRefundCredit: date
      }
    });
  }
  async updateRefundCredit(ListUserDifferentToPacientUseCase2, value) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase2
      },
      data: {
        refundCredit: value
      }
    });
    const refundCreditNumber = Number(user.refundCredit);
    return refundCreditNumber;
  }
  async findByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
  }
  async listAdmins() {
    const users = await prisma.user.findMany({
      where: {
        role: "ADMIN"
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return users;
  }
  async findByIdCostumerPayment(id) {
    const user = await prisma.user.findFirst({
      where: {
        idCustomerAsaas: id
      }
    });
    return user;
  }
  async getUserSecurity(id) {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
  }
  async changePassword(id, password) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        password
      }
    });
  }
  async updateIdCostumerPayment(ListUserDifferentToPacientUseCase2, idCustomerPayment) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase2
      },
      data: {
        idCustomerAsaas: idCustomerPayment
      }
    });
    return user;
  }
  async turnAdmin(id) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        role: "ADMIN"
      },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
  }
  async findByCPF(cpf) {
    const user = await prisma.user.findUnique({
      where: { cpf },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
  }
  async create(data) {
    const user = await prisma.user.create(
      {
        data,
        select: {
          id: true,
          name: true,
          cpf: true,
          email: true,
          emailActive: true,
          dateBirth: true,
          phone: true,
          role: true,
          refundCredit: true,
          expireRefundCredit: true,
          createdAt: true
        }
      }
    );
    return user;
  }
  async list() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
      }
    });
    return users;
  }
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
  }
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        createdAt: true
      }
    });
    return user;
  }
  async activeEmail(id) {
    await prisma.user.update({
      where: {
        id
      },
      data: {
        emailActive: true
      }
    });
  }
  async update(data) {
    const user = await prisma.user.update({
      where: {
        id: data.id
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
      },
      data
    });
    return user;
  }
  async delete(id) {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }
};

// src/repositories/prisma/prisma-tokens-repository.ts
var PrismaTokensRepository = class {
  async findTokenAuth(userId, auth) {
    const token = await prisma.token.findFirst({
      where: { userId, token: auth }
    });
    return token;
  }
  async deleteByUser(userId) {
    await prisma.token.deleteMany({
      where: {
        userId
      }
    });
  }
  async deleteAll() {
    await prisma.token.deleteMany();
  }
  async create(data) {
    const token = await prisma.token.create({ data });
    return token;
  }
  async findByToken(token) {
    const tokenData = await prisma.token.findUnique({
      where: { token },
      select: {
        token: true,
        expireDate: true,
        tokenGoogle: true,
        userId: true,
        id: true,
        user: true
      }
    });
    return tokenData;
  }
  async findByUserId(userId) {
    const token = await prisma.token.findFirst({ where: { userId } });
    return token;
  }
  async findByUserAndToken(userId, token) {
    const tokenData = await prisma.token.findFirst({
      where: { userId, token },
      select: {
        id: true,
        token: true,
        expireDate: true,
        tokenGoogle: true,
        user: true
      }
    });
    return tokenData;
  }
  async delete(id) {
    await prisma.token.delete({ where: { id } });
  }
};

// src/usecases/factories/users/make-register-user-usecase.ts
async function makeRegisterUser() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const sendMailProvider = new MailProvider();
  const dayjsDateProvider = new DayjsDateProvider();
  const registerUserUseCase = new RegisterUseCase(
    usersRepository,
    dayjsDateProvider,
    usersTokensRepository,
    sendMailProvider
  );
  return registerUserUseCase;
}

// src/http/controllers/users/register/register-user-controller.ts
var import_zod2 = require("zod");
async function RegisterUser(request, reply) {
  try {
    const userSchema = import_zod2.z.object({
      name: import_zod2.z.string().min(4),
      email: import_zod2.z.string().email(),
      password: import_zod2.z.string().min(6),
      phone: import_zod2.z.string().optional().nullable(),
      cpf: import_zod2.z.string().optional().nullable()
    });
    const {
      email,
      password,
      name,
      phone,
      cpf
    } = userSchema.parse(request.body);
    const registerUseCase = await makeRegisterUser();
    const { user } = await registerUseCase.execute({
      email,
      password,
      name,
      phone,
      cpf
    });
    return reply.status(201).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/login/login-usecase.ts
var import_bcrypt2 = require("bcrypt");
var import_config4 = require("dotenv/config");
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var LoginUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    email,
    password,
    token
  }) {
    if (email && password) {
      const findUserExists = await this.usersRepository.findByEmail(email);
      if (!findUserExists) {
        throw new AppError("Usu\xE1rio ou senha incorretos", 401);
      }
      const passwordMatch = await (0, import_bcrypt2.compare)(password, findUserExists.password);
      if (!passwordMatch) {
        throw new AppError("Usu\xE1rio ou senha incorretos", 401);
      }
      const accessToken = import_jsonwebtoken.default.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
        subject: findUserExists.id,
        expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
      });
      const refreshToken = import_jsonwebtoken.default.sign({ subject: findUserExists.id, email }, env.JWT_SECRET_REFRESH_TOKEN, {
        subject: findUserExists.id,
        expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
      });
      const expireDateRefreshToken = this.dayjsDateProvider.addDays(10);
      if (findUserExists.emailActive) {
        await this.usersTokensRepository.deleteByUser(findUserExists.id);
      }
      await this.usersTokensRepository.create({
        userId: findUserExists.id,
        expireDate: expireDateRefreshToken,
        token: refreshToken
      });
      const getSafeUser = await this.usersRepository.getUserSecurity(findUserExists.id);
      return {
        user: getSafeUser,
        accessToken,
        refreshToken
      };
    }
    if (!email && !password && token) {
      const userToken = await this.usersTokensRepository.findByToken(token);
      if (!userToken) {
        throw new AppError("Token n\xE3o encontrado", 404);
      }
      const accessToken = import_jsonwebtoken.default.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
        subject: userToken.user.id,
        expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
      });
      const refreshToken = import_jsonwebtoken.default.sign({ subject: userToken.user.id, email }, env.JWT_SECRET_REFRESH_TOKEN, {
        subject: userToken.user.id,
        expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
      });
      const expireDateRefreshToken = this.dayjsDateProvider.addDays(10);
      await this.usersTokensRepository.create({
        userId: userToken.user.id,
        expireDate: expireDateRefreshToken,
        token: refreshToken
      });
      const getSafeUser = await this.usersRepository.getUserSecurity(userToken.user.id);
      return {
        user: getSafeUser,
        accessToken,
        refreshToken
      };
    }
    throw new AppError("Not found account", 404);
  }
};

// src/usecases/factories/users/make-login-user-usecase.ts
async function makeLoginUser() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const loginUseCase = new LoginUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return loginUseCase;
}

// src/http/controllers/users/login/login-user-controller.ts
var import_zod3 = require("zod");
async function LoginUser(request, reply) {
  try {
    const userSchema = import_zod3.z.object({
      email: import_zod3.z.string().email().optional().nullable(),
      password: import_zod3.z.string().min(6).optional().nullable(),
      token: import_zod3.z.string().optional().nullable()
    });
    const {
      email,
      password,
      token
    } = userSchema.parse(request.body);
    const loginUserUseCase = await makeLoginUser();
    const userInfo = await loginUserUseCase.execute({
      email,
      password,
      token
    });
    return reply.status(200).setCookie("access_token", userInfo.accessToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 2
      // 2 days
    }).send({
      user: userInfo
    });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/verify-email/verify-email-usecase.ts
var import_config5 = require("dotenv/config");
var VerifyEmailUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    email
  }) {
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (!findUserByEmail) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    const findToken = await this.usersTokensRepository.findByToken(token);
    if (!findToken) {
      throw new AppError("Token n\xE3o encontrado", 404);
    }
    await this.usersRepository.activeEmail(findUserByEmail.id);
  }
};

// src/usecases/factories/users/make-verify-email-user-usecase.ts
async function makeVerifyEmail() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const verifyEmailUseCase = new VerifyEmailUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return verifyEmailUseCase;
}

// src/http/controllers/users/verify-email/verify-email-controller.ts
var import_zod4 = require("zod");
async function VerifyEmail(request, reply) {
  try {
    const userSchema = import_zod4.z.object({
      email: import_zod4.z.string().email(),
      token: import_zod4.z.string()
    });
    const {
      email,
      token
    } = userSchema.parse(request.query);
    const verifyEmailUseCase = await makeVerifyEmail();
    await verifyEmailUseCase.execute({
      token,
      email
    });
    return reply.status(200).send({ message: "Verified email!" });
  } catch (error) {
    throw error;
  }
}

// src/config/redis-connection.ts
var import_config6 = require("dotenv/config");
var import_redis = require("redis");
var redisClient = env.NODE_ENV === "development" ? (0, import_redis.createClient)() : (0, import_redis.createClient)({ url: env.REDIS });
var connectToRedis = () => {
  const client = redisClient;
  client.connect();
  client.SET("67946caa-89eb-402a-ad8e-70987ab911c4", "157892");
  client.SETEX("395d2a4e-f5e7-4ebd-a263-8d0b838ac584", 604800, "123589");
  client.on("connect", async () => {
    console.log("Connected to Redis");
  });
  client.on("error", async (err) => {
    console.error("Error connecting to Redis:", err);
    setTimeout(() => {
      console.log("Attempting to reconnect to Redis...");
      connectToRedis();
    }, 3e3);
  });
  return client;
};
connectToRedis();

// src/providers/CacheProvider/implementations/provider-redis-in-memory.ts
var RedisInMemoryProvider = class {
  async resetDatesToDeleteBlackList() {
    await redisClient.del("DATE_DELETE_BLACKLIST");
  }
  async addNewDateToDeleteBlackList(date) {
    await redisClient.sAdd("DATE_DELETE_BLACKLIST", date);
  }
  async getDatesToDeleteBlackList() {
    const date = await redisClient.sMembers("DATE_DELETE_BLACKLIST");
    return date;
  }
  async listBlackList() {
    const tokens = await redisClient.sMembers("BLACKLIST");
    return tokens;
  }
  async addToBlackList(token) {
    await redisClient.sAdd("BLACKLIST", token);
  }
  async isTokenInBlackList(token) {
    const inBlackList = await redisClient.sIsMember("BLACKLIST", token);
    return inBlackList;
  }
  async clearBlackList() {
    await redisClient.del("BLACKLIST");
  }
};

// src/http/middlewares/verify-token-jwt.ts
var import_jsonwebtoken2 = require("jsonwebtoken");
async function verifyTokenJWT(request, response) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token n\xE3o recebido", 400);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId, role } = (0, import_jsonwebtoken2.verify)(token, env.JWT_SECRET_ACCESS_TOKEN);
    const storageInMemoryProvider = new RedisInMemoryProvider();
    const inBlackList = await storageInMemoryProvider.isTokenInBlackList(token);
    if (inBlackList) {
      throw new AppError("Token inv\xE1lido", 401);
    }
    request.user = {
      id: userId,
      role,
      token
    };
  } catch (error) {
    throw new AppError("Token expirado", 401);
  }
}

// src/usecases/users/send-forgot-password/send-forgot-password-usecase.ts
var import_config7 = require("dotenv/config");
var import_crypto2 = require("crypto");
var SendForgotPasswordUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.sendMailProvider = sendMailProvider;
  }
  async execute({
    email
  }) {
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (!findUserByEmail) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    let pathTemplate = env.NODE_ENV === "development" ? "./views/emails/forgot-password.hbs" : "./build/views/emails/forgot-password.hbs";
    const token = (0, import_crypto2.randomUUID)();
    const expireDate = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      userId: findUserByEmail.id,
      expireDate,
      token
    });
    let link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/reset-password?token=${token}` : `${env.APP_URL_FRONTEND_PRODUCTION}/reset-password?token=${token}`;
    await this.sendMailProvider.sendEmail(
      findUserByEmail.email,
      findUserByEmail.name,
      "Redefini\xE7\xE3o de Senha",
      link,
      pathTemplate,
      null
    );
  }
};

// src/usecases/factories/users/make-send-forgot-password-usecase.ts
async function makeSendForgotPassword() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const sendMailProvider = new MailProvider();
  const sendForgotPasswordUseCase = new SendForgotPasswordUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider,
    sendMailProvider
  );
  return sendForgotPasswordUseCase;
}

// src/http/controllers/users/send-forgot-password/send-forgot-password.ts
var import_zod5 = require("zod");
async function SendForgotPassword(request, reply) {
  try {
    const userSchema = import_zod5.z.object({
      email: import_zod5.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request.body);
    const sendForgotPasswordUsecase = await makeSendForgotPassword();
    await sendForgotPasswordUsecase.execute({
      email
    });
    return reply.status(200).send({ message: "Email with password reset link sent!" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/reset-password/reset-password-usecase.ts
var import_config8 = require("dotenv/config");
var import_bcrypt3 = require("bcrypt");
var ResetPasswordUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    password
  }) {
    const findToken = await this.usersTokensRepository.findByToken(token);
    if (!findToken) {
      throw new AppError("Token n\xE3o encontrado", 404);
    }
    if (this.dayjsDateProvider.compareIfBefore(
      findToken.expireDate,
      this.dayjsDateProvider.dateNow()
    )) {
      throw new AppError("Token expirado", 401);
    }
    const user = await this.usersRepository.findById(findToken.userId);
    const newPassword = await (0, import_bcrypt3.hash)(password, 8);
    await this.usersRepository.changePassword(user.id, newPassword);
    await this.usersTokensRepository.delete(findToken.id);
  }
};

// src/usecases/factories/users/make-reset-password-usecase.ts
async function makeResetPassword() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const resetPasswordUseCase = new ResetPasswordUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return resetPasswordUseCase;
}

// src/http/controllers/users/reset-password/reset-password-controller.ts
var import_zod6 = require("zod");
async function ResetPassword(request, reply) {
  try {
    const userSchemaBody = import_zod6.z.object({
      password: import_zod6.z.string().min(6)
    });
    const userSchemaQuery = import_zod6.z.object({
      token: import_zod6.z.string()
    });
    const {
      password
    } = userSchemaBody.parse(request.body);
    const {
      token
    } = userSchemaQuery.parse(request.query);
    const resetPasswordUseCase = await makeResetPassword();
    await resetPasswordUseCase.execute({
      password,
      token
    });
    return reply.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/find/find-user-usecase.ts
var import_config9 = require("dotenv/config");
var FindUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id
  }) {
    const findUserExist = await this.usersRepository.findById(id);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    const getSafeUser = await this.usersRepository.getUserSecurity(findUserExist.id);
    return {
      user: getSafeUser
    };
  }
};

// src/usecases/factories/users/make-find-user-usecase.ts
async function makeFindUser() {
  const usersRepository = new PrismaUsersRepository();
  const findUserUseCase = new FindUserUseCase(usersRepository);
  return findUserUseCase;
}

// src/http/controllers/users/find/find-user-controller.ts
var import_zod7 = require("zod");
async function FindUser(request, reply) {
  try {
    const userSchema = import_zod7.z.object({
      id: import_zod7.z.string().uuid()
    });
    const {
      id
    } = userSchema.parse(request.params);
    const findUserUseCase = await makeFindUser();
    const { user } = await findUserUseCase.execute({
      id
    });
    return reply.status(200).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/delete/delete-user-usecase.ts
var import_bcrypt4 = require("bcrypt");
var import_config10 = require("dotenv/config");
var DeleteUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    password
  }) {
    const findUserExist = await this.usersRepository.findById(id);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    const passwordMatch = await (0, import_bcrypt4.compare)(password, findUserExist.password);
    if (!passwordMatch) {
      throw new AppError("Password not match", 401);
    }
    await this.usersRepository.delete(findUserExist.id);
  }
};

// src/usecases/factories/users/make-delete-user-usecase.ts
async function makeDeleteUser() {
  const usersRepository = new PrismaUsersRepository();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  return deleteUserUseCase;
}

// src/http/controllers/users/delete/delete-user-controller.ts
var import_zod8 = require("zod");
async function DeleteUser(request, reply) {
  try {
    const userParams = import_zod8.z.object({
      id: import_zod8.z.string().uuid()
    });
    const userBodySchema = import_zod8.z.object({
      password: import_zod8.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const {
      id
    } = userParams.parse(request.params);
    const { password } = userBodySchema.parse(request.body);
    const deleteUserUseCase = await makeDeleteUser();
    await deleteUserUseCase.execute({
      id,
      password
    });
    return reply.status(200).send({ message: "Usu\xE1rio deletado com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/update-full/update-user-usecase.ts
var import_config11 = require("dotenv/config");
var UpdateUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    name,
    email,
    phone,
    dateBirth,
    cpf
  }) {
    const findUserExists = await this.usersRepository.getUserSecurity(id);
    if (!findUserExists) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    let emailActive = findUserExists.emailActive;
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (findUserByEmail) {
      if (findUserByEmail.id !== findUserExists.id) {
        throw new AppError("Email j\xE1 cadastrado", 409);
      }
      if (email !== findUserExists.email) {
        emailActive = false;
      }
    }
    if (cpf) {
      const findUserByCPF = await this.usersRepository.findByCPF(cpf);
      if (findUserByCPF) {
        if (findUserExists.id !== findUserByCPF.id) {
          throw new AppError("CPF j\xE1 cadastrado", 409);
        }
      }
    }
    if (phone) {
      const findUserByPhone = await this.usersRepository.findByPhone(phone);
      if (findUserByPhone) {
        if (findUserExists.id !== findUserByPhone.id) {
          throw new AppError("Phone j\xE1 cadastrado", 409);
        }
      }
    }
    await this.usersRepository.updateIdCostumerPayment(findUserExists.id, null);
    const userUpdated = await this.usersRepository.update({
      id,
      name,
      email,
      phone,
      dateBirth,
      cpf,
      emailActive
    });
    return {
      user: userUpdated
    };
  }
};

// src/usecases/factories/users/make-update-user-usecase.ts
async function makeUpdateUser() {
  const usersRepository = new PrismaUsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  return updateUserUseCase;
}

// src/http/controllers/users/update-full/update-user-controller.ts
var import_cpf_cnpj_validator = require("cpf-cnpj-validator");
var import_zod9 = require("zod");
async function UpdateUser(request, reply) {
  try {
    const userSchemaBody = import_zod9.z.object({
      name: import_zod9.z.string().min(4),
      cpf: import_zod9.z.string().optional().nullable(),
      email: import_zod9.z.string().email(),
      phone: import_zod9.z.string().optional().nullable(),
      dateBirth: import_zod9.z.string().optional().nullable()
    });
    const userSchemaParams = import_zod9.z.object({
      id: import_zod9.z.string().uuid()
    });
    const {
      id
    } = userSchemaParams.parse(request.params);
    const {
      name,
      phone,
      dateBirth,
      cpf,
      email
    } = userSchemaBody.parse(request.body);
    const updateUserUseCase = await makeUpdateUser();
    const { user } = await updateUserUseCase.execute({
      id,
      name,
      phone,
      email,
      dateBirth: dateBirth ? new Date(dateBirth) : null,
      cpf: import_cpf_cnpj_validator.cpf.format(cpf) ? import_cpf_cnpj_validator.cpf.format(cpf) : null
    });
    return reply.status(200).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/logout/logout-usecase.ts
var import_config12 = require("dotenv/config");
var LogoutUseCase = class {
  constructor(usersTokensRepository, cacheProvider, dayjsDateProvider) {
    this.usersTokensRepository = usersTokensRepository;
    this.cacheProvider = cacheProvider;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    refreshToken,
    userId
  }) {
    const userToken = await this.usersTokensRepository.findByUserAndToken(userId, refreshToken);
    if (!userToken) {
      throw new AppError("Refresh token n\xE3o encontrado", 404);
    }
    await this.cacheProvider.addToBlackList(token);
    await this.usersTokensRepository.deleteByUser(userToken.user.id);
    const dataExpirateClearBlackList = await this.cacheProvider.getDatesToDeleteBlackList();
    if (dataExpirateClearBlackList.length === 0) {
      const newDateExpire2 = JSON.stringify(this.dayjsDateProvider.addDays(7));
      await this.cacheProvider.addNewDateToDeleteBlackList(newDateExpire2);
    }
    const [newDateExpire] = await this.cacheProvider.getDatesToDeleteBlackList();
    const dataExpirate = new Date(JSON.parse(newDateExpire));
    const dateNow = this.dayjsDateProvider.dateNow();
    const verifyExpireDate = this.dayjsDateProvider.compareIfBefore(dateNow, dataExpirate);
    if (!verifyExpireDate) {
      await this.cacheProvider.clearBlackList();
      await this.cacheProvider.resetDatesToDeleteBlackList();
    }
  }
};

// src/usecases/factories/users/make-logout-user-usecase.ts
async function makeLogoutUser() {
  const usersTokensRepository = new PrismaTokensRepository();
  const redisStorageProvider = new RedisInMemoryProvider();
  const dayjsDateProvider = new DayjsDateProvider();
  const logoutUseCase = new LogoutUseCase(
    usersTokensRepository,
    redisStorageProvider,
    dayjsDateProvider
  );
  return logoutUseCase;
}

// src/http/controllers/users/logout/logout-user-controller.ts
var import_zod10 = require("zod");
async function LogoutUser(request, reply) {
  try {
    const userSchema = import_zod10.z.object({
      refreshToken: import_zod10.z.string()
    });
    const {
      refreshToken
    } = userSchema.parse(request.body);
    const logoutUserUseCase = await makeLogoutUser();
    await logoutUserUseCase.execute({
      refreshToken,
      userId: request.user.id,
      token: request.user.token
    });
    return reply.status(200).send({ message: "Logout feito com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/http/middlewares/verify-user-role.ts
function verifyUserRole(verifyToleRoleOne, verifyToleRoleTwo, verifyToleRoleThree, verifyToleRoleFour) {
  return async (request, reply) => {
    const { role } = request.user;
    if (role !== verifyToleRoleOne && role !== verifyToleRoleTwo && role !== verifyToleRoleThree && role !== verifyToleRoleFour) {
      return reply.status(401).send({ message: "Unauthorized." });
    }
  };
}

// src/usecases/users/email-exists/email-exists-users.usecase.ts
var import_config13 = require("dotenv/config");
var EmailVerifyUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email
  }) {
    const findUserExist = await this.usersRepository.findByEmail(email);
    if (findUserExist) {
      return true;
    }
    return false;
  }
};

// src/usecases/factories/users/make-email-exists-users-usecases.ts
async function makeVerifyEmailUser() {
  const usersRepository = new PrismaUsersRepository();
  const emailVerifyUserUseCase = new EmailVerifyUserUseCase(usersRepository);
  return emailVerifyUserUseCase;
}

// src/http/controllers/users/email-exists/email-exists-controller.ts
var import_zod11 = require("zod");
async function EmailExists(request, reply) {
  try {
    const userSchema = import_zod11.z.object({
      email: import_zod11.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request.query);
    const findUserUseCase = await makeVerifyEmailUser();
    const emailExists = await findUserUseCase.execute({
      email
    });
    return reply.status(200).send(emailExists);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/refresh-token/refresh-token-usecase.ts
var import_config14 = require("dotenv/config");
var import_jsonwebtoken3 = require("jsonwebtoken");
var RefreshTokenUseCase = class {
  constructor(usersTokensRepository, dayjsDateProvider) {
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token
  }) {
    const userToken = await this.usersTokensRepository.findByToken(token);
    if (!userToken) {
      throw new AppError("Refresh token n\xE3o encontrado", 404);
    }
    const verifyToken = this.dayjsDateProvider.compareIfBefore(
      userToken.expireDate,
      this.dayjsDateProvider.dateNow()
    );
    if (verifyToken) {
      await this.usersTokensRepository.delete(userToken.id);
      throw new AppError("Refresh token expirado", 401);
    }
    (0, import_jsonwebtoken3.verify)(token, env.JWT_SECRET_REFRESH_TOKEN);
    const newAccessToken = (0, import_jsonwebtoken3.sign)({}, env.JWT_SECRET_ACCESS_TOKEN, {
      subject: userToken.userId,
      expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
    });
    return {
      accessToken: newAccessToken
    };
  }
};

// src/usecases/factories/users/make-refresh-token-usecase.ts
async function makeRefreshToken() {
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const refreshTokenUseCase = new RefreshTokenUseCase(
    usersTokensRepository,
    dayjsDateProvider
  );
  return refreshTokenUseCase;
}

// src/http/controllers/users/refresh-token/refresh-token-users-controller.ts
var import_zod12 = require("zod");
async function RefreshToken(request, reply) {
  try {
    const refreshTokenBodySchema = import_zod12.z.object({
      refreshToken: import_zod12.z.string()
    });
    const {
      refreshToken
    } = refreshTokenBodySchema.parse(request.body);
    const refreshTokenUseCase = await makeRefreshToken();
    const updatedTokens = await refreshTokenUseCase.execute({ token: refreshToken });
    return reply.status(200).send(updatedTokens);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/create-new-password-with-old-password/change-password-usecase.ts
var import_config15 = require("dotenv/config");
var import_bcrypt5 = require("bcrypt");
var CreateNewPasswordByOldPassword = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    userId,
    newPassword,
    oldPassword
  }) {
    const findUserExist = await this.usersRepository.findById(userId);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o existe", 404);
    }
    const passwordOldMatch = await (0, import_bcrypt5.compare)(oldPassword, findUserExist.password);
    if (!passwordOldMatch) {
      throw new AppError("Senha antiga n\xE3o incorreta", 401);
    }
    const createNewPassword = await (0, import_bcrypt5.hash)(newPassword, 8);
    await this.usersRepository.changePassword(
      findUserExist.id,
      createNewPassword
    );
  }
};

// src/usecases/factories/users/make-change-password-by-old-password-usecase.ts
async function makeCreateNewPasswordByOldPassword() {
  const usersRepository = new PrismaUsersRepository();
  const createNewPasswordByOldPassword = new CreateNewPasswordByOldPassword(
    usersRepository
  );
  return createNewPasswordByOldPassword;
}

// src/http/controllers/users/create-new-password-with-old-password/change-password-controller.ts
var import_zod13 = require("zod");
async function CreateNewPasswordByOldPassword2(request, reply) {
  try {
    const userSchemaBody = import_zod13.z.object({
      oldPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres"),
      newPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const userSchemaParams = import_zod13.z.object({
      id: import_zod13.z.string().uuid("Id inv\xE1lido")
    });
    const { id } = userSchemaParams.parse(request.params);
    const { oldPassword, newPassword } = userSchemaBody.parse(
      request.body
    );
    const createNewPasswordUseCase = await makeCreateNewPasswordByOldPassword();
    await createNewPasswordUseCase.execute({
      userId: id,
      oldPassword,
      newPassword
    });
    return reply.status(200).send({ message: "Senha alterada com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/send-verification-email/send-verification-email-users-usecase.ts
var import_crypto3 = require("crypto");
var import_config16 = require("dotenv/config");
var SendVerificationEmailUserUseCase = class {
  constructor(usersRepository, sendMailProvider, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.sendMailProvider = sendMailProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({ email }) {
    const findUserExist = await this.usersRepository.findByEmail(email);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    if (findUserExist.emailActive) {
      throw new AppError("Email j\xE1 verificado", 400);
    }
    const token = (0, import_crypto3.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      userId: findUserExist.id,
      token,
      expireDate: expireDateHours
    });
    const link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}` : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`;
    const pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email.hbs" : "./build/views/emails/verify-email.hbs";
    await this.sendMailProvider.sendEmail(
      email,
      findUserExist.name,
      "Confirma\xE7\xE3o de email",
      link,
      pathTemplate,
      null
    );
  }
};

// src/usecases/factories/users/make-send-verification-email-user-usecase.ts
async function makeSendVerificationEmail() {
  const usersRepository = new PrismaUsersRepository();
  const sendMailProvider = new MailProvider();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const sendVerificationEmailUserUseCase = new SendVerificationEmailUserUseCase(
    usersRepository,
    sendMailProvider,
    usersTokensRepository,
    dayjsDateProvider
  );
  return sendVerificationEmailUserUseCase;
}

// src/http/controllers/users/send-verification-email/send-verification-email-users-controller.ts
var import_zod14 = require("zod");
async function SendVerificationEmail(request, reply) {
  try {
    const userSchema = import_zod14.z.object({
      email: import_zod14.z.string().email()
    });
    const { email } = userSchema.parse(request.params);
    const sendEmailVerificationUserUsecase = await makeSendVerificationEmail();
    await sendEmailVerificationUserUsecase.execute({
      email
    });
    return reply.status(200).send({ message: "E-mail verification sent successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/delete-all-tokens/refresh-token-usecase.ts
var import_config17 = require("dotenv/config");
var DeleteAllTokensUseCase = class {
  constructor(usersTokensRepository) {
    this.usersTokensRepository = usersTokensRepository;
  }
  async execute() {
    await this.usersTokensRepository.deleteAll();
  }
};

// src/usecases/factories/users/make-delete-all-token-usecase.ts
async function makeDeleteAllToken() {
  const usersTokensRepository = new PrismaTokensRepository();
  const deleteAllTokensUseCase = new DeleteAllTokensUseCase(
    usersTokensRepository
  );
  return deleteAllTokensUseCase;
}

// src/http/controllers/users/delete-all-tokens/delete-all-tokens-users-controller.ts
async function DeleteAllTokens(request, reply) {
  try {
    const refreshTokenUseCase = await makeDeleteAllToken();
    await refreshTokenUseCase.execute();
    return reply.status(200).send({ message: "All tokens deleted" });
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/users/routes.ts
async function usersRoutes(fastifyApp2) {
  fastifyApp2.post("/", RegisterUser);
  fastifyApp2.post("/login", LoginUser);
  fastifyApp2.get("/email-exists", EmailExists);
  fastifyApp2.post("/refresh-token", RefreshToken);
  fastifyApp2.post("/logout", { onRequest: [verifyTokenJWT] }, LogoutUser);
  fastifyApp2.patch("/verify-email", VerifyEmail);
  fastifyApp2.post("/forgot-password", SendForgotPassword);
  fastifyApp2.patch("/password-update/:id", { onRequest: [verifyTokenJWT] }, CreateNewPasswordByOldPassword2);
  fastifyApp2.patch("/reset-password", ResetPassword);
  fastifyApp2.get("/:id", { onRequest: [verifyTokenJWT] }, FindUser);
  fastifyApp2.put("/:id", { onRequest: [verifyTokenJWT] }, UpdateUser);
  fastifyApp2.delete("/:id", { onRequest: [verifyTokenJWT] }, DeleteUser);
  fastifyApp2.post(
    "/send-verification-email/:email",
    {
      onRequest: [
        verifyTokenJWT,
        verifyUserRole("GUEST", "ADMIN", "SUPER")
      ]
    },
    SendVerificationEmail
  );
  fastifyApp2.delete("/delete-all-tokens", { onRequest: [verifyTokenJWT, verifyUserRole("SUPER")] }, DeleteAllTokens);
}

// src/app.ts
var import_zod29 = require("zod");
var import_formbody = __toESM(require("@fastify/formbody"));

// src/repositories/prisma/prisma-addresses-repository.ts
var PrismaAddressesRepository = class {
  async deleteById(id) {
    await prisma.address.delete({
      where: { id }
    });
  }
  async create(data) {
    const address = await prisma.address.create({ data });
    return address;
  }
  async findById(id) {
    const address = await prisma.address.findUnique({ where: { id } });
    return address;
  }
  async updateById(data) {
    const address = await prisma.address.update({ where: { id: data.id }, data });
    return address;
  }
};

// src/usecases/address/create/create-address-usecase.ts
var CreateAddressUseCase = class {
  constructor(addressRepository, usersRepository) {
    this.addressRepository = addressRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    street,
    num,
    city,
    state,
    zipCode,
    complement,
    reference,
    country,
    district,
    idAnnouncement,
    userId
  }) {
    if (userId) {
      const findUserExist = await this.usersRepository.findById(userId);
      if (!findUserExist) {
        throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
      }
    }
    const address = await this.addressRepository.create({
      street,
      num,
      city,
      state,
      zipCode,
      complement,
      reference,
      country,
      district,
      idAnnouncement,
      userId
    });
    return address;
  }
};

// src/usecases/factories/address/make-create-address-usecase.ts
async function makeCreateAddress() {
  const addressRepository = new PrismaAddressesRepository();
  const usersRepository = new PrismaUsersRepository();
  const createAddressUseCase = new CreateAddressUseCase(addressRepository, usersRepository);
  return createAddressUseCase;
}

// src/http/controllers/address/create/create-address-controlle.ts
var import_zod15 = require("zod");
async function CreateAddress(request, reply) {
  try {
    const userSchema = import_zod15.z.object({
      user: import_zod15.z.object({
        id: import_zod15.z.string().uuid().optional()
      }).optional(),
      announcement: import_zod15.z.object({
        id: import_zod15.z.string().uuid().optional()
      }).optional(),
      street: import_zod15.z.string(),
      num: import_zod15.z.number().nonnegative(),
      district: import_zod15.z.string(),
      country: import_zod15.z.string(),
      city: import_zod15.z.string(),
      state: import_zod15.z.string(),
      zipCode: import_zod15.z.number().nonnegative(),
      complement: import_zod15.z.string().optional(),
      reference: import_zod15.z.string().optional()
    });
    const {
      announcement,
      user,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    } = userSchema.parse(request.body);
    const createAddressUseCase = await makeCreateAddress();
    const address = await createAddressUseCase.execute({
      userId: user?.id,
      idAnnouncement: announcement?.id,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    });
    return reply.status(200).send(address);
  } catch (error) {
    throw error;
  }
}

// src/usecases/address/update-full/update-address-usecase.ts
var UpdateAddressByIdUseCase = class {
  constructor(addressRepository, usersRepository) {
    this.addressRepository = addressRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    street,
    num,
    country,
    district,
    zipCode,
    idAnnouncement,
    userId,
    city,
    state,
    complement,
    reference
  }) {
    if (userId) {
      const findUserExist = await this.usersRepository.findById(userId);
      if (!findUserExist) {
        throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
      }
    }
    const checkAddressExists = await this.addressRepository.findById(id);
    if (!checkAddressExists) {
      throw new AppError("Endere\xE7o n\xE3o encontrado", 404);
    }
    const address = await this.addressRepository.updateById({
      id,
      street,
      num,
      country,
      district,
      zipCode,
      city,
      state,
      complement,
      reference
    });
    return address;
  }
};

// src/usecases/factories/address/make-update-address-usecase.ts
async function makeUpdateAddress() {
  const addressRepository = new PrismaAddressesRepository();
  const usersRepository = new PrismaUsersRepository();
  const updateAddressByIdUseCase = new UpdateAddressByIdUseCase(addressRepository, usersRepository);
  return updateAddressByIdUseCase;
}

// src/http/controllers/address/update-full/update-address-controlle.ts
var import_zod16 = require("zod");
async function UpdateAddress(request, reply) {
  try {
    const userSchema = import_zod16.z.object({
      id: import_zod16.z.string().uuid(),
      user: import_zod16.z.object({
        id: import_zod16.z.string().uuid().optional()
      }).optional(),
      announcement: import_zod16.z.object({
        id: import_zod16.z.string().uuid().optional()
      }).optional(),
      street: import_zod16.z.string(),
      num: import_zod16.z.number().nonnegative(),
      district: import_zod16.z.string(),
      country: import_zod16.z.string(),
      city: import_zod16.z.string(),
      state: import_zod16.z.string(),
      zipCode: import_zod16.z.number().nonnegative(),
      complement: import_zod16.z.string().optional(),
      reference: import_zod16.z.string().optional()
    });
    const {
      id,
      announcement,
      user,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    } = userSchema.parse(request.body);
    const updateAddressUseCase = await makeUpdateAddress();
    const address = await updateAddressUseCase.execute({
      id,
      userId: user?.id,
      idAnnouncement: announcement?.id,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    });
    return reply.status(200).send(address);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/address/router.ts
async function addressRoutes(fastifyApp2) {
  fastifyApp2.addHook("onRequest", verifyTokenJWT);
  fastifyApp2.post("/", CreateAddress);
  fastifyApp2.put("/", UpdateAddress);
}

// src/app.ts
var import_rate_limit = __toESM(require("@fastify/rate-limit"));

// src/http/controllers/auth/verify-is-token-valid/verify-is-token-valid-controller.ts
var import_zod17 = require("zod");

// src/usecases/auth/verify-is-token-valid/verify-is-token-valid-usecase.ts
var VerifyTokenIsValidUseCase = class {
  constructor(cacheProvider) {
    this.cacheProvider = cacheProvider;
  }
  async execute({
    accessToken
  }) {
    const token = await this.cacheProvider.isTokenInBlackList(accessToken);
    if (!token) {
      return false;
    }
    return true;
  }
};

// src/usecases/factories/auth/verify-is-token-valid-usecase.ts
async function makeVerifyTokenValid() {
  const redisProvider = new RedisInMemoryProvider();
  const verifyTokenIsValid = new VerifyTokenIsValidUseCase(
    redisProvider
  );
  return verifyTokenIsValid;
}

// src/http/controllers/auth/verify-is-token-valid/verify-is-token-valid-controller.ts
async function VerifyTokenIsValid(request, reply) {
  try {
    const tokenSchema = import_zod17.z.object({
      token: import_zod17.z.coerce.string()
    });
    const {
      token
    } = tokenSchema.parse(request.query);
    const verifyTokenIsValidUseCase = await makeVerifyTokenValid();
    const isTokenValid = await verifyTokenIsValidUseCase.execute({
      accessToken: token
    });
    return reply.status(200).send(isTokenValid);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/auth/route.ts
async function authRoutes(fastifyApp2) {
  fastifyApp2.get("/verify-token", VerifyTokenIsValid);
}

// src/providers/StorageProvider/implementations/file-tmp.provider.ts
var import_fs = __toESM(require("fs"));
var import_config18 = require("dotenv/config");
var FileTMPProvider = class {
  deleteFileTmp(fileName, folderPath) {
    try {
      let path = env.NODE_ENV === "development" ? env.FOLDER_TMP_DEVELOPMENT : env.FOLDER_TMP_PRODUCTION;
      if (env.NODE_ENV === "test") {
        path = env.FOLDER_TMP_DEVELOPMENT;
      }
      if (!import_fs.default.existsSync(`${path}/${folderPath}/${fileName}`)) {
        return;
      }
      import_fs.default.unlinkSync(`${path}/${folderPath}/${fileName}`);
    } catch (error) {
      throw error;
    }
  }
};

// src/providers/StorageProvider/implementations/firebase-storage.provider.ts
var import_config20 = require("dotenv/config");

// src/config/firebase-connection.ts
var firebase = __toESM(require("firebase-admin"));
var import_config19 = require("dotenv/config");
var firebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY
  }),
  storageBucket: env.FIREBASE_BUCKET
}).storage().bucket();

// src/providers/StorageProvider/implementations/firebase-storage.provider.ts
var FirebaseStorageProvider = class {
  constructor() {
    this.storage = firebaseApp;
  }
  async deleteFile(fileName, folderStorage) {
    try {
      if (!fileName) {
        return;
      }
      await this.storage.file(`${folderStorage}/${fileName}`).delete();
    } catch (error) {
      console.log("Error ao deletar a imagem");
    }
  }
  async uploadFile(fileName, pathFolder, folderStorage) {
    try {
      const destination = `${folderStorage}/${fileName}`;
      const filePath = `${pathFolder}/${fileName}`;
      const uploadImage = await this.storage.upload(filePath, {
        destination
      });
      if (!uploadImage) {
        throw new AppError("Error ao fazer upload da imagem", 400);
      }
      const fileNameUploaded = uploadImage[0].metadata.name;
      const file = this.storage.file(fileNameUploaded);
      const fileRef = await file.getSignedUrl({
        action: "read",
        expires: "03-09-2491"
      });
      const URL = fileRef[0];
      return URL;
    } catch (error) {
      console.log("Error ao fazer upload da imagem");
    }
  }
};

// src/repositories/prisma/prisma-images-repository.ts
var PrismaImageRepository = class {
  async findByHashName(name) {
    const image = await prisma.image.findUnique({
      where: {
        hashName: name
      }
    });
    return image;
  }
  async list() {
    const images = await prisma.image.findMany();
    return images;
  }
  async listByUser(id) {
    const images = await prisma.image.findMany({
      where: {
        userId: id
      }
    });
    return images;
  }
  async findById(id) {
    const image = await prisma.image.findUnique({
      where: { id }
    });
    return image;
  }
  async upload(data) {
    const image = await prisma.image.create({
      data
    });
    return image;
  }
  async updateUrl(data) {
    await prisma.image.update({
      where: {
        id: data.id
      },
      data: {
        url: data.url
      }
    });
  }
  async deleteById(id) {
    await prisma.image.delete({
      where: {
        id
      }
    });
  }
};

// src/usecases/images/delete/delete-images-usecase.ts
var DeleteImageUseCase = class {
  constructor(imageRepository, storageProvider, fileProvider) {
    this.imageRepository = imageRepository;
    this.storageProvider = storageProvider;
    this.fileProvider = fileProvider;
  }
  async execute({
    id
  }) {
    const findImageExists = await this.imageRepository.findById(id);
    if (!findImageExists) {
      throw new AppError("Image not found", 404);
    }
    await this.storageProvider.deleteFile(findImageExists.hashName, "products");
    this.fileProvider.deleteFileTmp(findImageExists.hashName, "products");
    await this.imageRepository.deleteById(id);
  }
};

// src/usecases/factories/images/make-delete-images-usecase.ts
async function makeDeleteImage() {
  const imageRepository = new PrismaImageRepository();
  const storageProvider = new FirebaseStorageProvider();
  const fileTMPProvider = new FileTMPProvider();
  const deleteImageUseCase = new DeleteImageUseCase(
    imageRepository,
    storageProvider,
    fileTMPProvider
  );
  return deleteImageUseCase;
}

// src/http/controllers/images/delete/delete-images-controller.ts
var import_zod18 = require("zod");
async function DeleteImage(request, reply) {
  try {
    const imageSchemaParms = import_zod18.z.object({
      id: import_zod18.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request.params);
    const deleteImageCampingUseCase = await makeDeleteImage();
    await deleteImageCampingUseCase.execute({
      id
    });
    return reply.status(200).send({ message: "Image deleted successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/images/upload/upload-images-usecase.ts
var UploadImageUseCase = class {
  constructor(storageProvider, userRepository, imageRepository) {
    this.storageProvider = storageProvider;
    this.userRepository = userRepository;
    this.imageRepository = imageRepository;
  }
  async execute({
    userId,
    imageInfo
  }) {
    const findUserExists = await this.userRepository.findById(userId);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const pathFolder = env.NODE_ENV === "production" ? `${env.FOLDER_TMP_PRODUCTION}` : `${env.FOLDER_TMP_DEVELOPMENT}`;
    let arrayImagesUploaded = [];
    for (let image of imageInfo) {
      let imageUrl = await this.storageProvider.uploadFile(image.hashName, pathFolder, "products");
      const createImage = await this.imageRepository.upload({
        userId,
        name: image.name,
        hashName: image.hashName,
        url: imageUrl
      });
      arrayImagesUploaded.push(createImage);
    }
    return arrayImagesUploaded;
  }
};

// src/usecases/factories/images/make-upload-images-usecase.ts
async function makeUpload() {
  const imageRepository = new PrismaImageRepository();
  const storageProvider = new FirebaseStorageProvider();
  const userRepository = new PrismaUsersRepository();
  const uploadImageUseCase = new UploadImageUseCase(
    storageProvider,
    userRepository,
    imageRepository
  );
  return uploadImageUseCase;
}

// src/http/controllers/images/upload/upload-images-controller.ts
var import_crypto4 = require("crypto");
var import_zod19 = require("zod");
var import_fs2 = __toESM(require("fs"));
async function UploadImage(request, reply) {
  try {
    const ImageSchema = import_zod19.z.object({
      filename: import_zod19.z.string(),
      _buf: import_zod19.z.instanceof(Buffer)
    });
    const multipartformUploadSchema = import_zod19.z.object({
      userId: import_zod19.z.object({
        value: import_zod19.z.string().uuid()
      }),
      // receber array de imagens ou objeto de imagem e transformar em array
      images: import_zod19.z.union([ImageSchema, ImageSchema.array()]).transform((value) => {
        return Array.isArray(value) ? value : [value];
      })
    });
    const {
      userId,
      images
    } = multipartformUploadSchema.parse(request.body);
    const imageInfo = [];
    const folderTmp = env.NODE_ENV === "production" ? env.FOLDER_TMP_PRODUCTION : env.FOLDER_TMP_DEVELOPMENT;
    for (let image of images) {
      const hashName = `${(0, import_crypto4.randomUUID)()} - ${image.filename}`;
      const name = image.filename;
      import_fs2.default.writeFile(`${folderTmp}/${hashName}`, image._buf, (err) => {
        if (err) {
          console.error("Erro ao salvar o arquivo:", err);
          return reply.status(400).send({ message: "Erro ao salvar o arquivo" });
        }
      });
      imageInfo.push({
        name,
        hashName
      });
    }
    const uploadImageUseCase = await makeUpload();
    const arrayImagesUploaded = await uploadImageUseCase.execute({
      userId: userId.value,
      imageInfo
    });
    return reply.status(200).send(arrayImagesUploaded);
  } catch (error) {
    throw error;
  }
}

// src/usecases/images/list-by-user/list-by-user-images-usecase.ts
var ListImageByUserUseCase = class {
  constructor(imageRepository, userRepository) {
    this.imageRepository = imageRepository;
    this.userRepository = userRepository;
  }
  async execute({
    userId
  }) {
    const findUserExists = await this.userRepository.findById(userId);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const images = await this.imageRepository.listByUser(userId);
    return images;
  }
};

// src/usecases/factories/images/make-list-by-user-images-usecase.ts
async function makeListImageByUser() {
  const imageRepository = new PrismaImageRepository();
  const userRepository = new PrismaUsersRepository();
  const listImageByUserUseCase = new ListImageByUserUseCase(
    imageRepository,
    userRepository
  );
  return listImageByUserUseCase;
}

// src/http/controllers/images/list-by-user/list-by-user-images-controller.ts
var import_zod20 = require("zod");
async function ListImageByUser(request, reply) {
  try {
    const imageSchemaParms = import_zod20.z.object({
      id: import_zod20.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request.params);
    const listImageByUserUseCase = await makeListImageByUser();
    const images = await listImageByUserUseCase.execute({
      userId: id
    });
    return reply.status(200).send(images);
  } catch (error) {
    throw error;
  }
}

// src/usecases/images/list/list-images-usecase.ts
var ListImageUseCase = class {
  constructor(imageRepository) {
    this.imageRepository = imageRepository;
  }
  async execute() {
    const images = await this.imageRepository.list();
    return images;
  }
};

// src/usecases/factories/images/make-list-images-usecase.ts
async function makeListImage() {
  const imageRepository = new PrismaImageRepository();
  const listImageUseCase = new ListImageUseCase(
    imageRepository
  );
  return listImageUseCase;
}

// src/http/controllers/images/list/list-images-controller.ts
async function ListImage(request, reply) {
  try {
    const listImageUseCase = await makeListImage();
    const images = await listImageUseCase.execute();
    return reply.status(200).send(images);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/images/router.ts
async function imageRoutes(fastifyApp2) {
  fastifyApp2.post("/", UploadImage);
  fastifyApp2.get("/", ListImage);
  fastifyApp2.get("/user/:id", ListImageByUser);
  fastifyApp2.delete("/:id", DeleteImage);
}

// src/repositories/prisma/prisma-categories-repository.ts
var PrismaCategoryRepository = class {
  async listByType(type) {
    return prisma.category.findMany({
      where: { type }
    });
  }
  async create(data) {
    const category = await prisma.category.create({ data });
    return category;
  }
  async list() {
    return prisma.category.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        description: true,
        attractions: true
      }
    });
  }
  async findById(id) {
    const category = await prisma.category.findUnique({
      where: { id }
    });
    return category;
  }
  async updateById(data) {
    const category = await prisma.category.update({
      where: { id: data.id },
      data
    });
    return category;
  }
  async deleteById(id) {
    await prisma.category.delete({
      where: { id }
    });
  }
};

// src/usecases/categories/create/create-categories-usecase.ts
var CreateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.create({
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/factories/categories/make-create-categories-usecase.ts
async function makeCreateCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(
    categoryRepository
  );
  return createCategoryUseCase;
}

// src/http/controllers/categories/create/create-categories-controller.ts
var import_zod21 = require("zod");
async function CreateCategory(request, reply) {
  try {
    const categorySchema = import_zod21.z.object({
      name: import_zod21.z.string().min(4),
      description: import_zod21.z.string().optional(),
      type: import_zod21.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      name,
      description,
      type
    } = categorySchema.parse(request.body);
    const createCategoryUseCase = await makeCreateCategory();
    const category = await createCategoryUseCase.execute({
      name,
      description,
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/update/update-categories-usecase.ts
var UpdateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id,
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.updateById({
      id,
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/factories/categories/make-update-categories-usecase.ts
async function makeUpdateCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(
    categoryRepository
  );
  return updateCategoryUseCase;
}

// src/http/controllers/categories/update/update-categories-controller.ts
var import_zod22 = require("zod");
async function UpdateCategory(request, reply) {
  try {
    const categorySchema = import_zod22.z.object({
      id: import_zod22.z.string().uuid(),
      name: import_zod22.z.string().min(4),
      description: import_zod22.z.string().optional(),
      type: import_zod22.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      id,
      name,
      description,
      type
    } = categorySchema.parse(request.body);
    const updateCategoryUseCase = await makeUpdateCategory();
    const category = await updateCategoryUseCase.execute({
      id,
      name,
      description,
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/find-by-id/find-by-id-categories-usecase.ts
var FindCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id
  }) {
    const findCategoryExist = await this.categoriesRepository.findById(id);
    if (!findCategoryExist) {
      throw new AppError("Category not found", 404);
    }
    return findCategoryExist;
  }
};

// src/usecases/factories/categories/make-find-by-id-categories-usecase.ts
async function makeFindCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const findCategoryUseCase = new FindCategoryUseCase(
    categoryRepository
  );
  return findCategoryUseCase;
}

// src/http/controllers/categories/find-by-id/find-by-id-categories-controller.ts
var import_zod23 = require("zod");
async function FindCategory(request, reply) {
  try {
    const categorySchema = import_zod23.z.object({
      id: import_zod23.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request.params);
    const findCategoryUseCase = await makeFindCategory();
    const category = await findCategoryUseCase.execute({
      id
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/list/list-categories-usecase.ts
var ListCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
};

// src/usecases/factories/categories/make-list-categories-usecase.ts
async function makeListCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    categoryRepository
  );
  return listCategoryUseCase;
}

// src/http/controllers/categories/list/list-categories-controller.ts
async function ListCategory(request, reply) {
  try {
    const listCategoryUseCase = await makeListCategory();
    const categories = await listCategoryUseCase.execute();
    return reply.status(200).send(categories);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/delete/delete-categories-usecase.ts
var DeleteCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id
  }) {
    const findCategoryExist = await this.categoriesRepository.findById(id);
    if (!findCategoryExist) {
      throw new AppError("Category not found", 404);
    }
    await this.categoriesRepository.deleteById(id);
    return findCategoryExist;
  }
};

// src/usecases/factories/categories/make-delete-categories-usecase.ts
async function makeDeleteCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    categoryRepository
  );
  return deleteCategoryUseCase;
}

// src/http/controllers/categories/delete/delete-by-id-categories-controller.ts
var import_zod24 = require("zod");
async function DeleteCategory(request, reply) {
  try {
    const categorySchema = import_zod24.z.object({
      id: import_zod24.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request.params);
    const deleteCategoryUseCase = await makeDeleteCategory();
    await deleteCategoryUseCase.execute({
      id
    });
    return reply.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/list-by-type/list-by-type-categories-usecase.ts
var ListCategoryByTypeUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({ type }) {
    const categories = await this.categoriesRepository.listByType(type);
    return categories;
  }
};

// src/usecases/factories/categories/make-list-by-type-categories-usecase.ts
async function makeListCategoryByType() {
  const categoryRepository = new PrismaCategoryRepository();
  const listCategoryByTypeUseCase = new ListCategoryByTypeUseCase(
    categoryRepository
  );
  return listCategoryByTypeUseCase;
}

// src/http/controllers/categories/list-by-type/list-by-type-categories-controller.ts
var import_zod25 = require("zod");
async function ListCategoryByType(request, reply) {
  try {
    const categorySchema = import_zod25.z.object({
      type: import_zod25.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      type
    } = categorySchema.parse(request.params);
    const listCategoryByTypeUseCase = await makeListCategoryByType();
    const category = await listCategoryByTypeUseCase.execute({
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/categories/routes.ts
async function categoriesRoutes(fastifyApp2) {
  fastifyApp2.post("/", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, CreateCategory);
  fastifyApp2.get("/:id", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, FindCategory);
  fastifyApp2.get("/", ListCategory);
  fastifyApp2.get("/type/:type", ListCategoryByType);
  fastifyApp2.put("/", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, UpdateCategory);
  fastifyApp2.delete("/:id", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, DeleteCategory);
}

// src/usecases/admin/create-user-by-admin/create-user-by-admin-usecase.ts
var import_bcrypt6 = require("bcrypt");
var import_config22 = require("dotenv/config");
var import_crypto5 = require("crypto");

// src/utils/generator-random-key.ts
var import_config21 = require("dotenv/config");
function generatoRandomKey(length) {
  let result = "";
  const characters = env.CHARACTERS;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const key = Buffer.from(result, "base64").toString("base64");
  return key;
}

// src/usecases/admin/create-user-by-admin/create-user-by-admin-usecase.ts
var CreateUserByAdminUseCase = class {
  constructor(usersRepository, dayjsDateProvider, usersTokensRepository, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.sendMailProvider = sendMailProvider;
  }
  async execute({
    email,
    name,
    phone,
    idCamping
  }) {
    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (findEmailAlreadyExists) {
      throw new AppError("Email j\xE1 cadastrado", 409);
    }
    const randomPass = generatoRandomKey(8);
    const criptingPassword = await (0, import_bcrypt6.hash)(`${randomPass}`, 8);
    const user = await this.usersRepository.create({
      idCamping,
      email,
      name,
      password: criptingPassword,
      phone
      // role: Role.AFFILIATE,
    });
    const pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email-with-password.hbs" : "./build/views/emails/verify-email-with-password.hbs";
    const token = (0, import_crypto5.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      userId: user.id,
      expireDate: expireDateHours,
      token
    });
    const link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}` : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`;
    await this.sendMailProvider.sendEmail(
      email,
      name,
      "Confirma\xE7\xE3o de email",
      link,
      pathTemplate,
      {
        password: randomPass
      }
    );
    return user;
  }
};

// src/usecases/factories/admins/make-create-user-by-admin-usecase.ts
async function makeCreateUserByAdmin() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const sendMailProvider = new MailProvider();
  const dayjsDateProvider = new DayjsDateProvider();
  const createUserByAdminUseCase = new CreateUserByAdminUseCase(
    usersRepository,
    dayjsDateProvider,
    usersTokensRepository,
    sendMailProvider
  );
  return createUserByAdminUseCase;
}

// src/http/controllers/admin/create-user-by-admin/create-user-by-admin-controller.ts
var import_zod26 = require("zod");
async function CreateUserByAdmin(request, reply) {
  try {
    const userSchema = import_zod26.z.object({
      name: import_zod26.z.string().min(4),
      email: import_zod26.z.string().email(),
      phone: import_zod26.z.string().optional().nullable(),
      camping: import_zod26.z.object({
        id: import_zod26.z.string().uuid()
      })
    });
    const { email, name, phone, camping } = userSchema.parse(
      request.body
    );
    const registerUseCase = await makeCreateUserByAdmin();
    const createUser = await registerUseCase.execute({
      email,
      name,
      phone,
      idCamping: camping.id
    });
    return reply.status(201).send(createUser);
  } catch (error) {
    throw error;
  }
}

// src/usecases/admin/update-user-by-admin/update-user-by-admin-usecase.ts
var import_bcrypt7 = require("bcrypt");
var import_config23 = require("dotenv/config");
var UpdateUserByAdminUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    userId,
    idCamping,
    password,
    email,
    name,
    phone
  }) {
    const findUserExist = await this.usersRepository.findById(userId);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    let criptingPassword = "";
    if (password) {
      criptingPassword = await (0, import_bcrypt7.hash)(password, 8);
    }
    const user = await this.usersRepository.update({
      id: userId,
      idCamping: idCamping || void 0,
      password: password ? criptingPassword : void 0,
      email: email || void 0,
      name: name || void 0,
      phone: phone || void 0
    });
    return user;
  }
};

// src/usecases/factories/admins/make-update-user-by-admin-usecase.ts
async function makeUpdateUserByAdmin() {
  const usersRepository = new PrismaUsersRepository();
  const updateUserByAdminUseCase = new UpdateUserByAdminUseCase(
    usersRepository
  );
  return updateUserByAdminUseCase;
}

// src/http/controllers/admin/update-user-by-admin/update-user-by-admin-controller.ts
var import_zod27 = require("zod");
async function UpdateUserByAdmin(request, reply) {
  try {
    const userSchema = import_zod27.z.object({
      id: import_zod27.z.string().uuid(),
      name: import_zod27.z.string().min(4).optional().nullable(),
      email: import_zod27.z.string().email().optional().nullable(),
      password: import_zod27.z.string().min(6).nullable().optional(),
      phone: import_zod27.z.string().optional().nullable(),
      camping: import_zod27.z.object({
        id: import_zod27.z.string().uuid().optional().nullable()
      })
    });
    const { id, email, name, password, camping, phone } = userSchema.parse(request.body);
    const updateUseCase = await makeUpdateUserByAdmin();
    const updateUser = await updateUseCase.execute({
      userId: id,
      email,
      phone,
      name,
      password,
      idCamping: camping.id
    });
    return reply.status(201).send(updateUser);
  } catch (error) {
    throw error;
  }
}

// src/usecases/admin/list-users/list-users-different-pacient-usecase.ts
var import_config24 = require("dotenv/config");
var ListUserDifferentToPacientUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    const users = await this.usersRepository.listUserCamper();
    return users;
  }
};

// src/usecases/factories/admins/make-list-users-different-pacient-usecases.ts
async function makeListUsers() {
  const usersRepository = new PrismaUsersRepository();
  const listUserDifferentToPacientUseCase = new ListUserDifferentToPacientUseCase(usersRepository);
  return listUserDifferentToPacientUseCase;
}

// src/http/controllers/admin/list/list-users-controller.ts
async function ListUsers(request, reply) {
  try {
    const listUserUseCase = await makeListUsers();
    const users = await listUserUseCase.execute();
    return reply.status(200).send(users);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/admin/routes-admin.ts
async function usersAdminRoutes(fastifyApp2) {
  fastifyApp2.addHook("onRequest", verifyTokenJWT);
  fastifyApp2.addHook("onRequest", verifyUserRole("ADMIN", "SUPER"));
  fastifyApp2.post("/create-user", CreateUserByAdmin);
  fastifyApp2.put("/update-user", UpdateUserByAdmin);
  fastifyApp2.delete("/delete-user/:id", DeleteUser);
  fastifyApp2.get("/list-users", ListUsers);
}

// src/app.ts
var import_cookie = __toESM(require_plugin2());

// src/repositories/prisma/prisma-products-repository.ts
var PrismaProductsRepository = class {
  async list() {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return products;
  }
  async findByName(name) {
    const product = await prisma.product.findUnique({ where: { name } });
    return product;
  }
  async create(data) {
    const product = await prisma.product.create({ data });
    return product;
  }
  async findById(id) {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  }
  async update(data) {
    const product = await prisma.product.update({ where: { id: data.id }, data });
    return product;
  }
  async delete(id) {
    await prisma.product.delete({ where: { id } });
  }
};

// src/usecases/products/create/create-products-usecase.ts
var CreateProductsUseCase = class {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async execute({
    name,
    categoryId,
    description,
    price,
    mainImage,
    quantity
  }) {
    const productAlreadyExists = await this.productsRepository.findByName(name);
    if (productAlreadyExists) {
      throw new Error("Product already exists");
    }
    const product = await this.productsRepository.create({
      name,
      description,
      price,
      mainImage: mainImage ?? null,
      quantity
    });
    return product;
  }
};

// src/usecases/factories/products/make-create-products-usecase.ts
async function makeCreateProduct() {
  const productsRepository = new PrismaProductsRepository();
  const createProductsUseCase = new CreateProductsUseCase(
    productsRepository
  );
  return createProductsUseCase;
}

// src/http/controllers/products/create/create-products-controller.ts
var import_zod28 = require("zod");
async function CreateProduct(request, reply) {
  try {
    const productSchema = import_zod28.z.object({
      categoryId: import_zod28.z.string().optional().nullable(),
      name: import_zod28.z.string().min(4),
      description: import_zod28.z.string().optional().nullable(),
      quantity: import_zod28.z.number().nonnegative(),
      mainImage: import_zod28.z.string().optional().nullable(),
      price: import_zod28.z.number().nonnegative()
    });
    const {
      name,
      description,
      price,
      quantity,
      mainImage,
      categoryId
    } = productSchema.parse(request.body);
    const createProductUseCase = await makeCreateProduct();
    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      quantity,
      mainImage,
      categoryId
    });
    return reply.status(200).send(product);
  } catch (error) {
    throw error;
  }
}

// src/usecases/products/list/list-products-usecase.ts
var ListProductsUseCase = class {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async execute() {
    const products = await this.productsRepository.list();
    return products;
  }
};

// src/usecases/factories/products/make-list-products-usecase.ts
async function makeListProduct() {
  const productsRepository = new PrismaProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(
    productsRepository
  );
  return listProductsUseCase;
}

// src/http/controllers/products/list/list-products-controller.ts
async function ListProduct(request, reply) {
  try {
    const createProductUseCase = await makeListProduct();
    const products = await createProductUseCase.execute();
    return reply.status(200).send(products);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/products/routes.ts
async function productsRoutes(fastifyApp2) {
  fastifyApp2.post("/", CreateProduct);
  fastifyApp2.get("/", ListProduct);
}

// src/app.ts
var fastifyApp = (0, import_fastify.default)();
fastifyApp.register(import_cors.default, {
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]
});
fastifyApp.register(import_cookie.default, {
  secret: env.COOKIE_SECRET
  // hook: 'preHandler'
});
if (env.NODE_ENV === "production") {
  fastifyApp.register(import_rate_limit.default, {
    max: 15,
    timeWindow: "10 second"
  });
}
fastifyApp.register(import_multipart.default, {
  attachFieldsToBody: true
});
fastifyApp.register(import_formbody.default);
fastifyApp.register(usersRoutes, {
  prefix: "api/users"
});
fastifyApp.register(addressRoutes, {
  prefix: "api/address"
});
fastifyApp.register(authRoutes, {
  prefix: "api/auth"
});
fastifyApp.register(imageRoutes, {
  prefix: "api/images"
});
fastifyApp.register(categoriesRoutes, {
  prefix: "api/categories"
});
fastifyApp.register(productsRoutes, {
  prefix: "api/products"
});
fastifyApp.register(usersAdminRoutes, {
  prefix: "api/admins"
});
fastifyApp.setErrorHandler((error, request, reply) => {
  if (env.NODE_ENV !== "production") {
  } else {
    if (error instanceof AppError) {
    } else {
    }
  }
  if (error instanceof import_zod29.ZodError) {
    return reply.status(400).send({ message: "Campo inv\xE1lido", issues: error.format() });
  }
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({ message: error.message });
  }
  if (error.statusCode === 429) {
    return reply.status(429).send({ message: "Muitas requisi\xE7\xF5es para o mesmo IP" });
  }
  console.log(error);
  return reply.status(500).send({ message: error.message });
});

// src/server.ts
fastifyApp.listen({
  host: env.HOST,
  port: env.PORT
}, () => {
  console.log(`Server Running on host: ${env.HOST} port: ${env.PORT}`);
});
/*! Bundled license information:

@fastify/cookie/cookie.js:
  (*!
   * Adapted from https://github.com/jshttp/cookie
   *
   * (The MIT License)
   *
   * Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com>
   * Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * 'Software'), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *)
*/
