/// <reference types="@types/es6-shim" />
//========================================================================
// RAML-defined Typed REST Client for 'YaasApiProductV2'
//========================================================================

import * as popsicle from 'popsicle';
import * as extend from 'deep-extend';
import {Observable} from '@reactivex/rxjs';


//========================================================================
// Schema 'errorMessage'
//========================================================================
export namespace ErrorMessage {
   /**
    * schema for specific error cause
    */
   export interface ErrorDetail {
     /**
      * a bean notation expression specifying the element in request data causing the error, eg product.variants[3].name, this can be empty if violation was not field specific
      */
     field?: string;
     /**
      * classification of the error detail type, lower case with underscore eg missing_value, this value must be always interpreted in context of the general error type.
      */
     type: string;
     /**
      * descriptive error detail message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support for error detail
      */
     moreInfo?: string;
     [k: string]: any;
   }
   /**
    * Schema for API specified errors.
    */
   export interface ErrorMessage {
     /**
      * original HTTP error code, should be consistent with the response HTTP code
      */
     status: number;
     /**
      * classification of the error type, lower case with underscore eg validation_failure
      */
     type: string;
     /**
      * descriptive error message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support
      */
     moreInfo?: string;
     /**
      * list of problems causing this error
      */
     details?: ErrorDetail[];
     [k: string]: any;
   }
}


//========================================================================
// Schema 'YRN'
//========================================================================
export namespace Yrn {
   export type Yrn = string;
}


//========================================================================
// Schema 'mediaMetadata'
//========================================================================
export namespace MediaMetadata {
   export type YrnAttribute = string;
   /**
    * Media file metadata
    */
   export interface MediaMetadata {
     id?: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn?: YrnAttribute;
     /**
      * ISO 8601 format date in which the media metadata was created.
      */
     createdAt?: string;
     /**
      * URL of file content
      */
     url?: string;
     /**
      * Media file tags
      */
     tags?: string[];
     /**
      * MIME type of the media file
      */
     contentType?: string;
     /**
      * Link on which user should upload (PUT) media file.
      */
     uploadLink?: string;
     /**
      * If true, the media file is not committed yet. If property is set to false or is not present the media is already committed
      */
     uncommittedMedia?: boolean;
     /**
      * Map of custom attributes. The map key is a string, the value can be any JSON object
      */
     customAttributes?: any;
   }
}


//========================================================================
// Schema 'mediaMetadataCollection'
//========================================================================
export namespace MediaMetadataCollection {
   export type YrnAttribute = string;
   export type MediaMetadataCollection = {
     id?: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn?: YrnAttribute;
     /**
      * ISO 8601 format date in which the media metadata was created.
      */
     createdAt?: string;
     /**
      * URL of file content
      */
     url?: string;
     /**
      * Media file tags
      */
     tags?: string[];
     /**
      * MIME type of the media file
      */
     contentType?: string;
     /**
      * Link on which user should upload (PUT) media file.
      */
     uploadLink?: string;
     /**
      * If true, the media file is not committed yet. If property is set to false or is not present the media is already committed
      */
     uncommittedMedia?: boolean;
     /**
      * Map of custom attributes. The map key is a string, the value can be any JSON object
      */
     customAttributes?: any;
   }[];
}


//========================================================================
// Schema 'mediaMetadataCreation'
//========================================================================
export namespace MediaMetadataCreation {
   /**
    * Media file metadata
    */
   export interface MediaMetadataCreation {
     /**
      * Media file tags
      */
     tags?: string[];
     /**
      * Media order is set based on position property. Position is indexed from 0. If value is <= 0 the media is ordered as first. If value is higher that media count or is not specified the media is ordered as last. When retrieving product media they are ordered, but position property is not returned as it is not persisted
      */
     position?: number;
     /**
      * MIME type of the file. The provided content type should be the same as the Content-Type header provided during media update, otherwise the update will fail
      */
     contentType: string;
     /**
      * Map of custom attributes. The map key should be a string, the value can be any JSON object
      */
     customAttributes?: any;
   }
}


