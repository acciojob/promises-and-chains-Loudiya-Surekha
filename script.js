  function abc(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();
      if (name === "" || age === "") {
        alert("Please enter valid details");
        return;
      }
      const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      });
      checkAge
        .then((userName) => {
          alert(`Welcome, ${userName}. You can vote.`);
        })
        .catch((userName) => {
          alert(`Oh sorry ${userName}. You aren't old enough.`);
        });
    }
