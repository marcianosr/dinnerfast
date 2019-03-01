import * as React from "react";
import { uniq, flatten } from "lodash-es";
import CheckboxContainer from "./CheckboxContainer";

type RecipeType = {
  name: string;
  category: Array<String>;
  foodId: Array<Number>;
};

type State = {
  selectedFilters: Array<Number>;
  recipes: Array<RecipeType>;
};

class RecipesContainer extends React.Component {
  state: State = {
    selectedFilters: [],
    recipes: [
      {
        name: "Pasta met kip",
        category: ["meat"],
        foodId: [1],
      },
      {
        name: "Pasta met gehakt",
        category: ["meat"],
        foodId: [2],
      },
      {
        name: "Pannenkoeken",
        category: ["other"],

        foodId: [5],
      },
      {
        name: "Pizza",
        category: ["fish", "meat"],
        foodId: [1, 3],
      },
      {
        name: "Rijst met vis",
        category: ["fish", "rice"],
        foodId: [3, 4],
      },
    ],
  };

  getSelectedFilters = (currentTarget: HTMLInputElement, id: number) => {
    const selectedFilters = currentTarget.checked
      ? [...this.state.selectedFilters, id]
      : this.state.selectedFilters.filter(selected => selected !== id);

    this.setState({ selectedFilters: selectedFilters });
  };

  getUniqueRecipes = () => {
    const { recipes, selectedFilters } = this.state;

    return flatten(
      recipes.map(recipe =>
        uniq(selectedFilters.map(selected => recipe.foodId.includes(selected) && recipe))
      )
    );
  };

  render() {
    const { selectedFilters } = this.state;
    return (
      <section>
        <CheckboxContainer getSelectedFilters={this.getSelectedFilters} />

        {selectedFilters.length < 1 && <p>No selected</p>}

        {this.getUniqueRecipes().map(recipe => recipe && <p key={recipe.name}>{recipe.name}</p>)}
      </section>
    );
  }
}

export default RecipesContainer;
