import { useEffect, useState } from 'react';
// import './CitiusTech.css';

const url = 'https://jsonplaceholder.typicode.com/todos';

const limit = 20;

export function CitiusTech() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState('');
  const [rawData, setRawData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([]);
  const [currentPageRecords, setCurrentPageRecords] = useState([]);

  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRawData(data);
        setApiData(data);
      })
      .catch((e) => console.log(`err ${e}`));
  };

  const toggleComplete = (id) => {
    const toggledValues = apiData.map((user) => {
      if (id === user.id) {
        return { ...user, completed: !user.completed };
      }
      return user;
    });
    setApiData(toggledValues);
  };

  const filterUsers = () => {
    const filteredUsers = rawData.filter((user) => {
      return String(user.title).includes(search);
    });
    console.log(filteredUsers);
    setApiData(filteredUsers);
  };

  const handleCurrentPageRecords = () => {
    const filterCurrentPageRecords = apiData.filter((user) => {
      return (
        user.id <=(pageNumber*limit) &&
        user.id > ((pageNumber*limit)-20)
      );
    });
    console.log(pageNumber, filterCurrentPageRecords);
    setCurrentPageRecords(filterCurrentPageRecords);
  };

  useEffect(() => {
    const numberOfPages = apiData.length / limit;
    const arr = [];
    for (let i = 0; i < numberOfPages; i++) {
      arr.push(i + 1);
    }
    setPages(arr);
    handleCurrentPageRecords();
  }, [apiData, pageNumber]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [search]);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {apiData && apiData.length > 0 && (
        <table>
          <tr>
            <tr>
              <td
                style={{
                  border: '2px solid black',
                  fontWeight: 'bold',
                }}
              >
                Id
              </td>
              <td
                style={{
                  fontWeight: 'bold',
                  border: '2px solid black',
                }}
              >
                Title
              </td>
              <td
                style={{
                  fontWeight: 'bold',
                  border: '2px solid black',
                }}
              >
                Completed{' '}
              </td>
            </tr>
            {currentPageRecords.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  border: '1px solid red',
                }}
                //  onClick={() => toggleComplete(user.id)}
              >
                <td
                  style={{
                    border: '1px solid black',
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                  }}
                >
                  {user.title}
                </td>
                <td
                  onClick={() => toggleComplete(user.id)}
                  style={{
                    border: '1px solid black',
                    cursor: 'pointer',
                  }}
                >
                  {user.completed === true ? 'True' : 'False'}
                </td>
              </tr>
            ))}
          </tr>
        </table>
      )}
      <div>
        <button disabled={pageNumber === 1}>Prev</button>
        {pages.map((page) => (
          <button onClick={() => setPageNumber(page)} key={page}>
            {page}
          </button>
        ))}
        <button disabled={pageNumber === pages.length}>Next</button>
      </div>
    </div>
  );
}

// export default CitiusTech;
