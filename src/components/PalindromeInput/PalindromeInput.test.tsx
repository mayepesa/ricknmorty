import { render, fireEvent } from "@testing-library/react";
import PalindromeInput from ".";
import 'jest-styled-components';


describe("Rendering PalidromeInput", () => {
  it("renders textarea correctly", async () => {
    const { getByTestId } = render(<PalindromeInput text={'Ana'} setText={jest.fn()} />);
    const textarea = getByTestId('textarea');
    expect(textarea).toBeInTheDocument();

  });

  it('renders textarea styles correctly', () => {
    const { getByTestId } = render(<PalindromeInput text={'Ana'} setText={jest.fn()} />);
    const textarea = getByTestId('textarea');
    expect(textarea).toHaveStyleRule('color', 'gray');
    expect(textarea).toHaveStyleRule('font-size', '16px');
  });

  test('renders button correctly', () => {
    const { getByRole } = render(<PalindromeInput text={'Ana'} setText={jest.fn()} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('renders title text correctly', () => {
    const { getByText } = render(<PalindromeInput text={'Ana'} setText={jest.fn()} />);
    const title = getByText('Test if your phrase or word is a palindrome:');
    expect(title).toBeInTheDocument();
  });

  test('renders text correctly', () => {
    const { getByText } = render(<PalindromeInput text={'Ana'} setText={jest.fn()} />);
    const text = getByText('Ana');
    expect(text).toBeInTheDocument();
  });

});
