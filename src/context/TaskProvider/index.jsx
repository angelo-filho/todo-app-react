import p from 'prop-types';

import { getTasksFromLocalStore, saveTasksOnLocalStore } from '../../utils/localStoreUtils';

import { createContext, useCallback, useEffect, useState } from 'react';
import { uid } from 'uid';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return tasks;
  };

  const addTask = useCallback((description) => {
    setTasks((tasks) => {
      const task = {
        description,
        createdAt: new Date(),
        id: uid(),
      };
      const addedTasks = tasks.slice();
      addedTasks.push(task);
      saveTasksOnLocalStore(addedTasks);
      return addedTasks;
    });
  }, []);

  const removeTask = useCallback((id) => {
    setTasks((tasks) => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      saveTasksOnLocalStore(filteredTasks);
      return filteredTasks;
    });
  }, []);

  const updateTask = useCallback((id, description) => {
    setTasks((tasks) => {
      const updatedTasks = tasks.map((task) => {
        if (tasks.id === id) {
          task.description = description;
        }

        return task;
      });
      saveTasksOnLocalStore(updatedTasks);
      return updatedTasks;
    });
  }, []);

  useEffect(() => {
    setTasks(null || getTasksFromLocalStore());
  }, []);

  return (
    <TasksContext.Provider
      value={{
        getTasks,
        addTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: p.element,
};
