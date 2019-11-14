// min-icon
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class MinIcon extends Vue {
  @Prop(String) readonly name?: string;
  @Prop([String, Number]) readonly size?: string | number;
  @Prop(String) readonly color?: string;

  @Emit()
  click (): void {}

  render () {
    return (
      <i class={'min-icon'}
        onClick={() => this.click()}>
        {this.name} - {this.size} - {this.color}
      </i>
    )
  }
}
