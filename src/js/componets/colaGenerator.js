class ColaGenerator {
  constructor() {
      this.itemList = document.querySelector('.list-item');
  }

  setup() {
      this.loadData(
          (json) => {
              this.colaFactory(json);
          }
      );
  }

  async loadData(callback) {
      // asynchronous javascript and xml
      // javascript object notation
      // const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.
      // requestObj.open('GET', 'src/js/item.json'); // 요청 시작
      // requestObj.onreadystatechange = () => { // readyState 가 변화하면 트리거

      //     if (requestObj.readyState === 4 && requestObj.status === 200) {
                // readyState는 클라이언트의 요청이 어떠한 과정에 있습니다!라고 알려줌 (ex. 처리중 / 처리완료(4)..)
                // status는 처리는 완료했고 처리 중에 어떠한 일이 발생했다!라고 알려줌(ex. 처리 중에 별 일 없이 잘 끝났다 -> 200)
      //         callback(JSON.parse(requestObj.responseText));
      //     }
      // }
      // requestObj.send(null);

      const response = await fetch('src/js/item.json');

      if (response.ok) { // http 상태코드가 200 ~ 299일 경우 
          callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
      } else {
          alert('통신 에러!' + response.status);
      }
  }

  colaFactory(data) {
      const docFrag = document.createDocumentFragment();
      data.forEach((el) => {
          const item = document.createElement('li');
          const itemTemplate = `
          <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
              <img src="src/images/${el.img}" alt="" class="img-item">
              <strong class="tit-item">${el.name}</strong>
              <span class="txt-price">${el.cost}원</span>
          </button>
          `;
          item.innerHTML = itemTemplate;
          docFrag.appendChild(item);
      });
      this.itemList.appendChild(docFrag);
  }
}




// XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고
// XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax
// fetch는 그 후 등장

// export 할 게 1개만 있어서 default를 쓴 것이고, 여러개일 경우에는 다름!
// 목록으로 내보내리면 export {name1, name2} ...
// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export
export default ColaGenerator;
