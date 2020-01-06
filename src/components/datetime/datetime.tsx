import { Component, Prop, h } from "@stencil/core";
import "@ionic/core";

@Component({
  tag: "flo-datetime",
  shadow: true
})
export class Datetime {
  @Prop() text: string = "Date / Time";
  @Prop() displayFormat: string = "D MMM YYYY H:mm";
  @Prop() value: string = new Date().toISOString();
  @Prop() min: string = (new Date().getUTCFullYear() - 10).toString();
  @Prop() max: string = (new Date().getUTCFullYear() + 10).toString();

  render() {
    return (
      <div>
        <ion-item>
          <ion-label>{this.text}</ion-label>
          <ion-datetime
            displayFormat={this.displayFormat}
            min={this.min}
            max={this.max}
            value={this.value}
          ></ion-datetime>
        </ion-item>
      </div>
    );
  }
}
