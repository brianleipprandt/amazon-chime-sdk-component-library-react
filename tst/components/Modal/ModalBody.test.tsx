import '@testing-library/jest-dom';
import React from 'react';

import ModalBody from '../../../src/components/Modal/ModalBody';
import lightTheme from '../../../src/theme/light'
import { renderWithTheme } from '../../test-helpers';

describe('Modal', () => {

  it('renders a modal body', () => {
    const component = <ModalBody><p>Some content</p></ModalBody>
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const el = getByTestId('modalBody');
    expect(el).toBeInTheDocument();
  });

  it('renders children in the modal body', () => {
    const component = <ModalBody><p>Some content</p></ModalBody>
    const { getByText } = renderWithTheme(lightTheme, component)
    const childEl = getByText('Some content');
    expect(childEl).toBeInTheDocument();
  });
});