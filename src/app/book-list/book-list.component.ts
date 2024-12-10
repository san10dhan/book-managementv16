import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  book$: Observable<Book[]>;

  constructor(private store: Store<AppState>){
    this.book$ = store.select('book');
  }

  addBook(id: string, title: string, author: string): void {
    this.store.dispatch(AddBook({id, title, author}))
  }

  removeBook(bookId: string): void {
    this.store.dispatch(RemoveBook({bookId}));
  }
}
