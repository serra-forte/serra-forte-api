"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/methods/index.js
var require_methods = __commonJS({
  "node_modules/methods/index.js"(exports, module2) {
    "use strict";
    var http = require("http");
    module2.exports = getCurrentNodeMethods() || getBasicNodeMethods();
    function getCurrentNodeMethods() {
      return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {
        return method.toLowerCase();
      });
    }
    function getBasicNodeMethods() {
      return [
        "get",
        "post",
        "put",
        "head",
        "delete",
        "options",
        "trace",
        "copy",
        "lock",
        "mkcol",
        "move",
        "purge",
        "propfind",
        "proppatch",
        "unlock",
        "report",
        "mkactivity",
        "checkout",
        "merge",
        "m-search",
        "notify",
        "subscribe",
        "unsubscribe",
        "patch",
        "search",
        "connect"
      ];
    }
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/has-proto/index.js"(exports, module2) {
    "use strict";
    var test2 = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module2.exports = function hasProto() {
      return { __proto__: test2 }.foo === test2.foo && !(test2 instanceof $Object);
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module2.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module2.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module2.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module2) {
    "use strict";
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module2) {
    "use strict";
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && leaf === "" ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/superagent/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "node_modules/superagent/node_modules/mime/Mime.js"(exports, module2) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module2.exports = Mime;
  }
});

// node_modules/superagent/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "node_modules/superagent/node_modules/mime/types/standard.js"(exports, module2) {
    "use strict";
    module2.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// node_modules/superagent/node_modules/mime/types/other.js
var require_other = __commonJS({
  "node_modules/superagent/node_modules/mime/types/other.js"(exports, module2) {
    "use strict";
    module2.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// node_modules/superagent/node_modules/mime/index.js
var require_mime = __commonJS({
  "node_modules/superagent/node_modules/mime/index.js"(exports, module2) {
    "use strict";
    var Mime = require_Mime();
    module2.exports = new Mime(require_standard(), require_other());
  }
});

// node_modules/delayed-stream/lib/delayed_stream.js
var require_delayed_stream = __commonJS({
  "node_modules/delayed-stream/lib/delayed_stream.js"(exports, module2) {
    "use strict";
    var Stream = require("stream").Stream;
    var util = require("util");
    module2.exports = DelayedStream;
    function DelayedStream() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;
      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util.inherits(DelayedStream, Stream);
    DelayedStream.create = function(source, options) {
      var delayedStream = new this();
      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }
      delayedStream.source = source;
      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };
      source.on("error", function() {
      });
      if (delayedStream.pauseStream) {
        source.pause();
      }
      return delayedStream;
    };
    Object.defineProperty(DelayedStream.prototype, "readable", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });
    DelayedStream.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };
    DelayedStream.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }
      this.source.resume();
    };
    DelayedStream.prototype.pause = function() {
      this.source.pause();
    };
    DelayedStream.prototype.release = function() {
      this._released = true;
      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };
    DelayedStream.prototype.pipe = function() {
      var r = Stream.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };
    DelayedStream.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }
      if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }
      this._bufferedEvents.push(args);
    };
    DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      this._maxDataSizeExceeded = true;
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this.emit("error", new Error(message));
    };
  }
});

// node_modules/combined-stream/lib/combined_stream.js
var require_combined_stream = __commonJS({
  "node_modules/combined-stream/lib/combined_stream.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var Stream = require("stream").Stream;
    var DelayedStream = require_delayed_stream();
    module2.exports = CombinedStream;
    function CombinedStream() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;
      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util.inherits(CombinedStream, Stream);
    CombinedStream.create = function(options) {
      var combinedStream = new this();
      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }
      return combinedStream;
    };
    CombinedStream.isStreamLike = function(stream) {
      return typeof stream !== "function" && typeof stream !== "string" && typeof stream !== "boolean" && typeof stream !== "number" && !Buffer.isBuffer(stream);
    };
    CombinedStream.prototype.append = function(stream) {
      var isStreamLike = CombinedStream.isStreamLike(stream);
      if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams
          });
          stream.on("data", this._checkDataSize.bind(this));
          stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
          stream.pause();
        }
      }
      this._streams.push(stream);
      return this;
    };
    CombinedStream.prototype.pipe = function(dest, options) {
      Stream.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };
    CombinedStream.prototype._getNext = function() {
      this._currentStream = null;
      if (this._insideLoop) {
        this._pendingNext = true;
        return;
      }
      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };
    CombinedStream.prototype._realGetNext = function() {
      var stream = this._streams.shift();
      if (typeof stream == "undefined") {
        this.end();
        return;
      }
      if (typeof stream !== "function") {
        this._pipeNext(stream);
        return;
      }
      var getStream = stream;
      getStream(function(stream2) {
        var isStreamLike = CombinedStream.isStreamLike(stream2);
        if (isStreamLike) {
          stream2.on("data", this._checkDataSize.bind(this));
          this._handleErrors(stream2);
        }
        this._pipeNext(stream2);
      }.bind(this));
    };
    CombinedStream.prototype._pipeNext = function(stream) {
      this._currentStream = stream;
      var isStreamLike = CombinedStream.isStreamLike(stream);
      if (isStreamLike) {
        stream.on("end", this._getNext.bind(this));
        stream.pipe(this, { end: false });
        return;
      }
      var value = stream;
      this.write(value);
      this._getNext();
    };
    CombinedStream.prototype._handleErrors = function(stream) {
      var self = this;
      stream.on("error", function(err) {
        self._emitError(err);
      });
    };
    CombinedStream.prototype.write = function(data) {
      this.emit("data", data);
    };
    CombinedStream.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
        this._currentStream.pause();
      this.emit("pause");
    };
    CombinedStream.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
        this._currentStream.resume();
      this.emit("resume");
    };
    CombinedStream.prototype.end = function() {
      this._reset();
      this.emit("end");
    };
    CombinedStream.prototype.destroy = function() {
      this._reset();
      this.emit("close");
    };
    CombinedStream.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };
    CombinedStream.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this._emitError(new Error(message));
    };
    CombinedStream.prototype._updateDataSize = function() {
      this.dataSize = 0;
      var self = this;
      this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
          return;
        }
        self.dataSize += stream.dataSize;
      });
      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };
    CombinedStream.prototype._emitError = function(err) {
      this._reset();
      this.emit("error", err);
    };
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports, module2) {
    module2.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/city+json": {
        source: "iana",
        compressible: true
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cpl"]
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dash-patch+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpp"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpf"]
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/oblivious-dns-message": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana",
        extensions: ["asc"]
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.eclipse.ditto+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eu.kasparian.car+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.familysearch.gedcom+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hl7cda+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hl7v2+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxar.archive.3tz+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.syft+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wif"]
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana",
        extensions: ["avci"]
      },
      "image/avcs": {
        source: "iana",
        extensions: ["avcs"]
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    var db = require_mime_db();
    var extname = require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2)
          mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/asynckit/lib/defer.js
var require_defer = __commonJS({
  "node_modules/asynckit/lib/defer.js"(exports, module2) {
    "use strict";
    module2.exports = defer;
    function defer(fn) {
      var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
      if (nextTick) {
        nextTick(fn);
      } else {
        setTimeout(fn, 0);
      }
    }
  }
});

// node_modules/asynckit/lib/async.js
var require_async = __commonJS({
  "node_modules/asynckit/lib/async.js"(exports, module2) {
    "use strict";
    var defer = require_defer();
    module2.exports = async;
    function async(callback) {
      var isAsync = false;
      defer(function() {
        isAsync = true;
      });
      return function async_callback(err, result) {
        if (isAsync) {
          callback(err, result);
        } else {
          defer(function nextTick_callback() {
            callback(err, result);
          });
        }
      };
    }
  }
});

// node_modules/asynckit/lib/abort.js
var require_abort = __commonJS({
  "node_modules/asynckit/lib/abort.js"(exports, module2) {
    "use strict";
    module2.exports = abort;
    function abort(state) {
      Object.keys(state.jobs).forEach(clean.bind(state));
      state.jobs = {};
    }
    function clean(key) {
      if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
      }
    }
  }
});

// node_modules/asynckit/lib/iterate.js
var require_iterate = __commonJS({
  "node_modules/asynckit/lib/iterate.js"(exports, module2) {
    "use strict";
    var async = require_async();
    var abort = require_abort();
    module2.exports = iterate;
    function iterate(list, iterator, state, callback) {
      var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
      state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        if (!(key in state.jobs)) {
          return;
        }
        delete state.jobs[key];
        if (error) {
          abort(state);
        } else {
          state.results[key] = output;
        }
        callback(error, state.results);
      });
    }
    function runJob(iterator, key, item, callback) {
      var aborter;
      if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
      } else {
        aborter = iterator(item, key, async(callback));
      }
      return aborter;
    }
  }
});

// node_modules/asynckit/lib/state.js
var require_state = __commonJS({
  "node_modules/asynckit/lib/state.js"(exports, module2) {
    "use strict";
    module2.exports = state;
    function state(list, sortMethod) {
      var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
      if (sortMethod) {
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
          return sortMethod(list[a], list[b]);
        });
      }
      return initState;
    }
  }
});

// node_modules/asynckit/lib/terminator.js
var require_terminator = __commonJS({
  "node_modules/asynckit/lib/terminator.js"(exports, module2) {
    "use strict";
    var abort = require_abort();
    var async = require_async();
    module2.exports = terminator;
    function terminator(callback) {
      if (!Object.keys(this.jobs).length) {
        return;
      }
      this.index = this.size;
      abort(this);
      async(callback)(null, this.results);
    }
  }
});

// node_modules/asynckit/parallel.js
var require_parallel = __commonJS({
  "node_modules/asynckit/parallel.js"(exports, module2) {
    "use strict";
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = parallel;
    function parallel(list, iterator, callback) {
      var state = initState(list);
      while (state.index < (state["keyedList"] || list).length) {
        iterate(list, iterator, state, function(error, result) {
          if (error) {
            callback(error, result);
            return;
          }
          if (Object.keys(state.jobs).length === 0) {
            callback(null, state.results);
            return;
          }
        });
        state.index++;
      }
      return terminator.bind(state, callback);
    }
  }
});

// node_modules/asynckit/serialOrdered.js
var require_serialOrdered = __commonJS({
  "node_modules/asynckit/serialOrdered.js"(exports, module2) {
    "use strict";
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = serialOrdered;
    module2.exports.ascending = ascending;
    module2.exports.descending = descending;
    function serialOrdered(list, iterator, sortMethod, callback) {
      var state = initState(list, sortMethod);
      iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
          callback(error, result);
          return;
        }
        state.index++;
        if (state.index < (state["keyedList"] || list).length) {
          iterate(list, iterator, state, iteratorHandler);
          return;
        }
        callback(null, state.results);
      });
      return terminator.bind(state, callback);
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    function descending(a, b) {
      return -1 * ascending(a, b);
    }
  }
});

// node_modules/asynckit/serial.js
var require_serial = __commonJS({
  "node_modules/asynckit/serial.js"(exports, module2) {
    "use strict";
    var serialOrdered = require_serialOrdered();
    module2.exports = serial;
    function serial(list, iterator, callback) {
      return serialOrdered(list, iterator, null, callback);
    }
  }
});

// node_modules/asynckit/index.js
var require_asynckit = __commonJS({
  "node_modules/asynckit/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      parallel: require_parallel(),
      serial: require_serial(),
      serialOrdered: require_serialOrdered()
    };
  }
});

// node_modules/form-data/lib/populate.js
var require_populate = __commonJS({
  "node_modules/form-data/lib/populate.js"(exports, module2) {
    "use strict";
    module2.exports = function(dst, src) {
      Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
      });
      return dst;
    };
  }
});

// node_modules/form-data/lib/form_data.js
var require_form_data = __commonJS({
  "node_modules/form-data/lib/form_data.js"(exports, module2) {
    "use strict";
    var CombinedStream = require_combined_stream();
    var util = require("util");
    var path = require("path");
    var http = require("http");
    var https = require("https");
    var parseUrl = require("url").parse;
    var fs4 = require("fs");
    var Stream = require("stream").Stream;
    var mime = require_mime_types();
    var asynckit = require_asynckit();
    var populate = require_populate();
    module2.exports = FormData;
    util.inherits(FormData, CombinedStream);
    function FormData(options) {
      if (!(this instanceof FormData)) {
        return new FormData(options);
      }
      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];
      CombinedStream.call(this);
      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }
    FormData.LINE_BREAK = "\r\n";
    FormData.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    FormData.prototype.append = function(field, value, options) {
      options = options || {};
      if (typeof options == "string") {
        options = { filename: options };
      }
      var append = CombinedStream.prototype.append.bind(this);
      if (typeof value == "number") {
        value = "" + value;
      }
      if (util.isArray(value)) {
        this._error(new Error("Arrays are not supported."));
        return;
      }
      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();
      append(header);
      append(value);
      append(footer);
      this._trackLength(header, value, options);
    };
    FormData.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;
      if (options.knownLength != null) {
        valueLength += +options.knownLength;
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
      }
      this._valueLength += valueLength;
      this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
      if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
        return;
      }
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };
    FormData.prototype._lengthRetriever = function(value, callback) {
      if (value.hasOwnProperty("fd")) {
        if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
          callback(null, value.end + 1 - (value.start ? value.start : 0));
        } else {
          fs4.stat(value.path, function(err, stat) {
            var fileSize;
            if (err) {
              callback(err);
              return;
            }
            fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }
      } else if (value.hasOwnProperty("httpVersion")) {
        callback(null, +value.headers["content-length"]);
      } else if (value.hasOwnProperty("httpModule")) {
        value.on("response", function(response) {
          value.pause();
          callback(null, +response.headers["content-length"]);
        });
        value.resume();
      } else {
        callback("Unknown stream");
      }
    };
    FormData.prototype._multiPartHeader = function(field, value, options) {
      if (typeof options.header == "string") {
        return options.header;
      }
      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);
      var contents = "";
      var headers = {
        // add custom disposition as third element or keep it two elements if not
        "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        "Content-Type": [].concat(contentType || [])
      };
      if (typeof options.header == "object") {
        populate(headers, options.header);
      }
      var header;
      for (var prop in headers) {
        if (!headers.hasOwnProperty(prop))
          continue;
        header = headers[prop];
        if (header == null) {
          continue;
        }
        if (!Array.isArray(header)) {
          header = [header];
        }
        if (header.length) {
          contents += prop + ": " + header.join("; ") + FormData.LINE_BREAK;
        }
      }
      return "--" + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
    };
    FormData.prototype._getContentDisposition = function(value, options) {
      var filename, contentDisposition;
      if (typeof options.filepath === "string") {
        filename = path.normalize(options.filepath).replace(/\\/g, "/");
      } else if (options.filename || value.name || value.path) {
        filename = path.basename(options.filename || value.name || value.path);
      } else if (value.readable && value.hasOwnProperty("httpVersion")) {
        filename = path.basename(value.client._httpMessage.path || "");
      }
      if (filename) {
        contentDisposition = 'filename="' + filename + '"';
      }
      return contentDisposition;
    };
    FormData.prototype._getContentType = function(value, options) {
      var contentType = options.contentType;
      if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
      }
      if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
      }
      if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
        contentType = value.headers["content-type"];
      }
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }
      if (!contentType && typeof value == "object") {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
      }
      return contentType;
    };
    FormData.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
          footer += this._lastBoundary();
        }
        next(footer);
      }.bind(this);
    };
    FormData.prototype._lastBoundary = function() {
      return "--" + this.getBoundary() + "--" + FormData.LINE_BREAK;
    };
    FormData.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
      for (header in userHeaders) {
        if (userHeaders.hasOwnProperty(header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }
      return formHeaders;
    };
    FormData.prototype.setBoundary = function(boundary) {
      this._boundary = boundary;
    };
    FormData.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }
      return this._boundary;
    };
    FormData.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc(0);
      var boundary = this.getBoundary();
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== "function") {
          if (Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
          } else {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
          }
          if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
          }
        }
      }
      return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
    };
    FormData.prototype._generateBoundary = function() {
      var boundary = "--------------------------";
      for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }
      this._boundary = boundary;
    };
    FormData.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this.hasKnownLength()) {
        this._error(new Error("Cannot calculate proper length in synchronous way."));
      }
      return knownLength;
    };
    FormData.prototype.hasKnownLength = function() {
      var hasKnownLength = true;
      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }
      return hasKnownLength;
    };
    FormData.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }
      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }
        values.forEach(function(length) {
          knownLength += length;
        });
        cb(null, knownLength);
      });
    };
    FormData.prototype.submit = function(params, cb) {
      var request2, options, defaults = { method: "post" };
      if (typeof params == "string") {
        params = parseUrl(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults);
      } else {
        options = populate(params, defaults);
        if (!options.port) {
          options.port = options.protocol == "https:" ? 443 : 80;
        }
      }
      options.headers = this.getHeaders(params.headers);
      if (options.protocol == "https:") {
        request2 = https.request(options);
      } else {
        request2 = http.request(options);
      }
      this.getLength(function(err, length) {
        if (err && err !== "Unknown stream") {
          this._error(err);
          return;
        }
        if (length) {
          request2.setHeader("Content-Length", length);
        }
        this.pipe(request2);
        if (cb) {
          var onResponse;
          var callback = function(error, responce) {
            request2.removeListener("error", callback);
            request2.removeListener("response", onResponse);
            return cb.call(this, error, responce);
          };
          onResponse = callback.bind(this, null);
          request2.on("error", callback);
          request2.on("response", onResponse);
        }
      }.bind(this));
      return request2;
    };
    FormData.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
      }
    };
    FormData.prototype.toString = function() {
      return "[object FormData]";
    };
  }
});

