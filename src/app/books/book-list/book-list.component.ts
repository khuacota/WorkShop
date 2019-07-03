import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{id: 1, titulo: 'Harry Potter', autor: 'J.K Rowling', genero: 'Ciencia ficcion', precio: 20},
                  {id: 2, titulo: 'Principito', autor: 'Saint', genero: 'Infantil', precio: 25}];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    /*this.bookService.getBooks().subscribe((response: Book[]) => {
      this.books = response;
    });*/
  }

}