//========================================================================
// Schema 'mediaMetadataUpdate'
//========================================================================
export namespace MediaMetadataUpdate {
   /**
    * Schema to update media file metadata
    */
   export interface MediaMetadataUpdate {
     /**
      * Media file tags
      */
     tags?: string[];
     /**
      * Media order is set based on position property. Position is indexed from 0. If value is <= 0 the media is ordered as first. If value is higher that media count or is not specified the media is ordered as last. When retrieving product media they are ordered, but position property value is not returned as it is not persisted
      */
     position?: number;
     /**
      * Map of custom attributes. The map key should be a string, the value can be any JSON object
      */
     customAttributes?: any;
   }
}


//========================================================================
// Schema 'productCreation'
//========================================================================
export namespace ProductCreation {
   export type Localized = any;
   export interface ProductCreation {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       variants?: {
         options?: {
           [k: string]: string;
         };
       };
     };
     /**
      * Unique identifier
      */
     id?: string;
     /**
      * Unique, mandatory user-defined identifier of a product
      */
     code: string;
     /**
      * The name of the product.
      */
     name: Localized;
     /**
      * The description of the product.
      */
     description?: Localized;
     /**
      * This flag determines if product is live.
      */
     published?: boolean;
     mixins?: Object;
   }
}


//========================================================================
// Schema 'productUpdate'
//========================================================================
export namespace ProductUpdate {
   export type Localized = any;
   export interface ProductUpdate {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       variants?: {
         options?: {
           [k: string]: string;
         };
       };
     };
     /**
      * Unique, mandatory user-defined identifier of a product
      */
     code: string;
     /**
      * The name of the product.
      */
     name: Localized;
     /**
      * The description of the product.
      */
     description?: Localized;
     /**
      * This flag determines if product is live.
      */
     published?: boolean;
     mixins?: Object;
   }
}


//========================================================================
// Schema 'product'
//========================================================================
export namespace Product {
   export type YrnAttribute = string;
   export type Localized = any;
   export interface Product {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       variants?: {
         options?: {
           [k: string]: string;
         };
         mixins?: {
           [k: string]: string;
         };
       };
       version?: number;
       /**
        * ISO 8601 format date in which the product was created.
        */
       createdAt?: string;
       /**
        * ISO 8601 format date in which the product was modified.
        */
       modifiedAt?: string;
     };
     /**
      * Unique identifier
      */
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     /**
      * Unique, mandatory user-defined identifier of a product
      */
     code?: string;
     /**
      * The name of the product.
      */
     name?: Localized;
     /**
      * The description of the product.
      */
     description?: Localized;
     /**
      * This flag determines if product is live.
      */
     published?: boolean;
     /**
      * Contains media information (including url). This attribute is Read-Only, to manage media collection please use the /media subresource. To get this attribute included in product please add the expand=media query param. By default this attribute is not returned with product.
      */
     media?: {
       id?: string;
       /**
        * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
        */
       yrn?: YrnAttribute;
       mediaId?: string;
       /**
        * URL of file content
        */
       url?: string;
       /**
        * Media file tags
        */
       tags?: string[];
       /**
        * MIME type of the media file
        */
       contentType?: string;
       /**
        * If true, the media file is stored in the service. Otherwise the service only stores external URL of the file and metadata.
        */
       stored?: boolean;
       /**
        * Date of media metadata creation.
        */
       createdAt?: string;
       /**
        * Contains link which is used when user triggers media commit operation. This link is not returned to user as product service internally triggers the commit
        */
       commitLink?: string;
       /**
        * Contains link on which user should send media for upload before he triggers the commit operation
        */
       uploadLink?: string;
       /**
        * If true, the media file is not committed yet. Not committed media does no have url property provided
        */
       uncommittedMedia?: boolean;
     }[];
     mixins?: Object;
   }
}


