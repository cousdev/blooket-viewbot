# Blooket View Bot 🚀
This script allows you to give a blooket set thousands of views in minutes (even private sets).

## How to use
Find a game you would like to view bot, anc click "Play Solo". Open the console (right click, inspect element, click "Console")
and copy in this script.

```
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
```

You will need to change the `DELAY`. The delay controls how fast each request is sent (in milliseconds), the default value 100 will send 10 requests/views per second. If you go too fast, Blooket will rate limit you, so try and find the sweet spot (70 is generally good).

---

You will also need to change the `QUESTION_SET_ID` variable. You will need to find this by copying the part of the URL as shown in the red rectangle below.

![Question Set ID](/img/question_set_id.png)

Copy that into the `QUESTION_SET_ID` variable. Press enter to run the script.