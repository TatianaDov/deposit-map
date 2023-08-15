# Шаблон приложения(_модуль_)

* `HOST`(облочка) - главное приложение.
* `remote` - дочернее приложение. Асинхронно подгружается. Используеться в главном приложении.
* `shared` - общие библиотеки(пакеты) и типы для работы всего приложениия.

`HOST`, `remote` - расположены в независимых репозиториях.

####Цель: встраивание в главное `host`-приложение.

- [Установка](#install)
- [Компоненты](#component)
- [Модули](#module)
- [Store, бизнес-логика](#store)
- [Главное приложение(host)](#host)
- [Подписка и настройка главного прилажения](#filter)
- [Локальная разработка](#localdev)

<a id="install"></a>
## Установка
Установка пакетов производим через `NPM`
> npm install [name package] [-D | --save] -E

<a id="env"></a>
### ENV
В корне проекта создать `.env` file, пример:

```bash
NODE_ENV="development"
PORT=5042

# back-end
DELAY_API_LOCAL=2000
API_URL=http://localhost:7008
#API_URL=http://127.0.0.1:31203
```
### RUN install
```bash
> npm i
```

### Pre-commit hooks with `Husky`

Все команды, которые идут ниже выполняем **единожды**, при первоначальном разворачивании проекта, **после установки всех пакетов** и в том порядке, в котором они идут
```bash
#Подготовка пакета 
> npm run husky
```

## Разработка
- Код разрабатывается согласно `конвенции`(необходимо запросить).
- 'Утилиты' - вспомогательные фцнкции(чистые), компоненты создают в директории `src/utils`. Необходимо покрывать тестами.
- В шаблоне предоставлены конфигурации для линтера `.eslintrc.js`, `.prettierrc.js`


<a id="сomponent"></a>
### Компоненты
```bash
> src/components
```
Должны содержать минимум логики, которую рекомендуеться выносить в `customHook`.
```file
- [component-name]
    - ComponentName.tsx
    - ComponentNameSub.tsx
    - styleName.css.scss
    - useName.ts
    - types.ts
    - utils.ts
    - [hooks]: if needed!
    - [components]: sub components, if needed!
    - [__test__]
      - index.test.tsx
      - mock.ts
```

<a id="module"></a>
### Модули
```bash
> src/modules
> src/external-modules
```
Для работы с `API` или `Store` рекомендуется применять слудующую структуру:

```text
- [module-name]
    - apiName.tsx: endPoints
    - ComponentName.tsx: view/render UI
    - ModelName.tsx: Model, types
    - StoreName.ts: Store(mobX)
    - styleName.css: style css/scss
    - [components]: sub components, if needed!
    - [store]: sub stores, if needed!
    - [utils]: if needed!
```

#### Store/Contract
>One Model - one Store!
> 
>Для одной Модели:
>1. Запросы(endpoints) относящиеся только к модели. Например REST(GET, POST, PUT, DELETE)
>2. Один Store, без добавления(обработки данных для библиотек).
>3. Для взаимодействия нескольких `store`  создайти еще один общий.

Экспортируемые компоненты (`ЭК`) для [routeMap](#route) распологаются в папке `src/external-modules`

> Экспортируемый компонент `ЭК`

`ЭК` не должен "оборачиаться" в `<React.Fragment>`
```typescript
const ComponentName = (props: HostStore) => {
  //...
  return (
    <div>
      {...}
    </div>
  );
};
```

Для динамчески создаваемых компонентов(модалки, сообщения, sidebar, ...) необходимо указывать `родительский контейнер`, который распологаеться в границе `ЭК`.

Пример:
```typescript jsx
const node = useRef(null);
...
<div ref={node}>
  <Sidebar
  //...
  container={node}
  >
</div>
  
```

> ВНИМАНИЕ!
> 
> Асинхронные операции запускать только после рендера `ЭК`. Например через hook `useEffect`.

<a id="store"></a>
## Store
Бизнес-логика содержится только в `Store(mobX)`. Пример создания:
```bash
> src/external-modules/meteo-module/storeMeteo.ts
```
Экземпляр `Store` необходимо создать через главный `src/store/rootStore.ts`

Функционал не затрагивающий `бизнес-логику` должен создаваться в отдельном `store` или `customHooks`. Например _темирование_, _системные_ _сообщения_.


<a id="host"></a>
## Главное приложение(Host)
<a id="route"></a>
###Экспорты для внешнего приложения
Компоненты внешнего приложения экспортируются через объект `routeMap`, пример:
```typescript
const routeMap: RouteMapItem[] = [
  {
    section: 'dashboards',
    path: '/dashboard-operation-production-management',
    title: 'Оперативное управление добычей',
    Component: DashboardProd,
    remoteName: remoteName,
  },
  {
    section: 'dashboards',
    path: '/dashboard-validation',
    title: 'Валидация и качество данных',
    Component: DashboardValidation,
    remoteName: remoteName,
  }
]
``` 
```typescript
type RouteMapItem = {
  path: string,
  Component:  ComponentHost,
  section: ParentSectionName,
  filterDisabled?: true,
  title?: string,
  children?: RouteMapItem,
  remoteName?: string,
}
```
> **Важно!** Экспортировать через `default`

Webpack:
```typescript
moduleFederation: new ModuleFederationPlugin({
  //...
  exposes: {
    './routeMap': './src/external-modules/name-module/routeMap',
  }
  //...
})
```
Указать имена в конфиге `webpack/config-app.json`:
```json
{
  "uniqueName": "app_tmpl",
  "mfName": "remote_tmpl"
}
```


<a id="filter"></a>
## Подписка и настройка главного прилажения
В компонент пробрасывается методы из store `host`-приложения: `props: HostStore`. Для взаимодействия с фильтром.
```typescript
const ComponentName = (props: HostStore) => {
  //... 
};

export default ComponentName;
```

### Filter
Для взаимодействия необходимо `подписаться` на изменения.
Пример через **custom hook**:
> src/hooks/useHost.ts
```typescript
import { useEffect } from 'react';
import { rootStore } from '../store';

type UseHostProps = {
  host: HostStore;
  mount: (filterBody: FilterBody) => void;
  hostOption?: HostOption;
  unmount?: () => void;
};

const useHost = (props: UseHostProps) => {
  const { host, mount, unmount, hostOption } = props;
  rootStore.host.init(host);

  useEffect(() => {
    rootStore.host.subscribeInit({
      callback: mount,
      hostOption,
    });
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export { useHost };
```
Дополнительные опции для настройки фильтра, списка шаблонов диапазона дат:
```typescript
const hostOption: HostOption = {
  filterOption: {
    controls: ['field'],
    isWells: false,
  },
  datePeriods: ['workDay'],
};
```
> ###`Внимание`
> Shared **types** смотреть здесь: `src/typings/host.d.ts`

Данные фильтра из свойсва `filterBody` c парметрами и настройками:

```typescript
type FilterBody = {
  companyId: string,
  dataRange: [Date, Date],
  datePeriodType: DatePeriod;
  params: Nullable<FilterParams>,
  items: Nullable<Well[]>,
  dateFrom?: Date,
  dateTo?: Date,
}
```
Рекомендуется создать класс `StoreHost` на основе `InterfaceStoreHost` (_src/typings/host.d.ts_):
```typescript
export class StoreHost implements InterfaceStoreHost {
  setMessage: Nullable<SetMessageFn> = null;
  filterSubscribe: Nullable<FilterEvent> = null;
  filterUnSubscribe: Nullable<FilterEvent> = null;
  setOption: Nullable<HostOptionEventHandler> = null;

  init = (props: HostStore) => {
    const { setMessage, filterSubscribe, filterUnSubscribe, setOption } = props.storeHost;
    this.setMessage = setMessage;
    this.filterSubscribe = filterSubscribe;
    this.filterUnSubscribe = filterUnSubscribe;
    this.setOption = setOption;
  };

  sendMessage: SetMessageFn = (message, status) => {
    if (this.setMessage) {
      this.setMessage(message, status);
    }
  };

  subscribeInit: subscribeInitEventHandler = props => {
    if (this.filterSubscribe) {
      this.filterSubscribe(MODULE_NAME, props.callback);
    }
    if (this.setOption) {
      this.setOption(props.hostOption);
    }
  };

  unSubscribeInit = (callback: FilterEventCallback) => {
    if (this.filterUnSubscribe) {
      this.filterUnSubscribe(MODULE_NAME, callback);
    }
  };
}
```
<a id="localdev"></a>
##Локальная разработка
> npm start

По умолчанию приложение запуститься на порту `:5042`, настроить нужно через [env](#env)
```dotenv
[webpack-dev-server] Loopback: http://localhost:5042/
```
Если не доступно `host-приложение`, то можно запускать отдельно.
Имитация работы с `host-app` продемонстрирована в компоненте:
`src/pages/module-demo/ModuleDemo.tsx`

##API
Если не предоставлено/отсутствует `API`, рекомендуется использовать библиотек(JSON и т.п.).

ʕ ᵔᴥᵔ ʔ