//========================================================================
// Schema 'products'
//========================================================================
export namespace Products {
   export type YrnAttribute = string;
   export type Localized = any;
   export type Products = {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       variants?: {
         options?: {
           [k: string]: string;
         };
         mixins?: {
           [k: string]: string;
         };
       };
       version?: number;
       /**
        * ISO 8601 format date in which the product was created.
        */
       createdAt?: string;
       /**
        * ISO 8601 format date in which the product was modified.
        */
       modifiedAt?: string;
     };
     /**
      * Unique identifier
      */
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     /**
      * Unique, mandatory user-defined identifier of a product
      */
     code?: string;
     /**
      * The name of the product.
      */
     name?: Localized;
     /**
      * The description of the product.
      */
     description?: Localized;
     /**
      * This flag determines if product is live.
      */
     published?: boolean;
     /**
      * Contains media information (including url). This attribute is Read-Only, to manage media collection please use the /media subresource. To get this attribute included in product please add the expand=media query param. By default this attribute is not returned with product.
      */
     media?: {
       id?: string;
       /**
        * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
        */
       yrn?: YrnAttribute;
       mediaId?: string;
       /**
        * URL of file content
        */
       url?: string;
       /**
        * Media file tags
        */
       tags?: string[];
       /**
        * MIME type of the media file
        */
       contentType?: string;
       /**
        * If true, the media file is stored in the service. Otherwise the service only stores external URL of the file and metadata.
        */
       stored?: boolean;
       /**
        * Date of media metadata creation.
        */
       createdAt?: string;
       /**
        * Contains link which is used when user triggers media commit operation. This link is not returned to user as product service internally triggers the commit
        */
       commitLink?: string;
       /**
        * Contains link on which user should send media for upload before he triggers the commit operation
        */
       uploadLink?: string;
       /**
        * If true, the media file is not committed yet. Not committed media does no have url property provided
        */
       uncommittedMedia?: boolean;
     }[];
     mixins?: Object;
   }[];
}


