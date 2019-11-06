import { transformEmployees, transformTemplates } from 'Pages/Selector/transform';
import 'SetupTests';

describe('transformEmployees function', () => {
  it('transforms the employee into the expected format', () => {
    const testCollection = [{ id: 1, firstName: 'Greased', lastName: 'Lightnin' }];
    expect(transformEmployees(testCollection)).toMatchObject([
      { id: 1, label: 'Lightnin, Greased' },
    ]);
  });
});

describe('transformTemplates function', () => {
  it('transforms the template into the expected format', () => {
    const testCollection = [
      { id: 1, templateName: 'palomino dashboard' },
      { id: 2, templateName: 'thirty-inch fins' },
    ];
    expect(transformTemplates(testCollection)).toMatchObject([
      { id: 1, label: 'palomino dashboard' },
      { id: 2, label: 'thirty-inch fins' },
    ]);
  });
});
