import { Component, Vue } from 'vue-property-decorator'
// import MinIcon from '../../packages/icon'
import minIcon from '../../packages/icon'
@Component({
  components: {
    minIcon
  }
})
export default class IconMenu extends Vue {
  handleClick () {
    console.log('i accept emit', minIcon)
  }
  render () {
    return (
      <div>
        <div onClick={this.handleClick}>下大撒法</div>
        <min-icon color="#fff" size="4" on-click={this.handleClick}></min-icon>
      </div>
    )
  }
}
