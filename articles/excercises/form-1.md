Exercise 1:
Create a webpage with a form having:
- 1 text input for username
- a submit button to submit the form
When pressing the submit button we would like to show the text inside the username input on the `window.alert()`

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <form onsubmit="return handleSubmit(event)">
      <input type="text" name="username" id="username" />
      <input type="submit" value="Submit" />
    </form>

    <script>
      function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // contains actual input values
        const data = Object.fromEntries(formData);

        alert(data.username);
      }
    </script>
  </body>
</html>

```