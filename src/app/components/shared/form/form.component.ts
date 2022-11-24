import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovie } from 'src/app/store/actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() formData = new EventEmitter<string>();

  inputData: string = '';
  isSent: boolean = false;

  constructor(private store: Store) {}

  handleInputValue(inputValue: string) {
    this.inputData = inputValue;
  }

  postData() {
    if (this.inputData != '') {
      this.store.dispatch(addMovie({ movie: this.inputData }));
      this.formData.emit(this.inputData);
      this.isSent = true;

      setTimeout(() => {
        this.isSent = false;
        this.inputData = '';
      }, 10);
    }
  }
}
