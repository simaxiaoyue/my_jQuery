;
(function () {
  //选择器
  function jQuery(selector) {
    return new Init(selector);
  }
  //构造函数,将获取的元素转换成实例对象的伪数组
  function Init(selector) {
    let dom = document.querySelectorAll(selector);
    //用数字作为属性名存储元素
    for (let i = 0; i < dom.length; i++) {
      this[i] = dom[i];
    }
    //设置长度
    this.length = dom.length;
  }
  //遍历函数
  Init.prototype.each = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(i, this[i]);
    }
  }
  //修改css样式
  Init.prototype.css = function (property, value) {
    this.each(function (i, e) {
      if (value === undefined) {
        return window.getComputedStyle(this[0])[property];
      } else {
        let pxArr = ['width', 'height', 'top', 'left'];
        if (pxArr.indexOf(property) !== -1) {
          if (value.toString().indexOf('px') !== -1) {
            e.style[property] = value;
          } else {
            e.style[property] = value + 'px';
          }
        } else {
          e.style[property] = value ;

        }
      }
    })
    return this;
  }
  //增加类名
  Init.prototype.addClass = function (className) {
    this.each(function (i, e) {
      e.classList.add(className);
    })
    return this;
  }
  //移除类名
  Init.prototype.removeClass = function (className) {
    this.each(function (i, e) {
      e.classList.remove(className);
    })
    return this;
  }
  //修改类名 
  Init.prototype.toggleClass = function (className) {
    this.each(function (i, e) {
      e.classList.toggle(className);
    })
    return this;
  }
  window.$ = window.jQuery = jQuery;
})()