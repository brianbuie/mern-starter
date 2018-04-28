const FieldError = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.error};
  margin-top: 0;
  text-align: left;
  padding-left: 0.8rem;
  max-height: ${props => (props.show ? '2rem' : '0')};
  transition: all 0.2s ease-in-out;
`;

export default FieldError;
