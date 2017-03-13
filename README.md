# YaasApiProductV2

> TypeScript abstraction library for RAML-based REST API [YaasApiProductV2](https://api.yaas.io/hybris/product/v2).

Auto-generated using [raml-typescript-generator](https://github.com/brainboutique/raml-typescript-generator). 

## Installation

```sh
npm install yaas-api-product-v2 --save
```

## Usage

### TypeScript
```ts
import {YaasApiProductV2} from 'yaas-api-product-v2';
...
constructor(..) {
  this.yaasApiProductV2 = new YaasApiProductV2({});
}
```

To support multiple versions of the API, it is recommended to alias the import so it can easily be mapped to a later API version - and, due to the nature of Typescript, 
you should be alerted on API signature changes already at compile time:

 ```ts
import {YaasApiProductV2 as YaasApiProduct} from 'yaas-api-product-v2';
 ```


### JS (Legacy)
API skeleton as it would be produced by MuleSoft's [raml-javascript-generator](https://github.com/mulesoft-labs/raml-javascript-generator) JS generator is shipped for reference and to ease migrations:
```js
var YaasApiProductV2 = require('yaas-api-product-v2/leagcy.js')

var client = new YaasApiProductV2()
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options per request by passing an object as the last argument of request methods. For example:

```javascript
client = new YaasApiProductV2({ ... })

client('GET', '/', {
  baseUri: 'https://api.yaas.io/hybris/product/anotherVersion',
  headers: {
    'Content-Type': 'application/json'
  }
})
```

For dynamic header injection - for example required for non-standard REST services asking for custom authentication token - a provider may be defined:

```javascript
client = new YaasApiProductV2({
  getHeaders: ()=>{ return(this.myToken ? {Authorization: "Bearer " + this.myToken} : {}) }
});
```

#### Base URI
By default, endpoint as defined in RAML file `https://api.yaas.io/hybris/product/v2` is used.

**Note** If supported by API provider, it is recommended to use one API version definition (i.e. RAML file and corresponding API TypeScript library) and switch endpoint based on the desired environment, for example `test`, `qa` or `prod`

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new YaasApiProductV2({
  baseUri: 'https://api.yaas.io/hybris/product/anotherVersion',
});
```


### Methods

All methods return an Observable wrapping a [Popsicle](https://github.com/blakeembrey/popsicle) obtained response:

#### `tenant({ tenant }).products.get([query, [options]])`

* **tenant** (type: `string`)

Get all products.

Accepted scopes:

  * `hybris.product_read_unpublished` - required to retrieve non-public products. If not provided only published products are returned

```js
client.tenant({ tenant }).products.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.post([body, [options]])`

* **tenant** (type: `string`)

Create new product.

Accepted scopes:

  * `hybris.product_create` - mandatory
  * `hybris.product_publish` - required if product is created as published (by providing published flag true )

```js
client.tenant({ tenant }).products.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.delete([body, [options]])`

* **tenant** (type: `string`)

Delete all Product entities.

Accepted scopes:

* `hybris.product_delete_all` - mandatory

```js
client.tenant({ tenant }).products.delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Retrieves a single product.

YRN: `urn:yaas:hybris:product:product:{tenant};{productId}`

Accepted scopes:

* `hybris.product_read_unpublished` - required to retrieve non-public product

```js
client.tenant({ tenant }).products.productId({ productId }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).put([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Update a single product.

Accepted scopes:

* `hybris.product_update` - required to update product data
* `hybris.product_publish` - required to publish the product (by setting `published` flag to `true`)
* `hybris.product_unpublish` - required to unpublish the product (by setting `published` flag to `false`)

```js
client.tenant({ tenant }).products.productId({ productId }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).delete([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Delete a single Product entity.

Accepted scopes:

* `hybris.product_delete` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.post([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Initialize process of creating new media file for product

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).media.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Return metadata of media files. The list is ordered according to the "position" attribute set in the file metadata.

Accepted scopes:

* `hybris.product_read_unpublished` - required to retrieve media metadata of non-public product

```js
client.tenant({ tenant }).products.productId({ productId }).media.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **mediaId** (type: `string`)

Return media file metadata by ID.

YRN: `urn:yaas:hybris:product:product-media:{tenant};{productId};{mediaId}`

Accepted scope:

* `hybris.product_read_unpublished` - to retrieve media metadata of non-public product

```js
client.tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).put([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **mediaId** (type: `string`)

Update media file metadata. Note that only part of the metadata field can be updated.

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).delete([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **mediaId** (type: `string`)

Delete media identified by media ID.

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).commit.post([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **mediaId** (type: `string`)

Confirms that the media file specified by the media id is updated and ready to be used with product.

Accepted scope:

* `hybris.product_update` - required to attach media to product

```js
client.tenant({ tenant }).products.productId({ productId }).media.mediaId({ mediaId }).commit.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Get all variants for product.

Accepted scopes:

  * `hybris.product_read_unpublished` - required to retrieve variants of non-public product. If not provided only variants of published product are returned

```js
client.tenant({ tenant }).products.productId({ productId }).variants.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.post([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Create new product variant.

Accepted scopes:

  * `hybris.product_create` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.delete([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)

Delete all variants entities for specified product id.

Accepted scopes:

* `hybris.product_delete` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)

Retrieve a single product variant.

YRN: `urn:yaas:hybris:product:product-variant:{tenant};{productId};{variantId}`

Accepted scopes:

* `hybris.product_read_unpublished` - required to retrieve non-public product variants

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).put([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)

Replace a single product variant.

Accepted scopes:

* `hybris.product_update` - required to update product variant data

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).delete([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)

Delete a single Product variant entity.

Accepted scopes:

* `hybris.product_delete` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.post([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)

Initialize process of creating new media file for variant

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)

Return metadata of media files. The list is ordered according to the "position" attribute set in the file metadata.

Accepted scopes:

* `hybris.product_read_unpublished` - required to retrieve media metadata of a variant that belongs to a non-public product

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).get([query, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)
* **mediaId** (type: `string`)

Return media file metadata by ID.

YRN: `urn:yaas:hybris:product:product-variant-media:{tenant};{productId};{variantId};{mediaId}`

Accepted scope:

* `hybris.product_read_unpublished` - to retrieve media metadata of a variant that belongs to a non-public product

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).put([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)
* **mediaId** (type: `string`)

Update product variant media file metadata. Note that only part of the metadata field can be updated.

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).delete([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)
* **mediaId** (type: `string`)

Delete media identified by media ID.

Accepted scopes:

* `hybris.product_update` - mandatory

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).commit.post([body, [options]])`

* **tenant** (type: `string`)
* **productId** (type: `string`)
* **variantId** (type: `string`)
* **mediaId** (type: `string`)

Confirms that the media file specified by the media id is updated and ready to be used with product variant.

Accepted scope:

* `hybris.product_update` - required to attach media to product variant

```js
client.tenant({ tenant }).products.productId({ productId }).variants.variantId({ variantId }).media.mediaId({ mediaId }).commit.post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).variants.get([query, [options]])`

* **tenant** (type: `string`)

Get variants by code or id. If user provides ids and codes only the variants that fulfill both restrictions will be returned.

Accepted scopes:

  * `hybris.product_read_unpublished` - required to retrieve variants of non-public product. If not provided only variants of published product are returned

```js
client.tenant({ tenant }).variants.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).search.post([body, [options]])`

* **tenant** (type: `string`)

Search products and variants by yrn.
If you would like to embed product data into requested variant then use params.variant.expand parameter with value **product**.
Using fields parameter user can limit the properties returned with response entities. If you would like to limit the properties of product embedded in variant, use params.variant.fields parameters prefixed with **product.**, please see the example for more details.

Accepted scopes:

  * `hybris.product_read_unpublished` - required to retrieve non-public products and variants. If not provided only published products or variants are returned

```js
client.tenant({ tenant }).search.post([body, [options]]).then(...)
```
  
## License

Apache 2.0
