import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BooksService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern('^([0-9]+\.?[0-9]{0,2})')]]
    });
  }
  get f() { return this.bookForm.controls; }

  onSubmit() {
    const newBook: Book = {
      id: 10,
      titulo: this.bookForm.get('titulo').value,
      autor: this.bookForm.get('autor').value,
      genero: this.bookForm.get('genero').value,
      precio: this.bookForm.get('precio').value
    };
    console.log(newBook);
    /*this.bookService.registerBook(newBook).subscribe((response: Book) => {
      console.log(newBook);
    });*/
  }
}
