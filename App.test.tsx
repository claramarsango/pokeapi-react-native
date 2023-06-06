import '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import App from './App';

test('trial', () => {
  render(<App />);
  const message = screen.getByText('Hello World!');
  expect(message).toBeOnTheScreen();
});
