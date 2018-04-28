const MagicLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 0.8rem;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(25%)')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.1s ease-in-out;
`;

export default MagicLabel;
