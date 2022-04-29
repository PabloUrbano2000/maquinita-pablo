import { render } from '@testing-library/react';
import Slot from '../components/Slot';
import { DATA } from '../context/ProviderData';

it('render component Slot', () => {
  const { container } = render(
    <Slot
      viewGame={() => console.log('recibiendo datos de juego')}
      systemData={DATA}
    />
  );
  expect(container).toMatchSnapshot();
});