// node_modules/formidable/src/PersistentFile.js
var require_PersistentFile = __commonJS({
  "node_modules/formidable/src/PersistentFile.js"(exports, module2) {
    "use strict";
    var fs4 = require("fs");
    var crypto = require("crypto");
    var { EventEmitter } = require("events");
    var PersistentFile = class extends EventEmitter {
      constructor({ filepath, newFilename, originalFilename, mimetype, hashAlgorithm }) {
        super();
        this.lastModifiedDate = null;
        Object.assign(this, { filepath, newFilename, originalFilename, mimetype, hashAlgorithm });
        this.size = 0;
        this._writeStream = null;
        if (typeof this.hashAlgorithm === "string") {
          this.hash = crypto.createHash(this.hashAlgorithm);
        } else {
          this.hash = null;
        }
      }
      open() {
        this._writeStream = new fs4.WriteStream(this.filepath);
        this._writeStream.on("error", (err) => {
          this.emit("error", err);
        });
      }
      toJSON() {
        const json = {
          size: this.size,
          filepath: this.filepath,
          newFilename: this.newFilename,
          mimetype: this.mimetype,
          mtime: this.lastModifiedDate,
          length: this.length,
          originalFilename: this.originalFilename
        };
        if (this.hash && this.hash !== "") {
          json.hash = this.hash;
        }
        return json;
      }
      toString() {
        return `PersistentFile: ${this.newFilename}, Original: ${this.originalFilename}, Path: ${this.filepath}`;
      }
      write(buffer, cb) {
        if (this.hash) {
          this.hash.update(buffer);
        }
        if (this._writeStream.closed) {
          cb();
          return;
        }
        this._writeStream.write(buffer, () => {
          this.lastModifiedDate = /* @__PURE__ */ new Date();
          this.size += buffer.length;
          this.emit("progress", this.size);
          cb();
        });
      }
      end(cb) {
        if (this.hash) {
          this.hash = this.hash.digest("hex");
        }
        this._writeStream.end(() => {
          this.emit("end");
          cb();
        });
      }
      destroy() {
        this._writeStream.destroy();
        fs4.unlink(this.filepath, () => {
        });
      }
    };
    module2.exports = PersistentFile;
  }
});

// node_modules/formidable/src/VolatileFile.js
var require_VolatileFile = __commonJS({
  "node_modules/formidable/src/VolatileFile.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var { EventEmitter } = require("events");
    var VolatileFile = class extends EventEmitter {
      constructor({ filepath, newFilename, originalFilename, mimetype, hashAlgorithm, createFileWriteStream }) {
        super();
        this.lastModifiedDate = null;
        Object.assign(this, { filepath, newFilename, originalFilename, mimetype, hashAlgorithm, createFileWriteStream });
        this.size = 0;
        this._writeStream = null;
        if (typeof this.hashAlgorithm === "string") {
          this.hash = crypto.createHash(this.hashAlgorithm);
        } else {
          this.hash = null;
        }
      }
      open() {
        this._writeStream = this.createFileWriteStream(this);
        this._writeStream.on("error", (err) => {
          this.emit("error", err);
        });
      }
      destroy() {
        this._writeStream.destroy();
      }
      toJSON() {
        const json = {
          size: this.size,
          newFilename: this.newFilename,
          length: this.length,
          originalFilename: this.originalFilename,
          mimetype: this.mimetype
        };
        if (this.hash && this.hash !== "") {
          json.hash = this.hash;
        }
        return json;
      }
      toString() {
        return `VolatileFile: ${this.originalFilename}`;
      }
      write(buffer, cb) {
        if (this.hash) {
          this.hash.update(buffer);
        }
        if (this._writeStream.closed || this._writeStream.destroyed) {
          cb();
          return;
        }
        this._writeStream.write(buffer, () => {
          this.size += buffer.length;
          this.emit("progress", this.size);
          cb();
        });
      }
      end(cb) {
        if (this.hash) {
          this.hash = this.hash.digest("hex");
        }
        this._writeStream.end(() => {
          this.emit("end");
          cb();
        });
      }
    };
    module2.exports = VolatileFile;
  }
});

// node_modules/hexoid/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  default: () => dist_default
});
function dist_default(len) {
  len = len || 16;
  var str = "", num = 0;
  return function() {
    if (!str || num === 256) {
      str = "";
      num = (1 + len) / 2 | 0;
      while (num--)
        str += HEX[256 * Math.random() | 0];
      str = str.substring(num = 0, len - 2);
    }
    return str + HEX[num++];
  };
}
var IDX, HEX;
var init_dist = __esm({
  "node_modules/hexoid/dist/index.mjs"() {
    "use strict";
    IDX = 256;
    HEX = [];
    while (IDX--)
      HEX[IDX] = (IDX + 256).toString(16).substring(1);
  }
});

// node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "node_modules/wrappy/wrappy.js"(exports, module2) {
    "use strict";
    module2.exports = wrappy;
    function wrappy(fn, cb) {
      if (fn && cb)
        return wrappy(fn)(cb);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb2 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb2) {
          Object.keys(cb2).forEach(function(k) {
            ret[k] = cb2[k];
          });
        }
        return ret;
      }
    }
  }
});

// node_modules/once/once.js
var require_once = __commonJS({
  "node_modules/once/once.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// node_modules/asap/raw.js
var require_raw = __commonJS({
  "node_modules/asap/raw.js"(exports, module2) {
    "use strict";
    var domain;
    var hasSetImmediate = typeof setImmediate === "function";
    module2.exports = rawAsap;
    function rawAsap(task) {
      if (!queue.length) {
        requestFlush();
        flushing = true;
      }
      queue[queue.length] = task;
    }
    var queue = [];
    var flushing = false;
    var index = 0;
    var capacity = 1024;
    function flush() {
      while (index < queue.length) {
        var currentIndex = index;
        index = index + 1;
        queue[currentIndex].call();
        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }
          queue.length -= index;
          index = 0;
        }
      }
      queue.length = 0;
      index = 0;
      flushing = false;
    }
    rawAsap.requestFlush = requestFlush;
    function requestFlush() {
      var parentDomain = process.domain;
      if (parentDomain) {
        if (!domain) {
          domain = require("domain");
        }
        domain.active = process.domain = null;
      }
      if (flushing && hasSetImmediate) {
        setImmediate(flush);
      } else {
        process.nextTick(flush);
      }
      if (parentDomain) {
        domain.active = process.domain = parentDomain;
      }
    }
  }
});

// node_modules/asap/asap.js
var require_asap = __commonJS({
  "node_modules/asap/asap.js"(exports, module2) {
    "use strict";
    var rawAsap = require_raw();
    var freeTasks = [];
    module2.exports = asap;
    function asap(task) {
      var rawTask;
      if (freeTasks.length) {
        rawTask = freeTasks.pop();
      } else {
        rawTask = new RawTask();
      }
      rawTask.task = task;
      rawTask.domain = process.domain;
      rawAsap(rawTask);
    }
    function RawTask() {
      this.task = null;
      this.domain = null;
    }
    RawTask.prototype.call = function() {
      if (this.domain) {
        this.domain.enter();
      }
      var threw = true;
      try {
        this.task.call();
        threw = false;
        if (this.domain) {
          this.domain.exit();
        }
      } finally {
        if (threw) {
          rawAsap.requestFlush();
        }
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
      }
    };
  }
});

// node_modules/dezalgo/dezalgo.js
var require_dezalgo = __commonJS({
  "node_modules/dezalgo/dezalgo.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    module2.exports = wrappy(dezalgo);
    var asap = require_asap();
    function dezalgo(cb) {
      var sync = true;
      asap(function() {
        sync = false;
      });
      return function zalgoSafe() {
        var args = arguments;
        var me = this;
        if (sync)
          asap(function() {
            cb.apply(me, args);
          });
        else
          cb.apply(me, args);
      };
    }
  }
});

// node_modules/formidable/src/parsers/Dummy.js
var require_Dummy = __commonJS({
  "node_modules/formidable/src/parsers/Dummy.js"(exports, module2) {
    "use strict";
    var { Transform } = require("stream");
    var DummyParser = class extends Transform {
      constructor(incomingForm, options = {}) {
        super();
        this.globalOptions = { ...options };
        this.incomingForm = incomingForm;
      }
      _flush(callback) {
        this.incomingForm.ended = true;
        this.incomingForm._maybeEnd();
        callback();
      }
    };
    module2.exports = DummyParser;
  }
});

// node_modules/formidable/src/FormidableError.js
var require_FormidableError = __commonJS({
  "node_modules/formidable/src/FormidableError.js"(exports, module2) {
    "use strict";
    var missingPlugin = 1e3;
    var pluginFunction = 1001;
    var aborted = 1002;
    var noParser = 1003;
    var uninitializedParser = 1004;
    var filenameNotString = 1005;
    var maxFieldsSizeExceeded = 1006;
    var maxFieldsExceeded = 1007;
    var smallerThanMinFileSize = 1008;
    var biggerThanMaxFileSize = 1009;
    var noEmptyFiles = 1010;
    var missingContentType = 1011;
    var malformedMultipart = 1012;
    var missingMultipartBoundary = 1013;
    var unknownTransferEncoding = 1014;
    var FormidableError = class extends Error {
      constructor(message, internalCode, httpCode = 500) {
        super(message);
        this.code = internalCode;
        this.httpCode = httpCode;
      }
    };
    module2.exports = {
      missingPlugin,
      pluginFunction,
      aborted,
      noParser,
      uninitializedParser,
      filenameNotString,
      maxFieldsSizeExceeded,
      maxFieldsExceeded,
      smallerThanMinFileSize,
      biggerThanMaxFileSize,
      noEmptyFiles,
      missingContentType,
      malformedMultipart,
      missingMultipartBoundary,
      unknownTransferEncoding,
      FormidableError
    };
  }
});

