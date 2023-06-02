export interface user_t {
	id: string;
	name: string;
	favorite_recipe: recipe_t[];
}

export interface modalStore_t {
	component: any;
	props: any;
	isLoading: boolean;
}

export interface recipe_t {
	id: string;
	name: string;
	category: string[];
	tags: string[];
	likes?: number;
	ratings?: number;
	comment?: comment_t[];
	ingredients: string[];
	steps: string[];
	nutrition?: nutrition_t;
}
export interface newRecipe_t {
	name: string;
	category: string[];
	tags: string[];
	ingredients: string[];
	steps: string[];
}
export interface comment_t {
	user_id: string;
	text: string;
	reply: comment_t[];
}

export interface nutrition_t {
	carbs: number;
	protien: number;
	sugar: number;
}
