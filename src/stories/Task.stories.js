import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

const onArchiveTask = (id) => console.log(`Archived ${id}`);
const onPinTask = (state) => console.log(state);

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
    onArchiveTask,
    onPinTask
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
    onArchiveTask,
    onPinTask
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
    onArchiveTask,
    onPinTask
  },
};
