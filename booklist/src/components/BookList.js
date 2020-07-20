import React, {useContext} from 'react';
import {BookContext} from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(oneBook => {
                    return (
                        <BookDetails book={oneBook} key={oneBook.id} />
                        )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read (yet)</div>
    );
};

export default BookList;