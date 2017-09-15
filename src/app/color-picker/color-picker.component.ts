import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
	selector: 'app-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

	@ViewChild('hue')
	private _hue: ElementRef;

	@ViewChild('saturation')
	private _saturation: ElementRef;

	@ViewChild('cursor')
	private _cursor: ElementRef;

	@ViewChild('luminance')
	private _luminance: ElementRef;

	@ViewChild('handle')
	private _handle: ElementRef;

	constructor() {
	}

	ngOnInit() {
		const cursor = this._cursor.nativeElement;
		cursor.addEventListener('mousedown', function (event: MouseEvent) {
			console.log(event);
		});
		const handle = this._handle.nativeElement;
	}

	log(event) {
		console.log(event.srcElement.value);
	}

}
