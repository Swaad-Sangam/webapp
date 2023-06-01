export interface user_t {
	id: string;
	name: string;
	favorite_recipe: recipe_t[]
}

export interface task_t {
	id: string;
	name: string;
	description: string;
	status: string;
	createdAt: Date;
	milestones?: milestone_t[];
	folder: string;
}

export interface milestone_t {
	name: string;
	status: taskStatus.ToDo | taskStatus.Done;
}

export interface newmilestone_t {
	name: string | undefined;
	status: taskStatus.ToDo | taskStatus.Done;
}

export enum taskStatus {
	ToDo = 'todo',
	Doing = 'doing',
	Done = 'done'
}

export interface modalStore_t {
	component: any;
	props: any;
	isLoading: boolean;
}

export interface recipe_t {
	id: string, 
	name: string, 
	category: string[],
	tags: string[],
	likes: number,
	ratings: number,
	comment: comment_t[],
	ingredients: string[],
	steps: string[]
	nutrition: nutrition_t	
}
export interface comment_t {
	user_id: string,
	text: string
	comment: comment_t[]
}

export interface nutrition_t {
	carbs: number,
	protien : number,
	sugar: number
}
