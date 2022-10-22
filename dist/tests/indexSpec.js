"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe("should make a new array containg a number or a word at it's beginning", function () {
    var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    it('should make a new array containing dog', function () {
        expect((0, index_1.default)(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', function () {
        expect((0, index_1.default)(3, wordArr)).toContain(3);
    });
});