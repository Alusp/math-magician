import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myHandleClick = this.myHandleClick.bind(this);
  }

  myHandleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/6 shadow-lg">
          <div className="text-white bg-gray-500/90 flex justify-end p-5 w-full">
            <span>{next || total || 0}</span>
          </div>
          <table className="w-full">
            <tbody className="w-2/6">
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    AC
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    +/-
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    %
                  </button>
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500/100 text-xl">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    7
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    8
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    9
                  </button>
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500/100 text-xl">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    4
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    5
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    6
                  </button>
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500/100 text-xl">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    1
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    2
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    3
                  </button>
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500/100 text-xl">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="2"
                  className="p-6 bg-white border hover:bg-gray-200 text-center"
                >
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    0
                  </button>
                </td>
                <td className="p-6 bg-white border hover:bg-gray-200 text-center">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    .
                  </button>
                </td>
                <td className="p-6 border hover:bg-gray-200 text-center bg-orange-500/100 text-xl">
                  <button
                    type="button"
                    className="p-6"
                    onClick={this.myHandleClick}
                  >
                    =
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
