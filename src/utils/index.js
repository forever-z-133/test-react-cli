/**
 * 判断数据类型
 */
export const getEnv = (href) => {
  const isTest = /localhost|wxxxtsat|192\.168/i.test(href);
  const isUat = /pstest\./i.test(href);
  const isPre = /pstest\./i.test(href);
  const isPrd = /dfth\.com/i.test(href);
  return { test: isTest, uat: isUat, pre: isPre, prd: isPrd };
}

/**
 * 判断数据类型
 */
export const typeOf = (obj) => {
  let typeStr = Object.prototype.toString.call(obj).split(' ')[1];
  return typeStr.substr(0, typeStr.length - 1).toLowerCase();
}

export const isType = (obj, type) => {
  return typeOf(obj) === type;
}

/**
 * 判断对象是否为空
 */
export const isEmpty = (obj) => {
  if (obj === null || obj === undefined) return true;
  if (obj === '') return true;
  if (typeof obj === 'number' && isNaN(obj)) return true;
  for (let i in obj)
    if (obj.hasOwnProperty(i)) return false;
  return true;
}

/**
 * 自动补零
 */
export const addZero = (num, len = 2) => {
  let numLen = (num + '').length;
  while (numLen++ < len) {
    num = '0' + num;
  }
  return num + '';
}

/**
 * 随机数
 */
export const random = (n1, n2 = 0) => {
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);
  return min + Math.random() * (max - min);
}

/**
 * 返回非空对象
 * returnObject({});  // null
 */
export const returnObject = (obj) => {
  if (isEmpty(obj)) return null;
  return obj;
}

/**
 * 返回可用数组
 */
export const returnArray = (obj) => {
  if (typeof obj === 'string' && obj) return obj.split(',');
  if (typeOf(obj) === 'array') return obj;
  return [];
}

/**
 * 返回可用数字
 */
export const returnNumber = (...args) => {
  for (let i = 0; i < args.length; i++) {
    const item = args[i];
    const _item = parseFloat(item);
    if (!isNaN(_item)) return _item;
  }
  return NaN;
}

/**
 * 拓展 toFixed 方法
 * 1. 小数亦可有结尾的取整策略，toFixed(1.69, 1, 'round');  // 1.7
 * 2. 修复 166.665.toFixed(2) 不等于 166.67 的问题
 * 3. 返回的不再是字符串，而是数字类型
 */
export const toFixed = (num, decimal, mathType) => {
  if (isNaN(parseFloat(decimal))) throw new Error('第二位入参有误');
  if (!Math[mathType]) throw new Error('第三位入参有误');

  decimal = decimal != null ? decimal : 2;
  mathType = mathType || 'round'; // ceil 向上取整， floor 向下取整，round 四舍五入

  const pow = Math.pow(10, decimal);
  const mathFunc = Math[mathType];
  return mathFunc(num * pow) / pow;
}

/**
 * 数字计算
 * 解决，1. 兼容字符串的传入 2. 小数计算的精度问题
 */
export const count = (type, n1, n2) => {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  if (isNaN(n1) || isNaN(n2)) return NaN;
  const dot1 = (n1.toString().split('.')[1] || '').length;
  const dot2 = (n2.toString().split('.')[1] || '').length;
  const maxDotLength = Math.max(dot1, dot2, 0);
  const pow = Math.pow(10, maxDotLength);
  const num1 = Math.round(n1 * pow);
  const num2 = Math.round(n2 * pow);
  switch (type) {
    case '/':
      return num1 / num2;
    case '*':
      return (num1 * num2) / (pow * pow);
    case '-':
      return (num1 - num2) / pow;
    case '+':
    default:
      return (num1 + num2) / pow;
  }
}
// 拓展支持多个数字的运算 countMore('+', 1, 2, 3)
export const countMore = (type, options, ...nums) => {
  const _startConfig = { '+': 0, '-': 0, '*': 1, '/': 1 };
  if (!(type in _startConfig)) throw new Error('首位入参有误');
  // 可能往后会加入些配置，但如果不是对象则不是配置
  if (typeOf(options) !== 'object') nums.splice(0, 0, options);
  // 开始运算
  let result = _startConfig[type];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && (type === '-' || type === '/')) {
      result = nums[0];
      continue;
    }
    result = count(result, nums[i]);
  }
  return result;
}
// 拓展支持带符号字符串式运算 countPlus('0.1+0.2')
export const countPlus = (str) => {
  let result = str.replace(/\s/g, '');
  // 先递归处理括号内的运算
  result = result.replace(/\(([^)]*)\)/g, (match, _str) => countPlus(_str));
  // 先乘除，后加减，用 exec 正则出来一个个计算并替换
  const _numReg = '(-?[0-9]+[\\.\\e]?[0-9]*)';
  ['/*', '+-'].forEach((item) => {
    item = item.replace(/(?<=\B)/g, '\\\\').slice(0, -2);
    const _reg = new RegExp(_numReg + '([' + item + '])' + _numReg);
    let match = _reg.exec(result);
    while (match) {
      result = result.replace(match[0], count(match[2], match[1], match[3]));
      match = _reg.exec(result);
    }
  });
  return parseFloat(result);
}

