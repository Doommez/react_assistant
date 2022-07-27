import React, { useState } from "react";
import { Button } from "antd";
import "./state.scss";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>State(Состояние)</h1>
      <p>
        State (состояние) в React – это объект простого JS, позволяющий
        отслеживать данные компонента. Состояние компонента может меняться.
        Смена состояния компонента зависит от функциональности приложения.
        Изменения могут основываться на ответе от пользователя, новых сообщениях
        с сервера, ответа сети и т.д.
      </p>
      <p>
        Состояние компонента должно быть приватным для компонента и
        контролироваться им. Изменения состояния компонента необходимо делать
        внутри компонента – инициализация и обновление состояния компонента.
      </p>

      <pre>
        <code>
          {`
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { username: 'johndoe' }
    }
    render() {
      return (
          <div> { this.state.username } </div>
      )
    }
  }`}
        </code>
      </pre>

      <p>
        Единственный допустимый способ обновления состояния компонента – через
        setState().
      </p>

      <p>Так нельзя менять состояние: this.state.username='Mark'</p>

      <p>1 способ изменить state:</p>

      <pre>
        <code>{`this.setState({username:'Mark'})`};</code>
      </pre>

      <p>2 способ изменить state:</p>

      <pre>
        <code>{`this.setState(() => ({ username: 'Mark' }))`}</code>
      </pre>

      <p>
        В функциональных компонентах state создается с помощью хука useState()
      </p>

      <p>
        Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </p>

      <pre>
        <code>{`import {useState} from 'react';`}</code>
      </pre>

      <p>
        Хук useState() принимается в качестве параметра первоначальное значение
        для переменной, а возвращает массив, содержащий переменную и функцию,
        которая изменяет эту переменную.
      </p>

      <p>
        При объявлении state часто используют деструктурирующее присваивание:
      </p>

      <pre>
        <code>{`const [name, setName] = useState('Mark');`}</code>
      </pre>
      <div className="container__btn">
        <Button
          type="primary"
          shape="circle"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </Button>
        <span>Счётчик: {count}</span>
        <Button
          type="primary"
          shape="circle"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </Button>
      </div>
      <p>
        Примером работы со state является счётчик, который изменяется при
        нажатии на кнопку.
      </p>
      <p>Код имеет следующий вид:</p>

      <pre>
        <code>
          {` 
  function Counter() {
      const [count, setCount] = useState(0);
      return (
        <div className="container__btn">

          <Button type="primary" shape="circle" onClick={()=>{setCount(count-1)}}>
                -1
              </Button>
              Счётчик: {count}
              <Button type="primary" shape="circle" onClick={()=>{setCount(count+1)}}>
                +1
              </Button>
        </div>
             );
      }`}
        </code>
      </pre>
    </>
  );
};

export default State;
