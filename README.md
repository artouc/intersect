# @osaxyz/intersect

## インストール

`npm install @osaxyz/intersect`

## どう動くか

`v-intersect="handleIntersept"`のように定義すると、要素が交差（Intersect）した際に関数が呼び出されます。

また、`entry`（交差情報）、`el`（交差したDOMの情報）を受け取ることができます。

## 使い方

1. `@osaxyz/intersect`から`intersectDirective`をインポートします・
2. `app.use`を利用して登録して下さい。

```js
import intersectDirective from '@osaxyz/intersect'
app.use(intersectDirective)

const handleIntersept = (entry, el) => {
    console.log(entry, el)
}
```

```html
<YourCustomElements v-intersept="handleIntersept">
```