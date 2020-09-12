import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import App from 'routes'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)
/*TODO




1. Нормальный поиск по api (обработка ошибок) +
2. фильтры по цене +
8. smooth scroll по ссылка в footer до header +
Нормальный вывод характеристик +
                                            9. рендеринг похожих товаров
                                            10. Сохранение корзины в localstorage и списка избранного
                                            11. Server-Side rendering
                                            12. Рефакторинг всего кода
                                            13. Попробовать нормальные картинки
                                            14. В корзине стрелочки изменения количества товара
                                            15. Закрепление матриала
                                            16. Сделать нормальное описание
                                            поправить весь CSS
страницу 404
прелоадер +
                                            тултипы
                                            нормальная пагинация
                                            на странице товара слайдер из нескольких изображений


Еще
Страница с завершением заказа, а не модалка
Промокод
Страница заполняется если пользователь зарегистрирован автоматически



Как реализовать похожии товары?
При переходе на страницу конкретного товара на сервер отправляется запрос содержащий id товара
с сервера приходят все товары, которые имеют такую же категорию, бренд
не больше 10 товаров

текущий id не должен учитываться

Как реализовать топ товары?
При покупке товара в базу данных добавляется счетчик покупок
по этому счетчику формируется топ-10  самых продаваемых товаров

Новинки
Просто выводить последнии 10 добавленных товаров в бд как READ php

главная страница
-хедер
-категории
-слайдер-баннер с акциями
-новинки
-лучшие продукты
-баннер по категориям
-подписаться на рассылку
-футер


На страницу доставка прикрутить google maps и точками
*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
