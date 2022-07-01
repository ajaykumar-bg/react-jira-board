import { TaskType, BoardStatus } from '../enums';

export const TASK_TYPES = [TaskType.STORY.value, TaskType.BUG.value];
export const BOARD_STATUS = [
	BoardStatus.BACKLOG.value,
	BoardStatus.INPROGRESS.value,
	BoardStatus.ONHOLD.value,
	BoardStatus.DEV_COMPLETE.value,
	BoardStatus.PR_REVIEW.value,
	BoardStatus.DONE.value,
];
export const PRIORITY = [1, 2, 3, 4];
