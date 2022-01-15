export const saveTasksOnLocalStore = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasksFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('tasks'));
};

export const saveThemeOnLocalStore = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};

export const getThemeFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('theme'));
};
