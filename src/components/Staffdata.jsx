import React from "react";
import "./Staffdata.css";

function Staffdata() {
  return (
    <div className="staff">
      <table className="staff__table">
        <tbody>
          <tr>
            <th>No</th>
            <th>Staff Name</th>
            <th>Efficiency Delta</th>
            <th>NPS Delta</th>
            <th>Efficiency</th>
            <th>Reported Issues</th>
          </tr>
          <tr>
            <td>1</td>
            <td className="staff__name">Mercy mokayo</td>
            <td>1,3</td>
            <td>1,2</td>
            <td>
              <progress
                className="staff__progress"
                max="100"
                value="96"
              ></progress>
            </td>
            <td>
              <progress
                className="staff__progress"
                max="10"
                value="3"
              ></progress>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="staff__name">Kennedy Ayako</td>
            <td>1,8</td>
            <td>1,8</td>
            <td>
              <progress
                className="staff__progress"
                max="100"
                value="92"
              ></progress>
            </td>
            <td>
              <progress
                className="staff__progress"
                max="10"
                value="6"
              ></progress>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className="staff__name">Stephanie Tomsett</td>
            <td>2,7</td>
            <td>2</td>
            <td>
              <progress
                className="staff__progress"
                max="100"
                value="58"
              ></progress>
            </td>
            <td>
              <progress
                className="staff__progress"
                max="10"
                value="1"
              ></progress>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className="staff__name">Faith Kityo</td>
            <td>2,8</td>
            <td>2,5</td>
            <td>
              <progress
                className="staff__progress"
                max="100"
                value="72"
              ></progress>
            </td>
            <td>
              <progress
                className="staff__progress"
                max="10"
                value="8"
              ></progress>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Staffdata;