//========================================================================
// Schema 'resourceLocation'
//========================================================================
export namespace ResourceLocation {
   export type YrnAttribute = string;
   export interface ResourceLocation {
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     link: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'mediaLocation'
//========================================================================
export namespace MediaLocation {
   export type YrnAttribute = string;
   export interface MediaLocation {
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     uploadLink: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'tenantAction'
//========================================================================
export namespace TenantAction {
   export interface TenantAction {
     tenant: string;
     action: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'genericResponse'
//========================================================================
export namespace GenericResponse {
   export interface GenericResponse {
     code: string;
     status?: string;
     message?: string;
     data?: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'productVariant'
//========================================================================
export namespace ProductVariant {
   export type YrnAttribute = string;
   export type Localized = any;
   export interface ProductVariant {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       version?: number;
       /**
        * ISO 8601 format date in which the product variant was created.
        */
       createdAt?: string;
       /**
        * ISO 8601 format date in which the product variant was modified.
        */
       modifiedAt?: string;
     };
     /**
      * Unique identifier
      */
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     /**
      * Unique, mandatory user-defined identifier of a product variant
      */
     code?: string;
     /**
      * The name of the product variant.
      */
     name?: Localized;
     options?: Object;
     /**
      * Contains media information (including url). This attribute is Read-Only, to manage media collection please use the /media subresource. To get this attribute included in product please add the expand=media query param. By default this attribute is not returned with product.
      */
     media?: {
       id?: string;
       /**
        * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
        */
       yrn?: YrnAttribute;
       mediaId?: string;
       /**
        * URL of file content
        */
       url?: string;
       /**
        * Media file tags
        */
       tags?: string[];
       /**
        * MIME type of the media file
        */
       contentType?: string;
       /**
        * If true, the media file is stored in the service. Otherwise the service only stores external URL of the file and metadata.
        */
       stored?: boolean;
       /**
        * Date of media metadata creation.
        */
       createdAt?: string;
       /**
        * Contains link which is used when user triggers media commit operation. This link is not returned to user as product service internally triggers the commit
        */
       commitLink?: string;
       /**
        * Contains link on which user should send media for upload before he triggers the commit operation
        */
       uploadLink?: string;
       /**
        * If true, the media file is not committed yet. Not committed media does no have url property provided
        */
       uncommittedMedia?: boolean;
     }[];
     mixins?: Object;
     /**
      * This flag determines if variant is a default variant.
      */
     default?: boolean;
   }
}


//========================================================================
// Schema 'productVariantWithProduct'
//========================================================================
export namespace ProductVariantWithProduct {
   export type YrnAttribute = string;
   export type Localized = any;
   export interface ProductVariantWithProduct {
     /**
      * Product identifier
      */
     productId?: string;
     /**
      * Unique identifier
      */
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     /**
      * Unique, mandatory user-defined identifier of a product variant
      */
     code?: string | null;
     /**
      * The name of the product variant.
      */
     name?: Localized;
     options?: Object;
     /**
      * This flag determines if variant is a default variant.
      */
     default?: boolean;
     product?: {
       metadata?: {
         mixins?: {
           [k: string]: string;
         };
         variants?: {
           options?: {
             [k: string]: string;
           };
           mixins?: {
             [k: string]: string;
           };
         };
         version?: number;
         /**
          * ISO 8601 format date in which the product was created.
          */
         createdAt?: string;
         /**
          * ISO 8601 format date in which the product was modified.
          */
         modifiedAt?: string;
       };
       /**
        * Unique identifier
        */
       id: string;
       /**
        * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
        */
       yrn: YrnAttribute;
       /**
        * Unique, mandatory user-defined identifier of a product
        */
       code?: string;
       /**
        * The name of the product.
        */
       name?: Localized;
       /**
        * The description of the product.
        */
       description?: Localized;
       /**
        * This flag determines if product is live.
        */
       published?: boolean;
       /**
        * Contains media information (including url). This attribute is Read-Only, to manage media collection please use the /media subresource. To get this attribute included in product please add the expand=media query param. By default this attribute is not returned with product.
        */
       media?: {
         id?: string;
         /**
          * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
          */
         yrn?: YrnAttribute;
         mediaId?: string;
         /**
          * URL of file content
          */
         url?: string;
         /**
          * Media file tags
          */
         tags?: string[];
         /**
          * MIME type of the media file
          */
         contentType?: string;
         /**
          * If true, the media file is stored in the service. Otherwise the service only stores external URL of the file and metadata.
          */
         stored?: boolean;
         /**
          * Date of media metadata creation.
          */
         createdAt?: string;
         /**
          * Contains link which is used when user triggers media commit operation. This link is not returned to user as product service internally triggers the commit
          */
         commitLink?: string;
         /**
          * Contains link on which user should send media for upload before he triggers the commit operation
          */
         uploadLink?: string;
         /**
          * If true, the media file is not committed yet. Not committed media does no have url property provided
          */
         uncommittedMedia?: boolean;
       }[];
       mixins?: Object;
     };
   }
}


//========================================================================
// Schema 'productVariants'
//========================================================================
export namespace ProductVariants {
   export type YrnAttribute = string;
   export type Localized = any;
   export type ProductVariants = {
     metadata?: {
       mixins?: {
         [k: string]: string;
       };
       version?: number;
       /**
        * ISO 8601 format date in which the product variant was created.
        */
       createdAt?: string;
       /**
        * ISO 8601 format date in which the product variant was modified.
        */
       modifiedAt?: string;
     };
     /**
      * Unique identifier
      */
     id: string;
     /**
      * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
      */
     yrn: YrnAttribute;
     /**
      * Unique, mandatory user-defined identifier of a product variant
      */
     code?: string;
     /**
      * The name of the product variant.
      */
     name?: Localized;
     options?: Object;
     /**
      * Contains media information (including url). This attribute is Read-Only, to manage media collection please use the /media subresource. To get this attribute included in product please add the expand=media query param. By default this attribute is not returned with product.
      */
     media?: {
       id?: string;
       /**
        * Contains the YaaS Resource Name (YRN) of a specific resource on base of the 'yaas' URN scheme
        */
       yrn?: YrnAttribute;
       mediaId?: string;
       /**
        * URL of file content
        */
       url?: string;
       /**
        * Media file tags
        */
       tags?: string[];
       /**
        * MIME type of the media file
        */
       contentType?: string;
       /**
        * If true, the media file is stored in the service. Otherwise the service only stores external URL of the file and metadata.
        */
       stored?: boolean;
       /**
        * Date of media metadata creation.
        */
       createdAt?: string;
       /**
        * Contains link which is used when user triggers media commit operation. This link is not returned to user as product service internally triggers the commit
        */
       commitLink?: string;
       /**
        * Contains link on which user should send media for upload before he triggers the commit operation
        */
       uploadLink?: string;
       /**
        * If true, the media file is not committed yet. Not committed media does no have url property provided
        */
       uncommittedMedia?: boolean;
     }[];
     mixins?: Object;
     /**
      * This flag determines if variant is a default variant.
      */
     default?: boolean;
   }[];
}


//========================================================================
// Schema 'productVariantCreation'
//========================================================================
export namespace ProductVariantCreation {
   export type Localized = any;
   export interface ProductVariantCreation {
     /**
      * Unique, mandatory user-defined identifier of a product variant
      */
     code: string;
     /**
      * The name of the product variant.
      */
     name?: Localized;
     options?: Object;
     /**
      * This flag determines if variant is a default variant.
      */
     default?: boolean;
   }
}


//========================================================================
// Schema 'productVariantUpdate'
//========================================================================
export namespace ProductVariantUpdate {
   export type Localized = any;
   export interface ProductVariantUpdate {
     /**
      * Unique, mandatory user-defined identifier of a product variant
      */
     code: string;
     /**
      * The name of the product variant.
      */
     name?: Localized;
     options?: Object;
     /**
      * This flag determines if variant is a default variant.
      */
     default?: boolean;
   }
}


//========================================================================
// Schema 'searchQuery'
//========================================================================
export namespace SearchQuery {
   export type YrnAttribute = string;
   export interface SearchQuery {
     /**
      * List of yrns. Each yrn identifies either product or product variant
      */
     yrns: YrnAttribute[];
     /**
      * Optional query params
      */
     params?: {
       /**
        * Optional query params for products
        */
       product?: {
         /**
          * Optional projection for product
          */
         fields?: string;
         [k: string]: any;
       };
       /**
        * Optional query params for product variant
        */
       variant?: {
         /**
          * Optional projection for product variant
          */
         fields?: string;
         /**
          * Optional expand option for product variants
          */
         expand?: "product";
         [k: string]: any;
       };
       [k: string]: any;
     };
   }
}


//========================================================================
// Schema 'searchQueryResult'
//========================================================================
export namespace SearchQueryResult {
   export type SearchQueryResult = any[];
}


//========================================================================
// Schema 'notEmptyLocalizedAttribute'
//========================================================================
export namespace NotEmptyLocalizedAttribute {
   export type NotEmptyLocalizedAttribute = any;
}


//========================================================================
// Schema 'nullableLocalizedAttribute'
//========================================================================
export namespace NullableLocalizedAttribute {
   export type NullableLocalizedAttribute = any;
}


//========================================================================
// Actions
//========================================================================


var TEMPLATE_REGEXP = /{([^{}]+)}/g

function template(string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}  

