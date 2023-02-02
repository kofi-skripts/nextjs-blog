export default function sayHello(req, res) {
  res.status(200).json({ text: 'Hello' });
}
