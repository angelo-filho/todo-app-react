import p from 'prop-types';
import { Button, Circle, Container, Emoji } from './styles';

const SlideButton = ({ handleClick, active }) => {
  return (
    <Container>
      <Button onClick={handleClick} style={{ justifyContent: active ? 'flex-start' : 'flex-end' }}>
        <Circle layout />
        <Emoji>🌞</Emoji>
        <Emoji right>🌜</Emoji>
      </Button>
    </Container>
  );
};

SlideButton.propTypes = {
  handleClick: p.func.isRequired,
  active: p.bool.isRequired,
};

export default SlideButton;
