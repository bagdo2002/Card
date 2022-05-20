import React, { useState, useEffect } from "react";
import "./App.css";
import DropCard from "./components/DropCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchData } from "./function";
import { Grid } from "@material-ui/core";
import Login from "./components/Login";
function App() {
  const [info, setInfo] = useState();

  const [open, setOpen] = useState();
  const [code, setCode] = useState();
  useEffect(() => {
    const URL = " http://192.168.48.245/api/company_news/api.php";
    fetchData(URL, "getAllNews", "{}").then((res) => {
      if (res) {
        setInfo([
          {
            id: "1",
            title: "საყურადღებო ინფორმაცია",
            text: "მეგობრებო , ხელმეორედ გაცნობებთ ყველას რომ , ციტადელში გააქტიურდა IT სამსახურთან მიმართვის (ტექნიკური სასმახურის) შიდა პროგრამა it.citadeli.com\r\nდა გთხოვთ ნებისმიერი საკითხი რაც ეხება IT დეპარტამენტს , მოიწერთ ამ საიტზე .\r\nIT სამსახურის მოვალეობებში არ შედის შემდეგი :\r\n1.კონდიცონეტის მონტაჟი (ან ტემპერატურის ცვლილება კონდიციონერზე)\r\n2.დაზიანებულია კარების,საკეტის ან პეტლის გამოცვლა\r\n3.დამაგრძელებლებს ჩვენ არ ვაკეთებთ\r\nდა ა.შ.\r\n\r\nგისურვებთ პოზიტიურ და წარმატებულ დღეს",
            user: "ნიკა კობაიძე",
            status: "news",
            add_date: "2022-05-16",
            files: [
              {
                filename: "test.pdf",
                link: "test.pdf",
              },
              {
                filename: "news2.pdf",
                link: "news2.pdf",
              },
            ],
          },
          {
            id: "2",
            title: "საყურადღებო ინფორმაცია",
            text: "მეგობრებო , ხელმეორედ გაცნობებთ ყველას რომ , ციტადელში გააქტიურდა IT სამსახურთან მიმართვის (ტექნიკური სასმახურის) შიდა პროგრამა it.citadeli.com\r\nდა გთხოვთ ნებისმიერი საკითხი რაც ეხება IT დეპარტამენტს , მოიწერთ ამ საიტზე .\r\nIT სამსახურის მოვალეობებში არ შედის შემდეგი :\r\n1.კონდიცონეტის მონტაჟი (ან ტემპერატურის ცვლილება კონდიციონერზე)\r\n2.დაზიანებულია კარების,საკეტის ან პეტლის გამოცვლა\r\n3.დამაგრძელებლებს ჩვენ არ ვაკეთებთ\r\nდა ა.შ.\r\n\r\nგისურვებთ პოზიტიურ და წარმატებულ დღეს",
            user: "ნიკა კობაიძე",
            status: "news",
            add_date: "2022-05-16",
            files: [
              {
                filename: "test.pdf",
                link: "test.pdf",
              },
              {
                filename: "news2.pdf",
                link: "news2.pdf",
              },
            ],
          },
          {
            id: "3",
            title: "საყურადღებო ინფორმაცია",
            text: "მეგობრებო , ხელმეორედ გაცნობებთ ყველას რომ , ციტადელში გააქტიურდა IT სამსახურთან მიმართვის (ტექნიკური სასმახურის) შიდა პროგრამა it.citadeli.com\r\nდა გთხოვთ ნებისმიერი საკითხი რაც ეხება IT დეპარტამენტს , მოიწერთ ამ საიტზე .\r\nIT სამსახურის მოვალეობებში არ შედის შემდეგი :\r\n1.კონდიცონეტის მონტაჟი (ან ტემპერატურის ცვლილება კონდიციონერზე)\r\n2.დაზიანებულია კარების,საკეტის ან პეტლის გამოცვლა\r\n3.დამაგრძელებლებს ჩვენ არ ვაკეთებთ\r\nდა ა.შ.\r\n\r\nგისურვებთ პოზიტიურ და წარმატებულ დღეს",
            user: "ნიკა კობაიძე",
            status: "news",
            add_date: "2022-05-16",
            files: [
              {
                filename: "test.pdf",
                link: "test.pdf",
              },
              {
                filename: "news2.pdf",
                link: "news2.pdf",
              },
            ],
          },
          {
            id: "4",
            title: "საყურადღებო ინფორმაცია",
            text: "მეგობრებო , ხელმეორედ გაცნობებთ ყველას რომ , ციტადელში გააქტიურდა IT სამსახურთან მიმართვის (ტექნიკური სასმახურის) შიდა პროგრამა it.citadeli.com\r\nდა გთხოვთ ნებისმიერი საკითხი რაც ეხება IT დეპარტამენტს , მოიწერთ ამ საიტზე .\r\nIT სამსახურის მოვალეობებში არ შედის შემდეგი :\r\n1.კონდიცონეტის მონტაჟი (ან ტემპერატურის ცვლილება კონდიციონერზე)\r\n2.დაზიანებულია კარების,საკეტის ან პეტლის გამოცვლა\r\n3.დამაგრძელებლებს ჩვენ არ ვაკეთებთ\r\nდა ა.შ.\r\n\r\nგისურვებთ პოზიტიურ და წარმატებულ დღეს",
            user: "ნიკა კობაიძე",
            status: "news",
            add_date: "2022-05-16",
            files: [
              {
                filename: "test.pdf",
                link: "test.pdf",
              },
              {
                filename: "news2.pdf",
                link: "news2.pdf",
              },
            ],
          },
        ]);
      }
    });
  }, []);

  const handleText = (item) => {
    if (item.length <= 28) return item;

    let fullData = item;
    let cropedData = item.substring(0, 28);
    cropedData.trim();
    cropedData += "...";

    return cropedData;
  };
  console.log([code, open]);
  return (
    <div className=" alfa first">
      <Login />
      {/* {info &&
        info.map((element, index) => {
          return (
            <div
              key={index}
              className={`components ${
                index + 1 == code ? "front-card" : `back-card`
              }
              `}
            >
              <DropCard
                index={index}
                info={info}
                setOpen={setOpen}
                code={code}
                setCode={setCode}
                id={element.id}
                date={element.add_date}
                partText={handleText(element.text)}
                status={element.status}
                text={element.text}
                title={element.title}
                user={element.user}
                link={element.files}
                status={element.status}
              />
            </div>
          );
        })} */}
    </div>
  );
}

export default App;