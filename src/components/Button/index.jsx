import { Container } from './styles';
import p from 'prop-types';

const Button = ({ background, notRounded, disabled, theme = {}, children, handleClick }) => {
  return (
    <Container
      className={notRounded ? 'not-rounded' : ''}
      onClick={handleClick}
      background={background}
      theme={theme}
      $notRounded={notRounded}
      $disabled={disabled}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  background: p.string.isRequired,
  notRounded: p.bool,
  theme: p.object,
  disabled: p.bool,
  handleClick: p.func,
  children: p.element,
};

export default Button;
