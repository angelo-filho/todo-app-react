import p from 'prop-types';
import { Container, FakeInput, Input } from './styles';
import { useContext, useRef, useState } from 'react';

import { Delete } from '@styled-icons/material-rounded/Delete';
import { Check } from '@styled-icons/material-rounded/Check';
import { useTheme } from 'styled-components';

import Button from '../Button';
import { TasksContext } from '../../context/TaskProvider';
import { useIsPresent } from 'framer-motion';

const Task = ({ id, description }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(description);
  const descriptionRef = useRef(description);
  const theme = useTheme();
  const inputRef = useRef(null);
  const { removeTask, updateTask } = useContext(TasksContext);
  const isPresent = useIsPresent();

  const animations = {
    style: { position: isPresent ? 'relative' : 'absolute', right: '0%' },
    initial: { scale: 0.7 },
    animate: { scale: 1.0 },
    exit: { scale: 0.7, opacity: 0, transition: { type: 'spring', duration: 0.7 } },
  };

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = (e) => {
    setFocused(false);

    if (!e.relatedTarget?.classList.contains('not-rounded')) {
      if (descriptionRef.current != value) {
        setValue(descriptionRef.current);
      }
    } else {
      e.relatedTarget.click();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleRemoveTask = () => {
    removeTask(id);
  };

  const handleUpdateTask = () => {
    if (descriptionRef.current == value) {
      return;
    }
    updateTask(id, value);
    descriptionRef.current = value;
  };

  return (
    <Container {...animations} layout>
      <Input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type={'text'}
        value={value}
        background={theme.taskColor}
      />
      {focused || <FakeInput background={theme.taskColor} onClick={handleFocus} />}
      <Button handleClick={handleUpdateTask} background={theme.checkButtonColor} notRounded={true} theme={theme}>
        <Check />
      </Button>
      <Button handleClick={handleRemoveTask} background={theme.removeButtonColor}>
        <Delete />
      </Button>
    </Container>
  );
};

Task.propTypes = {
  id: p.string.isRequired,
  description: p.string.isRequired,
};

export default Task;
