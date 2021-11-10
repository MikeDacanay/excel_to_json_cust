import Excel from "exceljs/dist/es5/exceljs.browser";
import saveAs from 'file-saver';

import './App.css';

export const App = () => {
  return (
    <input type="file" onChange={uploadWorkbook.bind(null,console.log)} />
  )
}

const content = {};

function uploadWorkbook(cb, event){
  let input = event.target;
  let file = input.files[0];

  readExcelUpload(file, event);
}

function readExcelUpload(file, event){
  if(file){
    let reader = new FileReader();


    reader.onload = (event) => {
        new Excel.Workbook().xlsx
          .load(event.target.result)
          .then((workbook) => {
            populateContentWithData(workbook);

            // console.log(content);

            var fileToSave = new Blob([JSON.stringify(content, null, 2)], {
              type: 'application/json'
            });
            
            // Save the file
            saveAs(fileToSave, 'content.json')
          });
    };
      
    reader.readAsArrayBuffer(file);
  }
}

function populateContentWithData(data) {
  for(let worksheet of data.worksheets){
      content[worksheet.name] = [];        
      populateContentWithChapters(worksheet);
  };
}   

function populateContentWithChapters(wrksht){
  let header = [];

  wrksht.eachRow(({values}, rowN) => {   
    const row = [...values];
    row.shift();  

    if(rowN === 1){
      header = row;
    }else {
      const obj = {};
      for(let [i, item] of row.entries()){
        if(i === 0){
          obj[header[i]] = item;
        }else{
          obj.language = {
            [header[i]]: item,
          };
        }
      }
      
      content[wrksht.name].push(obj);
    }
  });
}
