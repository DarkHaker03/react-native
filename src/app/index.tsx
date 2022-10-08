import Pages from '../pages';

export default function App() {
  return (
    <Pages />
  )
}

// const newData = await (await axios.get<UsersArguments[]>('https://jsonplaceholder.typicode.com/users')).data;
      // const newData2 = await (await axios.get<PostArguments[]>('https://jsonplaceholder.typicode.com/posts')).data;
      // setData(newData);
      // setData2(newData2);
      // fetch('https://jsonplaceholder.typicode.com/users')
      //   .then((response) => response.json())
      //   .then((response) => {
      //     setData(response);
      //   });
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then((response) => response.json())
      //   .then((response) => {
      //     setData2(response);
      //   });