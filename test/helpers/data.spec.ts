import { transformRequest, transformResponse } from '../../src/helpers/data';

describe('helpers:data', () => {
  describe('transformRequest', () => {
    test('should transform request data to string if data is a plainObject', () => {
      const a = { a: 1 };
      expect(transformRequest(a)).toBe('{"a":1}');
    });

    test('should do nothing if data is not a plainObject', () => {
      const a = new URLSearchParams('a=b');
      expect(transformRequest(a)).toBe(a);
    })
  });

  describe('transformResponse', () => {
    test('should transform resposne data to object if data is JSON string', () => {
      const a = '{"a":1}';
      expect(transformResponse(a)).toEqual({ a: 1 });
    });

    test('should do nothing if data is a string but not a JSON string', () => {
      const a = '{a: 1}';
      expect(transformResponse(a)).toBe(a);
    });

    test('should do nothing if data is not a string', () => {
      const a = { a: 1 };
      expect(transformResponse(a)).toBe(a);
    })
  });
});
