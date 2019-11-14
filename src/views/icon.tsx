import { Component, Vue } from 'vue-property-decorator'
// import MinIcon from '../../packages/icon'
import minIcon from '../../packages/icon'
@Component
export default class IconMenu extends Vue {
  created () {
    console.log('mounted')
    Vue.component('min-icon', minIcon)
  }
  handleClick () {
    console.log('i accept emit', minIcon)
  }
  render () {
    return (
      <div>
        <div onClick={this.handleClick}>下大撒法</div>
        <min-icon color="#fff" size="4"></min-icon>
        {/* <van-icon name="close" on-click={this.handleClick} /> */}
        {/* <min-icon size={12} color="#ccc" name="close" on-click={this.handleClick} /> */}
      </div>
    )
  }
}
