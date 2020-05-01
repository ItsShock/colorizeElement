const colorizeElement = require('..');
const { toHaveClass, toHaveAttribute, toHaveStyle } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveClass, toHaveAttribute, toHaveStyle });

describe('Funkcja colorizeElement', () => {
  it('powinien zwrócić element HTML', async () => {
    const result = colorizeElement(document.createElement('div'));

    expect(result instanceof HTMLElement).toBeTruthy();
  });

  it('powinien zwrócić nowy element z klasą new-class', async () => {
    const div = document.createElement('div');
    const result = colorizeElement(div);

    expect(result).toHaveClass('new-class');
  });

  it('powinien zwrócić element z poprawnie ustawionym atrybutem data-tag', async () => {
    const div = document.createElement('div');
    const result = colorizeElement(div);
    const p = document.createElement('p');
    const result2 = colorizeElement(p);

    expect(result).toHaveAttribute('data-tag', 'div');
    expect(result2).toHaveAttribute('data-tag', 'p');
  });

  it('powinien zwrócić element z poprawnymi stylami', async () => {
    const div = document.createElement('div');
    const result = colorizeElement(div);

    expect(result).toHaveStyle({
      fontSize: '12px',
      color: '#f1f1f1',
    });
  });
});
