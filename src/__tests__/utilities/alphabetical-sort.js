import { alphabeticalSort } from 'Utilities';
import 'SetupTests';

describe('alphabetical sort', () => {
  it('returns an alphabetised list', () => {
    const testCollection = [
      { id: 1, label: 'Bravo' },
      { id: 2, label: 'Charlie' },
      { id: 3, label: 'Alfa' },
      { id: 4, label: 'Oscar' },
    ];

    expect(alphabeticalSort(testCollection, x => x.label)).toMatchObject([
      { id: 3, label: 'Alfa' },
      { id: 1, label: 'Bravo' },
      { id: 2, label: 'Charlie' },
      { id: 4, label: 'Oscar' },
    ]);
  });
});
