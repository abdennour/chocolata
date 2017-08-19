import 'jsdom-global/register';
import expect from 'expect';
import sinon from 'sinon';

import { setItem, getItem, removeItem } from '../src';
describe(`chocolata`, () => {
  describe('Manage cookies as String', () => {
    it('save cookie', () => {
      setItem('token', '1234');
      expect(document.cookie).toInclude('token');
      expect(document.cookie).toInclude('1234');
    });

    it('retrieves cookie', () => {
      setItem('otherToken', 'blahblah');
      const otherToken = getItem('otherToken');
      expect(otherToken).toEqual('blahblah');
    });

    it('removes cookie', () => {
      setItem('guestUsername', 'Ahmed Khalil Fraiby');
      expect(getItem('guestUsername')).toEqual('Ahmed Khalil Fraiby');
      // action
      removeItem('guestUsername');
      expect(getItem('guestUsername')).toEqual(null);
    });
  });

  describe('Manage cookies as complex data structure (Object,.. so on)', () => {
    it('save cookie', () => {
      setItem('user', { firstName: 'Abdennour', lastName: 'Toumi' });
      expect(document.cookie).toInclude('firstName');
      expect(document.cookie).toInclude('Abdennour');
      expect(document.cookie).toInclude('lastName');
      expect(document.cookie).toInclude('Toumi');
    });

    it('retrieves cookie', () => {
      const userInfoBeforeSetItem = {
        token: 'someToken-stars-with-something',
        fullName: 'Sami Kami',
        age: 54
      };
      setItem('userInfo', userInfoBeforeSetItem);
      const userInfoWithGetItem = getItem('userInfo');
      expect(userInfoWithGetItem).toEqual(userInfoBeforeSetItem);
    });

    it('removes cookie', () => {
      const tmpUserInfo = {
        token: 'someToken-stars-with-something',
        fullName: 'Sami Kami',
        age: 54
      };
      setItem('tmpUserInfo', tmpUserInfo);
      // action
      removeItem('tmpUserInfo');
      expect(getItem('tmpUserInfo')).toEqual(null);
    });
  });
});