// node_modules/formidable/src/parsers/Multipart.js
var require_Multipart = __commonJS({
  "node_modules/formidable/src/parsers/Multipart.js"(exports, module2) {
    "use strict";
    var { Transform } = require("stream");
    var errors = require_FormidableError();
    var { FormidableError } = errors;
    var s = 0;
    var STATE = {
      PARSER_UNINITIALIZED: s++,
      START: s++,
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      PART_END: s++,
      END: s++
    };
    var f = 1;
    var FBOUNDARY = { PART_BOUNDARY: f, LAST_BOUNDARY: f *= 2 };
    var LF = 10;
    var CR = 13;
    var SPACE = 32;
    var HYPHEN = 45;
    var COLON = 58;
    var A = 97;
    var Z = 122;
    function lower(c) {
      return c | 32;
    }
    exports.STATES = {};
    Object.keys(STATE).forEach((stateName) => {
      exports.STATES[stateName] = STATE[stateName];
    });
    var MultipartParser = class _MultipartParser extends Transform {
      constructor(options = {}) {
        super({ readableObjectMode: true });
        this.boundary = null;
        this.boundaryChars = null;
        this.lookbehind = null;
        this.bufferLength = 0;
        this.state = STATE.PARSER_UNINITIALIZED;
        this.globalOptions = { ...options };
        this.index = null;
        this.flags = 0;
      }
      _flush(done) {
        if (this.state === STATE.HEADER_FIELD_START && this.index === 0 || this.state === STATE.PART_DATA && this.index === this.boundary.length) {
          this._handleCallback("partEnd");
          this._handleCallback("end");
          done();
        } else if (this.state !== STATE.END) {
          done(
            new FormidableError(
              `MultipartParser.end(): stream ended unexpectedly: ${this.explain()}`,
              errors.malformedMultipart,
              400
            )
          );
        }
      }
      initWithBoundary(str) {
        this.boundary = Buffer.from(`\r
--${str}`);
        this.lookbehind = Buffer.alloc(this.boundary.length + 8);
        this.state = STATE.START;
        this.boundaryChars = {};
        for (let i = 0; i < this.boundary.length; i++) {
          this.boundaryChars[this.boundary[i]] = true;
        }
      }
      // eslint-disable-next-line max-params
      _handleCallback(name, buf, start, end) {
        if (start !== void 0 && start === end) {
          return;
        }
        this.push({ name, buffer: buf, start, end });
      }
      // eslint-disable-next-line max-statements
      _transform(buffer, _, done) {
        let i = 0;
        let prevIndex = this.index;
        let { index, state, flags } = this;
        const { lookbehind, boundary, boundaryChars } = this;
        const boundaryLength = boundary.length;
        const boundaryEnd = boundaryLength - 1;
        this.bufferLength = buffer.length;
        let c = null;
        let cl = null;
        const setMark = (name, idx) => {
          this[`${name}Mark`] = typeof idx === "number" ? idx : i;
        };
        const clearMarkSymbol = (name) => {
          delete this[`${name}Mark`];
        };
        const dataCallback = (name, shouldClear) => {
          const markSymbol = `${name}Mark`;
          if (!(markSymbol in this)) {
            return;
          }
          if (!shouldClear) {
            this._handleCallback(name, buffer, this[markSymbol], buffer.length);
            setMark(name, 0);
          } else {
            this._handleCallback(name, buffer, this[markSymbol], i);
            clearMarkSymbol(name);
          }
        };
        for (i = 0; i < this.bufferLength; i++) {
          c = buffer[i];
          switch (state) {
            case STATE.PARSER_UNINITIALIZED:
              return i;
            case STATE.START:
              index = 0;
              state = STATE.START_BOUNDARY;
            case STATE.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= FBOUNDARY.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return i;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & FBOUNDARY.LAST_BOUNDARY && c === HYPHEN) {
                  this._handleCallback("end");
                  state = STATE.END;
                  flags = 0;
                } else if (!(flags & FBOUNDARY.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  this._handleCallback("partBegin");
                  state = STATE.HEADER_FIELD_START;
                } else {
                  return i;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case STATE.HEADER_FIELD_START:
              state = STATE.HEADER_FIELD;
              setMark("headerField");
              index = 0;
            case STATE.HEADER_FIELD:
              if (c === CR) {
                clearMarkSymbol("headerField");
                state = STATE.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return i;
                }
                dataCallback("headerField", true);
                state = STATE.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return i;
              }
              break;
            case STATE.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              setMark("headerValue");
              state = STATE.HEADER_VALUE;
            case STATE.HEADER_VALUE:
              if (c === CR) {
                dataCallback("headerValue", true);
                this._handleCallback("headerEnd");
                state = STATE.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case STATE.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return i;
              }
              state = STATE.HEADER_FIELD_START;
              break;
            case STATE.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return i;
              }
              this._handleCallback("headersEnd");
              state = STATE.PART_DATA_START;
              break;
            case STATE.PART_DATA_START:
              state = STATE.PART_DATA;
              setMark("partData");
            case STATE.PART_DATA:
              prevIndex = index;
              if (index === 0) {
                i += boundaryEnd;
                while (i < this.bufferLength && !(buffer[i] in boundaryChars)) {
                  i += boundaryLength;
                }
                i -= boundaryEnd;
                c = buffer[i];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("partData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= FBOUNDARY.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= FBOUNDARY.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & FBOUNDARY.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~FBOUNDARY.PART_BOUNDARY;
                    this._handleCallback("partEnd");
                    this._handleCallback("partBegin");
                    state = STATE.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & FBOUNDARY.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    this._handleCallback("partEnd");
                    this._handleCallback("end");
                    state = STATE.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (prevIndex > 0) {
                this._handleCallback("partData", lookbehind, 0, prevIndex);
                prevIndex = 0;
                setMark("partData");
                i--;
              }
              break;
            case STATE.END:
              break;
            default:
              return i;
          }
        }
        dataCallback("headerField");
        dataCallback("headerValue");
        dataCallback("partData");
        this.index = index;
        this.state = state;
        this.flags = flags;
        done();
        return this.bufferLength;
      }
      explain() {
        return `state = ${_MultipartParser.stateToString(this.state)}`;
      }
    };
    MultipartParser.stateToString = (stateNumber) => {
      for (const stateName in STATE) {
        const number = STATE[stateName];
        if (number === stateNumber)
          return stateName;
      }
    };
    module2.exports = Object.assign(MultipartParser, { STATES: exports.STATES });
  }
});

// node_modules/formidable/src/Formidable.js
var require_Formidable = __commonJS({
  "node_modules/formidable/src/Formidable.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var path = require("path");
    var hexoid = (init_dist(), __toCommonJS(dist_exports));
    var once = require_once();
    var dezalgo = require_dezalgo();
    var { EventEmitter } = require("events");
    var { StringDecoder } = require("string_decoder");
    var qs = require_lib();
    var toHexoId = hexoid(25);
    var DEFAULT_OPTIONS = {
      maxFields: 1e3,
      maxFieldsSize: 20 * 1024 * 1024,
      maxFileSize: 200 * 1024 * 1024,
      minFileSize: 1,
      allowEmptyFiles: true,
      keepExtensions: false,
      encoding: "utf-8",
      hashAlgorithm: false,
      uploadDir: os.tmpdir(),
      multiples: false,
      enabledPlugins: ["octetstream", "querystring", "multipart", "json"],
      fileWriteStreamHandler: null,
      defaultInvalidName: "invalid-name",
      filter: function() {
        return true;
      }
    };
    var PersistentFile = require_PersistentFile();
    var VolatileFile = require_VolatileFile();
    var DummyParser = require_Dummy();
    var MultipartParser = require_Multipart();
    var errors = require_FormidableError();
    var { FormidableError } = errors;
    function hasOwnProp(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    var IncomingForm = class extends EventEmitter {
      constructor(options = {}) {
        super();
        this.options = { ...DEFAULT_OPTIONS, ...options };
        const dir = path.resolve(
          this.options.uploadDir || this.options.uploaddir || os.tmpdir()
        );
        this.uploaddir = dir;
        this.uploadDir = dir;
        [
          "error",
          "headers",
          "type",
          "bytesExpected",
          "bytesReceived",
          "_parser"
        ].forEach((key) => {
          this[key] = null;
        });
        this._setUpRename();
        this._flushing = 0;
        this._fieldsSize = 0;
        this._fileSize = 0;
        this._plugins = [];
        this.openedFiles = [];
        this.options.enabledPlugins = [].concat(this.options.enabledPlugins).filter(Boolean);
        if (this.options.enabledPlugins.length === 0) {
          throw new FormidableError(
            "expect at least 1 enabled builtin plugin, see options.enabledPlugins",
            errors.missingPlugin
          );
        }
        this.options.enabledPlugins.forEach((pluginName) => {
          const plgName = pluginName.toLowerCase();
          this.use(require(path.join(__dirname, "plugins", `${plgName}.js`)));
        });
        this._setUpMaxFields();
      }
      use(plugin) {
        if (typeof plugin !== "function") {
          throw new FormidableError(
            ".use: expect `plugin` to be a function",
            errors.pluginFunction
          );
        }
        this._plugins.push(plugin.bind(this));
        return this;
      }
      parse(req, cb) {
        this.pause = () => {
          try {
            req.pause();
          } catch (err) {
            if (!this.ended) {
              this._error(err);
            }
            return false;
          }
          return true;
        };
        this.resume = () => {
          try {
            req.resume();
          } catch (err) {
            if (!this.ended) {
              this._error(err);
            }
            return false;
          }
          return true;
        };
        if (cb) {
          const callback = once(dezalgo(cb));
          const fields = {};
          let mockFields = "";
          const files = {};
          this.on("field", (name, value) => {
            if (this.options.multiples && (this.type === "multipart" || this.type === "urlencoded")) {
              const mObj = { [name]: value };
              mockFields = mockFields ? `${mockFields}&${qs.stringify(mObj)}` : `${qs.stringify(mObj)}`;
            } else {
              fields[name] = value;
            }
          });
          this.on("file", (name, file) => {
            if (this.options.multiples) {
              if (hasOwnProp(files, name)) {
                if (!Array.isArray(files[name])) {
                  files[name] = [files[name]];
                }
                files[name].push(file);
              } else {
                files[name] = file;
              }
            } else {
              files[name] = file;
            }
          });
          this.on("error", (err) => {
            callback(err, fields, files);
          });
          this.on("end", () => {
            if (this.options.multiples) {
              Object.assign(fields, qs.parse(mockFields));
            }
            callback(null, fields, files);
          });
        }
        this.writeHeaders(req.headers);
        req.on("error", (err) => {
          this._error(err);
        }).on("aborted", () => {
          this.emit("aborted");
          this._error(new FormidableError("Request aborted", errors.aborted));
        }).on("data", (buffer) => {
          try {
            this.write(buffer);
          } catch (err) {
            this._error(err);
          }
        }).on("end", () => {
          if (this.error) {
            return;
          }
          if (this._parser) {
            this._parser.end();
          }
          this._maybeEnd();
        });
        return this;
      }
      writeHeaders(headers) {
        this.headers = headers;
        this._parseContentLength();
        this._parseContentType();
        if (!this._parser) {
          this._error(
            new FormidableError(
              "no parser found",
              errors.noParser,
              415
              // Unsupported Media Type
            )
          );
          return;
        }
        this._parser.once("error", (error) => {
          this._error(error);
        });
      }
      write(buffer) {
        if (this.error) {
          return null;
        }
        if (!this._parser) {
          this._error(
            new FormidableError("uninitialized parser", errors.uninitializedParser)
          );
          return null;
        }
        this.bytesReceived += buffer.length;
        this.emit("progress", this.bytesReceived, this.bytesExpected);
        this._parser.write(buffer);
        return this.bytesReceived;
      }
      pause() {
        return false;
      }
      resume() {
        return false;
      }
      onPart(part) {
        this._handlePart(part);
      }
      _handlePart(part) {
        if (part.originalFilename && typeof part.originalFilename !== "string") {
          this._error(
            new FormidableError(
              `the part.originalFilename should be string when it exists`,
              errors.filenameNotString
            )
          );
          return;
        }
        if (!part.mimetype) {
          let value = "";
          const decoder = new StringDecoder(
            part.transferEncoding || this.options.encoding
          );
          part.on("data", (buffer) => {
            this._fieldsSize += buffer.length;
            if (this._fieldsSize > this.options.maxFieldsSize) {
              this._error(
                new FormidableError(
                  `options.maxFieldsSize (${this.options.maxFieldsSize} bytes) exceeded, received ${this._fieldsSize} bytes of field data`,
                  errors.maxFieldsSizeExceeded,
                  413
                  // Payload Too Large
                )
              );
              return;
            }
            value += decoder.write(buffer);
          });
          part.on("end", () => {
            this.emit("field", part.name, value);
          });
          return;
        }
        if (!this.options.filter(part)) {
          return;
        }
        this._flushing += 1;
        const newFilename = this._getNewName(part);
        const filepath = this._joinDirectoryName(newFilename);
        const file = this._newFile({
          newFilename,
          filepath,
          originalFilename: part.originalFilename,
          mimetype: part.mimetype
        });
        file.on("error", (err) => {
          this._error(err);
        });
        this.emit("fileBegin", part.name, file);
        file.open();
        this.openedFiles.push(file);
        part.on("data", (buffer) => {
          this._fileSize += buffer.length;
          if (this._fileSize < this.options.minFileSize) {
            this._error(
              new FormidableError(
                `options.minFileSize (${this.options.minFileSize} bytes) inferior, received ${this._fileSize} bytes of file data`,
                errors.smallerThanMinFileSize,
                400
              )
            );
            return;
          }
          if (this._fileSize > this.options.maxFileSize) {
            this._error(
              new FormidableError(
                `options.maxFileSize (${this.options.maxFileSize} bytes) exceeded, received ${this._fileSize} bytes of file data`,
                errors.biggerThanMaxFileSize,
                413
              )
            );
            return;
          }
          if (buffer.length === 0) {
            return;
          }
          this.pause();
          file.write(buffer, () => {
            this.resume();
          });
        });
        part.on("end", () => {
          if (!this.options.allowEmptyFiles && this._fileSize === 0) {
            this._error(
              new FormidableError(
                `options.allowEmptyFiles is false, file size should be greather than 0`,
                errors.noEmptyFiles,
                400
              )
            );
            return;
          }
          file.end(() => {
            this._flushing -= 1;
            this.emit("file", part.name, file);
            this._maybeEnd();
          });
        });
      }
      // eslint-disable-next-line max-statements
      _parseContentType() {
        if (this.bytesExpected === 0) {
          this._parser = new DummyParser(this, this.options);
          return;
        }
        if (!this.headers["content-type"]) {
          this._error(
            new FormidableError(
              "bad content-type header, no content-type",
              errors.missingContentType,
              400
            )
          );
          return;
        }
        const results = [];
        const _dummyParser = new DummyParser(this, this.options);
        for (let idx = 0; idx < this._plugins.length; idx++) {
          const plugin = this._plugins[idx];
          let pluginReturn = null;
          try {
            pluginReturn = plugin(this, this.options) || this;
          } catch (err) {
            const error = new FormidableError(
              `plugin on index ${idx} failed with: ${err.message}`,
              errors.pluginFailed,
              500
            );
            error.idx = idx;
            throw error;
          }
          Object.assign(this, pluginReturn);
          this.emit("plugin", idx, pluginReturn);
          results.push(pluginReturn);
        }
        this.emit("pluginsResults", results);
      }
      _error(err, eventName = "error") {
        if (this.error || this.ended) {
          return;
        }
        this.error = err;
        this.emit(eventName, err);
        if (Array.isArray(this.openedFiles)) {
          this.openedFiles.forEach((file) => {
            file.destroy();
          });
        }
      }
      _parseContentLength() {
        this.bytesReceived = 0;
        if (this.headers["content-length"]) {
          this.bytesExpected = parseInt(this.headers["content-length"], 10);
        } else if (this.headers["transfer-encoding"] === void 0) {
          this.bytesExpected = 0;
        }
        if (this.bytesExpected !== null) {
          this.emit("progress", this.bytesReceived, this.bytesExpected);
        }
      }
      _newParser() {
        return new MultipartParser(this.options);
      }
      _newFile({ filepath, originalFilename, mimetype, newFilename }) {
        return this.options.fileWriteStreamHandler ? new VolatileFile({
          newFilename,
          filepath,
          originalFilename,
          mimetype,
          createFileWriteStream: this.options.fileWriteStreamHandler,
          hashAlgorithm: this.options.hashAlgorithm
        }) : new PersistentFile({
          newFilename,
          filepath,
          originalFilename,
          mimetype,
          hashAlgorithm: this.options.hashAlgorithm
        });
      }
      _getFileName(headerValue) {
        const m = headerValue.match(
          /\bfilename=("(.*?)"|([^()<>{}[\]@,;:"?=\s/\t]+))($|;\s)/i
        );
        if (!m)
          return null;
        const match = m[2] || m[3] || "";
        let originalFilename = match.substr(match.lastIndexOf("\\") + 1);
        originalFilename = originalFilename.replace(/%22/g, '"');
        originalFilename = originalFilename.replace(
          /&#([\d]{4});/g,
          (_, code) => String.fromCharCode(code)
        );
        return originalFilename;
      }
      _getExtension(str) {
        if (!str) {
          return "";
        }
        const basename = path.basename(str);
        const firstDot = basename.indexOf(".");
        const lastDot = basename.lastIndexOf(".");
        const extname = path.extname(basename).replace(/(\.[a-z0-9]+).*/i, "$1");
        if (firstDot === lastDot) {
          return extname;
        }
        return basename.slice(firstDot, lastDot) + extname;
      }
      _joinDirectoryName(name) {
        const newPath = path.join(this.uploadDir, name);
        if (!newPath.startsWith(this.uploadDir)) {
          return path.join(this.uploadDir, this.options.defaultInvalidName);
        }
        return newPath;
      }
      _setUpRename() {
        const hasRename = typeof this.options.filename === "function";
        if (hasRename) {
          this._getNewName = (part) => {
            let ext = "";
            let name = this.options.defaultInvalidName;
            if (part.originalFilename) {
              ({ ext, name } = path.parse(part.originalFilename));
              if (this.options.keepExtensions !== true) {
                ext = "";
              }
            }
            return this.options.filename.call(this, name, ext, part, this);
          };
        } else {
          this._getNewName = (part) => {
            const name = toHexoId();
            if (part && this.options.keepExtensions) {
              const originalFilename = typeof part === "string" ? part : part.originalFilename;
              return `${name}${this._getExtension(originalFilename)}`;
            }
            return name;
          };
        }
      }
      _setUpMaxFields() {
        if (this.options.maxFields !== 0) {
          let fieldsCount = 0;
          this.on("field", () => {
            fieldsCount += 1;
            if (fieldsCount > this.options.maxFields) {
              this._error(
                new FormidableError(
                  `options.maxFields (${this.options.maxFields}) exceeded`,
                  errors.maxFieldsExceeded,
                  413
                )
              );
            }
          });
        }
      }
      _maybeEnd() {
        if (!this.ended || this._flushing || this.error) {
          return;
        }
        this.emit("end");
      }
    };
    IncomingForm.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    module2.exports = IncomingForm;
  }
});

// node_modules/formidable/src/parsers/OctetStream.js
var require_OctetStream = __commonJS({
  "node_modules/formidable/src/parsers/OctetStream.js"(exports, module2) {
    "use strict";
    var { PassThrough } = require("stream");
    var OctetStreamParser = class extends PassThrough {
      constructor(options = {}) {
        super();
        this.globalOptions = { ...options };
      }
    };
    module2.exports = OctetStreamParser;
  }
});

// node_modules/formidable/src/plugins/octetstream.js
var require_octetstream = __commonJS({
  "node_modules/formidable/src/plugins/octetstream.js"(exports, module2) {
    "use strict";
    var OctetStreamParser = require_OctetStream();
    module2.exports = function plugin(formidable, options) {
      const self = this || formidable;
      if (/octet-stream/i.test(self.headers["content-type"])) {
        init.call(self, self, options);
      }
      return self;
    };
    function init(_self, _opts) {
      this.type = "octet-stream";
      const originalFilename = this.headers["x-file-name"];
      const mimetype = this.headers["content-type"];
      const thisPart = {
        originalFilename,
        mimetype
      };
      const newFilename = this._getNewName(thisPart);
      const filepath = this._joinDirectoryName(newFilename);
      const file = this._newFile({
        newFilename,
        filepath,
        originalFilename,
        mimetype
      });
      this.emit("fileBegin", originalFilename, file);
      file.open();
      this.openedFiles.push(file);
      this._flushing += 1;
      this._parser = new OctetStreamParser(this.options);
      let outstandingWrites = 0;
      this._parser.on("data", (buffer) => {
        this.pause();
        outstandingWrites += 1;
        file.write(buffer, () => {
          outstandingWrites -= 1;
          this.resume();
          if (this.ended) {
            this._parser.emit("doneWritingFile");
          }
        });
      });
      this._parser.on("end", () => {
        this._flushing -= 1;
        this.ended = true;
        const done = () => {
          file.end(() => {
            this.emit("file", "file", file);
            this._maybeEnd();
          });
        };
        if (outstandingWrites === 0) {
          done();
        } else {
          this._parser.once("doneWritingFile", done);
        }
      });
      return this;
    }
  }
});

// node_modules/formidable/src/parsers/Querystring.js
var require_Querystring = __commonJS({
  "node_modules/formidable/src/parsers/Querystring.js"(exports, module2) {
    "use strict";
    var { Transform } = require("stream");
    var querystring = require("querystring");
    var QuerystringParser = class extends Transform {
      constructor(options = {}) {
        super({ readableObjectMode: true });
        this.globalOptions = { ...options };
        this.buffer = "";
        this.bufferLength = 0;
      }
      _transform(buffer, encoding, callback) {
        this.buffer += buffer.toString("ascii");
        this.bufferLength = this.buffer.length;
        callback();
      }
      _flush(callback) {
        const fields = querystring.parse(this.buffer, "&", "=");
        for (const key in fields) {
          this.push({
            key,
            value: fields[key]
          });
        }
        this.buffer = "";
        callback();
      }
    };
    module2.exports = QuerystringParser;
  }
});

// node_modules/formidable/src/plugins/querystring.js
var require_querystring = __commonJS({
  "node_modules/formidable/src/plugins/querystring.js"(exports, module2) {
    "use strict";
    var QuerystringParser = require_Querystring();
    module2.exports = function plugin(formidable, options) {
      const self = this || formidable;
      if (/urlencoded/i.test(self.headers["content-type"])) {
        init.call(self, self, options);
      }
      return self;
    };
    function init(_self, _opts) {
      this.type = "urlencoded";
      const parser = new QuerystringParser(this.options);
      parser.on("data", ({ key, value }) => {
        this.emit("field", key, value);
      });
      parser.once("end", () => {
        this.ended = true;
        this._maybeEnd();
      });
      this._parser = parser;
      return this;
    }
  }
});

// node_modules/formidable/src/plugins/multipart.js
var require_multipart = __commonJS({
  "node_modules/formidable/src/plugins/multipart.js"(exports, module2) {
    "use strict";
    var { Stream } = require("stream");
    var MultipartParser = require_Multipart();
    var errors = require_FormidableError();
    var { FormidableError } = errors;
    module2.exports = function plugin(formidable, options) {
      const self = this || formidable;
      const multipart = /multipart/i.test(self.headers["content-type"]);
      if (multipart) {
        const m = self.headers["content-type"].match(
          /boundary=(?:"([^"]+)"|([^;]+))/i
        );
        if (m) {
          const initMultipart = createInitMultipart(m[1] || m[2]);
          initMultipart.call(self, self, options);
        } else {
          const err = new FormidableError(
            "bad content-type header, no multipart boundary",
            errors.missingMultipartBoundary,
            400
          );
          self._error(err);
        }
      }
    };
    function createInitMultipart(boundary) {
      return function initMultipart() {
        this.type = "multipart";
        const parser = new MultipartParser(this.options);
        let headerField;
        let headerValue;
        let part;
        parser.initWithBoundary(boundary);
        parser.on("data", ({ name, buffer, start, end }) => {
          if (name === "partBegin") {
            part = new Stream();
            part.readable = true;
            part.headers = {};
            part.name = null;
            part.originalFilename = null;
            part.mimetype = null;
            part.transferEncoding = this.options.encoding;
            part.transferBuffer = "";
            headerField = "";
            headerValue = "";
          } else if (name === "headerField") {
            headerField += buffer.toString(this.options.encoding, start, end);
          } else if (name === "headerValue") {
            headerValue += buffer.toString(this.options.encoding, start, end);
          } else if (name === "headerEnd") {
            headerField = headerField.toLowerCase();
            part.headers[headerField] = headerValue;
            const m = headerValue.match(
              // eslint-disable-next-line no-useless-escape
              /\bname=("([^"]*)"|([^\(\)<>@,;:\\"\/\[\]\?=\{\}\s\t/]+))/i
            );
            if (headerField === "content-disposition") {
              if (m) {
                part.name = m[2] || m[3] || "";
              }
              part.originalFilename = this._getFileName(headerValue);
            } else if (headerField === "content-type") {
              part.mimetype = headerValue;
            } else if (headerField === "content-transfer-encoding") {
              part.transferEncoding = headerValue.toLowerCase();
            }
            headerField = "";
            headerValue = "";
          } else if (name === "headersEnd") {
            switch (part.transferEncoding) {
              case "binary":
              case "7bit":
              case "8bit":
              case "utf-8": {
                const dataPropagation = (ctx) => {
                  if (ctx.name === "partData") {
                    part.emit("data", ctx.buffer.slice(ctx.start, ctx.end));
                  }
                };
                const dataStopPropagation = (ctx) => {
                  if (ctx.name === "partEnd") {
                    part.emit("end");
                    parser.off("data", dataPropagation);
                    parser.off("data", dataStopPropagation);
                  }
                };
                parser.on("data", dataPropagation);
                parser.on("data", dataStopPropagation);
                break;
              }
              case "base64": {
                const dataPropagation = (ctx) => {
                  if (ctx.name === "partData") {
                    part.transferBuffer += ctx.buffer.slice(ctx.start, ctx.end).toString("ascii");
                    const offset = parseInt(part.transferBuffer.length / 4, 10) * 4;
                    part.emit(
                      "data",
                      Buffer.from(
                        part.transferBuffer.substring(0, offset),
                        "base64"
                      )
                    );
                    part.transferBuffer = part.transferBuffer.substring(offset);
                  }
                };
                const dataStopPropagation = (ctx) => {
                  if (ctx.name === "partEnd") {
                    part.emit("data", Buffer.from(part.transferBuffer, "base64"));
                    part.emit("end");
                    parser.off("data", dataPropagation);
                    parser.off("data", dataStopPropagation);
                  }
                };
                parser.on("data", dataPropagation);
                parser.on("data", dataStopPropagation);
                break;
              }
              default:
                return this._error(
                  new FormidableError(
                    "unknown transfer-encoding",
                    errors.unknownTransferEncoding,
                    501
                  )
                );
            }
            this.onPart(part);
          } else if (name === "end") {
            this.ended = true;
            this._maybeEnd();
          }
        });
        this._parser = parser;
      };
    }
  }
});

// node_modules/formidable/src/parsers/JSON.js
var require_JSON = __commonJS({
  "node_modules/formidable/src/parsers/JSON.js"(exports, module2) {
    "use strict";
    var { Transform } = require("stream");
    var JSONParser = class extends Transform {
      constructor(options = {}) {
        super({ readableObjectMode: true });
        this.chunks = [];
        this.globalOptions = { ...options };
      }
      _transform(chunk, encoding, callback) {
        this.chunks.push(String(chunk));
        callback();
      }
      _flush(callback) {
        try {
          const fields = JSON.parse(this.chunks.join(""));
          Object.keys(fields).forEach((key) => {
            const value = fields[key];
            this.push({ key, value });
          });
        } catch (e) {
          callback(e);
          return;
        }
        this.chunks = null;
        callback();
      }
    };
    module2.exports = JSONParser;
  }
});

