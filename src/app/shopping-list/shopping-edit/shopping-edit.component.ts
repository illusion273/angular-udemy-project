import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form!:NgForm;
  subscription!:Subscription;
  editMode = false;
  editingIndex?:number;
  editingIngredient?: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editingStarted.subscribe((index:number)=> {
      this.editMode = true;
      this.editingIndex = index;
      this.editingIngredient = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editingIngredient.name,
        amount: this.editingIngredient.amount

      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form:NgForm) {
    const ingredient = new Ingredient(
      form.value.name,
      form.value.amount
    );
    this.shoppingListService.addIngredient(ingredient);
  }

  
}
