import { Component } from "react";
/* 현재 리액트에서 클래스형 컴포넌트 사용하지 않습니다. */
class ClassTypeComponent extends Component {
  render() {
    return (
      <div className="ClassTypeComponent">
        <h4>ClassTypeComponent</h4>
        <p>클래스형 컴포넌트 입니다.</p>
      </div>
    );
  }
}

export default ClassTypeComponent;