// node_modules/formidable/src/plugins/json.js
var require_json = __commonJS({
  "node_modules/formidable/src/plugins/json.js"(exports, module2) {
    "use strict";
    var JSONParser = require_JSON();
    module2.exports = function plugin(formidable, options) {
      const self = this || formidable;
      if (/json/i.test(self.headers["content-type"])) {
        init.call(self, self, options);
      }
    };
    function init(_self, _opts) {
      this.type = "json";
      const parser = new JSONParser(this.options);
      parser.on("data", ({ key, value }) => {
        this.emit("field", key, value);
      });
      parser.once("end", () => {
        this.ended = true;
        this._maybeEnd();
      });
      this._parser = parser;
    }
  }
});

// node_modules/formidable/src/plugins/index.js
var require_plugins = __commonJS({
  "node_modules/formidable/src/plugins/index.js"(exports) {
    "use strict";
    var octetstream = require_octetstream();
    var querystring = require_querystring();
    var multipart = require_multipart();
    var json = require_json();
    Object.assign(exports, {
      octetstream,
      querystring,
      multipart,
      json
    });
  }
});

// node_modules/formidable/src/parsers/index.js
var require_parsers = __commonJS({
  "node_modules/formidable/src/parsers/index.js"(exports) {
    "use strict";
    var JSONParser = require_JSON();
    var DummyParser = require_Dummy();
    var MultipartParser = require_Multipart();
    var OctetStreamParser = require_OctetStream();
    var QueryStringParser = require_Querystring();
    Object.assign(exports, {
      JSONParser,
      DummyParser,
      MultipartParser,
      OctetStreamParser,
      OctetstreamParser: OctetStreamParser,
      QueryStringParser,
      QuerystringParser: QueryStringParser
    });
  }
});

// node_modules/formidable/src/index.js
var require_src = __commonJS({
  "node_modules/formidable/src/index.js"(exports, module2) {
    "use strict";
    var PersistentFile = require_PersistentFile();
    var VolatileFile = require_VolatileFile();
    var Formidable = require_Formidable();
    var FormidableError = require_FormidableError();
    var plugins = require_plugins();
    var parsers = require_parsers();
    var formidable = (...args) => new Formidable(...args);
    module2.exports = Object.assign(formidable, {
      errors: FormidableError,
      File: PersistentFile,
      PersistentFile,
      VolatileFile,
      Formidable,
      formidable,
      // alias
      IncomingForm: Formidable,
      // parsers
      ...parsers,
      parsers,
      // misc
      defaultOptions: Formidable.DEFAULT_OPTIONS,
      enabledPlugins: Formidable.DEFAULT_OPTIONS.enabledPlugins,
      // plugins
      plugins: {
        ...plugins
      }
    });
  }
});

// node_modules/debug/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/debug/node_modules/ms/index.js"(exports, module2) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    "use strict";
    function setup(env2) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env2).forEach((key) => {
        createDebug[key] = env2[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash6 = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash6 = (hash6 << 5) - hash6 + namespace.charCodeAt(i);
          hash6 |= 0;
        }
        return createDebug.colors[Math.abs(hash6) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    "use strict";
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env: env2 } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env2) {
      if (env2.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env2.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env2.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env2.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env2.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign2) => sign2 in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    "use strict";
    var tty = require("tty");
    var util = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src2 = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    "use strict";
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/cookiejar/cookiejar.js
var require_cookiejar = __commonJS({
  "node_modules/cookiejar/cookiejar.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      function CookieAccessInfo(domain, path, secure, script) {
        if (this instanceof CookieAccessInfo) {
          this.domain = domain || void 0;
          this.path = path || "/";
          this.secure = !!secure;
          this.script = !!script;
          return this;
        }
        return new CookieAccessInfo(domain, path, secure, script);
      }
      CookieAccessInfo.All = Object.freeze(/* @__PURE__ */ Object.create(null));
      exports.CookieAccessInfo = CookieAccessInfo;
      function Cookie(cookiestr, request_domain, request_path) {
        if (cookiestr instanceof Cookie) {
          return cookiestr;
        }
        if (this instanceof Cookie) {
          this.name = null;
          this.value = null;
          this.expiration_date = Infinity;
          this.path = String(request_path || "/");
          this.explicit_path = false;
          this.domain = request_domain || null;
          this.explicit_domain = false;
          this.secure = false;
          this.noscript = false;
          if (cookiestr) {
            this.parse(cookiestr, request_domain, request_path);
          }
          return this;
        }
        return new Cookie(cookiestr, request_domain, request_path);
      }
      exports.Cookie = Cookie;
      Cookie.prototype.toString = function toString() {
        var str = [this.name + "=" + this.value];
        if (this.expiration_date !== Infinity) {
          str.push("expires=" + new Date(this.expiration_date).toGMTString());
        }
        if (this.domain) {
          str.push("domain=" + this.domain);
        }
        if (this.path) {
          str.push("path=" + this.path);
        }
        if (this.secure) {
          str.push("secure");
        }
        if (this.noscript) {
          str.push("httponly");
        }
        return str.join("; ");
      };
      Cookie.prototype.toValueString = function toValueString() {
        return this.name + "=" + this.value;
      };
      var cookie_str_splitter = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
      Cookie.prototype.parse = function parse(str, request_domain, request_path) {
        if (this instanceof Cookie) {
          if (str.length > 32768) {
            console.warn("Cookie too long for parsing (>32768 characters)");
            return;
          }
          var parts = str.split(";").filter(function(value2) {
            return !!value2;
          });
          var i;
          var pair = parts[0].match(/([^=]+)=([\s\S]*)/);
          if (!pair) {
            console.warn("Invalid cookie header encountered. Header: '" + str + "'");
            return;
          }
          var key = pair[1];
          var value = pair[2];
          if (typeof key !== "string" || key.length === 0 || typeof value !== "string") {
            console.warn("Unable to extract values from cookie header. Cookie: '" + str + "'");
            return;
          }
          this.name = key;
          this.value = value;
          for (i = 1; i < parts.length; i += 1) {
            pair = parts[i].match(/([^=]+)(?:=([\s\S]*))?/);
            key = pair[1].trim().toLowerCase();
            value = pair[2];
            switch (key) {
              case "httponly":
                this.noscript = true;
                break;
              case "expires":
                this.expiration_date = value ? Number(Date.parse(value)) : Infinity;
                break;
              case "path":
                this.path = value ? value.trim() : "";
                this.explicit_path = true;
                break;
              case "domain":
                this.domain = value ? value.trim() : "";
                this.explicit_domain = !!this.domain;
                break;
              case "secure":
                this.secure = true;
                break;
            }
          }
          if (!this.explicit_path) {
            this.path = request_path || "/";
          }
          if (!this.explicit_domain) {
            this.domain = request_domain;
          }
          return this;
        }
        return new Cookie().parse(str, request_domain, request_path);
      };
      Cookie.prototype.matches = function matches(access_info) {
        if (access_info === CookieAccessInfo.All) {
          return true;
        }
        if (this.noscript && access_info.script || this.secure && !access_info.secure || !this.collidesWith(access_info)) {
          return false;
        }
        return true;
      };
      Cookie.prototype.collidesWith = function collidesWith(access_info) {
        if (this.path && !access_info.path || this.domain && !access_info.domain) {
          return false;
        }
        if (this.path && access_info.path.indexOf(this.path) !== 0) {
          return false;
        }
        if (this.explicit_path && access_info.path.indexOf(this.path) !== 0) {
          return false;
        }
        var access_domain = access_info.domain && access_info.domain.replace(/^[\.]/, "");
        var cookie_domain = this.domain && this.domain.replace(/^[\.]/, "");
        if (cookie_domain === access_domain) {
          return true;
        }
        if (cookie_domain) {
          if (!this.explicit_domain) {
            return false;
          }
          var wildcard = access_domain.indexOf(cookie_domain);
          if (wildcard === -1 || wildcard !== access_domain.length - cookie_domain.length) {
            return false;
          }
          return true;
        }
        return true;
      };
      function CookieJar() {
        var cookies, cookies_list, collidable_cookie;
        if (this instanceof CookieJar) {
          cookies = /* @__PURE__ */ Object.create(null);
          this.setCookie = function setCookie(cookie2, request_domain, request_path) {
            var remove, i;
            cookie2 = new Cookie(cookie2, request_domain, request_path);
            remove = cookie2.expiration_date <= Date.now();
            if (cookies[cookie2.name] !== void 0) {
              cookies_list = cookies[cookie2.name];
              for (i = 0; i < cookies_list.length; i += 1) {
                collidable_cookie = cookies_list[i];
                if (collidable_cookie.collidesWith(cookie2)) {
                  if (remove) {
                    cookies_list.splice(i, 1);
                    if (cookies_list.length === 0) {
                      delete cookies[cookie2.name];
                    }
                    return false;
                  }
                  cookies_list[i] = cookie2;
                  return cookie2;
                }
              }
              if (remove) {
                return false;
              }
              cookies_list.push(cookie2);
              return cookie2;
            }
            if (remove) {
              return false;
            }
            cookies[cookie2.name] = [cookie2];
            return cookies[cookie2.name];
          };
          this.getCookie = function getCookie(cookie_name, access_info) {
            var cookie2, i;
            cookies_list = cookies[cookie_name];
            if (!cookies_list) {
              return;
            }
            for (i = 0; i < cookies_list.length; i += 1) {
              cookie2 = cookies_list[i];
              if (cookie2.expiration_date <= Date.now()) {
                if (cookies_list.length === 0) {
                  delete cookies[cookie2.name];
                }
                continue;
              }
              if (cookie2.matches(access_info)) {
                return cookie2;
              }
            }
          };
          this.getCookies = function getCookies(access_info) {
            var matches = [], cookie_name, cookie2;
            for (cookie_name in cookies) {
              cookie2 = this.getCookie(cookie_name, access_info);
              if (cookie2) {
                matches.push(cookie2);
              }
            }
            matches.toString = function toString() {
              return matches.join(":");
            };
            matches.toValueString = function toValueString() {
              return matches.map(function(c) {
                return c.toValueString();
              }).join("; ");
            };
            return matches;
          };
          return this;
        }
        return new CookieJar();
      }
      exports.CookieJar = CookieJar;
      CookieJar.prototype.setCookies = function setCookies(cookies, request_domain, request_path) {
        cookies = Array.isArray(cookies) ? cookies : cookies.split(cookie_str_splitter);
        var successful = [], i, cookie2;
        cookies = cookies.map(function(item) {
          return new Cookie(item, request_domain, request_path);
        });
        for (i = 0; i < cookies.length; i += 1) {
          cookie2 = cookies[i];
          if (this.setCookie(cookie2, request_domain, request_path)) {
            successful.push(cookie2);
          }
        }
        return successful;
      };
    })();
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare4 = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare4;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var gte = (a, b, loose) => compare4(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/fast-safe-stringify/index.js
var require_fast_safe_stringify = __commonJS({
  "node_modules/fast-safe-stringify/index.js"(exports, module2) {
    "use strict";
    module2.exports = stringify;
    stringify.default = stringify;
    stringify.stable = deterministicStringify;
    stringify.stableStringify = deterministicStringify;
    var LIMIT_REPLACE_NODE = "[...]";
    var CIRCULAR_REPLACE_NODE = "[Circular]";
    var arr = [];
    var replacerStack = [];
    function defaultOptions() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function stringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      decirc(obj, "", 0, [], void 0, 0, options);
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(obj, replacer, spacer);
        } else {
          res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function setReplace(replace, val, k, parent) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
      if (propertyDescriptor.get !== void 0) {
        if (propertyDescriptor.configurable) {
          Object.defineProperty(parent, k, { value: replace });
          arr.push([parent, k, val, propertyDescriptor]);
        } else {
          replacerStack.push([val, k, replace]);
        }
      } else {
        parent[k] = replace;
        arr.push([parent, k, val]);
      }
    }
    function decirc(val, k, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
          }
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            decirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var keys = Object.keys(val);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            decirc(val[key], key, i, stack, val, depth, options);
          }
        }
        stack.pop();
      }
    }
    function compareFunction(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    function deterministicStringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(tmp, replacer, spacer);
        } else {
          res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
          }
        }
        try {
          if (typeof val.toJSON === "function") {
            return;
          }
        } catch (_) {
          return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            deterministicDecirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var tmp = {};
          var keys = Object.keys(val).sort(compareFunction);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            deterministicDecirc(val[key], key, i, stack, val, depth, options);
            tmp[key] = val[key];
          }
          if (typeof parent !== "undefined") {
            arr.push([parent, k, val]);
            parent[k] = tmp;
          } else {
            return tmp;
          }
        }
        stack.pop();
      }
    }
    function replaceGetterValues(replacer) {
      replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
        return v;
      };
      return function(key, val) {
        if (replacerStack.length > 0) {
          for (var i = 0; i < replacerStack.length; i++) {
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
              val = part[2];
              replacerStack.splice(i, 1);
              break;
            }
          }
        }
        return replacer.call(this, key, val);
      };
    }
  }
});

// node_modules/superagent/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/superagent/lib/utils.js"(exports) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    exports.type = (string_) => string_.split(/ *; */).shift();
    exports.params = (value) => {
      const object = {};
      var _iterator = _createForOfIteratorHelper(value.split(/ *; */)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const string_ = _step.value;
          const parts = string_.split(/ *= */);
          const key = parts.shift();
          const value2 = parts.shift();
          if (key && value2)
            object[key] = value2;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return object;
    };
    exports.parseLinks = (value) => {
      const object = {};
      var _iterator2 = _createForOfIteratorHelper(value.split(/ *, */)), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const string_ = _step2.value;
          const parts = string_.split(/ *; */);
          const url = parts[0].slice(1, -1);
          const rel = parts[1].split(/ *= */)[1].slice(1, -1);
          object[rel] = url;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return object;
    };
    exports.cleanHeader = (header, changesOrigin) => {
      delete header["content-type"];
      delete header["content-length"];
      delete header["transfer-encoding"];
      delete header.host;
      if (changesOrigin) {
        delete header.authorization;
        delete header.cookie;
      }
      return header;
    };
    exports.isObject = (object) => {
      return object !== null && typeof object === "object";
    };
    exports.hasOwn = Object.hasOwn || function(object, property) {
      if (object == null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      return Object.prototype.hasOwnProperty.call(new Object(object), property);
    };
    exports.mixin = (target, source) => {
      for (const key in source) {
        if (exports.hasOwn(source, key)) {
          target[key] = source[key];
        }
      }
    };
  }
});

