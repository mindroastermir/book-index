import books from '../assets/data.json'

function Table(){
    const rows = books.map(book => {
        return <tr>
            <td>{book.id}</td>
            <td><a target='_blank' rel='noreferrer' href={book.link}>{book.bookNo}</a></td>
            <td><a target='_blank' rel='noreferrer' href={'indexes/' +book.bookNo+ '.html'}>{book.name}</a></td>
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
                    <th>Name</th>
                    <th>Author</th>
                    <th>Page Count</th>
                    <th>Thumb</th>
                    <th>Intro</th>
                    <th>Publisher</th>
                    <th>Category</th>
                </tr>
                {rows}
            </table>
        </>
    );
  }

  export default Table;