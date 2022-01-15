import { useContext, useState } from 'react';
import { Container, Input } from './styles';
import { useTheme } from 'styled-components';
import Button from '../Button';
import { Add } from '@styled-icons/material-rounded/Add';
import { TasksContext } from '../../context/TaskProvider/index';

const MainInputText = () => {
  const theme = useTheme();
  const { addTask } = useContext(TasksContext);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTask = () => {
    addTask(value);
    setValue('');
  };

  return (
    <Container>
      <Input value={value} onChange={handleChange} type={'text'} placeholder="Ex. Pagar a do dia" />
      <Button handleClick={handleAddTask} background={theme.mainButtonColor}>
        <Add />
      </Button>
    </Container>
  );
};

export default MainInputText;