// node_modules/semver/functions/parse.js
var require_parse2 = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module2) {
    "use strict";
    var parse = require_parse2();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports, module2) {
    "use strict";
    var parse = require_parse2();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports, module2) {
    "use strict";
    var parse = require_parse2();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports, module2) {
    "use strict";
    var parse = require_parse2();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var rcompare = (a, b, loose) => compare4(b, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var compareLoose = (a, b) => compare4(a, b, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module2.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var gt = (a, b, loose) => compare4(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var lt = (a, b, loose) => compare4(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var eq = (a, b, loose) => compare4(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var neq = (a, b, loose) => compare4(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module2) {
    "use strict";
    var compare4 = require_compare();
    var lte = (a, b, loose) => compare4(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse2();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/semver/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/semver/node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/semver/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/semver/node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/semver/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/semver/node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self, key, doUse) => {
      const node = self[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self, hit) => {
      if (!hit || !hit.maxAge && !self[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
    };
    var trim = (self) => {
      if (self[LENGTH] > self[MAX]) {
        for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    };
    var del = (self, node) => {
      if (node) {
        const hit = node.value;
        if (self[DISPOSE])
          self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range2 = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module2) {
    "use strict";
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z28 = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z28} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z28} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z28} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z28} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z28} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module2) {
    "use strict";
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range2();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module2) {
    "use strict";
    var Range = require_range2();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    "use strict";
    var Range = require_range2();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range2();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range2();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range2();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports, module2) {
    "use strict";
    var Range = require_range2();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range2();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports, module2) {
    "use strict";
    var Range = require_range2();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare4 = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare4(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports, module2) {
    "use strict";
    var Range = require_range2();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare4 = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare4(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare4(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare4(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse2();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare4 = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range2();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare: compare4,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/superagent/lib/request-base.js
var require_request_base = __commonJS({
  "node_modules/superagent/lib/request-base.js"(exports, module2) {
    "use strict";
    var semver = require_semver2();
    var _require = require_utils2();
    var isObject = _require.isObject;
    var hasOwn = _require.hasOwn;
    module2.exports = RequestBase;
    function RequestBase() {
    }
    RequestBase.prototype.clearTimeout = function() {
      clearTimeout(this._timer);
      clearTimeout(this._responseTimeoutTimer);
      clearTimeout(this._uploadTimeoutTimer);
      delete this._timer;
      delete this._responseTimeoutTimer;
      delete this._uploadTimeoutTimer;
      return this;
    };
    RequestBase.prototype.parse = function(fn) {
      this._parser = fn;
      return this;
    };
    RequestBase.prototype.responseType = function(value) {
      this._responseType = value;
      return this;
    };
    RequestBase.prototype.serialize = function(fn) {
      this._serializer = fn;
      return this;
    };
    RequestBase.prototype.timeout = function(options) {
      if (!options || typeof options !== "object") {
        this._timeout = options;
        this._responseTimeout = 0;
        this._uploadTimeout = 0;
        return this;
      }
      for (const option in options) {
        if (hasOwn(options, option)) {
          switch (option) {
            case "deadline":
              this._timeout = options.deadline;
              break;
            case "response":
              this._responseTimeout = options.response;
              break;
            case "upload":
              this._uploadTimeout = options.upload;
              break;
            default:
              console.warn("Unknown timeout option", option);
          }
        }
      }
      return this;
    };
    RequestBase.prototype.retry = function(count, fn) {
      if (arguments.length === 0 || count === true)
        count = 1;
      if (count <= 0)
        count = 0;
      this._maxRetries = count;
      this._retries = 0;
      this._retryCallback = fn;
      return this;
    };
    var ERROR_CODES = /* @__PURE__ */ new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]);
    var STATUS_CODES = /* @__PURE__ */ new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
    RequestBase.prototype._shouldRetry = function(error, res) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) {
        return false;
      }
      if (this._retryCallback) {
        try {
          const override = this._retryCallback(error, res);
          if (override === true)
            return true;
          if (override === false)
            return false;
        } catch (err) {
          console.error(err);
        }
      }
      if (res && res.status && STATUS_CODES.has(res.status))
        return true;
      if (error) {
        if (error.code && ERROR_CODES.has(error.code))
          return true;
        if (error.timeout && error.code === "ECONNABORTED")
          return true;
        if (error.crossDomain)
          return true;
      }
      return false;
    };
    RequestBase.prototype._retry = function() {
      this.clearTimeout();
      if (this.req) {
        this.req = null;
        this.req = this.request();
      }
      this._aborted = false;
      this.timedout = false;
      this.timedoutError = null;
      return this._end();
    };
    RequestBase.prototype.then = function(resolve, reject) {
      if (!this._fullfilledPromise) {
        const self = this;
        if (this._endCalled) {
          console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
        }
        this._fullfilledPromise = new Promise((resolve2, reject2) => {
          self.on("abort", () => {
            if (this._maxRetries && this._maxRetries > this._retries) {
              return;
            }
            if (this.timedout && this.timedoutError) {
              reject2(this.timedoutError);
              return;
            }
            const error = new Error("Aborted");
            error.code = "ABORTED";
            error.status = this.status;
            error.method = this.method;
            error.url = this.url;
            reject2(error);
          });
          self.end((error, res) => {
            if (error)
              reject2(error);
            else
              resolve2(res);
          });
        });
      }
      return this._fullfilledPromise.then(resolve, reject);
    };
    RequestBase.prototype.catch = function(callback) {
      return this.then(void 0, callback);
    };
    RequestBase.prototype.use = function(fn) {
      fn(this);
      return this;
    };
    RequestBase.prototype.ok = function(callback) {
      if (typeof callback !== "function")
        throw new Error("Callback required");
      this._okCallback = callback;
      return this;
    };
    RequestBase.prototype._isResponseOK = function(res) {
      if (!res) {
        return false;
      }
      if (this._okCallback) {
        return this._okCallback(res);
      }
      return res.status >= 200 && res.status < 300;
    };
    RequestBase.prototype.get = function(field) {
      return this._header[field.toLowerCase()];
    };
    RequestBase.prototype.getHeader = RequestBase.prototype.get;
    RequestBase.prototype.set = function(field, value) {
      if (isObject(field)) {
        for (const key in field) {
          if (hasOwn(field, key))
            this.set(key, field[key]);
        }
        return this;
      }
      this._header[field.toLowerCase()] = value;
      this.header[field] = value;
      return this;
    };
    RequestBase.prototype.unset = function(field) {
      delete this._header[field.toLowerCase()];
      delete this.header[field];
      return this;
    };
    RequestBase.prototype.field = function(name, value, options) {
      if (name === null || void 0 === name) {
        throw new Error(".field(name, val) name can not be empty");
      }
      if (this._data) {
        throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
      }
      if (isObject(name)) {
        for (const key in name) {
          if (hasOwn(name, key))
            this.field(key, name[key]);
        }
        return this;
      }
      if (Array.isArray(value)) {
        for (const i in value) {
          if (hasOwn(value, i))
            this.field(name, value[i]);
        }
        return this;
      }
      if (value === null || void 0 === value) {
        throw new Error(".field(name, val) val can not be empty");
      }
      if (typeof value === "boolean") {
        value = String(value);
      }
      if (options)
        this._getFormData().append(name, value, options);
      else
        this._getFormData().append(name, value);
      return this;
    };
    RequestBase.prototype.abort = function() {
      if (this._aborted) {
        return this;
      }
      this._aborted = true;
      if (this.xhr)
        this.xhr.abort();
      if (this.req) {
        if (semver.gte(process.version, "v13.0.0") && semver.lt(process.version, "v14.0.0")) {
          throw new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
        }
        this.req.abort();
      }
      this.clearTimeout();
      this.emit("abort");
      return this;
    };
    RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
      switch (options.type) {
        case "basic":
          this.set("Authorization", `Basic ${base64Encoder(`${user}:${pass}`)}`);
          break;
        case "auto":
          this.username = user;
          this.password = pass;
          break;
        case "bearer":
          this.set("Authorization", `Bearer ${user}`);
          break;
        default:
          break;
      }
      return this;
    };
    RequestBase.prototype.withCredentials = function(on) {
      if (on === void 0)
        on = true;
      this._withCredentials = on;
      return this;
    };
    RequestBase.prototype.redirects = function(n) {
      this._maxRedirects = n;
      return this;
    };
    RequestBase.prototype.maxResponseSize = function(n) {
      if (typeof n !== "number") {
        throw new TypeError("Invalid argument");
      }
      this._maxResponseSize = n;
      return this;
    };
    RequestBase.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      };
    };
    RequestBase.prototype.send = function(data) {
      const isObject_ = isObject(data);
      let type = this._header["content-type"];
      if (this._formData) {
        throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
      }
      if (isObject_ && !this._data) {
        if (Array.isArray(data)) {
          this._data = [];
        } else if (!this._isHost(data)) {
          this._data = {};
        }
      } else if (data && this._data && this._isHost(this._data)) {
        throw new Error("Can't merge these send calls");
      }
      if (isObject_ && isObject(this._data)) {
        for (const key in data) {
          if (typeof data[key] == "bigint" && !data[key].toJSON)
            throw new Error("Cannot serialize BigInt value to json");
          if (hasOwn(data, key))
            this._data[key] = data[key];
        }
      } else if (typeof data === "bigint")
        throw new Error("Cannot send value of type BigInt");
      else if (typeof data === "string") {
        if (!type)
          this.type("form");
        type = this._header["content-type"];
        if (type)
          type = type.toLowerCase().trim();
        if (type === "application/x-www-form-urlencoded") {
          this._data = this._data ? `${this._data}&${data}` : data;
        } else {
          this._data = (this._data || "") + data;
        }
      } else {
        this._data = data;
      }
      if (!isObject_ || this._isHost(data)) {
        return this;
      }
      if (!type)
        this.type("json");
      return this;
    };
    RequestBase.prototype.sortQuery = function(sort) {
      this._sort = typeof sort === "undefined" ? true : sort;
      return this;
    };
    RequestBase.prototype._finalizeQueryString = function() {
      const query = this._query.join("&");
      if (query) {
        this.url += (this.url.includes("?") ? "&" : "?") + query;
      }
      this._query.length = 0;
      if (this._sort) {
        const index = this.url.indexOf("?");
        if (index >= 0) {
          const queryArray = this.url.slice(index + 1).split("&");
          if (typeof this._sort === "function") {
            queryArray.sort(this._sort);
          } else {
            queryArray.sort();
          }
          this.url = this.url.slice(0, index) + "?" + queryArray.join("&");
        }
      }
    };
    RequestBase.prototype._appendQueryString = () => {
      console.warn("Unsupported");
    };
    RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
      if (this._aborted) {
        return;
      }
      const error = new Error(`${reason + timeout}ms exceeded`);
      error.timeout = timeout;
      error.code = "ECONNABORTED";
      error.errno = errno;
      this.timedout = true;
      this.timedoutError = error;
      this.abort();
      this.callback(error);
    };
    RequestBase.prototype._setTimeouts = function() {
      const self = this;
      if (this._timeout && !this._timer) {
        this._timer = setTimeout(() => {
          self._timeoutError("Timeout of ", self._timeout, "ETIME");
        }, this._timeout);
      }
      if (this._responseTimeout && !this._responseTimeoutTimer) {
        this._responseTimeoutTimer = setTimeout(() => {
          self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
        }, this._responseTimeout);
      }
    };
  }
});

// node_modules/superagent/lib/node/unzip.js
var require_unzip = __commonJS({
  "node_modules/superagent/lib/node/unzip.js"(exports) {
    "use strict";
    var _require = require("string_decoder");
    var StringDecoder = _require.StringDecoder;
    var Stream = require("stream");
    var zlib = require("zlib");
    exports.unzip = (request2, res) => {
      const unzip = zlib.createUnzip();
      const stream = new Stream();
      let decoder;
      stream.req = request2;
      unzip.on("error", (error) => {
        if (error && error.code === "Z_BUF_ERROR") {
          stream.emit("end");
          return;
        }
        stream.emit("error", error);
      });
      res.pipe(unzip);
      res.setEncoding = (type) => {
        decoder = new StringDecoder(type);
      };
      unzip.on("data", (buf) => {
        if (decoder) {
          const string_ = decoder.write(buf);
          if (string_.length > 0)
            stream.emit("data", string_);
        } else {
          stream.emit("data", buf);
        }
      });
      unzip.on("end", () => {
        stream.emit("end");
      });
      const _on = res.on;
      res.on = function(type, fn) {
        if (type === "data" || type === "end") {
          stream.on(type, fn.bind(res));
        } else if (type === "error") {
          stream.on(type, fn.bind(res));
          _on.call(res, type, fn);
        } else {
          _on.call(res, type, fn);
        }
        return this;
      };
    };
  }
});

// node_modules/superagent/lib/response-base.js
var require_response_base = __commonJS({
  "node_modules/superagent/lib/response-base.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = ResponseBase;
    function ResponseBase() {
    }
    ResponseBase.prototype.get = function(field) {
      return this.header[field.toLowerCase()];
    };
    ResponseBase.prototype._setHeaderProperties = function(header) {
      const ct = header["content-type"] || "";
      this.type = utils.type(ct);
      const parameters = utils.params(ct);
      for (const key in parameters) {
        if (Object.prototype.hasOwnProperty.call(parameters, key))
          this[key] = parameters[key];
      }
      this.links = {};
      try {
        if (header.link) {
          this.links = utils.parseLinks(header.link);
        }
      } catch (err) {
      }
    };
    ResponseBase.prototype._setStatusProperties = function(status) {
      const type = Math.trunc(status / 100);
      this.statusCode = status;
      this.status = this.statusCode;
      this.statusType = type;
      this.info = type === 1;
      this.ok = type === 2;
      this.redirect = type === 3;
      this.clientError = type === 4;
      this.serverError = type === 5;
      this.error = type === 4 || type === 5 ? this.toError() : false;
      this.created = status === 201;
      this.accepted = status === 202;
      this.noContent = status === 204;
      this.badRequest = status === 400;
      this.unauthorized = status === 401;
      this.notAcceptable = status === 406;
      this.forbidden = status === 403;
      this.notFound = status === 404;
      this.unprocessableEntity = status === 422;
    };
  }
});

// node_modules/superagent/lib/node/response.js
var require_response = __commonJS({
  "node_modules/superagent/lib/node/response.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var Stream = require("stream");
    var ResponseBase = require_response_base();
    var _require = require_utils2();
    var mixin = _require.mixin;
    module2.exports = Response;
    function Response(request2) {
      Stream.call(this);
      this.res = request2.res;
      const res = this.res;
      this.request = request2;
      this.req = request2.req;
      this.text = res.text;
      this.files = res.files || {};
      this.buffered = request2._resBuffered;
      this.headers = res.headers;
      this.header = this.headers;
      this._setStatusProperties(res.statusCode);
      this._setHeaderProperties(this.header);
      this.setEncoding = res.setEncoding.bind(res);
      res.on("data", this.emit.bind(this, "data"));
      res.on("end", this.emit.bind(this, "end"));
      res.on("close", this.emit.bind(this, "close"));
      res.on("error", this.emit.bind(this, "error"));
    }
    Object.defineProperty(Response.prototype, "body", {
      get() {
        return this._body !== void 0 ? this._body : this.res.body !== void 0 ? this.res.body : {};
      },
      set(value) {
        this._body = value;
      }
    });
    util.inherits(Response, Stream);
    mixin(Response.prototype, ResponseBase.prototype);
    Response.prototype.destroy = function(error) {
      this.res.destroy(error);
    };
    Response.prototype.pause = function() {
      this.res.pause();
    };
    Response.prototype.resume = function() {
      this.res.resume();
    };
    Response.prototype.toError = function() {
      const req = this.req;
      const method = req.method;
      const path = req.path;
      const message = `cannot ${method} ${path} (${this.status})`;
      const error = new Error(message);
      error.status = this.status;
      error.text = this.text;
      error.method = method;
      error.path = path;
      return error;
    };
    Response.prototype.setStatusProperties = function(status) {
      console.warn("In superagent 2.x setStatusProperties is a private method");
      return this._setStatusProperties(status);
    };
    Response.prototype.toJSON = function() {
      return {
        req: this.request.toJSON(),
        header: this.header,
        status: this.status,
        text: this.text
      };
    };
  }
});

// node_modules/superagent/lib/node/http2wrapper.js
var require_http2wrapper = __commonJS({
  "node_modules/superagent/lib/node/http2wrapper.js"(exports) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var Stream = require("stream");
    var net = require("net");
    var tls = require("tls");
    var _require = require("url");
    var parse = _require.parse;
    var process2 = require("process");
    var semverGte = require_gte();
    var http2;
    if (semverGte(process2.version, "v10.10.0"))
      http2 = require("http2");
    else
      throw new Error("superagent: this version of Node.js does not support http2");
    var _http2$constants = http2.constants;
    var HTTP2_HEADER_PATH = _http2$constants.HTTP2_HEADER_PATH;
    var HTTP2_HEADER_STATUS = _http2$constants.HTTP2_HEADER_STATUS;
    var HTTP2_HEADER_METHOD = _http2$constants.HTTP2_HEADER_METHOD;
    var HTTP2_HEADER_AUTHORITY = _http2$constants.HTTP2_HEADER_AUTHORITY;
    var HTTP2_HEADER_HOST = _http2$constants.HTTP2_HEADER_HOST;
    var HTTP2_HEADER_SET_COOKIE = _http2$constants.HTTP2_HEADER_SET_COOKIE;
    var NGHTTP2_CANCEL = _http2$constants.NGHTTP2_CANCEL;
    function setProtocol(protocol) {
      return {
        request(options) {
          return new Request(protocol, options);
        }
      };
    }
    var Request = class extends Stream {
      constructor(protocol, options) {
        super();
        const defaultPort = protocol === "https:" ? 443 : 80;
        const defaultHost = "localhost";
        const port = options.port || defaultPort;
        const host = options.host || defaultHost;
        delete options.port;
        delete options.host;
        this.method = options.method;
        this.path = options.path;
        this.protocol = protocol;
        this.host = host;
        delete options.method;
        delete options.path;
        const sessionOptions = _objectSpread({}, options);
        if (options.socketPath) {
          sessionOptions.socketPath = options.socketPath;
          sessionOptions.createConnection = this.createUnixConnection.bind(this);
        }
        this._headers = {};
        const session = http2.connect(`${protocol}//${host}:${port}`, sessionOptions);
        this.setHeader("host", `${host}:${port}`);
        session.on("error", (error) => this.emit("error", error));
        this.session = session;
      }
      createUnixConnection(authority, options) {
        switch (this.protocol) {
          case "http:":
            return net.connect(options.socketPath);
          case "https:":
            options.ALPNProtocols = ["h2"];
            options.servername = this.host;
            options.allowHalfOpen = true;
            return tls.connect(options.socketPath, options);
          default:
            throw new Error("Unsupported protocol", this.protocol);
        }
      }
      setNoDelay(bool) {
      }
      getFrame() {
        if (this.frame) {
          return this.frame;
        }
        const method = {
          [HTTP2_HEADER_PATH]: this.path,
          [HTTP2_HEADER_METHOD]: this.method
        };
        let headers = this.mapToHttp2Header(this._headers);
        headers = Object.assign(headers, method);
        const frame = this.session.request(headers);
        frame.once("response", (headers2, flags) => {
          headers2 = this.mapToHttpHeader(headers2);
          frame.headers = headers2;
          frame.statusCode = headers2[HTTP2_HEADER_STATUS];
          frame.status = frame.statusCode;
          this.emit("response", frame);
        });
        this._headerSent = true;
        frame.once("drain", () => this.emit("drain"));
        frame.on("error", (error) => this.emit("error", error));
        frame.on("close", () => this.session.close());
        this.frame = frame;
        return frame;
      }
      mapToHttpHeader(headers) {
        const keys = Object.keys(headers);
        const http2Headers = {};
        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          let key = _keys[_i];
          let value = headers[key];
          key = key.toLowerCase();
          switch (key) {
            case HTTP2_HEADER_SET_COOKIE:
              value = Array.isArray(value) ? value : [value];
              break;
            default:
              break;
          }
          http2Headers[key] = value;
        }
        return http2Headers;
      }
      mapToHttp2Header(headers) {
        const keys = Object.keys(headers);
        const http2Headers = {};
        for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
          let key = _keys2[_i2];
          let value = headers[key];
          key = key.toLowerCase();
          switch (key) {
            case HTTP2_HEADER_HOST:
              key = HTTP2_HEADER_AUTHORITY;
              value = /^http:\/\/|^https:\/\//.test(value) ? parse(value).host : value;
              break;
            default:
              break;
          }
          http2Headers[key] = value;
        }
        return http2Headers;
      }
      setHeader(name, value) {
        this._headers[name.toLowerCase()] = value;
      }
      getHeader(name) {
        return this._headers[name.toLowerCase()];
      }
      write(data, encoding) {
        const frame = this.getFrame();
        return frame.write(data, encoding);
      }
      pipe(stream, options) {
        const frame = this.getFrame();
        return frame.pipe(stream, options);
      }
      end(data) {
        const frame = this.getFrame();
        frame.end(data);
      }
      abort(data) {
        const frame = this.getFrame();
        frame.close(NGHTTP2_CANCEL);
        this.session.destroy();
      }
    };
    exports.setProtocol = setProtocol;
  }
});

// node_modules/superagent/lib/agent-base.js
var require_agent_base = __commonJS({
  "node_modules/superagent/lib/agent-base.js"(exports, module2) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function Agent() {
      this._defaults = [];
    }
    for (_i = 0, _arr = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"]; _i < _arr.length; _i++) {
      const fn = _arr[_i];
      Agent.prototype[fn] = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this._defaults.push({
          fn,
          args
        });
        return this;
      };
    }
    var _i;
    var _arr;
    Agent.prototype._setDefaults = function(request2) {
      var _iterator = _createForOfIteratorHelper(this._defaults), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const def = _step.value;
          request2[def.fn](...def.args);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    module2.exports = Agent;
  }
});

