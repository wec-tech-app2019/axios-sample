// DOMContentLoaded: DOMの解析が完了した瞬間に発火
document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://api.thecatapi.com/v1/images/search')
  .then((response) => {  // 成功した場合
    console.log(response.data);

    // 配列に入っているので、要素1つだけ取り出す
    const data = response.data[0];
    
    // <div id="cat"> を検索
    const divCat = document.getElementById('cat');

    // 新しい <img> 要素を新規作成
    const img = document.createElement('img');
  
    img.src = data.url;  // <img src="URL">
    img.width = 200;     // <img width="200">
  
    // <div id="cat"> の下に <img> を追加
    divCat.appendChild(img);
  })
  .catch((error) => {  // エラーの場合
    console.error(error); // エラーメッセージを出力
  });
});
