import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[props] Add Book', props<Book>());
export const RemoveBook = createAction('[props] Remove Book', props<{bookId: string}>());