function saveOptions(e) {

  let webUIPath = document.querySelector("#webUIPath").value;
  let webUIUsername = document.querySelector("#webUIUsername").value;
  let webUIPassword = document.querySelector("#webUIPassword").value;

  browser.storage.local.set({
    webUIPath : webUIPath,
    webUIUsername : webUIUsername,
    webUIPassword : webUIPassword
  });

  e.preventDefault();
}
  
function restoreOptions() {
  var storageItem = browser.storage.local.get('webUIPath', 'webUIUsername', 'webUIPassword');
  storageItem.then((res) => {
    document.querySelector("#webUIPath").innerText = res.webUIPath;
    document.querySelector("#webUIUsername").innerText = res.webUIUsername;
    document.querySelector("#webUIPassword").innerText = res.webUIPassword;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);