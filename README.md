
<h1>Оптимизация рендеринга полей ввода и компонентов</h1
  
  <p>Форма получает результаты полей ввода и суммирует результат значенией.При каждом смене значения  отдельного поля  обнавляетса конечный результат и отображается</p>
  
  <p>Без оптимизации рендеринга при каждом изменении отдельного инпута редерились все инпуты, тотальный результат и весь компанент </p>
  
  <p>После оптимизации весь app  целико рендериться при запуске(со всеми компонентами), и   при изменение отдельного инпута рендеринг проходит только в этом  же самом инпуте, и обнавляется тотальный результат </p>
  <p>
  ***** app component rendering ****** </br>
 field-1 </br>
 field-2 </br>
 field-3 </br>
 field-4 </br>
 field-5 </br>
 Total =  0 </br>
</p>
  
  <p >Рендеринг отслеживаем с помощью консольных сообщений с информацией о конкретном компаненте который рерэдриются, так что прошу открыть <span style='color: orange;'>консоль браузера</span> </p>
  
  
  <p>
  ***** app component rendering ****** </br>
 field-3 </br>
 Total =  3 </br>
</p>


<p>Demo: https://pargevs.github.io/optimizingRenderingOfInputs/ </p>
