var popsicle = require('popsicle')
var extend = require('deep-extend')
var setprototypeof = require('setprototypeof')

var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

module.exports = Client

function template (string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}

function request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: options.headers,
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}

function Client (options) {
  this._path = ''
  this._options = extend({
    baseUri: 'https://api.yaas.io/hybris/product/v2',
    baseUriParameters: {}
  }, options)

  function client (method, path, options) {
    return request(client, method, path, options)
  }

// ### ctr 1
  this._client=client;
  setprototypeof(client, this)
  return client
}

Client.form = popsicle.form
Client.version = 'v2'
Client.Security = {
}
Client.prototype.tenant = function (uriParams) { return new Tenant(this._client, this._path + template('/{tenant}', extend({}, uriParams))) }
function Tenant (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.products = new TenantProducts(this._client, this._path + '/products')
// ### createProtoResources
  this.variants = new TenantVariants(this._client, this._path + '/variants')
// ### createProtoResources
  this.search = new TenantSearch(this._client, this._path + '/search')
}
function TenantProducts (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProducts.prototype.productId = function (uriParams) { return new TenantProductsProductId(this._client, this._path + template('/{productId}', extend({}, uriParams))) }
TenantProducts.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProducts.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantProducts.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.media = new TenantProductsProductIdMedia(this._client, this._path + '/media')
// ### createProtoResources
  this.variants = new TenantProductsProductIdVariants(this._client, this._path + '/variants')
}
TenantProductsProductId.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProductsProductId.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantProductsProductId.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductIdMedia (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProductsProductIdMedia.prototype.mediaId = function (uriParams) { return new TenantProductsProductIdMediaMediaId(this._client, this._path + template('/{mediaId}', extend({}, uriParams))) }
TenantProductsProductIdMedia.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantProductsProductIdMedia.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantProductsProductIdMediaMediaId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.commit = new TenantProductsProductIdMediaMediaIdCommit(this._client, this._path + '/commit')
}
TenantProductsProductIdMediaMediaId.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProductsProductIdMediaMediaId.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantProductsProductIdMediaMediaId.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductIdMediaMediaIdCommit (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProductsProductIdMediaMediaIdCommit.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function TenantProductsProductIdVariants (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProductsProductIdVariants.prototype.variantId = function (uriParams) { return new TenantProductsProductIdVariantsVariantId(this._client, this._path + template('/{variantId}', extend({}, uriParams))) }
TenantProductsProductIdVariants.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProductsProductIdVariants.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantProductsProductIdVariants.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductIdVariantsVariantId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.media = new TenantProductsProductIdVariantsVariantIdMedia(this._client, this._path + '/media')
}
TenantProductsProductIdVariantsVariantId.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProductsProductIdVariantsVariantId.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantProductsProductIdVariantsVariantId.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductIdVariantsVariantIdMedia (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProductsProductIdVariantsVariantIdMedia.prototype.mediaId = function (uriParams) { return new TenantProductsProductIdVariantsVariantIdMediaMediaId(this._client, this._path + template('/{mediaId}', extend({}, uriParams))) }
TenantProductsProductIdVariantsVariantIdMedia.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantProductsProductIdVariantsVariantIdMedia.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantProductsProductIdVariantsVariantIdMediaMediaId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.commit = new TenantProductsProductIdVariantsVariantIdMediaMediaIdCommit(this._client, this._path + '/commit')
}
TenantProductsProductIdVariantsVariantIdMediaMediaId.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantProductsProductIdVariantsVariantIdMediaMediaId.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantProductsProductIdVariantsVariantIdMediaMediaId.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantProductsProductIdVariantsVariantIdMediaMediaIdCommit (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantProductsProductIdVariantsVariantIdMediaMediaIdCommit.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function TenantVariants (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantVariants.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantSearch (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantSearch.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
