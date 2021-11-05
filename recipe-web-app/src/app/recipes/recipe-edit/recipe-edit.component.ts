import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.fb.group({
        name: this.fb.control('', Validators.required),
        amount: this.fb.control('', [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = this.fb.array([this.fb.control('')]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            this.fb.group({
              name: this.fb.control(ingredient.name, Validators.required),
              amount: this.fb.control(ingredient.amount, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
            })
          );
        }
      }
    }

    this.recipeForm = this.fb.group({
      name: this.fb.control(recipeName, Validators.required),
      imagePath: this.fb.control(recipeImagePath, Validators.required),
      description: this.fb.control(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }
  get ingredients(): FormArray {
    return this.recipeForm.get("ingredients") as FormArray;
  }

}
