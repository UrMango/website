export default function NewlineText({ text }) {
	const newText = text.split('\n').map(str => <p key={str}>{str}</p>);
	
	return newText;
}