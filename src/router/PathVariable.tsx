import React from 'react'
import { useParams } from 'react-router'

export default function PathVariable() {

    // useParams :
    // - 경로 변수에 해당하는 값을 읽을 때 사용하는 react-router의 훅 함수
    const { name } = useParams();
    // console.log(name);  -->> undefinded로 잡히면 'path-variable/:name' 둘중에 오타

    return (
        <div>Name : {name}</div>
    )
}

// http://localhost:3000/router/path-variable/홍길동
