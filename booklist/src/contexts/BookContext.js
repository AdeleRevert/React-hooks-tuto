import React, {createContext, useReducer, useEffect} from 'react';
import {booksReducer} from "../reducers/BooksReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(booksReducer, [], () => {
        const localData = localStorage.getItem('books');

        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;
