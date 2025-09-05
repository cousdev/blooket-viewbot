// CHANGE THIS PART (if you don't know how, read the docs.)
const DELAY = 100
const QUESTION_SET_ID = "";


function postData(url, reqbody) {
  return fetch(url, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(reqbody)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}


setInterval(postData, DELAY, "https://play.blooket.com/api/playersessions/solo", {
    "gameMode":"Defense2",
    "questionSetId":QUESTION_SET_ID
})