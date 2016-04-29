var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    "use strict";
    var Entity = (function () {
        function Entity() {
        }
        return Entity;
    }());
    App.Entity = Entity;
    var PermissionRequest = (function () {
        function PermissionRequest(name) {
            this.Name = name;
        }
        return PermissionRequest;
    }());
    App.PermissionRequest = PermissionRequest;
    var Notification = (function () {
        function Notification() {
        }
        return Notification;
    }());
    App.Notification = Notification;
    var DataRequest = (function () {
        function DataRequest() {
        }
        DataRequest.prototype.getBaseQueryString = function () {
            if (this.Page == null)
                this.Page = 1;
            var queryString = "?keyword=" + this.Keyword + "&orderBy=" + this.OrderBy + "&page=" + this.Page;
            return queryString;
        };
        return DataRequest;
    }());
    App.DataRequest = DataRequest;
    var SearchRequest = (function (_super) {
        __extends(SearchRequest, _super);
        function SearchRequest(keyword, orderBy, isAsc, parentId) {
            _super.call(this);
            this.Keyword = keyword;
            this.OrderBy = orderBy;
            this.IsAscending = isAsc;
            this.ParentId = parentId;
            this.Page = 1;
        }
        return SearchRequest;
    }(DataRequest));
    App.SearchRequest = SearchRequest;
    var DetailRequest = (function (_super) {
        __extends(DetailRequest, _super);
        function DetailRequest(id) {
            _super.call(this);
            this.Id = id;
        }
        DetailRequest.prototype.GetQueryString = function () {
            return "?id=" + this.Id;
        };
        return DetailRequest;
    }(DataRequest));
    App.DetailRequest = DetailRequest;
})(App || (App = {}));
//# sourceMappingURL=RequestModels.js.map