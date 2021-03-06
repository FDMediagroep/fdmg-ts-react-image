"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Renders an image.
 */
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    Img.prototype.render = function () {
        return (React.createElement("img", { src: this.props.src, alt: this.props.alt, className: this.props.className }));
    };
    return Img;
}(React.Component));
exports.default = Img;