 export class YaasApiProductV2 {
  _client: any;
  _path: string;
  _options: any;
  _form: any;
  _version: any;
  _Security: any;

  // RAML resources without parameters


  constructor(options?:any) {
    this._path = ''
    this._options = extend({
      baseUri: 'https://api.eu.yaas.io/hybris/product/v2',
      baseUriParameters: {}
    }, options)
  
    //function client (method, path, options) {
    //  return this.request(client, method, path, options)
    //}
    
    // Initialize RAML resourcs without parameters

    this._client=this;
    this._form = popsicle.form
    this._version = 'v2'
    this._Security = {

    }
  // RAML resources with parameters
  

}

 request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: extend(options.headers, options.getHeaders ? options.getHeaders() : {}),
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}


// createProtoResources - Resource: Client
tenant(tenant:string) { return new Resources.Tenant(this._client, this._path + template('/{tenant}', extend({}, {tenant:tenant}))) }
}
export module Resources {
  // createResource - Tenant
  export class Tenant { 
    _client: any; _path: string;
    products:Tenant.TenantProducts;
    constructor(client, path) {
      this._client = client
      this._path = path
    this.products = new Tenant.TenantProducts(this._client, this._path + '/products')
    }
  }
  export module Tenant { 
    // createResource - TenantProducts
    export class TenantProducts { 
      _client: any; _path: string;
      constructor(client, path) {
        this._client = client
        this._path = path
      }
    // createProtoResources - Resource: TenantProducts
    productId(productId:string) { return new Tenant.TenantProducts.TenantProductsProductId(this._client, this._path + template('/{productId}', extend({}, {productId:productId}))) }
      /**
       * GET on TenantProducts
       */
      GET(fields?:string, q?:string, sort?:string, pageNumber?:number, pageSize?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           if (fields !== undefined && fields !== null) options.query['fields']=fields;
           if (q !== undefined && q !== null) options.query['q']=q;
           if (sort !== undefined && sort !== null) options.query['sort']=sort;
           if (pageNumber !== undefined && pageNumber < 1) { observer.error('Parameter \'pageNumber\' outside specified range!'); return;}
           if (pageNumber !== undefined && pageNumber !== null) options.query['pageNumber']=pageNumber;
           if (pageSize !== undefined && pageSize < 1) { observer.error('Parameter \'pageSize\' outside specified range!'); return;}
           if (pageSize !== undefined && pageSize !== null) options.query['pageSize']=pageSize;
           this._client.request(this._client, 'get', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
      /**
       * POST on TenantProducts
       */
      POST(body:any /* Implicitly defined schemas not yet supported */, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_201":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           options.body=body;
           this._client.request(this._client, 'post', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
      /**
       * DELETE on TenantProducts
       */
      DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'delete', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
    }
    export module TenantProducts { 
      // createResource - TenantProductsProductId
      export class TenantProductsProductId { 
        _client: any; _path: string;
        media:Tenant.TenantProducts.TenantProductsProductId.TenantProductsProductIdMedia;
        constructor(client, path) {
          this._client = client
          this._path = path
        this.media = new Tenant.TenantProducts.TenantProductsProductId.TenantProductsProductIdMedia(this._client, this._path + '/media')
        }
        /**
         * GET on TenantProductsProductId
         */
        GET(fields?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             if (fields !== undefined && fields !== null) options.query['fields']=fields;
             this._client.request(this._client, 'get', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
        /**
         * PUT on TenantProductsProductId
         */
        PUT(body:any /* Implicitly defined schemas not yet supported */, partial?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             if (partial !== undefined && partial !== null) options.query['partial']=partial;
             options.body=body;
             this._client.request(this._client, 'put', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
        /**
         * DELETE on TenantProductsProductId
         */
        DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             this._client.request(this._client, 'delete', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
      }
      export module TenantProductsProductId { 
        // createResource - TenantProductsProductIdMedia
        export class TenantProductsProductIdMedia { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
        // createProtoResources - Resource: TenantProductsProductIdMedia
        mediaId(mediaId:string) { return new Tenant.TenantProducts.TenantProductsProductId.TenantProductsProductIdMedia.TenantProductsProductIdMediaMediaId(this._client, this._path + template('/{mediaId}', extend({}, {mediaId:mediaId}))) }
          /**
           * POST on TenantProductsProductIdMedia
           */
          POST(body:any /* Implicitly defined schemas not yet supported */, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               options.body=body;
               this._client.request(this._client, 'post', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * GET on TenantProductsProductIdMedia
           */
          GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'get', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantProductsProductIdMedia { 
          // createResource - TenantProductsProductIdMediaMediaId
          export class TenantProductsProductIdMediaMediaId { 
            _client: any; _path: string;
            commit:Tenant.TenantProducts.TenantProductsProductId.TenantProductsProductIdMedia.TenantProductsProductIdMediaMediaId.TenantProductsProductIdMediaMediaIdCommit;
            constructor(client, path) {
              this._client = client
              this._path = path
            this.commit = new Tenant.TenantProducts.TenantProductsProductId.TenantProductsProductIdMedia.TenantProductsProductIdMediaMediaId.TenantProductsProductIdMediaMediaIdCommit(this._client, this._path + '/commit')
            }
            /**
             * GET on TenantProductsProductIdMediaMediaId
             */
            GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 this._client.request(this._client, 'get', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * PUT on TenantProductsProductIdMediaMediaId
             */
            PUT(body:any /* Implicitly defined schemas not yet supported */, partial?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 if (partial !== undefined && partial !== null) options.query['partial']=partial;
                 options.body=body;
                 this._client.request(this._client, 'put', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * DELETE on TenantProductsProductIdMediaMediaId
             */
            DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 this._client.request(this._client, 'delete', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
          }
          export module TenantProductsProductIdMediaMediaId { 
            // createResource - TenantProductsProductIdMediaMediaIdCommit
            export class TenantProductsProductIdMediaMediaIdCommit { 
              _client: any; _path: string;
              constructor(client, path) {
                this._client = client
                this._path = path
              }
              /**
               * POST on TenantProductsProductIdMediaMediaIdCommit
               */
              POST(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_202":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */,"_500":any  /* Implicitly defined schemas not yet supported */,"_503":any  /* Implicitly defined schemas not yet supported */}> {
                return Observable.create((observer) => {
                   var options = extend({query:{}, headers: {} }, opts)
                   this._client.request(this._client, 'post', this._path, options)
                     .use(popsicle.plugins.parse('json'))
                     .then(response => {
                         var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                         r["_"+response.status]=response.body; 
                         observer.next(r);observer.complete()
                  })
                })
              }
            }
            export module TenantProductsProductIdMediaMediaIdCommit { 
            }
          }
        }
      }
    }
  }
}
