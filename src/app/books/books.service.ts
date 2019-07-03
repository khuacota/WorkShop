import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = '';
  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }

  public registerBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiUrl, book);
  }
}
