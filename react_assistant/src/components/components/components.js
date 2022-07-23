import React from "react";


const Components=()=>{
  return(
    <>
    <h1>Компоненты</h1>
    <p>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
    <p>Компоненты бывают функциональные и классовые.</p>
    <p>Проще всего объявить React-компонент как функцию:</p>
    <pre>
      <code>
      {`
      function Welcome() {
                return <h1>Привет, мир! </h1>;
            }`
      }
      </code>
    </pre>
    </>
  )
}


export default Components