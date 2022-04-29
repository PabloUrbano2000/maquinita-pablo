import { render } from '@testing-library/react';
import InfoResultGame from '../components/InfoResultGame';

it('render component InfoResultGame', () => {
  const { container } = render(<InfoResultGame />);
  expect(container).toMatchSnapshot();
});
