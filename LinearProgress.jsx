import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import '@material/linear-progress/dist/mdc.linear-progress.css';

export class LinearProgress extends Kinkajou.Component {

	static get is() {
		return 'kinkajou.LinearProgress';
	}

	get styleRoot() {
		return ['mdc-linear-progress'];
	}

	get styleProps() {
		return [`mdc-linear-progress--${this.visible ? 'indeterminate' : 'close'}`];
	}

	get visible() {
		return this.getAsBoolean('visible', true);
	}

	set visible(visible) {
		return this.set('visible', visible);
	}

	get background() {
		return this.getAsString('background');
	}

	set background(background) {
		return this.set('background', background);
	}

	get color() {
		return this.getAsString('color');
	}

	set color(color) {
		return this.set('color', color);
	}

	initProps(props, i) {
		i(props, 'visible', 'background', 'color');
	}

	onPropChange(key) {
		switch (key) {
			case 'visible':
				if (this.rendered) {
					this.element.setAttribute('class', this.styleClass);
				}
			break;
			case 'background':
				if (this.rendered) {
					const buffer = this.element.querySelector('mdc-linear-progress__buffer');
					buffer.style.backgroundColor = this.background;
				}
			break;
			case 'color':
				if (this.rendered) {
					const bars = this.element.querySelectorAll('mdc-linear-progress__bar-inner');
					for (let i = 0; i < bars.length; i++) {
						const bar = bars[i];
						bar.style.backgroundColor = this.color;
					}
				}
			break;
		}
	}

	render() {
		const bufferStyle = this.background ? `background-color: ${this.background};` : undefined;
		const barInnerStyle = this.color ? `background-color: ${this.color};` : undefined;
		return (
			<div role="progressbar" class={this.styleClass}>
				<div class="mdc-linear-progress__buffering-dots"></div>
				<div class="mdc-linear-progress__buffer" style={bufferStyle}></div>
				<div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
					<span class="mdc-linear-progress__bar-inner" style={barInnerStyle}></span>
				</div>
				<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
					<span class="mdc-linear-progress__bar-inner" style={barInnerStyle}></span>
				</div>
			</div>
		);
	}

}