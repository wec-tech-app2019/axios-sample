const axios = require('axios');

axios.get('https://api.thecatapi.com/v1/images/search')
  // 成功した場合
  .then(function (response) {
    const cat = response.data[0];
    const url = cat.url;
    console.log(url);
  })
  // エラーの挙動を定義
  .catch(function (error) {
    console.log(error);
  });
