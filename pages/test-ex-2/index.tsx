import React from "react";

interface Person {
  name: string;
  age: number;
  city: string;
}

const data = [
  { "name": "Fun", "age": 41, "city": "Abidjan" },
  { "name": "Have", "age": 30, "city": "Ahmedabad" },
  { "name": ":", "age": 55, "city": "Alexandria" },
  { "name": "Luck", "age": 26, "city": "Ankara" },
  { "name": ")", "age": 70, "city": "Almaty" },
  { "name": "Good", "age": 10, "city": "Addis Ababa" }
]

export default function Explore() {
  const sortedData = data.slice().sort((a, b) => a.age - b.age)
  const result = sortedData?.map((item:Person) => item.name)?.join(' ')
  console.log(`"result", "${result}"`);
  return (
    <div>
      <div>ข้อที่ 2</div>
      <div>{`"result", "${result}"`}</div>
    
    </div>
  );
}