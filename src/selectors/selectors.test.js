import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: '1', status: 'Active'},
        {id: '2',status: 'Inactive'}
      ];

      const expected = [
        {value: 'Active', text: 'Active'},
        {value: 'Inactive', text: 'Inactive'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
