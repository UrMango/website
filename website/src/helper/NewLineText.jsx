export default function NewlineText(props) {
	const text = props.text;
	const newText = text.split('\n').map(str => <p key={str}>{str}</p>);
	
	return newText;
}