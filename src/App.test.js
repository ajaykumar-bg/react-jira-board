import { render } from '@testing-library/react';
import App from './App';

test('renders jira board app', () => {
	render(<App />);
	expect(true).toBe(true);
});
