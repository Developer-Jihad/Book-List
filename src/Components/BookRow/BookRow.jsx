import React from "react";
import { MdDeleteSweep } from "react-icons/md";

export default function BookRow({ book, deleteBook }) {
  const { title, isbn, author, pubYear } = book;
  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pubYear}</td>
      <td>
        <button onClick={() => deleteBook(isbn)}>
          <MdDeleteSweep color="red" />
        </button>
      </td>
    </tr>
  );
}
