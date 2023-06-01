<script lang="ts">
	import type { newRecipe_t, recipe_t } from '$lib/types';
	import Input from '../../../components/Input.svelte';
	import MultiSelect from '../../../components/MultiSelect.svelte';

	const newRecipe: newRecipe_t = {
		name: '',
		category: [],
		tags: [],
		ingredients: [],
		steps: []
	};
</script>

<div class="NewRecipe">
	<form>
		<h3 class="title">New Recipe</h3>
		<span class="subtitle">Enter the name of the dish</span>
		<Input placeholder="Enter dish name" bind:inputValue={newRecipe.name} />
		<span class="subtitle">Select the category of the dish</span>
		<MultiSelect
			options={['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert', 'Beverage', 'Other']}
			bind:selected={newRecipe.category}
		/>
		<span class="subtitle">Select the tags of the dish</span>
		<MultiSelect
			options={['Veg', 'Non-Veg', 'Spicy', 'Sweet', 'Sour', 'Bitter', 'Salty', 'Other']}
			bind:selected={newRecipe.tags}
			isMulti
		/>
		<span class="subtitle">Enter the ingredients of the dish</span>
		<MultiSelect
			options={['Salt', 'Pepper', 'Sugar', 'Water', 'Milk', 'Eggs', 'Flour']}
			bind:selected={newRecipe.ingredients}
			isMulti
		/>
		<span class="subtitle">Enter the steps of the dish</span>
		<Input type="textarea" placeholder="Enter steps" bind:inputValue={newRecipe.steps} />
		<span class="subtitle">Upload an image of the dish</span>
		<Input type="file" placeholder="Upload image" />
		<button type="submit">Submit</button>
	</form>
</div>

<style lang="scss">
	.NewRecipe {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		& > * {
			margin: 1rem 2rem;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			padding: 1rem 2rem;
			border-radius: 1rem;
			background-color: var(--container-low-bg-color);

			h3 {
				align-self: center;
				font-size: 1.4rem;
				font-weight: 600;
			}

			span {
				margin-top: 0.5rem;
			}

			button {
				align-self: center;
			}
		}
	}
</style>
