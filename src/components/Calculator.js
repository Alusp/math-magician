import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const myHandleClick = (event) => {
    setState(calculate(state, event.target.textContent));
  };
  const { next, total } = state;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/6 shadow-lg">
        <div className="text-white bg-gray-500 flex justify-end p-5 w-full">
          <span>{next || total || 0}</span>
        </div>
        <table className="w-full">
          <tbody className="w-2/6">
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  AC
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  +/-
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  %
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500/90 text-xl">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  ÷
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  7
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  8
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  9
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500/90 text-xl">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  4
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  5
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  6
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500/90 text-xl">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  1
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  2
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  3
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500/90 text-xl">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
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
                className="bg-white border hover:bg-gray-200 text-center"
              >
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  0
                </button>
              </td>
              <td className="bg-white border hover:bg-gray-200 text-center">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
                >
                  .
                </button>
              </td>
              <td className="border hover:bg-gray-200 text-center bg-orange-500/90 text-xl">
                <button
                  type="button"
                  className="p-6"
                  onClick={myHandleClick}
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
};
export default Calculator;
