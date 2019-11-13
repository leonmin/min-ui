import { Component, Vue } from 'vue-property-decorator'
import MinIcon from '../../packages/icon'
@Component({
  components: {
    'min-icon': MinIcon
  }
})
export default class IconMenu extends Vue {
  handleClick () {
    console.log('i accept emit')
  }
  render () {
    return (
      <div>
        <min-icon size={12} color="#ccc" name="close" on-click={this.handleClick} />
      </div>
    )
  }
}
