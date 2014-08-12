/**
 * TimeZone data service which fetched available timezones from backend.
 */
(function() {
    'use strict';

    angular.module('Taskboard.services')
        .factory('TimeZoneModel',
            [
                '$q', 'DataService',
                function($q, DataService) {
                    var endpoint = 'TimeZone';
                    var timezones = [];

                    // Load timezones from server
                    function get(parameters) {
                        if (timezones.length > 0) {
                            var deferred = $q.defer();

                            deferred.resolve(timezones);

                            return deferred.promise;
                        } else {
                            return DataService
                                .collection(endpoint, parameters)
                                .then(function(response) {
                                    timezones = response.data;

                                    return timezones;
                                });
                        }
                    }

                    return {
                        get: get
                    };
                }
            ]
        );
}());