/**
 * json 的深入遍历
 */
export const forEachDeep = (json, childKey, func, indexs = [], parents = []) => {
  json.forEach((item, index) => {
    indexs.push(index);
    parents.push(item);
    func(item, indexs, parents);
    if (item[childKey] && item[childKey].length) {
      forEachDeep(item[childKey], childKey, func, indexs, parents);
    }
  });
}

/**
 * 对象/数组的深入遍历
 */
export const forInDeep = (obj, func, map = new WeakMap()) => {
  if (typeOf(obj) === 'object' || typeOf(obj) === 'array') {
    let clone = Array.isArray(obj) ? [] : {};
    if (map.get(obj)) return map.get(obj);
    map.set(obj, clone);
    for (let key in obj) {
      let value = obj[key];
      const temp = func && func(key, value, obj);
      value = func ? (temp === void 0 ? value : temp) : value;
      clone[key] = forInDeep(value, func, map);
    }
    return clone;
  } else {
    return obj;
  }
}

/**
 * 对象深拷贝
 */
export const cloneDeep = (obj) => {
  return forInDeep(obj);
}

/**
 * 对象转字符串
 * {a:1,b:2} 转为 a=1&b=2
 */
export const objectToString = (obj, divide = '&', concat = '=') => {
  let result = [];
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    let value = obj[key];
    if (value === null || value === undefined) value = '';
    result.push(encodeURIComponent(key) + concat + encodeURIComponent(value));
  }
  result = result.join(divide);
  return result;
}

/**
 * 字符串转对象
 * a=1&b=2 转为 {a:1,b:2}
 */
export const stringToObject = (str, divide = '&', concat = '=') => {
  if (!str || typeof str !== 'string') return {};
  const arr = str.split(divide);
  return arr.reduce((re, item) => {
    if (!item) return re;
    const temp = item.split(concat);
    const key = temp.shift().trim();
    let value = temp.join(concat).trim();
    if (!key) return re;
    if (['null', 'undefined'].indexOf(value) > -1) value = undefined;
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    re[key] = value;
    return re;
  }, {});
}

/**
 * 对象深拷贝
 */
export const getDataFromUrl = (name, url) => {
  const obj = stringToObject((url || window.location.href).split('?')[1], /[#?&]/);
  return name ? obj[name] : obj;
}

/**
 * 对象深拷贝
 * addDataToUrl('x.html?a=1', {b:2}) // x.html?a=1&b=2
 */
export const addDataToUrl = (url, data) => {
  if (!data) return url;
  const concat = /\?/.test(url) ? '&' : '?';
  if (typeof data === 'string') {
    return url + concat + data;
  } else if (typeOf(data) === 'object') {
    return url + concat + objectToString(data);
  } else {
    throw new Error('入参有误');
  }
}

/**
 * 去抖
 * 不断操作无效，只有停止操作 delta 秒后才触发
 */
export const debounce = (fn, delta, context) => {
  let timeoutID = null;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function () {
      fn.apply(context, args);
    }, delta);
    return timeoutID;
  };
}

/**
 * 节流
 * 每隔 delta 秒时触发
 */
export const throttle = (fn, delta, context) => {
  let safe = true;
  return function (...args) {
    if (!safe) return;
    fn.call(context, args);
    safe = false;
    setTimeout(() => {
      safe = true;
    }, delta);
  };
}

/**
 * 缓存同步运算结果
 */
export const useCache = (fn) => {
  const cache = {};
  return function (...args) {
    const key = args.length + JSON.stringify(args);
    if (key in cache) return cache[key];
    else return cache[key] = fn.apply(this, args);
  }
}

export default {
  getEnv,
  typeOf,
  isType,
  isEmpty,
  addZero,
  random,
  returnObject,
  returnArray,
  returnNumber,
  toFixed,
  count,
  countMore,
  countPlus,
  forEachDeep,
  forInDeep,
  cloneDeep,
  objectToString,
  stringToObject,
  addDataToUrl,
  getDataFromUrl,
  debounce,
  throttle,
  useCache
}