import books from '../assets/data.json'

function Table(){
    const finalBooks = books.map(book => {
        return <tr>
            <td>{book.id}</td>
            <td>{book.bookNo}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
            <td><img src={book.thumbUrl} alt='thumnail'/></td>
            <td>{book.introduction.substring(0, 20)}</td>
            <td>{book.publisher}</td>
            <td>{book.category}</td>
        </tr>;
    }
    );
    return(
        <>
            <table className="table w-100 rtl">
                <tr>
                    <th>#</th>
                    <th>Book #</th>
                    <th>Author</th>
                    <th>Page Count</th>
                    <th>Thumb</th>
                    <th>Intro</th>
                    <th>Publisher</th>
                    <th>Category</th>
                </tr>
                {finalBooks}
            </table>
        </>
    );
  }

  export default Table;