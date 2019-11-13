import { Component, Vue } from 'vue-property-decorator'

interface menu {
  name: string
  path: string
}

@Component
export default class Index extends Vue {
  menus: menu[] = [
    { name: 'icon', path: '/icon' }
  ]
  // handleClick (path: string): void {
  //   console.log('xxx', this)
  //   // this.$router.push({ path: path })
  // }
  handleClick (path: string): void {
    this.$router.push({ path: path })
  }
  render () {
    return (
      <div class="page index">
        <div class="menus-wrap">
          <div class="head">
            index
          </div>
          <div class="menus">
            { this.menus.map((i, idx) =>
              <div key={idx} class="menu-item"
                onClick={() => this.handleClick(i.path)}>
                {i.name}
              </div>) }
          </div>
        </div>
      </div>
    )
  }
}
