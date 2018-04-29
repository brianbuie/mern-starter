export const InvisibleInput = styled.input`
  display: none;
`;

export const InlineLabel = styled.label`
  margin: 1.25rem 0 0.3rem 0;
  display: flex;
  align-items: flex-end;
`;

export const MagicLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 0.8rem;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(25%)')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.1s ease-in-out;
`;

export const FieldError = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.error};
  margin-top: 0;
  text-align: left;
  max-height: ${props => (props.show ? '2rem' : '0')};
  transition: all 0.2s ease-in-out;
`;
