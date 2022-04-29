import { render } from '@testing-library/react';
import ImageHome from '../components/home/ImageHome';
import InformationHome from '../components/home/InformationHome';
import InformationDataUser from '../components/home/InformationDataUser';
import { DATA } from '../context/ProviderData';

it('render component ImageHome', () => {
  const { container } = render(<ImageHome />);
  expect(container).toMatchSnapshot();
});

it('render component InformationHome', () => {
  const { container } = render(
    <InformationHome
      data={DATA}
      handleGame={() => console.log('actions game')}
      fillInData={true}
      setShowDialog={() => console.log('set value')}
      setErrorMessage={() => console.log('set value')}
    />
  );
  expect(container).toMatchSnapshot();
});

it('render component InformationDataUser', () => {
  const { container } = render(<InformationDataUser data={DATA} />);
  expect(container).toMatchSnapshot();
});
