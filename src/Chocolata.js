import config from './config';

class Chocolata {
  static setItem(name, value, daysToExpire = config.daysToExpire) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  static getStringItem(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';').reverse();
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  static getObjectItem(name) {
    return JSON.parse(this.getStringItem(name));
  }

  static getItem(name) {
    try {
      return this.getObjectItem(name);
    } catch (e) {
      return this.getStringItem(name);
    }
  }

  static removeItem(name) {
    this.setItem(name, '', -1);
  }
}

export default Chocolata;
