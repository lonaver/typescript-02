/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface component { title: string };
class Component<component> {
  constructor(public props: component) {}
}

class Page extends Component<component> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};