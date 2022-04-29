import { render } from '@testing-library/react';
import DialogMessage from '../components/DialogMessage';

it('render component DialogMessage', () => {
  const { container } = render(
    <DialogMessage
      show={false}
      setShow={() => console.log('Set value')}
      title={'Titulo'}
      message={'Mensaje en body'}
    />
  );
  expect(container).toMatchSnapshot();
});