// node_modules/superagent/lib/node/agent.js
var require_agent = __commonJS({
  "node_modules/superagent/lib/node/agent.js"(exports, module2) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    var _require = require("url");
    var parse = _require.parse;
    var _require2 = require_cookiejar();
    var CookieJar = _require2.CookieJar;
    var _require3 = require_cookiejar();
    var CookieAccessInfo = _require3.CookieAccessInfo;
    var methods = require_methods();
    var request2 = require_node2();
    var AgentBase = require_agent_base();
    module2.exports = Agent;
    function Agent(options) {
      if (!(this instanceof Agent)) {
        return new Agent(options);
      }
      AgentBase.call(this);
      this.jar = new CookieJar();
      if (options) {
        if (options.ca) {
          this.ca(options.ca);
        }
        if (options.key) {
          this.key(options.key);
        }
        if (options.pfx) {
          this.pfx(options.pfx);
        }
        if (options.cert) {
          this.cert(options.cert);
        }
        if (options.rejectUnauthorized === false) {
          this.disableTLSCerts();
        }
      }
    }
    Agent.prototype = Object.create(AgentBase.prototype);
    Agent.prototype._saveCookies = function(res) {
      const cookies = res.headers["set-cookie"];
      if (cookies) {
        var _res$request;
        const url = parse(((_res$request = res.request) === null || _res$request === void 0 ? void 0 : _res$request.url) || "");
        this.jar.setCookies(cookies, url.hostname, url.pathname);
      }
    };
    Agent.prototype._attachCookies = function(request_) {
      const url = parse(request_.url);
      const access = new CookieAccessInfo(url.hostname, url.pathname, url.protocol === "https:");
      const cookies = this.jar.getCookies(access).toValueString();
      request_.cookies = cookies;
    };
    var _iterator = _createForOfIteratorHelper(methods);
    var _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const name = _step.value;
        const method = name.toUpperCase();
        Agent.prototype[name] = function(url, fn) {
          const request_ = new request2.Request(method, url);
          request_.on("response", this._saveCookies.bind(this));
          request_.on("redirect", this._saveCookies.bind(this));
          request_.on("redirect", this._attachCookies.bind(this, request_));
          this._setDefaults(request_);
          this._attachCookies(request_);
          if (fn) {
            request_.end(fn);
          }
          return request_;
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    Agent.prototype.del = Agent.prototype.delete;
  }
});

// node_modules/superagent/lib/node/parsers/urlencoded.js
var require_urlencoded = __commonJS({
  "node_modules/superagent/lib/node/parsers/urlencoded.js"(exports, module2) {
    "use strict";
    var qs = require_lib();
    module2.exports = (res, fn) => {
      res.text = "";
      res.setEncoding("ascii");
      res.on("data", (chunk) => {
        res.text += chunk;
      });
      res.on("end", () => {
        try {
          fn(null, qs.parse(res.text));
        } catch (err) {
          fn(err);
        }
      });
    };
  }
});

// node_modules/superagent/lib/node/parsers/json.js
var require_json2 = __commonJS({
  "node_modules/superagent/lib/node/parsers/json.js"(exports, module2) {
    "use strict";
    module2.exports = function(res, fn) {
      res.text = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        res.text += chunk;
      });
      res.on("end", () => {
        let body;
        let error;
        try {
          body = res.text && JSON.parse(res.text);
        } catch (err) {
          error = err;
          error.rawResponse = res.text || null;
          error.statusCode = res.statusCode;
        } finally {
          fn(error, body);
        }
      });
    };
  }
});

// node_modules/superagent/lib/node/parsers/text.js
var require_text = __commonJS({
  "node_modules/superagent/lib/node/parsers/text.js"(exports, module2) {
    "use strict";
    module2.exports = (res, fn) => {
      res.text = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        res.text += chunk;
      });
      res.on("end", fn);
    };
  }
});

// node_modules/superagent/lib/node/parsers/image.js
var require_image = __commonJS({
  "node_modules/superagent/lib/node/parsers/image.js"(exports, module2) {
    "use strict";
    module2.exports = (res, fn) => {
      const data = [];
      res.on("data", (chunk) => {
        data.push(chunk);
      });
      res.on("end", () => {
        fn(null, Buffer.concat(data));
      });
    };
  }
});

// node_modules/superagent/lib/node/parsers/index.js
var require_parsers2 = __commonJS({
  "node_modules/superagent/lib/node/parsers/index.js"(exports) {
    "use strict";
    exports["application/x-www-form-urlencoded"] = require_urlencoded();
    exports["application/json"] = require_json2();
    exports.text = require_text();
    exports["application/json-seq"] = exports.text;
    var binary = require_image();
    exports["application/octet-stream"] = binary;
    exports["application/pdf"] = binary;
    exports.image = binary;
  }
});

