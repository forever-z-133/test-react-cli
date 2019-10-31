import { observable, action, decorate } from 'mobx';

class PageCache {
  cache = {};
  add(key, value) {
    this.cache[key] = value;
  }
  remove(key) {
    this.cache[key] = void 0;
  }
  get(key) {
    return this.cache[key];
  }
}
decorate(PageCache, {
  cache: observable,
  add: action,
  remove: action
});

export default new PageCache();