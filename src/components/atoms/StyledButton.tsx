import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #4338ca;
  }

  .dark & {
    background-color: #1e40af;
    color: white;
  }
`;

export default StyledButton;
