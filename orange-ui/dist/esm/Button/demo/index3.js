import React from 'react';
import Button from '..';
export default function ButtonDemo3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: true
  }, "\u57FA\u7840\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "danger",
    disabled: true
  }, "\u5371\u9669\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "warning",
    disabled: true
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    disabled: true
  }, "\u6587\u672C\u6309\u94AE"));
}