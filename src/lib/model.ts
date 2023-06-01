import { supabase } from '../supabase';
import { isSaving } from './stores';
import type { nutrition_t } from './types';
import toast from 'svelte-french-toast';
import { goto } from '$app/navigation';

export const recipeHandler = {
	addRecipe: (
		recipe_name: string,
		category: string,
		tags: string,
		ingredients: string[],
		steps: string[],
		nutrition: nutrition_t
	) => {
		isSaving.set(true);
		supabase.from('Recipe').insert({
			recipe_name: recipe_name,
			category: category,
			nutrition: nutrition,
			steps: steps,
			ingredients: ingredients,
			tags: tags
		});
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
