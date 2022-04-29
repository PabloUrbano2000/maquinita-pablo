import { render } from '@testing-library/react';
import Title from '../components/utils/Title';
import SubTitle from '../components/utils/SubTitle';
import TitleColor from '../components/utils/TitleColor';

it('render component utils/Title', () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});

it('render component utils/SubTitle', () => {
  const { container } = render(<SubTitle />);
  expect(container).toMatchSnapshot();
});

it('render component utils/TitleColor', () => {
  const { container } = render(<TitleColor />);
  expect(container).toMatchSnapshot();
});
