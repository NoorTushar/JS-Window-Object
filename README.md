```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Window-Object</title>
  </head>

  <body class="">
    <button onclick="myAlert()">Alert</button>
    <button onclick="myAlert()">Prompt</button>
    <button onclick="myConfirm()">Confirm?</button>
    <button onclick="myOpen()">New Window</button>
    <button onclick="myClose()">Close Window</button>
    <button onclick="myTimeout()">Set Timeout</button>
    <!-- JS -->
    <script>
      function myAlert() {
        alert("Good Day");
      }
      function myOpen() {
        open();
      }
      function myClose() {
        close();
      }
      function myAlert() {
        document.write(prompt("What is your name?"));
      }
      function myConfirm() {
        let result = confirm("Are you sure?");
        document.write(result);
      }

      function myTimeout() {
        window.setTimeout(() => {
          document.write(`This message is generated after 3 seconds.`);
        }, 3000);
      }
    </script>
  </body>
</html>
```
