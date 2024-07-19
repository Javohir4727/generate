var aiArray = [];
      while (aiArray.length < 6) {
        var ai = Math.floor(Math.random() * 300);
        if (!aiArray.includes(ai)) {
          aiArray.push(ai);
        }
      }

      var user = prompt("0 dan 300 gacha bo'lgan istalgan 6 ta raqamlarni kiriting, masalan: 5, 12, 45, 78, 150, 250");
      var userArray = user.split(" ").map(Number);


      console.log("AI tanlagan raqamlar: ", aiArray);
      console.log("Siz tanlagan raqamlar: ", userArray);


      var match = false;
      for (let i = 0; i < userArray.length; i++) {
        if (aiArray.includes(userArray[i])) {
          match = true;
          break;
        }
      }

    
      if (match) {
        console.log("Siz yutdingiz! Foydalanuvchi va AI tanlagan raqamlar orasida moslik bor.");
      } else {
        console.log("Siz yutqazdingiz! Foydalanuvchi va AI tanlagan raqamlar orasida moslik yo'q.");
      }
