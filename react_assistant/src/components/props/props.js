import React from "react";

const Props = () => {
  return (
    <>
      <h1>Пропсы</h1>
      <p>
        То, что мы называем аргументами в мире функций, в мире компонентов
        называется свойствами.
      </p>
      <p>Функциональные компоненты свойства принимают в качестве аргумента.</p>
      <p>Props представляют собой объект, содержащие свойства.</p>
      <p>Обратиться к ним можно - props.имя-свойства.</p>
      <p>Props - только для чтения.</p>
      <pre>
<code>
  {`  
  function Welcome(props) {
        return <h1>Привет, {props.name}</h1>;
        }`}
</code>
      </pre>
      <p>
        Классовые компоненты свойства принимают по умолчанию и обратиться к ним
        можно с помощью this.props.имя-свойства.
      </p>
      <pre>
<code>
  {`  
  class Welcome extends React.Component {
            render() {
                return <h1>Привет, {this.props.name}</h1>;
            }
        }`}
        </code>
      </pre>
      <p>Элементы могут описывать и наши собственные компоненты:</p>
      <pre>
        {" "}
        <code>{`const element = <Welcome name="Алиса" />;`}</code>
      </pre>
      <p>
        Когда React встречает подобный элемент, он собирает все JSX-атрибуты и
        дочерние элементы в один объект и передаёт их нашему компоненту. Этот
        объект называется «пропсы».
      </p>
      <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
      <pre>
        <code>
          {` 
 function Welcome (props) {
                    return <h1> Привет, {props.name}</h1>;
                }
    
  const element = <Welcome name="Алиса" />;
  ReactDOM.render(
      element,
      document.getElementById('root')
  );`}
        </code>
      </pre>
      <p>Мы передаём React-элемент </p>
      <pre>
        <code>{`<Welcome name="Алиса"> в ReactDOM.render().`}</code>
      </pre>
      <p>React вызывает наш компонент Welcome с пропсами.</p>
      <pre>
        <code>{`{name: 'Алиса'}`}</code>
      </pre>
      <p>Наш компонент Welcome возвращает элемент.
      "Привет, Алиса"
      в качестве результата.</p>
      <p>
        React DOM делает минимальные изменения в DOM, чтобы получилось.
      </p>
      <pre>
        <code>{`<h1>Привет, Алиса</h1>`}</code>
      </pre>
      <p>
        Компонент никогда не должен что-то записывать в свои пропсы— вне
        зависимости от того, функциональный он или классовый.
      </p>
    </>
  );
};

export default Props;