// node_modules/superagent/lib/node/index.js
var require_node2 = __commonJS({
  "node_modules/superagent/lib/node/index.js"(exports, module2) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
              return;
            _n = false;
          } else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
              ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
              return;
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    var _require = require("url");
    var parse = _require.parse;
    var format = _require.format;
    var resolve = _require.resolve;
    var Stream = require("stream");
    var https = require("https");
    var http = require("http");
    var fs4 = require("fs");
    var zlib = require("zlib");
    var util = require("util");
    var qs = require_lib();
    var mime = require_mime();
    var methods = require_methods();
    var FormData = require_form_data();
    var formidable = require_src();
    var debug = require_src2()("superagent");
    var CookieJar = require_cookiejar();
    var semverGte = require_gte();
    var safeStringify = require_fast_safe_stringify();
    var utils = require_utils2();
    var RequestBase = require_request_base();
    var _require2 = require_unzip();
    var unzip = _require2.unzip;
    var Response = require_response();
    var mixin = utils.mixin;
    var hasOwn = utils.hasOwn;
    var http2;
    if (semverGte(process.version, "v10.10.0"))
      http2 = require_http2wrapper();
    function request2(method, url) {
      if (typeof url === "function") {
        return new exports.Request("GET", method).end(url);
      }
      if (arguments.length === 1) {
        return new exports.Request("GET", method);
      }
      return new exports.Request(method, url);
    }
    module2.exports = request2;
    exports = module2.exports;
    exports.Request = Request;
    exports.agent = require_agent();
    function noop() {
    }
    exports.Response = Response;
    mime.define({
      "application/x-www-form-urlencoded": ["form", "urlencoded", "form-data"]
    }, true);
    exports.protocols = {
      "http:": http,
      "https:": https,
      "http2:": http2
    };
    exports.serialize = {
      "application/x-www-form-urlencoded": qs.stringify,
      "application/json": safeStringify
    };
    exports.parse = require_parsers2();
    exports.buffer = {};
    function _initHeaders(request_) {
      request_._header = {
        // coerces header names to lowercase
      };
      request_.header = {
        // preserves header name case
      };
    }
    function Request(method, url) {
      Stream.call(this);
      if (typeof url !== "string")
        url = format(url);
      this._enableHttp2 = Boolean(process.env.HTTP2_TEST);
      this._agent = false;
      this._formData = null;
      this.method = method;
      this.url = url;
      _initHeaders(this);
      this.writable = true;
      this._redirects = 0;
      this.redirects(method === "HEAD" ? 0 : 5);
      this.cookies = "";
      this.qs = {};
      this._query = [];
      this.qsRaw = this._query;
      this._redirectList = [];
      this._streamRequest = false;
      this._lookup = void 0;
      this.once("end", this.clearTimeout.bind(this));
    }
    util.inherits(Request, Stream);
    mixin(Request.prototype, RequestBase.prototype);
    Request.prototype.http2 = function(bool) {
      if (exports.protocols["http2:"] === void 0) {
        throw new Error("superagent: this version of Node.js does not support http2");
      }
      this._enableHttp2 = bool === void 0 ? true : bool;
      return this;
    };
    Request.prototype.attach = function(field, file, options) {
      if (file) {
        if (this._data) {
          throw new Error("superagent can't mix .send() and .attach()");
        }
        let o = options || {};
        if (typeof options === "string") {
          o = {
            filename: options
          };
        }
        if (typeof file === "string") {
          if (!o.filename)
            o.filename = file;
          debug("creating `fs.ReadStream` instance for file: %s", file);
          file = fs4.createReadStream(file);
          file.on("error", (error) => {
            const formData = this._getFormData();
            formData.emit("error", error);
          });
        } else if (!o.filename && file.path) {
          o.filename = file.path;
        }
        this._getFormData().append(field, file, o);
      }
      return this;
    };
    Request.prototype._getFormData = function() {
      if (!this._formData) {
        this._formData = new FormData();
        this._formData.on("error", (error) => {
          debug("FormData error", error);
          if (this.called) {
            return;
          }
          this.callback(error);
          this.abort();
        });
      }
      return this._formData;
    };
    Request.prototype.agent = function(agent) {
      if (arguments.length === 0)
        return this._agent;
      this._agent = agent;
      return this;
    };
    Request.prototype.lookup = function(lookup) {
      if (arguments.length === 0)
        return this._lookup;
      this._lookup = lookup;
      return this;
    };
    Request.prototype.type = function(type) {
      return this.set("Content-Type", type.includes("/") ? type : mime.getType(type));
    };
    Request.prototype.accept = function(type) {
      return this.set("Accept", type.includes("/") ? type : mime.getType(type));
    };
    Request.prototype.query = function(value) {
      if (typeof value === "string") {
        this._query.push(value);
      } else {
        Object.assign(this.qs, value);
      }
      return this;
    };
    Request.prototype.write = function(data, encoding) {
      const request_ = this.request();
      if (!this._streamRequest) {
        this._streamRequest = true;
      }
      return request_.write(data, encoding);
    };
    Request.prototype.pipe = function(stream, options) {
      this.piped = true;
      this.buffer(false);
      this.end();
      return this._pipeContinue(stream, options);
    };
    Request.prototype._pipeContinue = function(stream, options) {
      this.req.once("response", (res) => {
        if (isRedirect(res.statusCode) && this._redirects++ !== this._maxRedirects) {
          return this._redirect(res) === this ? this._pipeContinue(stream, options) : void 0;
        }
        this.res = res;
        this._emitResponse();
        if (this._aborted)
          return;
        if (this._shouldUnzip(res)) {
          const unzipObject = zlib.createUnzip();
          unzipObject.on("error", (error) => {
            if (error && error.code === "Z_BUF_ERROR") {
              stream.emit("end");
              return;
            }
            stream.emit("error", error);
          });
          res.pipe(unzipObject).pipe(stream, options);
          unzipObject.once("end", () => this.emit("end"));
        } else {
          res.pipe(stream, options);
          res.once("end", () => this.emit("end"));
        }
      });
      return stream;
    };
    Request.prototype.buffer = function(value) {
      this._buffer = value !== false;
      return this;
    };
    Request.prototype._redirect = function(res) {
      let url = res.headers.location;
      if (!url) {
        return this.callback(new Error("No location header for redirect"), res);
      }
      debug("redirect %s -> %s", this.url, url);
      url = resolve(this.url, url);
      res.resume();
      let headers = this.req.getHeaders ? this.req.getHeaders() : this.req._headers;
      const changesOrigin = parse(url).host !== parse(this.url).host;
      if (res.statusCode === 301 || res.statusCode === 302) {
        headers = utils.cleanHeader(headers, changesOrigin);
        this.method = this.method === "HEAD" ? "HEAD" : "GET";
        this._data = null;
      }
      if (res.statusCode === 303) {
        headers = utils.cleanHeader(headers, changesOrigin);
        this.method = "GET";
        this._data = null;
      }
      delete headers.host;
      delete this.req;
      delete this._formData;
      _initHeaders(this);
      this.res = res;
      this._endCalled = false;
      this.url = url;
      this.qs = {};
      this._query.length = 0;
      this.set(headers);
      this._emitRedirect();
      this._redirectList.push(this.url);
      this.end(this._callback);
      return this;
    };
    Request.prototype.auth = function(user, pass, options) {
      if (arguments.length === 1)
        pass = "";
      if (typeof pass === "object" && pass !== null) {
        options = pass;
        pass = "";
      }
      if (!options) {
        options = {
          type: "basic"
        };
      }
      const encoder = (string) => Buffer.from(string).toString("base64");
      return this._auth(user, pass, options, encoder);
    };
    Request.prototype.ca = function(cert) {
      this._ca = cert;
      return this;
    };
    Request.prototype.key = function(cert) {
      this._key = cert;
      return this;
    };
    Request.prototype.pfx = function(cert) {
      if (typeof cert === "object" && !Buffer.isBuffer(cert)) {
        this._pfx = cert.pfx;
        this._passphrase = cert.passphrase;
      } else {
        this._pfx = cert;
      }
      return this;
    };
    Request.prototype.cert = function(cert) {
      this._cert = cert;
      return this;
    };
    Request.prototype.disableTLSCerts = function() {
      this._disableTLSCerts = true;
      return this;
    };
    Request.prototype.request = function() {
      if (this.req)
        return this.req;
      const options = {};
      try {
        const query = qs.stringify(this.qs, {
          indices: false,
          strictNullHandling: true
        });
        if (query) {
          this.qs = {};
          this._query.push(query);
        }
        this._finalizeQueryString();
      } catch (err) {
        return this.emit("error", err);
      }
      let url = this.url;
      const retries = this._retries;
      let queryStringBackticks;
      if (url.includes("`")) {
        const queryStartIndex = url.indexOf("?");
        if (queryStartIndex !== -1) {
          const queryString = url.slice(queryStartIndex + 1);
          queryStringBackticks = queryString.match(/`|%60/g);
        }
      }
      if (url.indexOf("http") !== 0)
        url = `http://${url}`;
      url = parse(url);
      if (queryStringBackticks) {
        let i = 0;
        url.query = url.query.replace(/%60/g, () => queryStringBackticks[i++]);
        url.search = `?${url.query}`;
        url.path = url.pathname + url.search;
      }
      if (/^https?\+unix:/.test(url.protocol) === true) {
        url.protocol = `${url.protocol.split("+")[0]}:`;
        const unixParts = url.path.match(/^([^/]+)(.+)$/);
        options.socketPath = unixParts[1].replace(/%2F/g, "/");
        url.path = unixParts[2];
      }
      if (this._connectOverride) {
        const _url = url, hostname = _url.hostname;
        const match = hostname in this._connectOverride ? this._connectOverride[hostname] : this._connectOverride["*"];
        if (match) {
          if (!this._header.host) {
            this.set("host", url.host);
          }
          let newHost;
          let newPort;
          if (typeof match === "object") {
            newHost = match.host;
            newPort = match.port;
          } else {
            newHost = match;
            newPort = url.port;
          }
          url.host = /:/.test(newHost) ? `[${newHost}]` : newHost;
          if (newPort) {
            url.host += `:${newPort}`;
            url.port = newPort;
          }
          url.hostname = newHost;
        }
      }
      options.method = this.method;
      options.port = url.port;
      options.path = url.path;
      options.host = url.hostname;
      options.ca = this._ca;
      options.key = this._key;
      options.pfx = this._pfx;
      options.cert = this._cert;
      options.passphrase = this._passphrase;
      options.agent = this._agent;
      options.lookup = this._lookup;
      options.rejectUnauthorized = typeof this._disableTLSCerts === "boolean" ? !this._disableTLSCerts : process.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0";
      if (this._header.host) {
        options.servername = this._header.host.replace(/:\d+$/, "");
      }
      if (this._trustLocalhost && /^(?:localhost|127\.0\.0\.\d+|(0*:)+:0*1)$/.test(url.hostname)) {
        options.rejectUnauthorized = false;
      }
      const module_ = this._enableHttp2 ? exports.protocols["http2:"].setProtocol(url.protocol) : exports.protocols[url.protocol];
      this.req = module_.request(options);
      const req = this.req;
      req.setNoDelay(true);
      if (options.method !== "HEAD") {
        req.setHeader("Accept-Encoding", "gzip, deflate");
      }
      this.protocol = url.protocol;
      this.host = url.host;
      req.once("drain", () => {
        this.emit("drain");
      });
      req.on("error", (error) => {
        if (this._aborted)
          return;
        if (this._retries !== retries)
          return;
        if (this.response)
          return;
        this.callback(error);
      });
      if (url.auth) {
        const auth = url.auth.split(":");
        this.auth(auth[0], auth[1]);
      }
      if (this.username && this.password) {
        this.auth(this.username, this.password);
      }
      for (const key in this.header) {
        if (hasOwn(this.header, key))
          req.setHeader(key, this.header[key]);
      }
      if (this.cookies) {
        if (hasOwn(this._header, "cookie")) {
          const temporaryJar = new CookieJar.CookieJar();
          temporaryJar.setCookies(this._header.cookie.split("; "));
          temporaryJar.setCookies(this.cookies.split("; "));
          req.setHeader("Cookie", temporaryJar.getCookies(CookieJar.CookieAccessInfo.All).toValueString());
        } else {
          req.setHeader("Cookie", this.cookies);
        }
      }
      return req;
    };
    Request.prototype.callback = function(error, res) {
      if (this._shouldRetry(error, res)) {
        return this._retry();
      }
      const fn = this._callback || noop;
      this.clearTimeout();
      if (this.called)
        return console.warn("superagent: double callback bug");
      this.called = true;
      if (!error) {
        try {
          if (!this._isResponseOK(res)) {
            let message = "Unsuccessful HTTP response";
            if (res) {
              message = http.STATUS_CODES[res.status] || message;
            }
            error = new Error(message);
            error.status = res ? res.status : void 0;
          }
        } catch (err) {
          error = err;
          error.status = error.status || (res ? res.status : void 0);
        }
      }
      if (!error) {
        return fn(null, res);
      }
      error.response = res;
      if (this._maxRetries)
        error.retries = this._retries - 1;
      if (error && this.listeners("error").length > 0) {
        this.emit("error", error);
      }
      fn(error, res);
    };
    Request.prototype._isHost = function(object) {
      return Buffer.isBuffer(object) || object instanceof Stream || object instanceof FormData;
    };
    Request.prototype._emitResponse = function(body, files) {
      const response = new Response(this);
      this.response = response;
      response.redirects = this._redirectList;
      if (void 0 !== body) {
        response.body = body;
      }
      response.files = files;
      if (this._endCalled) {
        response.pipe = function() {
          throw new Error("end() has already been called, so it's too late to start piping");
        };
      }
      this.emit("response", response);
      return response;
    };
    Request.prototype._emitRedirect = function() {
      const response = new Response(this);
      response.redirects = this._redirectList;
      this.emit("redirect", response);
    };
    Request.prototype.end = function(fn) {
      this.request();
      debug("%s %s", this.method, this.url);
      if (this._endCalled) {
        throw new Error(".end() was called twice. This is not supported in superagent");
      }
      this._endCalled = true;
      this._callback = fn || noop;
      this._end();
    };
    Request.prototype._end = function() {
      if (this._aborted)
        return this.callback(new Error("The request has been aborted even before .end() was called"));
      let data = this._data;
      const req = this.req;
      const method = this.method;
      this._setTimeouts();
      if (method !== "HEAD" && !req._headerSent) {
        if (typeof data !== "string") {
          let contentType = req.getHeader("Content-Type");
          if (contentType)
            contentType = contentType.split(";")[0];
          let serialize = this._serializer || exports.serialize[contentType];
          if (!serialize && isJSON(contentType)) {
            serialize = exports.serialize["application/json"];
          }
          if (serialize)
            data = serialize(data);
        }
        if (data && !req.getHeader("Content-Length")) {
          req.setHeader("Content-Length", Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data));
        }
      }
      req.once("response", (res) => {
        debug("%s %s -> %s", this.method, this.url, res.statusCode);
        if (this._responseTimeoutTimer) {
          clearTimeout(this._responseTimeoutTimer);
        }
        if (this.piped) {
          return;
        }
        const max = this._maxRedirects;
        const mime2 = utils.type(res.headers["content-type"] || "") || "text/plain";
        let type = mime2.split("/")[0];
        if (type)
          type = type.toLowerCase().trim();
        const multipart = type === "multipart";
        const redirect = isRedirect(res.statusCode);
        const responseType = this._responseType;
        this.res = res;
        if (redirect && this._redirects++ !== max) {
          return this._redirect(res);
        }
        if (this.method === "HEAD") {
          this.emit("end");
          this.callback(null, this._emitResponse());
          return;
        }
        if (this._shouldUnzip(res)) {
          unzip(req, res);
        }
        let buffer = this._buffer;
        if (buffer === void 0 && mime2 in exports.buffer) {
          buffer = Boolean(exports.buffer[mime2]);
        }
        let parser = this._parser;
        if (void 0 === buffer && parser) {
          console.warn("A custom superagent parser has been set, but buffering strategy for the parser hasn't been configured. Call `req.buffer(true or false)` or set `superagent.buffer[mime] = true or false`");
          buffer = true;
        }
        if (!parser) {
          if (responseType) {
            parser = exports.parse.image;
            buffer = true;
          } else if (multipart) {
            const form = formidable();
            parser = form.parse.bind(form);
            buffer = true;
          } else if (isBinary(mime2)) {
            parser = exports.parse.image;
            buffer = true;
          } else if (exports.parse[mime2]) {
            parser = exports.parse[mime2];
          } else if (type === "text") {
            parser = exports.parse.text;
            buffer = buffer !== false;
          } else if (isJSON(mime2)) {
            parser = exports.parse["application/json"];
            buffer = buffer !== false;
          } else if (buffer) {
            parser = exports.parse.text;
          } else if (void 0 === buffer) {
            parser = exports.parse.image;
            buffer = true;
          }
        }
        if (void 0 === buffer && isText(mime2) || isJSON(mime2)) {
          buffer = true;
        }
        this._resBuffered = buffer;
        let parserHandlesEnd = false;
        if (buffer) {
          let responseBytesLeft = this._maxResponseSize || 2e8;
          res.on("data", (buf) => {
            responseBytesLeft -= buf.byteLength || buf.length > 0 ? buf.length : 0;
            if (responseBytesLeft < 0) {
              const error = new Error("Maximum response size reached");
              error.code = "ETOOLARGE";
              parserHandlesEnd = false;
              res.destroy(error);
              this.callback(error, null);
            }
          });
        }
        if (parser) {
          try {
            parserHandlesEnd = buffer;
            parser(res, (error, object, files) => {
              if (this.timedout) {
                return;
              }
              if (error && !this._aborted) {
                return this.callback(error);
              }
              if (parserHandlesEnd) {
                this.emit("end");
                this.callback(null, this._emitResponse(object, files));
              }
            });
          } catch (err) {
            this.callback(err);
            return;
          }
        }
        this.res = res;
        if (!buffer) {
          debug("unbuffered %s %s", this.method, this.url);
          this.callback(null, this._emitResponse());
          if (multipart)
            return;
          res.once("end", () => {
            debug("end %s %s", this.method, this.url);
            this.emit("end");
          });
          return;
        }
        res.once("error", (error) => {
          parserHandlesEnd = false;
          this.callback(error, null);
        });
        if (!parserHandlesEnd)
          res.once("end", () => {
            debug("end %s %s", this.method, this.url);
            this.emit("end");
            this.callback(null, this._emitResponse());
          });
      });
      this.emit("request", this);
      const getProgressMonitor = () => {
        const lengthComputable = true;
        const total = req.getHeader("Content-Length");
        let loaded = 0;
        const progress = new Stream.Transform();
        progress._transform = (chunk, encoding, callback) => {
          loaded += chunk.length;
          this.emit("progress", {
            direction: "upload",
            lengthComputable,
            loaded,
            total
          });
          callback(null, chunk);
        };
        return progress;
      };
      const bufferToChunks = (buffer) => {
        const chunkSize = 16 * 1024;
        const chunking = new Stream.Readable();
        const totalLength = buffer.length;
        const remainder = totalLength % chunkSize;
        const cutoff = totalLength - remainder;
        for (let i = 0; i < cutoff; i += chunkSize) {
          const chunk = buffer.slice(i, i + chunkSize);
          chunking.push(chunk);
        }
        if (remainder > 0) {
          const remainderBuffer = buffer.slice(-remainder);
          chunking.push(remainderBuffer);
        }
        chunking.push(null);
        return chunking;
      };
      const formData = this._formData;
      if (formData) {
        const headers = formData.getHeaders();
        for (const i in headers) {
          if (hasOwn(headers, i)) {
            debug('setting FormData header: "%s: %s"', i, headers[i]);
            req.setHeader(i, headers[i]);
          }
        }
        formData.getLength((error, length) => {
          if (error)
            debug("formData.getLength had error", error, length);
          debug("got FormData Content-Length: %s", length);
          if (typeof length === "number") {
            req.setHeader("Content-Length", length);
          }
          formData.pipe(getProgressMonitor()).pipe(req);
        });
      } else if (Buffer.isBuffer(data)) {
        bufferToChunks(data).pipe(getProgressMonitor()).pipe(req);
      } else {
        req.end(data);
      }
    };
    Request.prototype._shouldUnzip = (res) => {
      if (res.statusCode === 204 || res.statusCode === 304) {
        return false;
      }
      if (res.headers["content-length"] === "0") {
        return false;
      }
      return /^\s*(?:deflate|gzip)\s*$/.test(res.headers["content-encoding"]);
    };
    Request.prototype.connect = function(connectOverride) {
      if (typeof connectOverride === "string") {
        this._connectOverride = {
          "*": connectOverride
        };
      } else if (typeof connectOverride === "object") {
        this._connectOverride = connectOverride;
      } else {
        this._connectOverride = void 0;
      }
      return this;
    };
    Request.prototype.trustLocalhost = function(toggle) {
      this._trustLocalhost = toggle === void 0 ? true : toggle;
      return this;
    };
    if (!methods.includes("del")) {
      methods = [...methods];
      methods.push("del");
    }
    var _iterator = _createForOfIteratorHelper(methods);
    var _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let method = _step.value;
        const name = method;
        method = method === "del" ? "delete" : method;
        method = method.toUpperCase();
        request2[name] = (url, data, fn) => {
          const request_ = request2(method, url);
          if (typeof data === "function") {
            fn = data;
            data = null;
          }
          if (data) {
            if (method === "GET" || method === "HEAD") {
              request_.query(data);
            } else {
              request_.send(data);
            }
          }
          if (fn)
            request_.end(fn);
          return request_;
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    function isText(mime2) {
      const parts = mime2.split("/");
      let type = parts[0];
      if (type)
        type = type.toLowerCase().trim();
      let subtype = parts[1];
      if (subtype)
        subtype = subtype.toLowerCase().trim();
      return type === "text" || subtype === "x-www-form-urlencoded";
    }
    function isBinary(mime2) {
      let _mime$split = mime2.split("/"), _mime$split2 = _slicedToArray(_mime$split, 2), registry = _mime$split2[0], name = _mime$split2[1];
      if (registry)
        registry = registry.toLowerCase().trim();
      if (name)
        name = name.toLowerCase().trim();
      return ["audio", "font", "image", "video"].includes(registry) || ["gz", "gzip"].includes(name);
    }
    function isJSON(mime2) {
      return /[/+]json($|[^-\w])/i.test(mime2);
    }
    function isRedirect(code) {
      return [301, 302, 303, 305, 307, 308].includes(code);
    }
  }
});

// node_modules/supertest/lib/test.js
var require_test = __commonJS({
  "node_modules/supertest/lib/test.js"(exports, module2) {
    "use strict";
    var { inspect } = require("util");
    var { STATUS_CODES } = require("http");
    var { Server } = require("tls");
    var { deepStrictEqual } = require("assert");
    var { Request } = require_node2();
    var Test = class extends Request {
      /**
       * Initialize a new `Test` with the given `app`,
       * request `method` and `path`.
       *
       * @param {Server} app
       * @param {String} method
       * @param {String} path
       * @api public
       */
      constructor(app, method, path) {
        super(method.toUpperCase(), path);
        this.redirects(0);
        this.buffer();
        this.app = app;
        this._asserts = [];
        this.url = typeof app === "string" ? app + path : this.serverAddress(app, path);
      }
      /**
       * Returns a URL, extracted from a server.
       *
       * @param {Server} app
       * @param {String} path
       * @returns {String} URL address
       * @api private
       */
      serverAddress(app, path) {
        const addr = app.address();
        if (!addr)
          this._server = app.listen(0);
        const port = app.address().port;
        const protocol = app instanceof Server ? "https" : "http";
        return protocol + "://127.0.0.1:" + port + path;
      }
      /**
       * Expectations:
       *
       *   .expect(200)
       *   .expect(200, fn)
       *   .expect(200, body)
       *   .expect('Some body')
       *   .expect('Some body', fn)
       *   .expect(['json array body', { key: 'val' }])
       *   .expect('Content-Type', 'application/json')
       *   .expect('Content-Type', 'application/json', fn)
       *   .expect(fn)
       *   .expect([200, 404])
       *
       * @return {Test}
       * @api public
       */
      expect(a, b, c) {
        if (typeof a === "function") {
          this._asserts.push(wrapAssertFn(a));
          return this;
        }
        if (typeof b === "function")
          this.end(b);
        if (typeof c === "function")
          this.end(c);
        if (typeof a === "number") {
          this._asserts.push(wrapAssertFn(this._assertStatus.bind(this, a)));
          if (typeof b !== "function" && arguments.length > 1) {
            this._asserts.push(wrapAssertFn(this._assertBody.bind(this, b)));
          }
          return this;
        }
        if (Array.isArray(a) && a.length > 0 && a.every((val) => typeof val === "number")) {
          this._asserts.push(wrapAssertFn(this._assertStatusArray.bind(this, a)));
          return this;
        }
        if (typeof b === "string" || typeof b === "number" || b instanceof RegExp) {
          this._asserts.push(wrapAssertFn(this._assertHeader.bind(this, { name: "" + a, value: b })));
          return this;
        }
        this._asserts.push(wrapAssertFn(this._assertBody.bind(this, a)));
        return this;
      }
      /**
       * Defer invoking superagent's `.end()` until
       * the server is listening.
       *
       * @param {Function} fn
       * @api public
       */
      end(fn) {
        const server = this._server;
        super.end((err, res) => {
          const localAssert = () => {
            this.assert(err, res, fn);
          };
          if (server && server._handle)
            return server.close(localAssert);
          localAssert();
        });
        return this;
      }
      /**
       * Perform assertions and invoke `fn(err, res)`.
       *
       * @param {?Error} resError
       * @param {Response} res
       * @param {Function} fn
       * @api private
       */
      assert(resError, res, fn) {
        let errorObj;
        const sysErrors = {
          ECONNREFUSED: "Connection refused",
          ECONNRESET: "Connection reset by peer",
          EPIPE: "Broken pipe",
          ETIMEDOUT: "Operation timed out"
        };
        if (!res && resError) {
          if (resError instanceof Error && resError.syscall === "connect" && Object.getOwnPropertyNames(sysErrors).indexOf(resError.code) >= 0) {
            errorObj = new Error(resError.code + ": " + sysErrors[resError.code]);
          } else {
            errorObj = resError;
          }
        }
        for (let i = 0; i < this._asserts.length && !errorObj; i += 1) {
          errorObj = this._assertFunction(this._asserts[i], res);
        }
        if (!errorObj && resError instanceof Error && (!res || resError.status !== res.status)) {
          errorObj = resError;
        }
        fn.call(this, errorObj || null, res);
      }
      /**
       * Perform assertions on a response body and return an Error upon failure.
       *
       * @param {Mixed} body
       * @param {Response} res
       * @return {?Error}
       * @api private
       */
      // eslint-disable-next-line class-methods-use-this
      _assertBody(body, res) {
        const isRegexp = body instanceof RegExp;
        if (typeof body === "object" && !isRegexp) {
          try {
            deepStrictEqual(body, res.body);
          } catch (err) {
            const a = inspect(body);
            const b = inspect(res.body);
            return error("expected " + a + " response body, got " + b, body, res.body);
          }
        } else if (body !== res.text) {
          const a = inspect(body);
          const b = inspect(res.text);
          if (isRegexp) {
            if (!body.test(res.text)) {
              return error("expected body " + b + " to match " + body, body, res.body);
            }
          } else {
            return error("expected " + a + " response body, got " + b, body, res.body);
          }
        }
      }
      /**
       * Perform assertions on a response header and return an Error upon failure.
       *
       * @param {Object} header
       * @param {Response} res
       * @return {?Error}
       * @api private
       */
      // eslint-disable-next-line class-methods-use-this
      _assertHeader(header, res) {
        const field = header.name;
        const actual = res.header[field.toLowerCase()];
        const fieldExpected = header.value;
        if (typeof actual === "undefined")
          return new Error('expected "' + field + '" header field');
        if (Array.isArray(actual) && actual.toString() === fieldExpected || fieldExpected === actual) {
          return;
        }
        if (fieldExpected instanceof RegExp) {
          if (!fieldExpected.test(actual)) {
            return new Error('expected "' + field + '" matching ' + fieldExpected + ', got "' + actual + '"');
          }
        } else {
          return new Error('expected "' + field + '" of "' + fieldExpected + '", got "' + actual + '"');
        }
      }
      /**
       * Perform assertions on the response status and return an Error upon failure.
       *
       * @param {Number} status
       * @param {Response} res
       * @return {?Error}
       * @api private
       */
      // eslint-disable-next-line class-methods-use-this
      _assertStatus(status, res) {
        if (res.status !== status) {
          const a = STATUS_CODES[status];
          const b = STATUS_CODES[res.status];
          return new Error("expected " + status + ' "' + a + '", got ' + res.status + ' "' + b + '"');
        }
      }
      /**
       * Perform assertions on the response status and return an Error upon failure.
       *
       * @param {Array<Number>} statusArray
       * @param {Response} res
       * @return {?Error}
       * @api private
       */
      // eslint-disable-next-line class-methods-use-this
      _assertStatusArray(statusArray, res) {
        if (!statusArray.includes(res.status)) {
          const b = STATUS_CODES[res.status];
          const expectedList = statusArray.join(", ");
          return new Error(
            'expected one of "' + expectedList + '", got ' + res.status + ' "' + b + '"'
          );
        }
      }
      /**
       * Performs an assertion by calling a function and return an Error upon failure.
       *
       * @param {Function} fn
       * @param {Response} res
       * @return {?Error}
       * @api private
       */
      // eslint-disable-next-line class-methods-use-this
      _assertFunction(fn, res) {
        let err;
        try {
          err = fn(res);
        } catch (e) {
          err = e;
        }
        if (err instanceof Error)
          return err;
      }
    };
    function wrapAssertFn(assertFn) {
      const savedStack = new Error().stack.split("\n").slice(3);
      return function(res) {
        let badStack;
        let err;
        try {
          err = assertFn(res);
        } catch (e) {
          err = e;
        }
        if (err instanceof Error && err.stack) {
          badStack = err.stack.replace(err.message, "").split("\n").slice(1);
          err.stack = [err.toString()].concat(savedStack).concat("----").concat(badStack).join("\n");
        }
        return err;
      };
    }
    function error(msg, expected, actual) {
      const err = new Error(msg);
      err.expected = expected;
      err.actual = actual;
      err.showDiff = true;
      return err;
    }
    module2.exports = Test;
  }
});

// node_modules/supertest/lib/agent.js
var require_agent2 = __commonJS({
  "node_modules/supertest/lib/agent.js"(exports, module2) {
    "use strict";
    var { agent: Agent } = require_node2();
    var methods = require_methods();
    var http = require("http");
    var http2;
    try {
      http2 = require("http2");
    } catch (_) {
    }
    var Test = require_test();
    function TestAgent(app, options = {}) {
      if (!(this instanceof TestAgent))
        return new TestAgent(app, options);
      Agent.call(this, options);
      this._options = options;
      if (typeof app === "function") {
        if (options.http2) {
          if (!http2) {
            throw new Error(
              "supertest: this version of Node.js does not support http2"
            );
          }
          app = http2.createServer(app);
        } else {
          app = http.createServer(app);
        }
      }
      this.app = app;
    }
    Object.setPrototypeOf(TestAgent.prototype, Agent.prototype);
    TestAgent.prototype.host = function(host) {
      this._host = host;
      return this;
    };
    methods.forEach(function(method) {
      TestAgent.prototype[method] = function(url, fn) {
        const req = new Test(this.app, method.toUpperCase(), url);
        if (this._options.http2) {
          req.http2();
        }
        if (this._host) {
          req.set("host", this._host);
        }
        req.on("response", this._saveCookies.bind(this));
        req.on("redirect", this._saveCookies.bind(this));
        req.on("redirect", this._attachCookies.bind(this, req));
        this._setDefaults(req);
        this._attachCookies(req);
        return req;
      };
    });
    TestAgent.prototype.del = TestAgent.prototype.delete;
    module2.exports = TestAgent;
  }
});

// node_modules/supertest/index.js
var require_supertest = __commonJS({
  "node_modules/supertest/index.js"(exports, module2) {
    "use strict";
    var methods = require_methods();
    var http = require("http");
    var http2;
    try {
      http2 = require("http2");
    } catch (_) {
    }
    var Test = require_test();
    var agent = require_agent2();
    module2.exports = function(app, options = {}) {
      const obj = {};
      if (typeof app === "function") {
        if (options.http2) {
          if (!http2) {
            throw new Error(
              "supertest: this version of Node.js does not support http2"
            );
          }
          app = http2.createServer(app);
        } else {
          app = http.createServer(app);
        }
      }
      methods.forEach(function(method) {
        obj[method] = function(url) {
          var test2 = new Test(app, method, url);
          if (options.http2) {
            test2.http2();
          }
          return test2;
        };
      });
      obj.del = obj.delete;
      return obj;
    };
    module2.exports.Test = Test;
    module2.exports.agent = agent;
  }
});

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
      var z28 = this.min;
      if (z28.child) {
        var nodes = consumeLinkedList(z28.child), node, i, l;
        for (i = 0, l = nodes.length; i < l; i++) {
          node = nodes[i];
          mergeWithRoot(this, node);
          delete node.parent;
        }
      }
      removeFromRoot(this, z28);
      if (z28 === z28.right) {
        this.min = null;
        this.root = null;
      } else {
        this.min = z28.right;
        consolidate(this);
      }
      this.size--;
      return z28.item;
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
var require_iterator2 = __commonJS({
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
var require_lru_cache2 = __commonJS({
  "node_modules/mnemonist/lru-cache.js"(exports, module2) {
    "use strict";
    var Iterator = require_iterator2();
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
    var LRUCache = require_lru_cache2();
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
    var LRUCache = require_lru_cache2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
    var Iterator = require_iterator2();
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
      LRUCache: require_lru_cache2(),
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
    function parseCookies(fastify2, request2, reply) {
      if (reply[kReplySetCookies])
        return;
      const cookieHeader = request2.raw.headers.cookie;
      request2.cookies = cookieHeader ? fastify2.parseCookie(cookieHeader) : {};
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
    function isConnectionSecure(request2) {
      return request2.raw.socket?.encrypted === true || request2.headers["x-forwarded-proto"] === "https";
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

// src/http/controllers/users/send-forgot-password/send-forgot-password-test.spec.ts
var import_vitest = require("vitest");
var import_supertest = __toESM(require_supertest());

// src/app.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require_cors());
var import_config25 = require("dotenv/config");
var import_multipart = __toESM(require("@fastify/multipart"));

// src/providers/MailProvider/implementations/provider-sendgrid.ts
var import_mail = __toESM(require("@sendgrid/mail"));

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

// src/providers/MailProvider/implementations/provider-sendgrid.ts
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
        from: "form@turistarv.com.br",
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
      idUser: user.id,
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

// src/repositories/prisma/prisma-users-repository.ts
var import_client2 = require("@prisma/client");

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async listUserCamper() {
    const users = await prisma.user.findMany({
      where: {
        role: import_client2.Role.AFFILIATE
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        passport: true,
        touristType: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        camping: true
      }
    });
    return users;
  }
  async updateExpireRefundCredit({
    idUser,
    date
  }) {
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        expireRefundCredit: date
      }
    });
  }
  async updateRefundCredit(idUser, value) {
    const user = await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        refundCredit: value
      }
    });
    const refundCreditNumber = Number(user.refundCredit);
    return refundCreditNumber;
  }
  async updateFirstPayment(idUser) {
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        firstPayment: true
      }
    });
  }
  async findByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async removeFavoriteCamping(idUser, idCamping) {
    const user = await prisma.user.findUnique({
      where: {
        id: idUser
      },
      select: {
        campingsFavorite: true
      }
    });
    const campingsFavorite = user?.campingsFavorite ? user?.campingsFavorite.split(",") : [];
    const newCampingsFavorite = campingsFavorite.filter((camping) => camping !== idCamping).join(",");
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        campingsFavorite: newCampingsFavorite
      }
    });
  }
  async addFavoriteCamping(idUser, idCamping) {
    const user = await prisma.user.findUnique({
      where: {
        id: idUser
      },
      select: {
        campingsFavorite: true
      }
    });
    const campingsFavorite = user?.campingsFavorite ? user?.campingsFavorite.split(",") : [];
    campingsFavorite.push(idCamping);
    const newCampingsFavorite = campingsFavorite.join(",");
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        campingsFavorite: newCampingsFavorite
      }
    });
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
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        bookings: true,
        images: true
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
        idCustomerAsaas: true,
        name: true,
        firstPayment: true,
        cpf: true,
        passport: true,
        campingsFavorite: true,
        touristType: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
  async updateIdCostumerPayment(idUser, idCustomerPayment) {
    const user = await prisma.user.update({
      where: {
        id: idUser
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
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async findByPassport(passport) {
    const user = await prisma.user.findUnique({
      where: { passport },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
          passport: true,
          email: true,
          emailActive: true,
          dateBirth: true,
          phone: true,
          role: true,
          refundCredit: true,
          expireRefundCredit: true,
          createdAt: true,
          address: true,
          camping: true,
          bookings: true,
          images: true
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
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
        firstPayment: true,
        campingsFavorite: true,
        passport: true,
        touristType: true,
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
        campingsFavorite: true,
        passport: true,
        password: true,
        email: true,
        emailActive: true,
        touristType: true,
        dateBirth: true,
        phone: true,
        address: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        images: true
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
        campingsFavorite: true,
        firstPayment: true,
        passport: true,
        email: true,
        touristType: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
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
  async findTokenAuth(idUser, auth) {
    const token = await prisma.token.findFirst({
      where: { idUser, token: auth }
    });
    return token;
  }
  async deleteByUser(idUser) {
    await prisma.token.deleteMany({
      where: {
        idUser
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
        idUser: true,
        id: true,
        user: true
      }
    });
    return tokenData;
  }
  async findByUserId(idUser) {
    const token = await prisma.token.findFirst({ where: { idUser } });
    return token;
  }
  async findByUserAndToken(idUser, token) {
    const tokenData = await prisma.token.findFirst({
      where: { idUser, token },
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
async function RegisterUser(request2, reply) {
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
    } = userSchema.parse(request2.body);
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
        idUser: findUserExists.id,
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
        idUser: userToken.user.id,
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
async function LoginUser(request2, reply) {
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
    } = userSchema.parse(request2.body);
    const loginUserUseCase = await makeLoginUser();
    const userInfo = await loginUserUseCase.execute({
      email,
      password,
      token
    });
    const serializedTokens = JSON.stringify({
      accessToken: userInfo.accessToken,
      refreshToken: userInfo.refreshToken
    });
    return reply.status(200).setCookie("serializedTokens", serializedTokens, {
      path: "/",
      httpOnly: true,
      secure: true,
      // sameSite: true,
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    }).send({
      user: userInfo.user
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
async function VerifyEmail(request2, reply) {
  try {
    const userSchema = import_zod4.z.object({
      email: import_zod4.z.string().email(),
      token: import_zod4.z.string()
    });
    const {
      email,
      token
    } = userSchema.parse(request2.query);
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
async function verifyTokenJWT(request2, response) {
  const cookie2 = request2.cookies;
  if (!cookie2) {
    throw new AppError("Token n\xE3o recebido", 400);
  }
  const { token } = cookie2;
  console.log(token);
  try {
    const { sub: idUser, role } = (0, import_jsonwebtoken2.verify)(token, env.JWT_SECRET_ACCESS_TOKEN);
    const storageInMemoryProvider = new RedisInMemoryProvider();
    const inBlackList = await storageInMemoryProvider.isTokenInBlackList(token);
    if (inBlackList) {
      throw new AppError("Token inv\xE1lido", 401);
    }
    request2.user = {
      id: idUser,
      role,
      token
    };
  } catch (error) {
    return response.status(404).send({ message: "Cookie not found" });
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
      idUser: findUserByEmail.id,
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
async function SendForgotPassword(request2, reply) {
  try {
    const userSchema = import_zod5.z.object({
      email: import_zod5.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request2.body);
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
    const user = await this.usersRepository.findById(findToken.idUser);
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
async function ResetPassword(request2, reply) {
  try {
    const userSchemaBody = import_zod6.z.object({
      password: import_zod6.z.string().min(6)
    });
    const userSchemaQuery = import_zod6.z.object({
      token: import_zod6.z.string()
    });
    const {
      password
    } = userSchemaBody.parse(request2.body);
    const {
      token
    } = userSchemaQuery.parse(request2.query);
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
async function FindUser(request2, reply) {
  try {
    const userSchema = import_zod7.z.object({
      id: import_zod7.z.string().uuid()
    });
    const {
      id
    } = userSchema.parse(request2.params);
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
async function DeleteUser(request2, reply) {
  try {
    const userParams = import_zod8.z.object({
      id: import_zod8.z.string().uuid()
    });
    const userBodySchema = import_zod8.z.object({
      password: import_zod8.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const {
      id
    } = userParams.parse(request2.params);
    const { password } = userBodySchema.parse(request2.body);
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
async function UpdateUser(request2, reply) {
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
    } = userSchemaParams.parse(request2.params);
    const {
      name,
      phone,
      dateBirth,
      cpf,
      email
    } = userSchemaBody.parse(request2.body);
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
    idUser
  }) {
    const userToken = await this.usersTokensRepository.findByUserAndToken(idUser, refreshToken);
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
async function LogoutUser(request2, reply) {
  try {
    const userSchema = import_zod10.z.object({
      refreshToken: import_zod10.z.string()
    });
    const {
      refreshToken
    } = userSchema.parse(request2.body);
    const logoutUserUseCase = await makeLogoutUser();
    await logoutUserUseCase.execute({
      refreshToken,
      idUser: request2.user.id,
      token: request2.user.token
    });
    return reply.status(200).send({ message: "Logout feito com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/http/middlewares/verify-user-role.ts
function verifyUserRole(verifyToleRoleOne, verifyToleRoleTwo, verifyToleRoleThree, verifyToleRoleFour) {
  return async (request2, reply) => {
    const { role } = request2.user;
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
async function EmailExists(request2, reply) {
  try {
    const userSchema = import_zod11.z.object({
      email: import_zod11.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request2.query);
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
      subject: userToken.idUser,
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
async function RefreshToken(request2, reply) {
  try {
    const refreshTokenBodySchema = import_zod12.z.object({
      refreshToken: import_zod12.z.string()
    });
    const {
      refreshToken
    } = refreshTokenBodySchema.parse(request2.body);
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
    idUser,
    newPassword,
    oldPassword
  }) {
    const findUserExist = await this.usersRepository.findById(idUser);
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
async function CreateNewPasswordByOldPassword2(request2, reply) {
  try {
    const userSchemaBody = import_zod13.z.object({
      oldPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres"),
      newPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const userSchemaParams = import_zod13.z.object({
      id: import_zod13.z.string().uuid("Id inv\xE1lido")
    });
    const { id } = userSchemaParams.parse(request2.params);
    const { oldPassword, newPassword } = userSchemaBody.parse(
      request2.body
    );
    const createNewPasswordUseCase = await makeCreateNewPasswordByOldPassword();
    await createNewPasswordUseCase.execute({
      idUser: id,
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
      idUser: findUserExist.id,
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
async function SendVerificationEmail(request2, reply) {
  try {
    const userSchema = import_zod14.z.object({
      email: import_zod14.z.string().email()
    });
    const { email } = userSchema.parse(request2.params);
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
async function DeleteAllTokens(request2, reply) {
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
var import_zod28 = require("zod");
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
    idUser
  }) {
    if (idUser) {
      const findUserExist = await this.usersRepository.findById(idUser);
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
      idUser
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
async function CreateAddress(request2, reply) {
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
    } = userSchema.parse(request2.body);
    const createAddressUseCase = await makeCreateAddress();
    const address = await createAddressUseCase.execute({
      idUser: user?.id,
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
    idUser,
    city,
    state,
    complement,
    reference
  }) {
    if (idUser) {
      const findUserExist = await this.usersRepository.findById(idUser);
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
async function UpdateAddress(request2, reply) {
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
    } = userSchema.parse(request2.body);
    const updateAddressUseCase = await makeUpdateAddress();
    const address = await updateAddressUseCase.execute({
      id,
      idUser: user?.id,
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
async function VerifyTokenIsValid(request2, reply) {
  try {
    const tokenSchema = import_zod17.z.object({
      token: import_zod17.z.coerce.string()
    });
    const {
      token
    } = tokenSchema.parse(request2.query);
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
        idUser: id
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
    await this.storageProvider.deleteFile(findImageExists.hashName, "campings");
    this.fileProvider.deleteFileTmp(findImageExists.hashName, "campings");
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
async function DeleteImage(request2, reply) {
  try {
    const imageSchemaParms = import_zod18.z.object({
      id: import_zod18.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request2.params);
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
    idUser,
    imageInfo
  }) {
    const findUserExists = await this.userRepository.findById(idUser);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const pathFolder = env.NODE_ENV === "production" ? `${env.FOLDER_TMP_PRODUCTION}` : `${env.FOLDER_TMP_DEVELOPMENT}`;
    let arrayImagesUploaded = [];
    for (let image of imageInfo) {
      let imageUrl = await this.storageProvider.uploadFile(image.hashName, pathFolder, "uploads");
      const createImage = await this.imageRepository.upload({
        idUser,
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
async function UploadImage(request2, reply) {
  try {
    const ImageSchema = import_zod19.z.object({
      filename: import_zod19.z.string(),
      _buf: import_zod19.z.instanceof(Buffer)
    });
    const multipartformUploadSchema = import_zod19.z.object({
      idUser: import_zod19.z.object({
        value: import_zod19.z.string().uuid()
      }),
      // receber array de imagens ou objeto de imagem e transformar em array
      images: import_zod19.z.union([ImageSchema, ImageSchema.array()]).transform((value) => {
        return Array.isArray(value) ? value : [value];
      })
    });
    const {
      idUser,
      images
    } = multipartformUploadSchema.parse(request2.body);
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
      idUser: idUser.value,
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
    idUser
  }) {
    const findUserExists = await this.userRepository.findById(idUser);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const images = await this.imageRepository.listByUser(idUser);
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
async function ListImageByUser(request2, reply) {
  try {
    const imageSchemaParms = import_zod20.z.object({
      id: import_zod20.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request2.params);
    const listImageByUserUseCase = await makeListImageByUser();
    const images = await listImageByUserUseCase.execute({
      idUser: id
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
async function ListImage(request2, reply) {
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
  fastifyApp2.addHook("onRequest", verifyTokenJWT);
  fastifyApp2.addHook("onRequest", verifyUserRole("ADMIN", "SUPER"));
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
async function CreateCategory(request2, reply) {
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
    } = categorySchema.parse(request2.body);
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
async function UpdateCategory(request2, reply) {
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
    } = categorySchema.parse(request2.body);
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
async function FindCategory(request2, reply) {
  try {
    const categorySchema = import_zod23.z.object({
      id: import_zod23.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request2.params);
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
async function ListCategory(request2, reply) {
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
async function DeleteCategory(request2, reply) {
  try {
    const categorySchema = import_zod24.z.object({
      id: import_zod24.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request2.params);
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
async function ListCategoryByType(request2, reply) {
  try {
    const categorySchema = import_zod25.z.object({
      type: import_zod25.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      type
    } = categorySchema.parse(request2.params);
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
      idUser: user.id,
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
async function CreateUserByAdmin(request2, reply) {
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
      request2.body
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
    idUser,
    idCamping,
    password,
    email,
    name,
    phone
  }) {
    const findUserExist = await this.usersRepository.findById(idUser);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    let criptingPassword = "";
    if (password) {
      criptingPassword = await (0, import_bcrypt7.hash)(password, 8);
    }
    const user = await this.usersRepository.update({
      id: idUser,
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
async function UpdateUserByAdmin(request2, reply) {
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
    const { id, email, name, password, camping, phone } = userSchema.parse(request2.body);
    const updateUseCase = await makeUpdateUserByAdmin();
    const updateUser = await updateUseCase.execute({
      idUser: id,
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
async function ListUsers(request2, reply) {
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
var fastifyApp = (0, import_fastify.default)();
fastifyApp.register(import_cors.default, {
  origin: "*",
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
fastifyApp.register(usersAdminRoutes, {
  prefix: "api/admins"
});
fastifyApp.setErrorHandler((error, request2, reply) => {
  if (env.NODE_ENV !== "production") {
  } else {
    if (error instanceof AppError) {
    } else {
    }
  }
  if (error instanceof import_zod28.ZodError) {
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

// src/http/controllers/users/send-forgot-password/send-forgot-password-test.spec.ts
(0, import_vitest.describe)("Send email forgot password (e2e)", () => {
  (0, import_vitest.beforeAll)(async () => {
    await fastifyApp.ready();
  });
  (0, import_vitest.afterAll)(async () => {
    await fastifyApp.close();
  });
  (0, import_vitest.test)("should be able to send email with link for reset password", async () => {
    const responseRegisterUser = await (0, import_supertest.default)(fastifyApp.server).post("/api/users").send({
      dateBirth: "2023-10-03",
      email: "email1@test.com",
      name: "Kaio Moreira",
      phone: "77-77777-7777",
      password: "123456",
      rvLength: 10,
      rvPlate: "ABC-1234",
      touristType: "ADMIRADOR",
      tugPlate: "ABC-1234",
      vehicleType: "CAMPER"
    });
    const { email } = responseRegisterUser.body;
    const response = await (0, import_supertest.default)(fastifyApp.server).post(`/api/users/forgot-password`).send({
      email
    });
    (0, import_vitest.expect)(response.statusCode).toEqual(200);
  });
  (0, import_vitest.test)("should not be able to reset password with email wrong", async () => {
    const response = await (0, import_supertest.default)(fastifyApp.server).post(`/api/users/forgot-password`).send({
      email: "fake@email.com"
    });
    (0, import_vitest.expect)(response.statusCode).toEqual(404);
  });
});
/*! Bundled license information:

methods/index.js:
  (*!
   * methods
   * Copyright(c) 2013-2014 TJ Holowaychuk
   * Copyright(c) 2015-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-db/index.js:
  (*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-types/index.js:
  (*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

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
