import { AnimatePresence } from 'framer-motion';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import MainInputText from '../../components/MainInputText';
import SlideButton from '../../components/SlideButton';
import Task from '../../components/Task';
import { TasksContext } from '../../context/TaskProvider';
import { darkTheme, lightTheme } from '../../styles/Theme';
import { getThemeFromLocalStore, saveThemeOnLocalStore } from '../../utils/localStoreUtils';
import { Container, Wrapper } from './styles';

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleTheme, setToggleTheme] = useState(null);
  const { getTasks } = useContext(TasksContext);

  useEffect(() => {
    setTasks(getTasks());
  }, [getTasks]);

  useEffect(() => {
    setToggleTheme(getThemeFromLocalStore());
    console.log(getThemeFromLocalStore());
  }, []);

  const handleClick = useCallback(() => {
    setToggleTheme((t) => {
      const changedTheme = !t;
      saveThemeOnLocalStore(changedTheme);

      return changedTheme;
    });
  }, []);

  return (
    <ThemeProvider theme={toggleTheme ? darkTheme : lightTheme}>
      <Wrapper>
        <Container>
          <SlideButton handleClick={handleClick} active={toggleTheme == null ? true : toggleTheme} />

          <MainInputText />

          <AnimatePresence>
            {tasks.map((task) => (
              <Task key={task.id} id={task.id} description={task.description} />
            ))}
          </AnimatePresence>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
