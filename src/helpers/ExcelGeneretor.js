import customAxios from "./AxiosRefreshToken";
import XlsxPopulate from "xlsx-populate";
const RichText = require("xlsx-populate").RichText;

function generateXlsx(values) {
  const {
    firstName,
    lastName,
    summary,
    birthday,
    group,
    status,
    availabilityDate,
    education,
    englishLevel,
    skills
  } = values;
  const summaryArray = summary.split(/\r|\n/);
  customAxios
    .get("/excel/CVTemplate.xlsx", { responseType: "arraybuffer" })
    .then(response => {
      XlsxPopulate.fromDataAsync(response.data).then(
        workbook => {
          workbook
            .sheet("Sheet1")
            .cell("D2")
            .value(`${firstName} ${lastName}`);
          workbook
            .sheet("Sheet1")
            .cell("D5")
            .value(`${birthday}`);
          workbook
            .sheet("Sheet1")
            .cell("D6")
            .value(`${group.name}`);
          workbook
            .sheet("Sheet1")
            .cell("D7")
            .value(`${status}`);
          workbook
            .sheet("Sheet1")
            .cell("D8")
            .value(`${availabilityDate}`);
          workbook
            .sheet("Sheet1")
            .cell("D12")
            .value(`${education}`);
          workbook
            .sheet("Sheet1")
            .cell("D16")
            .value(`English level ${englishLevel}`);
          const summaryCell = workbook.sheet("Sheet1").cell("D4");
          const summaryValue = new RichText();
          let summaryHeight = 0;
          for (let i = 0; i < summaryArray.length; i++) {
            summaryValue.add(summaryArray[i] + "\n");
            summaryHeight += 13.3;
          }
          workbook
            .sheet(0)
            .row(4)
            .height(summaryHeight);
          summaryCell.value(summaryValue);
          const techSkills = workbook.sheet("Sheet1").cell("D20");
          const richtext = new RichText();
          let techSkillsHeight = 0;
          for (let i = 0; i < skills.length; i++) {
            richtext.add(skills[i].title + "\n");
            techSkillsHeight += 13.3;
          }
          workbook
            .sheet(0)
            .row(20)
            .height(techSkillsHeight);
          techSkills.value(richtext);
          workbook.outputAsync().then(function(blob) {
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              // If IE, you must uses a different method.
              window.navigator.msSaveOrOpenBlob(blob, "out.xlsx");
            } else {
              var url = window.URL.createObjectURL(blob);
              const view = "https://docs.google.com/viewer?url=" + url;
              var a = document.createElement("a");
              document.body.appendChild(a);
              a.href = url;
              a.target="_blank"
              a.download = "CV.xlsx";
              a.click();
              window.URL.revokeObjectURL(url);
              document.body.removeChild(a);
            }
          });
        },
        error => {
          console.log(error);
        }
      );
    });
}

export default generateXlsx;
