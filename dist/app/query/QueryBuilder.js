"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchTerm) {
        var _a, _b, _c;
        let search = '';
        if (((_a = this.query) === null || _a === void 0 ? void 0 : _a.search) && ((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.search) !== 'All') {
            search = (_c = this === null || this === void 0 ? void 0 : this.query) === null || _c === void 0 ? void 0 : _c.search;
        }
        else {
            search = '';
        }
        this.modelQuery = this.modelQuery.find({
            $or: searchTerm.map((el) => ({
                [el]: { $regex: search, $options: 'i' },
            })),
        });
        return this;
    }
    limit() {
        var _a, _b;
        let limit = 60;
        if ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.limit) {
            limit = parseInt((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.limit);
        }
        this.modelQuery = this.modelQuery.limit(limit);
        return this;
    }
}
exports.default = QueryBuilder;
