import { render, screen } from '@testing-library/react';
import Header from '../Header';


test('renders name in header', () => {
render(<Header onNavigate={() => {}} />);
expect(screen.getByText(/Aditya/i)).toBeInTheDocument();
});