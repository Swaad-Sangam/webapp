import { supabase } from '../supabase';
import { isSaving, recipeStore } from './stores';
import type { newRecipe_t, nutrition_t } from './types';
import toast from 'svelte-french-toast';

export const recipeHandler = {
	addRecipe: (newRecipe: newRecipe_t) => {
		isSaving.set(true);
		supabase.from('Recipe').insert({
			recipe_name: newRecipe.name,
			category: newRecipe.category,
			steps: newRecipe.steps,
			ingredients: newRecipe.ingredients,
			tags: newRecipe.tags
		}).then(()=> {
			recipeHandler.getRecipes()
		})
	},
	getRecipes: async () => {
		supabase.from('Recipe').select('*').then((data)=> {
			recipeStore.set([data.data?.map((d)=> {
				return {
					id: d.id,
					name: d.recipe_name,
					category: d.category,
					steps: d.steps,
					ingredients: d.ingredients,
					tags: d.tags
				}
			})])
		})
	},
	getRecipe: async (recipe_id: string) => {
		supabase.from('Recipe').select('*').eq('id', recipe_id);
	},
	deleteRecipe: (recipe_id: string) => {
		isSaving.set(true);
		supabase.from('recipe').delete().eq('id', recipe_id);
	}
};

export const authHandlers = {
	login: async (email: string, password: string) => {
		await supabase.auth
			.signInWithPassword({
				email: email,
				password: password
			})
			.catch((error) => {
				console.log(error);
			});
	},
	register: async (name: string, email: string, password: string) => {
		await supabase.auth
			.signUp({
				email: email,
				password: password,
				options: {
					data: {
						name: name
					}
				}
			})
			.then((user) => {
				toast.success('Account created successfully');
				toast.success('Please check your email for verification');
			})
			.catch((error) => {
				console.log(error);
			});
	},
	logout: async () => {
		await supabase.auth.signOut();
		localStorage.clear();
		window.location.reload();
	}
};
