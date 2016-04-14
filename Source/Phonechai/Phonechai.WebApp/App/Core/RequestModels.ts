module App {
    "use strict";

    export class Entity {
        Id: string;
        Created: string;
        CreatedBy: string;
        Modified: string;
        ModifiedBy: string;
    }
     
    export class PermissionRequest {
        Name: string;

        constructor(name: string) {
            this.Name = name;
        }
    }

    export class Notification {
        IsError: boolean;
        IsInfo: boolean;
        Message: string;
    }

    export class DataRequest {
        Id: string;
        Page: number;
        OrderBy: string;
        Keyword: string;
        IsAscending: string;
        ParentId: string;
        TotalPage: number;
        StartDate: string;
        EndDate: string;
        Test: number;

        protected getBaseQueryString(): string {
            if (this.Page == null) this.Page = 1;
            var queryString = `?keyword=${this.Keyword}&orderBy=${this.OrderBy}&page=${this.Page}`;
            return queryString;
        }
    }

    export class SearchRequest extends DataRequest {
        constructor(keyword: string, orderBy: string, isAsc: string, parentId?: string) {
            super();
            this.Keyword = keyword;
            this.OrderBy = orderBy;
            this.IsAscending = isAsc;
            this.ParentId = parentId;
            this.Page = 1;
        }
    }

    
    export class DetailRequest extends DataRequest {
        Id: string;

        constructor(id: string) {
            super();
            this.Id = id;
        }

        GetQueryString(): string {
            return `?id=${this.Id}`;
        }
    }
    
}