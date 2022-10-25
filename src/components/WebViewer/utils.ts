const STAMP_MODAL_KEY = 'userStampSelectionModal';

export function hexToRgb(hex?: string) {
	if (hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			return {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			};
		}
	}
	return null;
}

export function createStampModal(instance, stamps = []) {
	return {
		dataElement: STAMP_MODAL_KEY,
		disableBackdropClick: false,
		disableEscapeKeyDown: false,
		render: () => {
			const div = createModalContainerElement();
			const unorderedList = createStampListElement();
			stamps.forEach((stamp) => {
				const listItem = createStampElement(stamp, instance);
				unorderedList.appendChild(listItem);
			});
			div.appendChild(unorderedList);
			return div;
		},
		header: undefined,
		body: undefined,
		footer: undefined,
	};
}

function createModalContainerElement() {
	const div = document.createElement('div');
	div.style.color = '#333';
	div.style.backgroundColor = 'white';
	div.style.padding = '20px 30px';
	div.style.borderRadius = '4px';
	div.style.overflow = 'auto';
	div.style.maxHeight = '80vh';
	div.style.width = '100%';
	div.innerHTML = `
		<div>
			<h3>Choose a stamp to apply:</h3>
		</div>
	`;
	return div;
}

function createStampListElement() {
	const unorderedList = document.createElement('ul');
	unorderedList.style.display = 'flex';
	unorderedList.style.flexWrap = 'wrap';
	unorderedList.style.flexDirection = 'row';
	unorderedList.style.justifyContent = 'start';
	unorderedList.style.padding = '0';
	unorderedList.style.listStyle = 'none';
	return unorderedList;
}

function createStampElement(stamp, instance) {
	const { documentViewer } = instance.Core;
	const { closeElements } = instance.UI;

	const listItem = document.createElement('li');

	const button = document.createElement('button');
	button.style.background = 'transparent';
	button.style.border = 'none';
	button.style.margin = '0';
	button.style.padding = '0';
	button.style.cursor = 'pointer';
	button.style.touchAction = 'manipulation';
	button.onclick = async () => {
		const signatureTool = documentViewer.getTool(
			'AnnotationCreateSignature'
		) as any; // Core.Tools.SignatureCreateTool
		const dataUrl = await getImageAsDataUrl(stamp.fileUrl);
		if (dataUrl) {
			await signatureTool.setSignature(dataUrl);
			instance.UI.setToolMode('AnnotationCreateSignature');
			signatureTool.showPreview();
			closeElements([STAMP_MODAL_KEY]);
		}
	};

	const imgContainer = document.createElement('div');
	imgContainer.style.height = '12rem';
	imgContainer.style.width = '12rem';
	imgContainer.style.margin = '5px';
	imgContainer.style.padding = '5px';
	imgContainer.style.borderRadius = '4px';
	imgContainer.innerHTML = `<img style="max-height: 100%; max-width: 100%;" src="${stamp.fileUrl}" />`;
	button.appendChild(imgContainer);
	listItem.appendChild(button);

	return listItem;
}

export function addStampButtonToHeader(instance) {
	const { setHeaderItems, openElements } = instance.UI;
	setHeaderItems((header) => {
		header.get('searchButton').insertBefore({
			type: 'actionButton',
			img: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#abb0c4;}</style></defs><path class="cls-1" d="M4,20.5H20V22H4Zm15.27-5H4.74a.76.76,0,0,0-.75.75V19H20V16.26A.76.76,0,0,0,19.26,15.51Z"></path><path class="cls-1" d="M15.68,10.79a5,5,0,0,0,1.57-3.54,5.26,5.26,0,0,0-10.51,0,5.06,5.06,0,0,0,1.58,3.56,12.78,12.78,0,0,1,.82,1,7,7,0,0,1,.44,1.44H9v1.5h6v-1.5h-.58a6.08,6.08,0,0,1,.45-1.44A12.73,12.73,0,0,1,15.68,10.79Zm-1.4-1.15c-.27.32-.59.7-.9,1.13A6.91,6.91,0,0,0,12.63,13H11.37a6.52,6.52,0,0,0-.76-2.18c-.31-.45-.65-.83-.91-1.15A3.25,3.25,0,0,1,8.56,7.25a3.44,3.44,0,1,1,6.88,0A3.35,3.35,0,0,1,14.28,9.64Z"></path></svg>',
			onClick: () => {
				openElements([STAMP_MODAL_KEY]);
			},
			dataElement: 'customStampButton',
			title: 'Stamp',
		});
	});
}

export async function getImageAsDataUrl(url: string): Promise<string | null> {
	const blob = await fetch(url).then((r) => r.blob());
	return new Promise((resolve) => {
		let reader = new FileReader();
		reader.onload = () => resolve(reader.result as any);
		reader.readAsDataURL(blob);
	});
}

export function getAnnotationColor(Annotations, hexCode?: string) {
	const rgb = hexToRgb(hexCode);
	if (rgb) {
		return new Annotations.Color(rgb.r, rgb.g, rgb.b);
	}
	return new Annotations.Color(0, 221, 255);
}

export function setDefaultAnnotationColor(
	documentViewer,
	Annotations,
	Tools,
	hexCode?: string
) {
	const annotationColor = getAnnotationColor(Annotations, hexCode);

	const strokeTools = [
		Tools.ToolNames.ARROW,
		Tools.ToolNames.DISTANCE_MEASUREMENT,
		Tools.ToolNames.AREA_MEASUREMENT,
		Tools.ToolNames.COUNT_MEASUREMENT,
		Tools.ToolNames.CLOUDY_RECTANGULAR_AREA_MEASUREMENT,
		Tools.ToolNames.CALLOUT,
		Tools.ToolNames.ELLIPSE,
		Tools.ToolNames.FREEHAND,
		Tools.ToolNames.FREEHAND_HIGHLIGHT,
		Tools.ToolNames.HIGHLIGHT,
		Tools.ToolNames.LINE,
		Tools.ToolNames.PERIMETER_MEASUREMENT,
		Tools.ToolNames.POLYGON,
		Tools.ToolNames.POLYGON_CLOUD,
		Tools.ToolNames.POLYLINE,
		Tools.ToolNames.RECTANGLE,
		Tools.ToolNames.SQUIGGLY,
		Tools.ToolNames.STICKY,
		Tools.ToolNames.STRIKEOUT,
		Tools.ToolNames.UNDERLINE,
		'AnnotationCreateArc',
		'AnnotationCreateArcMeasurement',
		'AnnotationCreateEllipseMeasurement',
		'AnnotationCreateRectangularAreaMeasurement',
	];

	strokeTools.forEach((tool) => {
		const toolRef = documentViewer.getTool(tool);
		if (toolRef) {
			toolRef.setStyles({
				StrokeColor: annotationColor,
			});
		}
	});

	const textTools = [Tools.ToolNames.FREETEXT];

	textTools.forEach((tool) => {
		const toolRef = documentViewer.getTool(tool);
		if (toolRef) {
			toolRef.setStyles({
				TextColor: annotationColor,
			});
		}
	});
}
