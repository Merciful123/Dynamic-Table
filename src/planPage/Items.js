import React from "react";
// import { heading,feature1,feature2,feature3  } from "../Items/Itemlist";
import "./Item.css";

const Item = ({ heading, feature1, feature2, feature3 }) => {
  // console.log(heading)
  // console.log(feature1)
  return (
    <div className="items ">
      <table>
        <tbody>
          <tr className="heading">
            {heading.map((head, index) => {
              return <th key={index}>{head}</th>;
            })}
            
          </tr>
          <tr>
            {feature1.map((bodyItem, index) => {
              return <td key={index}>{bodyItem}</td>;
            })}
          </tr>
           
          <tr>
            {feature2.map((bodyItem, index) => {
              return <td key={index}>{bodyItem}</td>;
            })}
          </tr>
          <tr>
            {feature3.map((bodyItem, index) => {
              return <td key={index}>{bodyItem}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Item;
