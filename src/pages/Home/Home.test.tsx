import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Home } from '.';

describe('Home component', () => {
  test('it should be render component', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Hello world')).toBeInTheDocument();
  });
});
