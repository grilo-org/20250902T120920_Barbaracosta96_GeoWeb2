import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

export default function SampleMethod() {
  const header = ["Firstname", "Lastname", "Age"];
  const body = [
    ["Edison", "Padilla", 14],
    ["Cheila", "Rodriguez", 56]
  ];

  /**
   * @description:
   *  also accepts an array of objects; the method (downloadExcel) will take
   *  as order of each column, the order that each property of the object brings with it.
   *  the method(downloadExcel) will only take the value of each property.
   */
  const body2 = [
    { firstname: "Edison", lastname: "Padilla", age: 14 },
    { firstname: "Cheila", lastname: "Rodriguez", age: 56 }
  ];

  function handleDownloadExcel() {
    const opt = 'downloadExcel Method'; 

    downloadExcel({
      fileName: `react-export-table-to-excel - ${opt}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        // accept two different data structures
        body: body || body2
      }
    });
  }

  return (
    <div>
      <button onClick={handleDownloadExcel}>Export excel</button>

      <table>
        <tbody>
          <tr>
            {header.map((head) => (
              <th key={head}> {head} </th>
            ))}
          </tr>

          {body.map((item, i) => (
            <tr key={i}>
              {item.map((it) => (
                <td key={it}>{it}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
