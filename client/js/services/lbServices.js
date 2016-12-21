// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Customer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Customers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for contents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contents
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__contents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/contents/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for contents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contents
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__contents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/contents/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for contents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contents
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__contents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/contents/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/likes/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/likes/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.campaigns.findById() instead.
            "prototype$__findById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.campaigns.destroyById() instead.
            "prototype$__destroyById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.campaigns.updateById() instead.
            "prototype$__updateById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.playerjoueurs.findById() instead.
            "prototype$__findById__playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.playerjoueurs.destroyById() instead.
            "prototype$__destroyById__playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.playerjoueurs.updateById() instead.
            "prototype$__updateById__playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Customers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries contents of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__contents": {
              isArray: true,
              url: urlBase + "/Customers/:id/contents",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in contents of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__contents": {
              url: urlBase + "/Customers/:id/contents",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all contents of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__contents": {
              url: urlBase + "/Customers/:id/contents",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__contents
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts contents of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__contents": {
              url: urlBase + "/Customers/:id/contents/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries likes of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/Customers/:id/likes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__likes": {
              url: urlBase + "/Customers/:id/likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__likes": {
              url: urlBase + "/Customers/:id/likes",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__likes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts likes of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__likes": {
              url: urlBase + "/Customers/:id/likes/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.campaigns() instead.
            "prototype$__get__campaigns": {
              isArray: true,
              url: urlBase + "/Customers/:id/campaigns",
              method: "GET",
            },

            // INTERNAL. Use Customer.campaigns.create() instead.
            "prototype$__create__campaigns": {
              url: urlBase + "/Customers/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use Customer.campaigns.destroyAll() instead.
            "prototype$__delete__campaigns": {
              url: urlBase + "/Customers/:id/campaigns",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.campaigns.count() instead.
            "prototype$__count__campaigns": {
              url: urlBase + "/Customers/:id/campaigns/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.playerjoueurs() instead.
            "prototype$__get__playerjoueurs": {
              isArray: true,
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "GET",
            },

            // INTERNAL. Use Customer.playerjoueurs.create() instead.
            "prototype$__create__playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "POST",
            },

            // INTERNAL. Use Customer.playerjoueurs.destroyAll() instead.
            "prototype$__delete__playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.playerjoueurs.count() instead.
            "prototype$__count__playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#create
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createMany
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Customers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Customers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#upsertWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Customers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#exists
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Customers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Customers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Customers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#find
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findOne
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Customers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAll
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Customers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#deleteById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Customers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#count
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Customers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$patchAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Customers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createChangeStream
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Customers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#login
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Customers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#logout
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Customers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#confirm
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Customers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#resetPassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Customers/reset",
              method: "POST",
            },

            // INTERNAL. Use News.author() instead.
            "::get::News::author": {
              url: urlBase + "/News/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.author() instead.
            "::get::Rencontre::author": {
              url: urlBase + "/Rencontres/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Campaign.author() instead.
            "::get::Campaign::author": {
              url: urlBase + "/Campaigns/:id/author",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.author() instead.
            "::get::PlayerJoueur::author": {
              url: urlBase + "/PlayerJoueurs/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Story.author() instead.
            "::get::Story::author": {
              url: urlBase + "/Stories/:id/author",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getCurrent
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Customers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Customer#upsert
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreateWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#update
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#destroyById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#removeById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCachedCurrent
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Customer#login} or
         * {@link lbServices.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#isAuthenticated
         * @methodOf lbServices.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCurrentId
         * @methodOf lbServices.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Customer#modelName
        * @propertyOf lbServices.Customer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Customer`.
        */
        R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.campaigns
     * @header lbServices.Customer.campaigns
     * @object
     * @description
     *
     * The object `Customer.campaigns` groups methods
     * manipulating `Campaign` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#campaigns Customer.campaigns()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#campaigns
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries campaigns of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::get::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#count
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Counts campaigns of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.campaigns.count = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::count::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#create
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Creates a new instance in campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.create = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::create::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#createMany
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Creates a new instance in campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.createMany = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::createMany::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#destroyAll
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Deletes all campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.campaigns.destroyAll = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::delete::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#destroyById
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Delete a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.campaigns.destroyById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::destroyById::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#findById
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Find a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.findById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::findById::Customer::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.campaigns#updateById
             * @methodOf lbServices.Customer.campaigns
             *
             * @description
             *
             * Update a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.updateById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::updateById::Customer::campaigns"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.playerjoueurs
     * @header lbServices.Customer.playerjoueurs
     * @object
     * @description
     *
     * The object `Customer.playerjoueurs` groups methods
     * manipulating `PlayerJoueur` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#playerjoueurs Customer.playerjoueurs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#playerjoueurs
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries playerjoueurs of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerjoueurs = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::get::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#count
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Counts playerjoueurs of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.playerjoueurs.count = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::count::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#create
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Creates a new instance in playerjoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerjoueurs.create = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::create::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#createMany
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Creates a new instance in playerjoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerjoueurs.createMany = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::createMany::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#destroyAll
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Deletes all playerjoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.playerjoueurs.destroyAll = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::delete::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#destroyById
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Delete a related item by id for playerjoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for playerjoueurs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.playerjoueurs.destroyById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::destroyById::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#findById
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Find a related item by id for playerjoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for playerjoueurs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerjoueurs.findById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::findById::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.playerjoueurs#updateById
             * @methodOf lbServices.Customer.playerjoueurs
             *
             * @description
             *
             * Update a related item by id for playerjoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for playerjoueurs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerjoueurs.updateById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::updateById::Customer::playerjoueurs"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.News
 * @header lbServices.News
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `News` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "News",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/News/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use News.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/News/:id/author",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__findById__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__destroyById__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__updateById__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/comments/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__findById__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Find a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/likes/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__destroyById__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Delete a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/likes/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__updateById__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/News/:id/likes/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__get__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Queries comments of News.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/News/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__create__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/News/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__delete__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/News/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__count__comments
             * @methodOf lbServices.News
             *
             * @description
             *
             * Counts comments of News.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/News/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__get__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Queries likes of News.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/News/:id/likes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__create__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$__create__likes": {
              url: urlBase + "/News/:id/likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__delete__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Deletes all likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__likes": {
              url: urlBase + "/News/:id/likes",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$__count__likes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Counts likes of News.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__likes": {
              url: urlBase + "/News/:id/likes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#create
             * @methodOf lbServices.News
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/News",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#createMany
             * @methodOf lbServices.News
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/News",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#patchOrCreate
             * @methodOf lbServices.News
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/News",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#replaceOrCreate
             * @methodOf lbServices.News
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/News/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#upsertWithWhere
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/News/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#exists
             * @methodOf lbServices.News
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/News/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#findById
             * @methodOf lbServices.News
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/News/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#replaceById
             * @methodOf lbServices.News
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/News/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#find
             * @methodOf lbServices.News
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/News",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#findOne
             * @methodOf lbServices.News
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/News/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#updateAll
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/News/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#deleteById
             * @methodOf lbServices.News
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/News/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#count
             * @methodOf lbServices.News
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/News/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#prototype$patchAttributes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/News/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.News#createChangeStream
             * @methodOf lbServices.News
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/News/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.News#upsert
             * @methodOf lbServices.News
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.News#updateOrCreate
             * @methodOf lbServices.News
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.News#patchOrCreateWithWhere
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.News#update
             * @methodOf lbServices.News
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.News#destroyById
             * @methodOf lbServices.News
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.News#removeById
             * @methodOf lbServices.News
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.News#updateAttributes
             * @methodOf lbServices.News
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `News` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.News#modelName
        * @propertyOf lbServices.News
        * @description
        * The name of the model represented by this $resource,
        * i.e. `News`.
        */
        R.modelName = "News";


            /**
             * @ngdoc method
             * @name lbServices.News#author
             * @methodOf lbServices.News
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Content id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::News::author"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Jdrpnj
 * @header lbServices.Jdrpnj
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Jdrpnj` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Jdrpnj",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Jdrpnjs/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Jdrpnj.rencontres.findById() instead.
            "prototype$__findById__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "GET",
            },

            // INTERNAL. Use Jdrpnj.rencontres.destroyById() instead.
            "prototype$__destroyById__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.updateById() instead.
            "prototype$__updateById__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Jdrpnj.rencontres.link() instead.
            "prototype$__link__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Jdrpnj.rencontres.unlink() instead.
            "prototype$__unlink__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.exists() instead.
            "prototype$__exists__rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Jdrpnj.rencontres() instead.
            "prototype$__get__rencontres": {
              isArray: true,
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "GET",
            },

            // INTERNAL. Use Jdrpnj.rencontres.create() instead.
            "prototype$__create__rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "POST",
            },

            // INTERNAL. Use Jdrpnj.rencontres.destroyAll() instead.
            "prototype$__delete__rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.count() instead.
            "prototype$__count__rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#create
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Jdrpnjs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#createMany
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Jdrpnjs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#patchOrCreate
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Jdrpnjs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#replaceOrCreate
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Jdrpnjs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#upsertWithWhere
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Jdrpnjs/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#exists
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Jdrpnjs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#findById
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Jdrpnjs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#replaceById
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Jdrpnjs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#find
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Jdrpnjs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#findOne
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Jdrpnjs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#updateAll
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Jdrpnjs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#deleteById
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Jdrpnjs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#count
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Jdrpnjs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#prototype$patchAttributes
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Jdrpnjs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#createChangeStream
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Jdrpnjs/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.findById() instead.
            "::findById::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.destroyById() instead.
            "::destroyById::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.updateById() instead.
            "::updateById::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.link() instead.
            "::link::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.unlink() instead.
            "::unlink::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.exists() instead.
            "::exists::Rencontre::jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Rencontre.jdrpnjs() instead.
            "::get::Rencontre::jdrpnjs": {
              isArray: true,
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.create() instead.
            "::create::Rencontre::jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "POST",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.createMany() instead.
            "::createMany::Rencontre::jdrpnjs": {
              isArray: true,
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "POST",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.destroyAll() instead.
            "::delete::Rencontre::jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.count() instead.
            "::count::Rencontre::jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs/count",
              method: "GET",
            },

            // INTERNAL. Use RencontrePnjRelation.jdrpnj() instead.
            "::get::RencontrePnjRelation::jdrpnj": {
              url: urlBase + "/RencontrePnjRelations/:id/jdrpnj",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#upsert
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#updateOrCreate
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#patchOrCreateWithWhere
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#update
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#destroyById
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#removeById
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#updateAttributes
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Jdrpnj#modelName
        * @propertyOf lbServices.Jdrpnj
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Jdrpnj`.
        */
        R.modelName = "Jdrpnj";

    /**
     * @ngdoc object
     * @name lbServices.Jdrpnj.rencontres
     * @header lbServices.Jdrpnj.rencontres
     * @object
     * @description
     *
     * The object `Jdrpnj.rencontres` groups methods
     * manipulating `Rencontre` instances related to `Jdrpnj`.
     *
     * Call {@link lbServices.Jdrpnj#rencontres Jdrpnj.rencontres()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj#rencontres
             * @methodOf lbServices.Jdrpnj
             *
             * @description
             *
             * Queries rencontres of Jdrpnj.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::get::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#count
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Counts rencontres of Jdrpnj.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.rencontres.count = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::count::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#create
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Creates a new instance in rencontres of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.create = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::create::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#createMany
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Creates a new instance in rencontres of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.createMany = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::createMany::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#destroyAll
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Deletes all rencontres of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rencontres.destroyAll = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::delete::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#destroyById
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Delete a related item by id for rencontres.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rencontres.destroyById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::destroyById::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#exists
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Check the existence of rencontres relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.exists = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::exists::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#findById
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Find a related item by id for rencontres.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.findById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::findById::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#link
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Add a related item by id for rencontres.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.link = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::link::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#unlink
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Remove the rencontres relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rencontres.unlink = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::unlink::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Jdrpnj.rencontres#updateById
             * @methodOf lbServices.Jdrpnj.rencontres
             *
             * @description
             *
             * Update a related item by id for rencontres.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontres
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontres.updateById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::updateById::Jdrpnj::rencontres"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Rencontre
 * @header lbServices.Rencontre
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rencontre` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Rencontre",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Rencontres/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Rencontre.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/Rencontres/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.findById() instead.
            "prototype$__findById__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.destroyById() instead.
            "prototype$__destroyById__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.updateById() instead.
            "prototype$__updateById__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.link() instead.
            "prototype$__link__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.unlink() instead.
            "prototype$__unlink__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.exists() instead.
            "prototype$__exists__jdrpnjs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rencontres/:id/jdrpnjs/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Rencontre.campaign() instead.
            "prototype$__get__campaign": {
              url: urlBase + "/Rencontres/:id/campaign",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs() instead.
            "prototype$__get__jdrpnjs": {
              isArray: true,
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.create() instead.
            "prototype$__create__jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "POST",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.destroyAll() instead.
            "prototype$__delete__jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs",
              method: "DELETE",
            },

            // INTERNAL. Use Rencontre.jdrpnjs.count() instead.
            "prototype$__count__jdrpnjs": {
              url: urlBase + "/Rencontres/:id/jdrpnjs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#create
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Rencontres",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#createMany
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Rencontres",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#patchOrCreate
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Rencontres",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#replaceOrCreate
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Rencontres/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#upsertWithWhere
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Rencontres/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#exists
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Rencontres/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#findById
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Rencontres/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#replaceById
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Rencontres/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#find
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Rencontres",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#findOne
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Rencontres/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#updateAll
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Rencontres/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#deleteById
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Rencontres/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#count
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Rencontres/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#prototype$patchAttributes
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Rencontres/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#createChangeStream
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Rencontres/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Jdrpnj.rencontres.findById() instead.
            "::findById::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "GET",
            },

            // INTERNAL. Use Jdrpnj.rencontres.destroyById() instead.
            "::destroyById::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.updateById() instead.
            "::updateById::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Jdrpnj.rencontres.link() instead.
            "::link::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Jdrpnj.rencontres.unlink() instead.
            "::unlink::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.exists() instead.
            "::exists::Jdrpnj::rencontres": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Jdrpnjs/:id/rencontres/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Jdrpnj.rencontres() instead.
            "::get::Jdrpnj::rencontres": {
              isArray: true,
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "GET",
            },

            // INTERNAL. Use Jdrpnj.rencontres.create() instead.
            "::create::Jdrpnj::rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "POST",
            },

            // INTERNAL. Use Jdrpnj.rencontres.createMany() instead.
            "::createMany::Jdrpnj::rencontres": {
              isArray: true,
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "POST",
            },

            // INTERNAL. Use Jdrpnj.rencontres.destroyAll() instead.
            "::delete::Jdrpnj::rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres",
              method: "DELETE",
            },

            // INTERNAL. Use Jdrpnj.rencontres.count() instead.
            "::count::Jdrpnj::rencontres": {
              url: urlBase + "/Jdrpnjs/:id/rencontres/count",
              method: "GET",
            },

            // INTERNAL. Use RencontrePnjRelation.rencontre() instead.
            "::get::RencontrePnjRelation::rencontre": {
              url: urlBase + "/RencontrePnjRelations/:id/rencontre",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.findById() instead.
            "::findById::Campaign::rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.destroyById() instead.
            "::destroyById::Campaign::rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.rencontre.updateById() instead.
            "::updateById::Campaign::rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.rencontre() instead.
            "::get::Campaign::rencontre": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.create() instead.
            "::create::Campaign::rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "POST",
            },

            // INTERNAL. Use Campaign.rencontre.createMany() instead.
            "::createMany::Campaign::rencontre": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "POST",
            },

            // INTERNAL. Use Campaign.rencontre.destroyAll() instead.
            "::delete::Campaign::rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.rencontre.count() instead.
            "::count::Campaign::rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Rencontre#upsert
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#updateOrCreate
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#patchOrCreateWithWhere
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#update
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#destroyById
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#removeById
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#updateAttributes
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Rencontre#modelName
        * @propertyOf lbServices.Rencontre
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Rencontre`.
        */
        R.modelName = "Rencontre";


            /**
             * @ngdoc method
             * @name lbServices.Rencontre#author
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Rencontre::author"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Rencontre.jdrpnjs
     * @header lbServices.Rencontre.jdrpnjs
     * @object
     * @description
     *
     * The object `Rencontre.jdrpnjs` groups methods
     * manipulating `Jdrpnj` instances related to `Rencontre`.
     *
     * Call {@link lbServices.Rencontre#jdrpnjs Rencontre.jdrpnjs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Rencontre#jdrpnjs
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Queries jdrpnjs of Rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::get::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#count
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Counts jdrpnjs of Rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.jdrpnjs.count = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::count::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#create
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Creates a new instance in jdrpnjs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.create = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::create::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#createMany
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Creates a new instance in jdrpnjs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.createMany = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::createMany::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#destroyAll
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Deletes all jdrpnjs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.jdrpnjs.destroyAll = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::delete::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#destroyById
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Delete a related item by id for jdrpnjs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.jdrpnjs.destroyById = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::destroyById::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#exists
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Check the existence of jdrpnjs relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.exists = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::exists::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#findById
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Find a related item by id for jdrpnjs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.findById = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::findById::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#link
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Add a related item by id for jdrpnjs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.link = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::link::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#unlink
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Remove the jdrpnjs relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.jdrpnjs.unlink = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::unlink::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre.jdrpnjs#updateById
             * @methodOf lbServices.Rencontre.jdrpnjs
             *
             * @description
             *
             * Update a related item by id for jdrpnjs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jdrpnjs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnjs.updateById = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::updateById::Rencontre::jdrpnjs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Rencontre#campaign
             * @methodOf lbServices.Rencontre
             *
             * @description
             *
             * Fetches belongsTo relation campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaign = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::get::Rencontre::campaign"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.RencontrePnjRelation
 * @header lbServices.RencontrePnjRelation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RencontrePnjRelation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "RencontrePnjRelation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/RencontrePnjRelations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use RencontrePnjRelation.rencontre() instead.
            "prototype$__get__rencontre": {
              url: urlBase + "/RencontrePnjRelations/:id/rencontre",
              method: "GET",
            },

            // INTERNAL. Use RencontrePnjRelation.jdrpnj() instead.
            "prototype$__get__jdrpnj": {
              url: urlBase + "/RencontrePnjRelations/:id/jdrpnj",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#create
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/RencontrePnjRelations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#createMany
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/RencontrePnjRelations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#patchOrCreate
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/RencontrePnjRelations",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#replaceOrCreate
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/RencontrePnjRelations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#upsertWithWhere
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/RencontrePnjRelations/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#exists
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/RencontrePnjRelations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#findById
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/RencontrePnjRelations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#replaceById
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/RencontrePnjRelations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#find
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/RencontrePnjRelations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#findOne
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/RencontrePnjRelations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#updateAll
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/RencontrePnjRelations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#deleteById
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/RencontrePnjRelations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#count
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/RencontrePnjRelations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#prototype$patchAttributes
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/RencontrePnjRelations/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#createChangeStream
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/RencontrePnjRelations/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#upsert
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#updateOrCreate
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#patchOrCreateWithWhere
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#update
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#destroyById
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#removeById
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#updateAttributes
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RencontrePnjRelation` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.RencontrePnjRelation#modelName
        * @propertyOf lbServices.RencontrePnjRelation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `RencontrePnjRelation`.
        */
        R.modelName = "RencontrePnjRelation";


            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#rencontre
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Fetches belongsTo relation rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::get::RencontrePnjRelation::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.RencontrePnjRelation#jdrpnj
             * @methodOf lbServices.RencontrePnjRelation
             *
             * @description
             *
             * Fetches belongsTo relation jdrpnj.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpnj` object.)
             * </em>
             */
        R.jdrpnj = function() {
          var TargetResource = $injector.get("Jdrpnj");
          var action = TargetResource["::get::RencontrePnjRelation::jdrpnj"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Jdrpj
 * @header lbServices.Jdrpj
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Jdrpj` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Jdrpj",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Jdrpjs/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#create
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Jdrpjs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#createMany
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Jdrpjs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#patchOrCreate
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Jdrpjs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#replaceOrCreate
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Jdrpjs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#upsertWithWhere
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Jdrpjs/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#exists
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Jdrpjs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#findById
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Jdrpjs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#replaceById
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Jdrpjs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#find
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Jdrpjs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#findOne
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Jdrpjs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#updateAll
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Jdrpjs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#deleteById
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Jdrpjs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#count
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Jdrpjs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#prototype$patchAttributes
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Jdrpjs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#createChangeStream
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Jdrpjs/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#currentPlayer
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{string=}` -
             */
            "currentPlayer": {
              url: urlBase + "/Jdrpjs/:id/currentPlayer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#nextPlayer
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{string=}` -
             */
            "nextPlayer": {
              url: urlBase + "/Jdrpjs/:id/nextPlayer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#resetAll
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{string=}` -
             */
            "resetAll": {
              url: urlBase + "/Jdrpjs/reset-all-gpio",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#upsert
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#updateOrCreate
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#patchOrCreateWithWhere
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#update
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#destroyById
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#removeById
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Jdrpj#updateAttributes
             * @methodOf lbServices.Jdrpj
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jdrpj` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Jdrpj#modelName
        * @propertyOf lbServices.Jdrpj
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Jdrpj`.
        */
        R.modelName = "Jdrpj";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Campaign
 * @header lbServices.Campaign
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Campaign` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Campaign",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Campaigns/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Campaign.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/Campaigns/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.findById() instead.
            "prototype$__findById__rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.destroyById() instead.
            "prototype$__destroyById__rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.rencontre.updateById() instead.
            "prototype$__updateById__rencontre": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/rencontre/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.playerJoueurs.findById() instead.
            "prototype$__findById__playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs.destroyById() instead.
            "prototype$__destroyById__playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.playerJoueurs.updateById() instead.
            "prototype$__updateById__playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.story.findById() instead.
            "prototype$__findById__story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.story.destroyById() instead.
            "prototype$__destroyById__story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.story.updateById() instead.
            "prototype$__updateById__story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.rencontre() instead.
            "prototype$__get__rencontre": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "GET",
            },

            // INTERNAL. Use Campaign.rencontre.create() instead.
            "prototype$__create__rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "POST",
            },

            // INTERNAL. Use Campaign.rencontre.destroyAll() instead.
            "prototype$__delete__rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.rencontre.count() instead.
            "prototype$__count__rencontre": {
              url: urlBase + "/Campaigns/:id/rencontre/count",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs() instead.
            "prototype$__get__playerJoueurs": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs.create() instead.
            "prototype$__create__playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "POST",
            },

            // INTERNAL. Use Campaign.playerJoueurs.destroyAll() instead.
            "prototype$__delete__playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.playerJoueurs.count() instead.
            "prototype$__count__playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs/count",
              method: "GET",
            },

            // INTERNAL. Use Campaign.story() instead.
            "prototype$__get__story": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/story",
              method: "GET",
            },

            // INTERNAL. Use Campaign.story.create() instead.
            "prototype$__create__story": {
              url: urlBase + "/Campaigns/:id/story",
              method: "POST",
            },

            // INTERNAL. Use Campaign.story.destroyAll() instead.
            "prototype$__delete__story": {
              url: urlBase + "/Campaigns/:id/story",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.story.count() instead.
            "prototype$__count__story": {
              url: urlBase + "/Campaigns/:id/story/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#create
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Campaigns",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#createMany
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Campaigns",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#patchOrCreate
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Campaigns",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#replaceOrCreate
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Campaigns/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#upsertWithWhere
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Campaigns/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#exists
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Campaigns/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#findById
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Campaigns/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#replaceById
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Campaigns/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#find
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Campaigns",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#findOne
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Campaigns/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#updateAll
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Campaigns/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#deleteById
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Campaigns/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#count
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Campaigns/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#prototype$patchAttributes
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Campaigns/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Campaign#createChangeStream
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Campaigns/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Customer.campaigns.findById() instead.
            "::findById::Customer::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.campaigns.destroyById() instead.
            "::destroyById::Customer::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.campaigns.updateById() instead.
            "::updateById::Customer::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/campaigns/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.campaigns() instead.
            "::get::Customer::campaigns": {
              isArray: true,
              url: urlBase + "/Customers/:id/campaigns",
              method: "GET",
            },

            // INTERNAL. Use Customer.campaigns.create() instead.
            "::create::Customer::campaigns": {
              url: urlBase + "/Customers/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use Customer.campaigns.createMany() instead.
            "::createMany::Customer::campaigns": {
              isArray: true,
              url: urlBase + "/Customers/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use Customer.campaigns.destroyAll() instead.
            "::delete::Customer::campaigns": {
              url: urlBase + "/Customers/:id/campaigns",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.campaigns.count() instead.
            "::count::Customer::campaigns": {
              url: urlBase + "/Customers/:id/campaigns/count",
              method: "GET",
            },

            // INTERNAL. Use Rencontre.campaign() instead.
            "::get::Rencontre::campaign": {
              url: urlBase + "/Rencontres/:id/campaign",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.findById() instead.
            "::findById::PlayerJoueur::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.destroyById() instead.
            "::destroyById::PlayerJoueur::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.updateById() instead.
            "::updateById::PlayerJoueur::campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PlayerJoueur.campaigns() instead.
            "::get::PlayerJoueur::campaigns": {
              isArray: true,
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.create() instead.
            "::create::PlayerJoueur::campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.createMany() instead.
            "::createMany::PlayerJoueur::campaigns": {
              isArray: true,
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.destroyAll() instead.
            "::delete::PlayerJoueur::campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "DELETE",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.count() instead.
            "::count::PlayerJoueur::campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns/count",
              method: "GET",
            },

            // INTERNAL. Use Story.campaign() instead.
            "::get::Story::campaign": {
              url: urlBase + "/Stories/:id/campaign",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Campaign#upsert
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#updateOrCreate
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#patchOrCreateWithWhere
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#update
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#destroyById
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#removeById
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Campaign#updateAttributes
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Campaign#modelName
        * @propertyOf lbServices.Campaign
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Campaign`.
        */
        R.modelName = "Campaign";


            /**
             * @ngdoc method
             * @name lbServices.Campaign#author
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Campaign::author"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Campaign.rencontre
     * @header lbServices.Campaign.rencontre
     * @object
     * @description
     *
     * The object `Campaign.rencontre` groups methods
     * manipulating `Rencontre` instances related to `Campaign`.
     *
     * Call {@link lbServices.Campaign#rencontre Campaign.rencontre()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Campaign#rencontre
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Queries rencontre of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::get::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#count
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Counts rencontre of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.rencontre.count = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::count::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#create
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Creates a new instance in rencontre of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre.create = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::create::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#createMany
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Creates a new instance in rencontre of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre.createMany = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::createMany::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#destroyAll
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Deletes all rencontre of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rencontre.destroyAll = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::delete::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#destroyById
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Delete a related item by id for rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontre
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rencontre.destroyById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::destroyById::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#findById
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Find a related item by id for rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontre
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre.findById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::findById::Campaign::rencontre"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.rencontre#updateById
             * @methodOf lbServices.Campaign.rencontre
             *
             * @description
             *
             * Update a related item by id for rencontre.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for rencontre
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rencontre` object.)
             * </em>
             */
        R.rencontre.updateById = function() {
          var TargetResource = $injector.get("Rencontre");
          var action = TargetResource["::updateById::Campaign::rencontre"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Campaign.playerJoueurs
     * @header lbServices.Campaign.playerJoueurs
     * @object
     * @description
     *
     * The object `Campaign.playerJoueurs` groups methods
     * manipulating `PlayerJoueur` instances related to `Campaign`.
     *
     * Call {@link lbServices.Campaign#playerJoueurs Campaign.playerJoueurs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Campaign#playerJoueurs
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Queries playerJoueurs of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerJoueurs = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::get::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#count
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Counts playerJoueurs of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.playerJoueurs.count = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::count::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#create
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Creates a new instance in playerJoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerJoueurs.create = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::create::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#createMany
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Creates a new instance in playerJoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerJoueurs.createMany = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::createMany::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#destroyAll
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Deletes all playerJoueurs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.playerJoueurs.destroyAll = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::delete::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#destroyById
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Delete a related item by id for playerJoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for playerJoueurs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.playerJoueurs.destroyById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::destroyById::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#findById
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Find a related item by id for playerJoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for playerJoueurs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerJoueurs.findById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::findById::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.playerJoueurs#updateById
             * @methodOf lbServices.Campaign.playerJoueurs
             *
             * @description
             *
             * Update a related item by id for playerJoueurs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for playerJoueurs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R.playerJoueurs.updateById = function() {
          var TargetResource = $injector.get("PlayerJoueur");
          var action = TargetResource["::updateById::Campaign::playerJoueurs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Campaign.story
     * @header lbServices.Campaign.story
     * @object
     * @description
     *
     * The object `Campaign.story` groups methods
     * manipulating `Story` instances related to `Campaign`.
     *
     * Call {@link lbServices.Campaign#story Campaign.story()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Campaign#story
             * @methodOf lbServices.Campaign
             *
             * @description
             *
             * Queries story of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R.story = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::get::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#count
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Counts story of Campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.story.count = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::count::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#create
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Creates a new instance in story of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R.story.create = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::create::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#createMany
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Creates a new instance in story of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R.story.createMany = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::createMany::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#destroyAll
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Deletes all story of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.story.destroyAll = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::delete::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#destroyById
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Delete a related item by id for story.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for story
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.story.destroyById = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::destroyById::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#findById
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Find a related item by id for story.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for story
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R.story.findById = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::findById::Campaign::story"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Campaign.story#updateById
             * @methodOf lbServices.Campaign.story
             *
             * @description
             *
             * Update a related item by id for story.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for story
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R.story.updateById = function() {
          var TargetResource = $injector.get("Story");
          var action = TargetResource["::updateById::Campaign::story"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.PlayerJoueur
 * @header lbServices.PlayerJoueur
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PlayerJoueur` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PlayerJoueur",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/PlayerJoueurs/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use PlayerJoueur.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/PlayerJoueurs/:id/author",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.findById() instead.
            "prototype$__findById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.destroyById() instead.
            "prototype$__destroyById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.updateById() instead.
            "prototype$__updateById__campaigns": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PlayerJoueurs/:id/campaigns/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PlayerJoueur.picture() instead.
            "prototype$__get__picture": {
              url: urlBase + "/PlayerJoueurs/:id/picture",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns() instead.
            "prototype$__get__campaigns": {
              isArray: true,
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "GET",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.create() instead.
            "prototype$__create__campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "POST",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.destroyAll() instead.
            "prototype$__delete__campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns",
              method: "DELETE",
            },

            // INTERNAL. Use PlayerJoueur.campaigns.count() instead.
            "prototype$__count__campaigns": {
              url: urlBase + "/PlayerJoueurs/:id/campaigns/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#create
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/PlayerJoueurs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#createMany
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/PlayerJoueurs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#patchOrCreate
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/PlayerJoueurs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#replaceOrCreate
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/PlayerJoueurs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#upsertWithWhere
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/PlayerJoueurs/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#exists
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/PlayerJoueurs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#findById
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/PlayerJoueurs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#replaceById
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/PlayerJoueurs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#find
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/PlayerJoueurs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#findOne
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/PlayerJoueurs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#updateAll
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/PlayerJoueurs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#deleteById
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/PlayerJoueurs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#count
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/PlayerJoueurs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#prototype$patchAttributes
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/PlayerJoueurs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#createChangeStream
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/PlayerJoueurs/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Customer.playerjoueurs.findById() instead.
            "::findById::Customer::playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.playerjoueurs.destroyById() instead.
            "::destroyById::Customer::playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.playerjoueurs.updateById() instead.
            "::updateById::Customer::playerjoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/playerjoueurs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.playerjoueurs() instead.
            "::get::Customer::playerjoueurs": {
              isArray: true,
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "GET",
            },

            // INTERNAL. Use Customer.playerjoueurs.create() instead.
            "::create::Customer::playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "POST",
            },

            // INTERNAL. Use Customer.playerjoueurs.createMany() instead.
            "::createMany::Customer::playerjoueurs": {
              isArray: true,
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "POST",
            },

            // INTERNAL. Use Customer.playerjoueurs.destroyAll() instead.
            "::delete::Customer::playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.playerjoueurs.count() instead.
            "::count::Customer::playerjoueurs": {
              url: urlBase + "/Customers/:id/playerjoueurs/count",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs.findById() instead.
            "::findById::Campaign::playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs.destroyById() instead.
            "::destroyById::Campaign::playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.playerJoueurs.updateById() instead.
            "::updateById::Campaign::playerJoueurs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/playerJoueurs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.playerJoueurs() instead.
            "::get::Campaign::playerJoueurs": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "GET",
            },

            // INTERNAL. Use Campaign.playerJoueurs.create() instead.
            "::create::Campaign::playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "POST",
            },

            // INTERNAL. Use Campaign.playerJoueurs.createMany() instead.
            "::createMany::Campaign::playerJoueurs": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "POST",
            },

            // INTERNAL. Use Campaign.playerJoueurs.destroyAll() instead.
            "::delete::Campaign::playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.playerJoueurs.count() instead.
            "::count::Campaign::playerJoueurs": {
              url: urlBase + "/Campaigns/:id/playerJoueurs/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#upsert
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#updateOrCreate
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#patchOrCreateWithWhere
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#update
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#destroyById
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#removeById
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#updateAttributes
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PlayerJoueur` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.PlayerJoueur#modelName
        * @propertyOf lbServices.PlayerJoueur
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PlayerJoueur`.
        */
        R.modelName = "PlayerJoueur";


            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#author
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::PlayerJoueur::author"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.PlayerJoueur.campaigns
     * @header lbServices.PlayerJoueur.campaigns
     * @object
     * @description
     *
     * The object `PlayerJoueur.campaigns` groups methods
     * manipulating `Campaign` instances related to `PlayerJoueur`.
     *
     * Call {@link lbServices.PlayerJoueur#campaigns PlayerJoueur.campaigns()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#campaigns
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Queries campaigns of PlayerJoueur.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::get::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#count
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Counts campaigns of PlayerJoueur.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.campaigns.count = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::count::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#create
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Creates a new instance in campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.create = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::create::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#createMany
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Creates a new instance in campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.createMany = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::createMany::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#destroyAll
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Deletes all campaigns of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.campaigns.destroyAll = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::delete::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#destroyById
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Delete a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.campaigns.destroyById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::destroyById::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#findById
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Find a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.findById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::findById::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur.campaigns#updateById
             * @methodOf lbServices.PlayerJoueur.campaigns
             *
             * @description
             *
             * Update a related item by id for campaigns.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for campaigns
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaigns.updateById = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::updateById::PlayerJoueur::campaigns"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PlayerJoueur#picture
             * @methodOf lbServices.PlayerJoueur
             *
             * @description
             *
             * Fetches belongsTo relation picture.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.picture = function() {
          var TargetResource = $injector.get("Picture");
          var action = TargetResource["::get::PlayerJoueur::picture"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/Containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/Containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/Containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/Containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/Containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/Containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/Containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/Containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/Containers/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Picture
 * @header lbServices.Picture
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Picture` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Picture",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Pictures/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Picture#create
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Pictures",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#createMany
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Pictures",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#patchOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Pictures",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#replaceOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Pictures/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#upsertWithWhere
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Pictures/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#exists
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Pictures/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#findById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Pictures/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#replaceById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Pictures/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#find
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Pictures",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#findOne
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Pictures/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#updateAll
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Pictures/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#deleteById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Pictures/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#count
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Pictures/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#prototype$patchAttributes
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Pictures/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#createChangeStream
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Pictures/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#upload
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Uploads a picture
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `options` – `{object=}` -
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "upload": {
              url: urlBase + "/Pictures/upload",
              method: "POST",
            },

            // INTERNAL. Use PlayerJoueur.picture() instead.
            "::get::PlayerJoueur::picture": {
              url: urlBase + "/PlayerJoueurs/:id/picture",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Picture#upsert
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#updateOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#patchOrCreateWithWhere
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#update
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#destroyById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#removeById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#updateAttributes
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Picture#modelName
        * @propertyOf lbServices.Picture
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Picture`.
        */
        R.modelName = "Picture";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Story
 * @header lbServices.Story
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Story` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Story",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Stories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Story.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/Stories/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Story.campaign() instead.
            "prototype$__get__campaign": {
              url: urlBase + "/Stories/:id/campaign",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#create
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Stories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#createMany
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Stories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#patchOrCreate
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Stories",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#replaceOrCreate
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Stories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#upsertWithWhere
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Stories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#exists
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Stories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#findById
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Stories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#replaceById
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Stories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#find
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Stories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#findOne
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Stories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#updateAll
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Stories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#deleteById
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Stories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#count
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Stories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#prototype$patchAttributes
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Stories/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Story#createChangeStream
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Stories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Campaign.story.findById() instead.
            "::findById::Campaign::story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "GET",
            },

            // INTERNAL. Use Campaign.story.destroyById() instead.
            "::destroyById::Campaign::story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.story.updateById() instead.
            "::updateById::Campaign::story": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Campaigns/:id/story/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Campaign.story() instead.
            "::get::Campaign::story": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/story",
              method: "GET",
            },

            // INTERNAL. Use Campaign.story.create() instead.
            "::create::Campaign::story": {
              url: urlBase + "/Campaigns/:id/story",
              method: "POST",
            },

            // INTERNAL. Use Campaign.story.createMany() instead.
            "::createMany::Campaign::story": {
              isArray: true,
              url: urlBase + "/Campaigns/:id/story",
              method: "POST",
            },

            // INTERNAL. Use Campaign.story.destroyAll() instead.
            "::delete::Campaign::story": {
              url: urlBase + "/Campaigns/:id/story",
              method: "DELETE",
            },

            // INTERNAL. Use Campaign.story.count() instead.
            "::count::Campaign::story": {
              url: urlBase + "/Campaigns/:id/story/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Story#upsert
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Story#updateOrCreate
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Story#patchOrCreateWithWhere
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Story#update
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Story#destroyById
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Story#removeById
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Story#updateAttributes
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Story` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Story#modelName
        * @propertyOf lbServices.Story
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Story`.
        */
        R.modelName = "Story";


            /**
             * @ngdoc method
             * @name lbServices.Story#author
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Story::author"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Story#campaign
             * @methodOf lbServices.Story
             *
             * @description
             *
             * Fetches belongsTo relation campaign.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Campaign` object.)
             * </em>
             */
        R.campaign = function() {
          var TargetResource = $injector.get("Campaign");
          var action = TargetResource["::get::Story::campaign"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
