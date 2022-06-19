enum OrderState {
  WAIT,
  JOIN,
  COMPLETE,
}

const orderState: OrderState = 1;

type Card = {
  title: string;
  detail: string;
  url: string;
  buttonText: string;
  buttonEvent: () => void;
};

const LI_SPAN = `<span class="sr-only">(current)</span>`;
const menuList: MenuLiType[] = [
  {
    name: "홈으로",
    url: "/",
    selected: true,
    active: "active",
    span: LI_SPAN,
  },
  {
    name: "게시판",
    url: "/board",
    selected: false,
    active: "",
    span: '',
  },
  {
    name: "예약시스템",
    url: "/revervation",
    selected: false,
    active: "",
    span: '',
  },
  {
    name: "결재시스템",
    url: "/payment",
    selected: false,
    active: "",
    span: '',
  },
];

type MenuLiType = {
  name: string, url: string, selected: boolean, active: string, span: string
}

class Bs {
  private cardList: Card[];

  constructor(cardList: Card[]) {
    this.cardList = cardList;
    this.setJoin(88888 * 20);

    this.render();
    this.eventTrigger();
  }

  eventTrigger() {
    $("li.nav-item").on("click", ".nav-link", function(e) {
      console.log(e.currentTarget);
      
      alert(e.currentTarget);
    })
  }

  createMenu() {
    const LI_TEMPLATE = (selected, active, url, name) => `
      <li class="nav-item ${selected ? active : ''}">
        <a class="nav-link" href="${url}" >${name} ${selected ? LI_SPAN : ''}</a>
      </li>
    `;
    let menuLiSum = '';
    menuList.forEach((v: MenuLiType, i) => {
      menuLiSum += LI_TEMPLATE(v.selected, v.active, v.url, v.name);
    });
    
    $(".navbar-nav").html(menuLiSum);
    
  }

  createCard() {
    this.cardList.forEach((c) => {
      const li = `
      
          <div class="card" style="width: 18rem">
            <img
              src="${c.url}"
              class="card-img-top"
              alt="${c.url}"
            />
            <div class="card-body">
              <h5 class="card-title">${c.title}</h5>
              <p class="card-text">
                ${c.detail}
              </p>
              <a href="#" onclick=${() =>
                c.buttonEvent()} class="btn btn-primary">${c.buttonText}</a>
            </div>
          </div>
      
      `;
      $(".list-flex").append(li);
    });
  }

  setJoin(orderState: OrderState) {}

  render() {

    // 메뉴 생성
    this.createMenu();

    // 카드 생성
    this.createCard();
  }
}
// const card: Card = {
//   title: "자바스크립트",
//   detail: "자바스크립트 수료과정은 그렇게 어렵지 않다.",
//   url: "https://picsum.photos/200/300",
//   buttonText: "입장",
//   buttonEvent: () => alert("입장해요."),
// };
const cardList = [
  {
    title: "자바스크립트",
    detail: "자바스크립트 수료과정은 그렇게 어렵지 않다.",
    url: "https://picsum.photos/100/100",
    buttonText: "입장",
    buttonEvent: () => alert("입장해요."),
  },
  {
    title: "자바",
    detail: "자바는 스프링이 모두 처리 한다.",
    url: "https://picsum.photos/100/100",
    buttonText: "입장",
    buttonEvent: () => alert("입장해요."),
  },
  {
    title: "고언어",
    detail: "병렬처리에 유리하고 동시성이 우수하다.",
    url: "https://picsum.photos/100/100",
    buttonText: "입장",
    buttonEvent: () => alert("입장해요."),
  },
  {
    title: "고언어",
    detail: "병렬처리에 유리하고 동시성이 우수하다.",
    url: "https://picsum.photos/100/100",
    buttonText: "입장",
    buttonEvent: () => alert("입장해요."),
  },
  {
    title: "고언어",
    detail: "병렬처리에 유리하고 동시성이 우수하다.",
    url: "https://picsum.photos/100/100",
    buttonText: "입장",
    buttonEvent: () => alert("입장해요."),
  },
];
const bs = new Bs(cardList);
