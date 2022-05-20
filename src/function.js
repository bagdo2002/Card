import Cookies from "js-cookie";

export const fetchData = async (url, act, body, file) => {
  console.log(Cookies.get("permanent"));
  try {
    var myHeaders = new Headers();
    myHeaders.append("x-usertoken", `${Cookies.get("permanent")}`);
    var formdata = new FormData();
    formdata.append("act", act);
    if (body) formdata.append("data", body);
    if (file) formdata.append("files", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
