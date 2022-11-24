import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnChanges {
  @Output() inputValueEvent = new EventEmitter<string>();
  @Input() isSent: boolean = false;

  inputValue: string = '';

  getInputValue(): void {
    this.inputValueEvent.emit(this.inputValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSent'].currentValue) {
      this.inputValue = '';
    }
  }
}
