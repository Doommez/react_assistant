import React from "react";



const Lifecycle=()=>{

  return(
    <>
    <h1>Lifecycle</h1>
    <h2>Методы жизненного цикла</h2>
    <ol>Основные методы жизненного цикла:
      <li>constructor ()
      <ul>Обычно в React конструкторы используются только для двух целей:
        <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
        <li>Привязка методов обработчика событий к экземпляру.</li>
      </ul></li>
      <pre>
<code>{`
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
`}</code>
      </pre>
      <li>render ()
        <p>Рендеринг компонента. Отдает JSX.</p>

       <pre>
<code>{`
      render () {
              return (
                  <div>
                      'Hello'
                  </div>
              )
          }`}
</code>
       </pre>
        

      </li>
      <li>3. componentDidMount()

<p>
  componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево).
   Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.
</p>
<pre><code>{`   componentDidMount()`}</code></pre></li>
<li>componentDidUpdate(prevProps, prevState)
<p>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p>
<pre><code>{`   componentDidUpdate(prevProps, prevState) {
                if (this.props.userID !== prevProps.userID) {
                    this.fetchData(this.props.userID);
                }
            }`}</code></pre>
</li>
<li>5. componentWillUnmount()
  <p>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p>
  <pre><code>{`   componentWillUnmount() {
                alert("The component named Header is about to be unmounted.");
            }
`}</code></pre>
<p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
</li>
    </ol>
    
    </>
  )
}


export default Lifecycle