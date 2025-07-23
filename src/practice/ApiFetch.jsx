import { useEffect, useState } from "react";
const url = "https://api.restful-api.dev/objects";

export function ApiFetch() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.error(`Error while fetching ${e}`));
  };
  console.log("data", data);
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      {data&&data.length&&
        data.map(phone=><div>
        <h1>{phone.name}</h1>
        <p>{phone&&phone.data&&phone.data.color?phone.data.color:""}</p>
        {/* <p>{phone.data.capacity}</p> */}
        <p>{phone&&phone.data&&!!(phone.data.capacity)?phone.data.capacity:""}</p>
        </div>)
      }
    </div>
  );
}
