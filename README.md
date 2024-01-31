# @osaxyz/intersect

## インストール

`npm install @osaxyz/intersect`

## どう動くか

`v-intersect="handleintersect"`のように定義すると、要素が交差（Intersect）した際に関数が呼び出されます。

また、`entry`（交差情報）、`el`（交差したDOMの情報）を受け取ることができます。

## 使い方

### Vue.jsの場合

1. `@osaxyz/intersect`から`intersectDirective`をインポートします・
2. `app.use`を利用して登録して下さい。

```js
import intersectDirective from '@osaxyz/intersect'
app.use(intersectDirective)

const handleintersect = (entry, el) => {
    console.log(entry, el)
}
```

### Nuxt.jsの場合
1. `plugins`配下に任意の名前のjsファイルを作成し、インポートします。
2. `defineNuxtPlugin` を用いて登録します。

```js
import { defineNuxtPlugin } from 'nuxt/app'
import intersectDirective from '@osaxyz/intersect'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(intersectDirective)
})
```

### コード

```html
<YourCustomElements v-intersect="handleintersect">
```