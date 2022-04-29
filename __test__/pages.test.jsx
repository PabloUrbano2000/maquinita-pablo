import { render } from '@testing-library/react';
import SlotMachine from '../pages/slot-machine/index';
import ResultGame from '../pages/result-game/index';
import KnowMore from '../pages/know-more/index';
import Home from '../pages/index';
import { DATA } from '../context/ProviderData';

it('render page Home', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('render page SlotMachine', () => {
  const { container } = render(<SlotMachine />);
  expect(container).toMatchSnapshot();
});

it('render page ResultGame', () => {
  const { container } = render(<ResultGame />);
  expect(container).toMatchSnapshot();
});

it('render page KnowMore', () => {
  const { container } = render(<KnowMore />);
  expect(container).toMatchSnapshot();
});
